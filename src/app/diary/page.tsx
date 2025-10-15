'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDaysIcon,
  UserIcon,
  ArrowRightIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

// Sample diary entries - these would typically come from a CMS or database
const diaryEntries = [
  {
    id: 1,
    title: 'Exciting New Features Coming Soon',
    excerpt: 'We\'re working on some amazing new features that will revolutionize how schools manage their operations. Stay tuned for updates!',
    content: 'Our development team has been hard at work creating innovative solutions that will make school management even more efficient. From advanced analytics to improved user interfaces, these updates will provide significant value to our users.',
    author: 'Njere Team',
    date: '2024-10-15',
    category: 'Updates',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    readTime: '3 min read'
  },
  {
    id: 2,
    title: 'School Management Best Practices',
    excerpt: 'Learn about the latest trends and best practices in educational technology and school management.',
    content: 'As technology continues to evolve, so do the methods for managing educational institutions. In this post, we explore current trends and provide actionable insights for school administrators.',
    author: 'Education Expert',
    date: '2024-10-10',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop',
    readTime: '5 min read'
  },
  {
    id: 3,
    title: 'Community Impact: Our CSR Initiatives',
    excerpt: 'Discover how our CSR programs are making a real difference in communities across Zimbabwe.',
    content: 'Our commitment to corporate social responsibility goes beyond business. Through various initiatives, we\'re helping bridge the digital divide and provide educational opportunities to underserved communities.',
    author: 'CSR Team',
    date: '2024-10-05',
    category: 'CSR',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop',
    readTime: '4 min read'
  },
  {
    id: 4,
    title: 'Technology in Education: The Future is Here',
    excerpt: 'Exploring how AI and machine learning are transforming the educational landscape.',
    content: 'Artificial intelligence is no longer science fiction—it\'s actively shaping how we teach and learn. From personalized learning paths to automated administrative tasks, AI is making education more efficient and effective.',
    author: 'Tech Team',
    date: '2024-09-28',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    readTime: '6 min read'
  }
];

const DiaryPage = () => {
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
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="flex items-center justify-center w-20 h-20 text-white rounded-2xl"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <CalendarDaysIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Njere Diary
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Stay updated with the latest news, insights, and developments from the Njere team. Our journey in transforming education through technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Diary Entries */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {diaryEntries.map((entry, index) => (
                <motion.article
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
                >
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={entry.image}
                      alt={entry.title}
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

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-gray-500">
                      <CalendarDaysIcon className="w-4 h-4 mr-1" />
                      <span>{new Date(entry.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span className="mx-2">•</span>
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{entry.readTime}</span>
                    </div>

                    <h2 className="mb-3 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
                      <Link href={`/diary/${entry.id}`}>
                        {entry.title}
                      </Link>
                    </h2>

                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {entry.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm text-gray-600">{entry.author}</span>
                      </div>
                      <Link
                        href={`/diary/${entry.id}`}
                        className="flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                      >
                        Read More
                        <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white">Stay Updated</h2>
              <p className="mb-6 text-white/90">
                Subscribe to our diary updates and be the first to know about new features, educational insights, and community initiatives.
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiaryPage;