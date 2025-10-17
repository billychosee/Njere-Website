'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChatBubbleLeftRightIcon,
  BellIcon,
  EnvelopeIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  UserGroupIcon,
  MegaphoneIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const communicationFeatures = [
  {
    title: 'Multi-Channel Messaging',
    description: 'Send messages through SMS, email, app notifications, and voice calls for comprehensive reach.',
    icon: ChatBubbleLeftRightIcon,
    benefits: ['SMS Integration', 'Email Campaigns', 'Push Notifications']
  },
  {
    title: 'Automated Notifications',
    description: 'Set up automated alerts for attendance, grades, events, and important announcements.',
    icon: BellIcon,
    benefits: ['Event Reminders', 'Grade Notifications', 'Emergency Alerts']
  },
  {
    title: 'Parent Portal',
    description: 'Dedicated portal for parents to receive updates, communicate with teachers, and track progress.',
    icon: UserGroupIcon,
    benefits: ['Real-time Updates', 'Teacher Communication', 'Progress Tracking']
  },
  {
    title: 'Bulk Messaging',
    description: 'Efficiently send announcements and updates to large groups of students and parents.',
    icon: MegaphoneIcon,
    benefits: ['Group Messaging', 'Scheduled Sends', 'Template Library']
  }
];

const communicationStats = [
  { number: '50K+', label: 'Messages Sent Daily' },
  { number: '95%', label: 'Delivery Success Rate' },
  { number: '24/7', label: 'Automated System' },
  { number: '10+', label: 'Communication Channels' }
];

const CommunicationPage = () => {
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
                <ChatBubbleLeftRightIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Communication Hub
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Seamless communication between schools, teachers, students, and parents with multi-channel messaging and automated notifications. Chat with anyone on the platform for instant collaboration and support.
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
                  Start Communicating
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
            {communicationStats.map((stat, index) => (
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

      {/* Features Section with Communication Channels */}
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
                Communication Features
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive communication tools designed to keep everyone connected and informed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {communicationFeatures.map((feature, index) => (
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

      {/* Communication Channels Showcase */}
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
                Multi-Channel Communication
              </h2>
              <p className="text-lg text-gray-600">
                Reach your audience through their preferred communication channels
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {[
                { icon: EnvelopeIcon, label: 'Email', color: 'from-blue-500 to-blue-600' },
                { icon: DevicePhoneMobileIcon, label: 'SMS', color: 'from-green-500 to-green-600' },
                { icon: BellIcon, label: 'Push', color: 'from-purple-500 to-purple-600' },
                { icon: PhoneIcon, label: 'Voice', color: 'from-red-500 to-red-600' },
                { icon: ChatBubbleLeftRightIcon, label: 'App', color: 'from-teal-500 to-teal-600' }
              ].map((channel, index) => (
                <motion.div
                  key={channel.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <div className={`flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r ${channel.color}`}>
                    <channel.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{channel.label}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Communication Flow */}
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
                  Why Effective Communication Matters
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Strong communication bridges the gap between schools and families, ensuring everyone stays informed and engaged.
                </p>
                <ul className="space-y-3">
                  {[
                    'Instant notifications for important updates',
                    'Multi-language support for diverse communities',
                    'Automated emergency communication systems',
                    'Real-time feedback and response tracking',
                    'Personalized communication preferences',
                    'Secure and compliant messaging'
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
                    src="/communication-module.png"
                    alt="School communication and parent engagement"
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
            Ready to Transform School Communication?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Join schools worldwide using our communication hub to keep everyone connected and informed.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Get Started Today
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

export default CommunicationPage;