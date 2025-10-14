'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  EyeIcon,
  HandRaisedIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const behaviorCategories = [
  {
    title: 'Positive Behavior',
    description: 'Recognition and rewards for good conduct',
    icon: StarIcon,
    color: 'from-green-500 to-emerald-600',
    stats: '85% Improved'
  },
  {
    title: 'Behavioral Issues',
    description: 'Tracking and management of disciplinary matters',
    icon: ExclamationTriangleIcon,
    color: 'from-red-500 to-pink-600',
    stats: '30% Reduction'
  },
  {
    title: 'Parent Communication',
    description: 'Automated notifications and reports to parents',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-indigo-600',
    stats: '95% Engagement'
  },
  {
    title: 'Analytics & Insights',
    description: 'Data-driven insights for behavior improvement',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-violet-600',
    stats: 'Real-time Data'
  }
];

const behaviorFeatures = [
  {
    title: 'Incident Reporting',
    description: 'Comprehensive incident tracking with detailed categorization and follow-up actions.',
    icon: ExclamationTriangleIcon,
    benefits: ['Digital Reporting', 'Severity Levels', 'Follow-up Tracking']
  },
  {
    title: 'Behavior Analytics',
    description: 'Advanced analytics to identify patterns and trends in student behavior.',
    icon: ChartBarIcon,
    benefits: ['Trend Analysis', 'Predictive Insights', 'Custom Reports']
  },
  {
    title: 'Reward System',
    description: 'Digital reward system to encourage positive behavior and achievements.',
    icon: StarIcon,
    benefits: ['Point System', 'Badge Awards', 'Recognition Wall']
  },
  {
    title: 'Parent Portal',
    description: 'Real-time updates and communication with parents about their child\'s behavior.',
    icon: EyeIcon,
    benefits: ['Instant Notifications', 'Progress Reports', 'Parent Meetings']
  }
];

const behaviorStats = [
  { number: '92%', label: 'Positive Behavior Rate' },
  { number: '500+', label: 'Incidents Managed' },
  { number: '98%', label: 'Parent Satisfaction' },
  { number: '24/7', label: 'Monitoring Available' }
];

const BehaviorPage = () => {
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
                <ShieldCheckIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Behavior Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Foster a positive learning environment with comprehensive behavior tracking, incident management, and positive reinforcement systems.
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
                  Start Managing Behavior
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

      {/* Stats Section with Unique Cards */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {behaviorStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 overflow-hidden text-center bg-white rounded-lg shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00204f] to-[#02ACC3]"></div>
                <div className="mb-2 text-3xl font-bold text-gray-900" style={{ color: PRIMARY_COLOR }}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Hexagonal Layout */}
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
                Comprehensive Behavior Management
              </h2>
              <p className="text-lg text-gray-600">
                Advanced tools designed to promote positive behavior and effectively manage disciplinary matters
              </p>
            </motion.div>

            {/* Hexagonal Grid Layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {behaviorFeatures.map((feature, index) => (
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

      {/* Unique Benefits Section with Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
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
                Behavior Management Process
              </h2>
              <p className="text-lg text-gray-600">
                Our systematic approach to creating a positive learning environment
              </p>
            </motion.div>

            {/* Timeline Layout */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-400 to-pink-500"></div>

              <div className="space-y-12">
                {[
                  { step: '01', title: 'Monitor & Track', description: 'Real-time behavior monitoring and incident tracking' },
                  { step: '02', title: 'Analyze Patterns', description: 'Identify trends and behavioral patterns for intervention' },
                  { step: '03', title: 'Positive Reinforcement', description: 'Reward system to encourage good behavior' },
                  { step: '04', title: 'Parent Communication', description: 'Keep parents informed and involved' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="flex items-center justify-center w-8 h-8 mr-3 text-white rounded-full bg-gradient-to-r from-[#00204f] to-[#02ACC3]">
                            <span className="text-sm font-bold">{item.step}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
            Ready to Improve School Behavior?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Join schools already creating positive learning environments with our behavior management system.
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

export default BehaviorPage;