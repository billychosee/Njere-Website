// src/app/diary/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer'; // Adjusted path
import { client } from '../sanity/lib/sanity'; // Adjusted path
import imageUrlBuilder from '@sanity/image-url';
import { DiaryEntry } from '../../../types'; // Adjusted path

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const PRIMARY_COLOR = '#00204f';
const ACCENT_COLOR = '#04baab';

// 1. The component is now an async function
const DiaryPage = async () => {
  // 2. Fetch data directly inside the component
  const diaryEntries: DiaryEntry[] = await client.fetch(
    `*[_type == "diaryEntry"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      readTime,
      category,
      image
    }`,
  );
// ADD THIS LINE FOR DEBUGGING
console.log("Fetched diary entries:", diaryEntries);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: PRIMARY_COLOR,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00204f]/80 to-[#02ACC3]/60"></div>
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl pt-20 mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div
                className="flex items-center justify-center w-20 h-20 text-white rounded-2xl"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <CalendarDaysIcon className="w-10 h-10" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              Njere Diary
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Stay updated with the latest news, insights, and developments from
              the Njere team.
            </p>
          </div>
        </div>
      </section>

      {/* Diary Entries */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-6xl mx-auto">
            {diaryEntries.length > 0 ? (
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {diaryEntries.map((entry: DiaryEntry) => (
                  <article
                    key={entry._id}
                    className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(entry.image).width(800).height(400).url()}
                        alt={entry.image.alt || entry.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-black/50 backdrop-blur-sm">
                          {entry.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <CalendarDaysIcon className="w-4 h-4 mr-1" />
                        <span>
                          {new Date(entry.publishedAt).toLocaleDateString(
                            'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' },
                          )}
                        </span>
                        <span className="mx-2">•</span>
                        <ClockIcon className="w-4 h-4 mr-1" />
                        <span>{entry.readTime}</span>
                      </div>
                      <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
                        <Link href={`/diary/${entry.slug.current}`}>
                          {entry.title}
                        </Link>
                      </h2>
                      <p className="mb-4 text-gray-600 line-clamp-3">
                        {entry.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {entry.author}
                          </span>
                        </div>
                        <Link
                          href={`/diary/${entry.slug.current}`}
                          className="flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                        >
                          Read More
                          <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-xl text-gray-500">
                  No diary entries found. Please check your Sanity Studio.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white">
                Stay Updated
              </h2>
              <p className="mb-6 text-white/90">
                Subscribe to our diary updates and be the first to know about
                new features, educational insights, and community initiatives.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 max-w-sm px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  className="px-6 py-3 font-bold text-blue-900 transition-all rounded-lg hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// 3. The getStaticProps function is completely removed.

export default DiaryPage;
