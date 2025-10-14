'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CubeIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  TruckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const inventoryFeatures = [
  {
    title: 'Asset Tracking',
    description: 'Comprehensive tracking of all school assets, equipment, and inventory items.',
    icon: CubeIcon,
    benefits: ['Real-time Tracking', 'Asset Lifecycle', 'Maintenance Logs']
  },
  {
    title: 'Stock Management',
    description: 'Automated inventory control with low stock alerts and reorder management.',
    icon: ClipboardDocumentListIcon,
    benefits: ['Stock Alerts', 'Reorder Management', 'Supplier Integration']
  },
  {
    title: 'Equipment Maintenance',
    description: 'Scheduled maintenance tracking and preventive maintenance scheduling.',
    icon: WrenchScrewdriverIcon,
    benefits: ['Maintenance Schedules', 'Work Order Management', 'Cost Tracking']
  },
  {
    title: 'Reporting & Analytics',
    description: 'Detailed reports on inventory usage, maintenance costs, and asset utilization.',
    icon: ChartBarIcon,
    benefits: ['Usage Reports', 'Cost Analysis', 'Performance Metrics']
  }
];

const inventoryStats = [
  { number: '5K+', label: 'Items Tracked' },
  { number: '99%', label: 'Accuracy Rate' },
  { number: '30%', label: 'Cost Savings' },
  { number: '24/7', label: 'Inventory Access' }
];

const InventoryPage = () => {
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
                <CubeIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Inventory Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Complete asset and inventory management system with automated tracking, maintenance scheduling, and comprehensive reporting.
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
                  Manage Inventory
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
            {inventoryStats.map((stat, index) => (
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

      {/* Inventory Dashboard Visualization */}
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
                Inventory Dashboard
              </h2>
              <p className="text-lg text-gray-600">
                Real-time overview of your inventory status and asset management
              </p>
            </motion.div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { title: 'Total Assets', count: '2,450', change: '+5.2%', icon: CubeIcon, color: 'from-blue-500 to-blue-600' },
                { title: 'Low Stock Items', count: '23', change: '-12%', icon: MagnifyingGlassIcon, color: 'from-orange-500 to-red-500' },
                { title: 'Maintenance Due', count: '8', change: '+2', icon: WrenchScrewdriverIcon, color: 'from-green-500 to-teal-500' }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color}`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-sm font-medium ${card.change.startsWith('+') && !card.change.includes('-') ? 'text-green-600' : card.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                      {card.change}
                    </div>
                  </div>
                  <div className="mb-1 text-3xl font-bold text-gray-900">{card.count}</div>
                  <div className="text-gray-600">{card.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Asset Categories Showcase */}
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
                Asset Categories
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive tracking across all types of school assets and equipment
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { category: 'IT Equipment', emoji: '💻', count: '450', color: 'from-blue-500 to-blue-600' },
                { category: 'Furniture', emoji: '🪑', count: '320', color: 'from-green-500 to-green-600' },
                { category: 'Lab Equipment', emoji: '🧪', count: '180', color: 'from-purple-500 to-purple-600' },
                { category: 'Sports Gear', emoji: '⚽', count: '95', color: 'from-orange-500 to-orange-600' }
              ].map((asset, index) => (
                <motion.div
                  key={asset.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <div className={`flex items-center justify-center w-16 h-16 mb-4 text-white rounded-full bg-gradient-to-r ${asset.color}`}>
                    <span className="text-2xl">{asset.emoji}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-center text-gray-900">{asset.category}</h3>
                  <div className="text-2xl font-bold text-gray-700">{asset.count}</div>
                  <div className="text-sm text-gray-500">Items</div>
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
                Inventory Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced tools for comprehensive asset and inventory management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {inventoryFeatures.map((feature, index) => (
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
            Ready to Optimize Your Inventory?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Streamline asset management, reduce costs, and maintain accurate inventory with our comprehensive system.
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

export default InventoryPage;