'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CogIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const cmsFeatures = [
  {
    title: 'Content Management',
    description: 'Easy-to-use interface for creating, editing, and organizing website content without technical skills.',
    icon: DocumentTextIcon,
    benefits: ['Drag & Drop Editor', 'Rich Text Formatting', 'Version Control']
  },
  {
    title: 'Customizable Themes',
    description: 'Beautiful, responsive themes that can be customized to match your school\'s branding.',
    icon: PaintBrushIcon,
    benefits: ['Brand Integration', 'Mobile Responsive', 'Custom Layouts']
  },
  {
    title: 'Media Management',
    description: 'Comprehensive media library for images, videos, and documents with advanced organization tools.',
    icon: PhotoIcon,
    benefits: ['Bulk Upload', 'Auto Optimization', 'SEO Friendly']
  },
  {
    title: 'SEO Optimization',
    description: 'Built-in SEO tools to improve search engine visibility and drive more traffic to your site.',
    icon: GlobeAltIcon,
    benefits: ['Meta Tags', 'Sitemap Generation', 'Performance Optimization']
  }
];

const cmsStats = [
  { number: '500+', label: 'Sites Created' },
  { number: '99.9%', label: 'Uptime' },
  { number: '50+', label: 'Templates' },
  { number: '24/7', label: 'Support' }
];

const CmsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Sleek and Modern Design */}
      <section
        className="relative py-32 overflow-hidden text-white"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
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
                <CogIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Content Management System
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powerful, user-friendly CMS designed specifically for educational institutions to manage websites, content, and digital presence effortlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
                >
                  Build Your Site
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/modules"
                  className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
                >
                  View All Modules
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cmsStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
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

      {/* CMS Dashboard Preview - Unique Layout */}
      <section className="py-20 bg-white">
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
                Intuitive Dashboard
              </h2>
              <p className="text-lg text-gray-600">
                Powerful yet simple interface designed for non-technical users
              </p>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gray-900 shadow-2xl rounded-2xl"
            >
              {/* Browser Header */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 ml-4">
                  <div className="px-4 py-2 text-sm text-gray-400 bg-gray-800 rounded-lg">
                    njere.edu/admin
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Sidebar */}
                <div className="space-y-4 md:col-span-1">
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="mb-3 font-semibold text-white">Content</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-300">📄 Pages</div>
                      <div className="text-sm text-gray-300">📰 Posts</div>
                      <div className="text-sm text-gray-300">🖼️ Media</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <h3 className="mb-3 font-semibold text-white">Design</h3>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-300">🎨 Themes</div>
                      <div className="text-sm text-gray-300">⚙️ Settings</div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-6 md:col-span-2">
                  <div className="p-6 bg-gray-800 rounded-lg">
                    <h3 className="mb-4 font-semibold text-white">Recent Content</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="text-white">Welcome Message</div>
                        <div className="text-sm text-green-400">Published</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="text-white">School Events</div>
                        <div className="text-sm text-yellow-400">Draft</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="text-white">Student Gallery</div>
                        <div className="text-sm text-green-400">Published</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 text-white rounded-lg bg-gradient-to-br from-blue-600 to-teal-600">
                      <div className="text-2xl font-bold">25</div>
                      <div className="text-sm opacity-90">Pages Created</div>
                    </div>
                    <div className="p-4 text-white rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
                      <div className="text-2xl font-bold">150</div>
                      <div className="text-sm opacity-90">Media Files</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                CMS Features
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to create and manage professional educational websites
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {cmsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-8 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  {/* Decorative corner elements */}
                  <div className="absolute w-3 h-3 rounded-full top-4 right-4 bg-gradient-to-br from-[#00204f] to-[#02ACC3] opacity-60"></div>
                  <div className="absolute w-2 h-2 rounded-full bottom-4 left-4 bg-gradient-to-br from-[#00204f] to-[#02ACC3] opacity-40"></div>

                  <div className="flex items-center mb-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-white rounded-lg shadow-lg"
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

      {/* Template Showcase */}
      <section className="py-20 bg-white">
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
                Professional Templates
              </h2>
              <p className="text-lg text-gray-600">
                Beautiful, responsive templates designed specifically for educational institutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { name: 'Modern School', color: 'from-blue-400 to-teal-500', features: ['Clean Design', 'Mobile First', 'SEO Ready'] },
                { name: 'University Portal', color: 'from-purple-400 to-pink-500', features: ['Advanced Layout', 'Multi-department', 'Student Portal'] },
                { name: 'Academy Theme', color: 'from-green-400 to-blue-500', features: ['Learning Focus', 'Course Pages', 'Progress Tracking'] }
              ].map((template, index) => (
                <motion.div
                  key={template.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden bg-white border border-gray-100 rounded-lg shadow-lg"
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                    <WrenchScrewdriverIcon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{template.name}</h3>
                    <ul className="mb-4 space-y-2">
                      {template.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-[#00204f] to-[#02ACC3] text-white rounded-lg font-medium hover:from-[#001a3d] hover:to-[#0296ad] transition-all duration-300">
                      Preview Template
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #00204f 0%, #014a86 50%, #02ACC3 100%)',
        }}
      >
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="mb-6 text-4xl font-extrabold">
            Ready to Build Your Website?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Create a professional, engaging website for your educational institution with our powerful CMS.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Building
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
};

export default CmsPage;