'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  KeyIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const hostelFeatures = [
  {
    title: 'Room Management',
    description: 'Comprehensive room allocation, maintenance tracking, and occupancy management.',
    icon: HomeIcon,
    benefits: ['Room Assignment', 'Maintenance Logs', 'Occupancy Reports']
  },
  {
    title: 'Student Check-in/Out',
    description: 'Automated check-in and check-out processes with security verification.',
    icon: KeyIcon,
    benefits: ['Digital Check-in', 'Security Verification', 'Access Control']
  },
  {
    title: 'Fee Management',
    description: 'Streamlined hostel fee collection, billing, and payment tracking.',
    icon: CurrencyDollarIcon,
    benefits: ['Automated Billing', 'Payment Tracking', 'Fee Reminders']
  },
  {
    title: 'Security & Safety',
    description: 'Advanced security features including visitor logs and emergency protocols.',
    icon: ShieldCheckIcon,
    benefits: ['Visitor Management', 'Emergency Alerts', 'Security Logs']
  }
];

const hostelStats = [
  { number: '500+', label: 'Rooms Managed' },
  { number: '2K+', label: 'Students Housed' },
  { number: '99.5%', label: 'Occupancy Rate' },
  { number: '24/7', label: 'Security Monitoring' }
];

const HostelPage = () => {
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
                <HomeIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hostel Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Complete hostel management system with room allocation, security monitoring, fee collection, and student welfare tracking.
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
                  Manage Hostel
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
            {hostelStats.map((stat, index) => (
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

      {/* Hostel Layout Visualization */}
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
                Hostel Overview
              </h2>
              <p className="text-lg text-gray-600">
                Visual representation of room allocation and occupancy status
              </p>
            </motion.div>

            {/* Room Grid Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 shadow-lg bg-gray-50 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-5">
                {/* Room blocks */}
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-lg border-2 flex items-center justify-center text-sm font-medium ${
                      i % 4 === 0
                        ? 'bg-green-100 border-green-300 text-green-800'
                        : i % 4 === 1
                        ? 'bg-blue-100 border-blue-300 text-blue-800'
                        : i % 4 === 2
                        ? 'bg-yellow-100 border-yellow-300 text-yellow-800'
                        : 'bg-gray-100 border-gray-300 text-gray-800'
                    }`}
                  >
                    Room {i + 1}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-green-100 border-2 border-green-300 rounded"></div>
                  <span className="text-sm text-gray-600">Occupied</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-blue-100 border-2 border-blue-300 rounded"></div>
                  <span className="text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-yellow-100 border-2 border-yellow-300 rounded"></div>
                  <span className="text-sm text-gray-600">Maintenance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 mr-2 bg-gray-100 border-2 border-gray-300 rounded"></div>
                  <span className="text-sm text-gray-600">Reserved</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section with Decorative Elements */}
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
                Hostel Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive tools for efficient hostel operations and student welfare
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {hostelFeatures.map((feature, index) => (
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
            Ready to Manage Your Hostel?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Streamline hostel operations, ensure student safety, and maintain efficient administration with our comprehensive system.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Managing
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

export default HostelPage;
