'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  BuildingStorefrontIcon,
  MapPinIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const branchesFeatures = [
  {
    title: 'Multi-Branch Management',
    description: 'Centralized control and monitoring of all school branches and campuses.',
    icon: BuildingStorefrontIcon,
    benefits: ['Unified Dashboard', 'Branch Analytics', 'Resource Allocation']
  },
  {
    title: 'Location Tracking',
    description: 'GPS-based location management with route optimization and attendance tracking.',
    icon: MapPinIcon,
    benefits: ['GPS Integration', 'Route Planning', 'Location Analytics']
  },
  {
    title: 'Inter-Branch Communication',
    description: 'Seamless communication and data sharing between different branch locations.',
    icon: UserGroupIcon,
    benefits: ['Unified Messaging', 'Data Synchronization', 'Collaborative Tools']
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive reporting on branch performance, student metrics, and operational efficiency.',
    icon: ChartBarIcon,
    benefits: ['Branch Comparisons', 'Performance Metrics', 'Custom Reports']
  }
];

const branchesStats = [
  { number: '25+', label: 'Branches Managed' },
  { number: '15K+', label: 'Students Across Branches' },
  { number: '99.9%', label: 'System Uptime' },
  { number: '24/7', label: 'Branch Support' }
];

const BranchesPage = () => {
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
                <BuildingStorefrontIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Multi-Branch Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive management system for schools with multiple branches, enabling seamless coordination, resource sharing, and unified administration.
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
                  Manage Branches
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
            {branchesStats.map((stat, index) => (
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

      {/* Branch Network Visualization */}
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
                Branch Network
              </h2>
              <p className="text-lg text-gray-600">
                Connected ecosystem of school branches with real-time data synchronization
              </p>
            </motion.div>

            {/* Network Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 shadow-lg bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl"
            >
              {/* Central Hub */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#00204f] to-[#02ACC3] rounded-full text-white font-bold text-lg shadow-lg">
                    HQ
                  </div>
                  <div className="absolute w-6 h-6 bg-green-500 border-2 border-white rounded-full -top-2 -right-2 animate-pulse"></div>
                </div>
              </div>

              {/* Branch Connections */}
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { name: 'Branch A', location: 'Downtown', students: '450', status: 'online' },
                  { name: 'Branch B', location: 'North Campus', students: '380', status: 'online' },
                  { name: 'Branch C', location: 'East Wing', students: '520', status: 'online' },
                  { name: 'Branch D', location: 'South Campus', students: '290', status: 'maintenance' }
                ].map((branch, index) => (
                  <motion.div
                    key={branch.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* Connection Line */}
                    <div className="w-0.5 h-8 bg-gradient-to-b from-[#00204f] to-[#02ACC3] mx-auto mb-4"></div>

                    {/* Branch Node */}
                    <div className="relative p-4 bg-white border border-gray-100 rounded-lg shadow-md">
                      <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-white ${branch.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                      <div className="mb-1 text-lg font-bold text-gray-900">{branch.name}</div>
                      <div className="mb-2 text-sm text-gray-600">{branch.location}</div>
                      <div className="text-xs text-gray-500">{branch.students} Students</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Data Flow Indicators */}
              <div className="flex justify-center mt-8 space-x-8">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 mr-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active Sync
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Data Transfer
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-3 h-3 mr-2 bg-purple-500 rounded-full animate-pulse"></div>
                  Real-time Updates
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
                Branch Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced tools for managing multiple school locations efficiently
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {branchesFeatures.map((feature, index) => (
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

      {/* Branch Benefits Showcase */}
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
                Multi-Branch Benefits
              </h2>
              <p className="text-lg text-gray-600">
                Advantages of centralized management across multiple locations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { benefit: 'Unified Administration', description: 'Single dashboard for all branch operations', icon: GlobeAltIcon },
                { benefit: 'Resource Optimization', description: 'Efficient allocation of staff and materials', icon: CurrencyDollarIcon },
                { benefit: 'Consistent Standards', description: 'Maintain quality across all locations', icon: StarIcon }
              ].map((item, index) => (
                <motion.div
                  key={item.benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 transition-all duration-300 border border-gray-100 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white rounded-full bg-gradient-to-r from-[#00204f] to-[#02ACC3]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-center text-gray-900">{item.benefit}</h3>
                  <p className="text-center text-gray-600">{item.description}</p>
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
            Ready to Manage Multiple Branches?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Scale your educational institution efficiently with our comprehensive multi-branch management system.
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

export default BranchesPage;