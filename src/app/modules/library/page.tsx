'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpenIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const features = [
  {
    title: 'Digital Catalog',
    description: 'Comprehensive digital library catalog with advanced search, filtering, and organization features.',
    icon: MagnifyingGlassIcon,
    benefits: ['Advanced Search', 'Category Organization', 'Digital Indexing']
  },
  {
    title: 'Online Reservations',
    description: 'Seamless online booking system for physical books and digital resource reservations.',
    icon: BookmarkIcon,
    benefits: ['Online Booking', 'Waitlist Management', 'Pickup Notifications']
  },
  {
    title: 'Digital Resources',
    description: 'Access to e-books, audiobooks, journals, and multimedia content from anywhere.',
    icon: DocumentTextIcon,
    benefits: ['E-book Library', 'Audio Content', 'Research Databases']
  },
  {
    title: 'Usage Analytics',
    description: 'Detailed analytics and reporting on library usage, popular resources, and user engagement.',
    icon: ClockIcon,
    benefits: ['Usage Statistics', 'Popular Resources', 'Engagement Reports']
  }
];

const libraryStats = [
  { number: '50,000+', label: 'Books & Resources' },
  { number: '2,500+', label: 'Active Users' },
  { number: '24/7', label: 'Digital Access' },
  { number: '95%', label: 'User Satisfaction' }
];

const bookCategories = [
  { name: 'Fiction', count: '12,000+', color: 'bg-blue-100 text-blue-800' },
  { name: 'Non-Fiction', count: '8,500+', color: 'bg-green-100 text-green-800' },
  { name: 'Academic', count: '15,000+', color: 'bg-purple-100 text-purple-800' },
  { name: 'Children\'s', count: '5,000+', color: 'bg-pink-100 text-pink-800' },
  { name: 'Reference', count: '4,500+', color: 'bg-orange-100 text-orange-800' },
  { name: 'Digital', count: '5,000+', color: 'bg-teal-100 text-teal-800' }
];

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Book Theme */}
      <section
        className="relative pt-40 pb-20 overflow-hidden text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        {/* Decorative book elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <BookOpenIcon className="w-16 h-16" />
        </div>
        <div className="absolute top-20 right-20 opacity-10">
          <DocumentTextIcon className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <BookmarkIcon className="w-14 h-14" />
        </div>

        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
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
                <BookOpenIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Digital Library
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Modern library management system combining traditional resources with cutting-edge digital solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
              >
                Explore Library
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Library Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {libraryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center bg-white shadow-lg rounded-2xl"
              >
                <div className="mb-2 text-3xl font-bold text-gray-900" style={{ color: PRIMARY_COLOR }}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Categories */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <motion.div
            className="max-w-4xl mx-auto mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 text-3xl font-bold text-gray-900"
              style={{ color: PRIMARY_COLOR }}
            >
              Vast Collection
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse collection of books and digital resources
            </p>
          </motion.div>

          <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-6">
            {bookCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 text-center transition-colors cursor-pointer bg-gray-50 rounded-xl hover:bg-gray-100"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${category.color}`}>
                  {category.name}
                </div>
                <div className="text-lg font-bold text-gray-900">{category.count}</div>
                <div className="text-xs text-gray-600">items</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-4 text-3xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Library Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive tools for modern library administration and user experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-xl"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="mb-4 text-gray-600">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2
                  className="mb-6 text-3xl font-bold text-gray-900"
                  style={{ color: PRIMARY_COLOR }}
                >
                  Why Choose Our Library Module?
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Transform your library into a modern learning hub with digital capabilities and enhanced user experience.
                </p>
                <ul className="space-y-3">
                  {[
                    'Digital and physical resource management',
                    'Enhanced user experience and accessibility',
                    'Comprehensive analytics and reporting',
                    'Mobile access and online reservations',
                    'Integration with learning management systems',
                    'Cost-effective resource utilization'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <StarIcon className="w-5 h-5 mr-3 text-yellow-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative h-96">
                  <Image
                    src="/black-girl.png"
                    alt="Student using digital library resources"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: `${ACCENT_COLOR}20` }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6 text-3xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Seamless Integration
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Works perfectly with our Academics, Students, and Communication modules for a complete educational ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Academics', 'Students', 'Communication', 'Reports'].map((module) => (
                  <span
                    key={module}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full shadow-sm"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6 text-3xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Ready to Modernize Your Library?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Join libraries worldwide already using our system to enhance learning and research capabilities.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/modules"
                  className="px-8 py-4 font-medium text-gray-900 transition-all border-2 border-gray-300 rounded-full cursor-pointer hover:border-gray-400"
                >
                  View All Modules
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default LibraryPage;