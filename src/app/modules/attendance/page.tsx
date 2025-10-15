'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const features = [
  {
    title: 'Biometric Integration',
    description: 'Advanced biometric systems including fingerprint and facial recognition for secure attendance tracking.',
    icon: DevicePhoneMobileIcon,
    benefits: ['Fingerprint Scanning', 'Facial Recognition', 'RFID Cards']
  },
  {
    title: 'Real-time Monitoring',
    description: 'Live attendance tracking with instant notifications and comprehensive dashboard analytics.',
    icon: ClockIcon,
    benefits: ['Live Updates', 'Instant Alerts', 'Real-time Reports']
  },
  {
    title: 'Custom Reports',
    description: 'Flexible reporting system with customizable attendance analytics and trend analysis.',
    icon: ChartBarIcon,
    benefits: ['Custom Dashboards', 'Trend Analysis', 'Export Options']
  },
  {
    title: 'Mobile Access',
    description: 'Mobile-friendly interface for teachers and parents to access attendance data on-the-go.',
    icon: UserGroupIcon,
    benefits: ['Mobile App', 'Parent Portal', 'Teacher Dashboard']
  }
];

const benefits = [
  'Automated attendance tracking',
  'Reduced administrative workload',
  'Accurate attendance records',
  'Real-time notifications',
  'Comprehensive analytics',
  'Mobile accessibility'
];

const AttendancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 overflow-hidden text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
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
                <ClipboardDocumentCheckIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Attendance Module
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Streamlined attendance management with biometric integration, real-time tracking, and comprehensive analytics.
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
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
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
                Key Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced attendance tracking solutions designed for modern educational institutions
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

      {/* Benefits Section */}
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
                  Why Choose Our Attendance Module?
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Transform your attendance management with automated systems that save time and provide accurate data for better decision making.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
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
                    src="/biometric-banner.jpg"
                    alt="Njere biometric attendance devices and systems"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ backgroundColor: `${ACCENT_COLOR}20` }}
                  ></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="mb-2 text-lg font-bold text-white">Our Devices</h3>
                    <p className="text-sm text-white/90">
                      Advanced biometric scanners, RFID readers, and mobile check-in systems for comprehensive attendance tracking.
                    </p>
                  </div>
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
                Works perfectly with our Academics, Communication, and Reports modules for comprehensive school management.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Academics', 'Communication', 'Reports', 'Students'].map((module) => (
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
                Ready to Automate Attendance?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Join schools already using our Attendance module to streamline operations and improve accuracy.
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

export default AttendancePage;