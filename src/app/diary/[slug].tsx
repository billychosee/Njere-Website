// app/diary/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '../sanity/lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { FullDiaryEntry } from '../../../types'; // Import our full type!

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const DiaryPost = async ({ params }: PageProps) => {
  const { slug } = await params;
  const entry: FullDiaryEntry | null = await client.fetch(
    `*[_type == "diaryEntry" && slug.current == $slug][0]{
      title,
      slug,
      body,
      author,
      publishedAt,
      image
    }`,
    { slug },
  );

  if (!entry) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-white">
      <header className="relative overflow-hidden h-96">
        <Image
          src={urlFor(entry.image).width(1200).height(600).url()}
          alt={entry.image.alt || entry.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {entry.title}
            </h1>
            <p className="text-lg">
              {new Date(entry.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              by {entry.author}
            </p>
          </div>
        </div>
      </header>

      <main className="container py-16 mx-auto prose prose-lg max-w-none">
        <div className="max-w-4xl mx-auto">
          <PortableText value={entry.body} />
        </div>
      </main>

      <footer className="py-8 text-center">
        <Link href="/diary" className="text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </footer>
    </div>
  );
};

export default DiaryPost;
