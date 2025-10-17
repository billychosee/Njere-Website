'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpenIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CpuChipIcon,
  LightBulbIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const syllabusFeatures = [
  {
    title: 'AI-Powered Generation',
    description: 'Advanced AI algorithms create comprehensive syllabi tailored to curriculum standards and learning objectives.',
    icon: CpuChipIcon,
    benefits: ['Curriculum Alignment', 'Custom Content', 'Standards Compliance']
  },
  {
    title: 'Interactive Lesson Plans',
    description: 'Generate detailed lesson plans with activities, assessments, and multimedia resources.',
    icon: PencilSquareIcon,
    benefits: ['Activity Planning', 'Resource Integration', 'Assessment Design']
  },
  {
    title: 'Curriculum Mapping',
    description: 'Map learning objectives to curriculum standards with progress tracking and gap analysis.',
    icon: AcademicCapIcon,
    benefits: ['Standards Mapping', 'Progress Tracking', 'Gap Analysis']
  },
  {
    title: 'Content Management',
    description: 'Centralized repository for syllabus templates, lesson plans, and educational resources.',
    icon: DocumentTextIcon,
    benefits: ['Template Library', 'Version Control', 'Resource Sharing']
  }
];

const syllabusStats = [
  { number: '25K+', label: 'Syllabi Generated' },
  { number: '95%', label: 'Curriculum Alignment' },
  { number: '60%', label: 'Time Saved' },
  { number: 'AI-Powered', label: 'Content Creation' }
];

const SyllabusPage = () => {
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
                <BookOpenIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Syllabus Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI-powered syllabus creation and management system with curriculum alignment, lesson planning, and automated content generation.
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
                  Create Syllabus
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

      {/* Supported Syllabuses Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-4 mx-auto md:px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-4 text-3xl font-bold text-gray-900"
              style={{ color: PRIMARY_COLOR }}
            >
              Supported Syllabuses
            </h2>
            <p className="text-lg text-gray-600">
              We support internationally recognized curricula accepted in Zimbabwe and across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: 'ZIMSEC',
                description: 'Zimbabwe School Examinations Council curriculum',
                logo: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=200&h=100&fit=crop',
                color: '#1e40af'
              },
              {
                name: 'Cambridge',
                description: 'Cambridge International curriculum',
                logo: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=200&h=100&fit=crop',
                color: '#dc2626'
              },
              {
                name: 'CAPS',
                description: 'Curriculum Assessment Policy Statements',
                logo: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=200&h=100&fit=crop',
                color: '#059669'
              }
            ].map((syllabus, index) => (
              <motion.div
                key={syllabus.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-8 text-center bg-white rounded-lg shadow-lg"
              >
                <div
                  className="flex items-center justify-center w-16 h-16 mb-4 rounded-lg"
                  style={{ backgroundColor: syllabus.color + '20' }}
                >
                  <BookOpenIcon className="w-8 h-8" style={{ color: syllabus.color }} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{syllabus.name}</h3>
                <p className="text-sm text-gray-600">{syllabus.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4">
            {syllabusStats.map((stat, index) => (
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

      {/* AI Syllabus Builder Preview */}
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
                AI Syllabus Builder
              </h2>
              <p className="text-lg text-gray-600">
                Intelligent curriculum design with automated content generation and standards alignment
              </p>
            </motion.div>

            {/* Builder Interface Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 shadow-lg bg-gray-50 rounded-2xl"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Input Panel */}
                <div className="space-y-4">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Curriculum Parameters</h3>
                  <div className="space-y-3">
                    {[
                      { field: 'Subject', value: 'Mathematics' },
                      { field: 'Grade Level', value: 'Grade 10' },
                      { field: 'Duration', value: '12 Weeks' },
                      { field: 'Standards', value: 'CAPS Aligned' }
                    ].map((param, index) => (
                      <div key={param.field} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">{param.field}:</span>
                        <span className="text-sm text-gray-900">{param.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Generation Panel */}
                <div className="lg:col-span-2">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">AI-Generated Content</h3>
                  <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LightBulbIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="mb-2 text-sm">AI is generating your syllabus...</p>
                      <div className="flex justify-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Syllabus Components Showcase */}
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
                Syllabus Components
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive syllabus elements for complete curriculum coverage
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { component: 'Learning Objectives', emoji: '🎯', description: 'Clear learning goals' },
                { component: 'Lesson Plans', emoji: '📋', description: 'Detailed teaching guides' },
                { component: 'Assessments', emoji: '📝', description: 'Evaluation methods' },
                { component: 'Resources', emoji: '📚', description: 'Teaching materials' }
              ].map((component, index) => (
                <motion.div
                  key={component.component}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <div className="mb-3 text-3xl">{component.emoji}</div>
                  <h3 className="mb-2 text-lg font-bold text-center text-gray-900">{component.component}</h3>
                  <p className="text-sm text-center text-gray-600">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Decorative Elements */}
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
                Syllabus Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced tools for creating, managing, and optimizing curriculum content
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {syllabusFeatures.map((feature, index) => (
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
            Ready to Revolutionize Curriculum Design?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Create comprehensive, standards-aligned syllabi with AI assistance, saving time while ensuring educational excellence.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Creating
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

export default SyllabusPage;