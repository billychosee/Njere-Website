'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const assessmentFeatures = [
  {
    title: 'Automated Grading',
    description: 'AI-powered grading system that evaluates assignments and provides instant feedback.',
    icon: ClipboardDocumentCheckIcon,
    benefits: ['Instant Results', 'Consistent Grading', 'Detailed Feedback']
  },
  {
    title: 'Assessment Analytics',
    description: 'Comprehensive analytics on student performance, learning patterns, and assessment trends.',
    icon: ChartBarIcon,
    benefits: ['Performance Insights', 'Learning Analytics', 'Progress Tracking']
  },
  {
    title: 'Custom Assessments',
    description: 'Create tailored assessments with various question types and difficulty levels.',
    icon: PencilSquareIcon,
    benefits: ['Flexible Formats', 'Question Banks', 'Adaptive Difficulty']
  },
  {
    title: 'Progress Monitoring',
    description: 'Track student progress over time with detailed reports and improvement suggestions.',
    icon: UserGroupIcon,
    benefits: ['Individual Tracking', 'Group Analytics', 'Improvement Plans']
  }
];

const assessmentStats = [
  { number: '50K+', label: 'Assessments Created' },
  { number: '95%', label: 'Accuracy Rate' },
  { number: '30%', label: 'Time Saved' },
  { number: '24/7', label: 'Assessment Access' }
];

const AssessmentPage = () => {
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
                <ClipboardDocumentCheckIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Assessment Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive assessment system with automated grading, detailed analytics, and personalized learning insights.
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
                  Create Assessment
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
            {assessmentStats.map((stat, index) => (
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

      {/* Assessment Builder Interface Preview */}
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
                Assessment Builder
              </h2>
              <p className="text-lg text-gray-600">
                Intuitive drag-and-drop interface for creating comprehensive assessments
              </p>
            </motion.div>

            {/* Builder Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 shadow-lg bg-gray-50 rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Question Types */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Types</h3>
                  <div className="space-y-3">
                    {[
                      { type: 'Multiple Choice', icon: '☑️' },
                      { type: 'Short Answer', icon: '📝' },
                      { type: 'Essay', icon: '📄' },
                      { type: 'True/False', icon: '✓' },
                      { type: 'Matching', icon: '🔗' }
                    ].map((question, index) => (
                      <div key={question.type} className="flex items-center p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:border-blue-300 hover:shadow-md transition-all">
                        <span className="text-xl mr-3">{question.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{question.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment Canvas */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Canvas</h3>
                  <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <ClipboardDocumentCheckIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Drag question types here to build your assessment</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Types Showcase */}
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
                Assessment Types
              </h2>
              <p className="text-lg text-gray-600">
                Diverse assessment formats to evaluate different learning outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { type: 'Quizzes', emoji: '❓', description: 'Quick knowledge checks' },
                { type: 'Exams', emoji: '📝', description: 'Comprehensive testing' },
                { type: 'Projects', emoji: '🎯', description: 'Practical assessments' },
                { type: 'Presentations', emoji: '📊', description: 'Oral evaluations' }
              ].map((assessment, index) => (
                <motion.div
                  key={assessment.type}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-3">{assessment.emoji}</div>
                  <h3 className="text-lg font-bold text-center text-gray-900 mb-2">{assessment.type}</h3>
                  <p className="text-sm text-center text-gray-600">{assessment.description}</p>
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
                Assessment Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced tools for creating, administering, and analyzing assessments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {assessmentFeatures.map((feature, index) => (
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
            Ready to Transform Assessment Management?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Create comprehensive assessments, automate grading, and gain valuable insights into student learning with our advanced assessment system.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Assessing
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

export default AssessmentPage;