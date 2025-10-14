'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  TruckIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const transportFeatures = [
  {
    title: 'GPS Fleet Tracking',
    description: 'Real-time GPS monitoring of all school vehicles with live location updates and route optimization.',
    icon: GlobeAltIcon,
    benefits: ['Live Tracking', 'Route Optimization', 'Fleet Management']
  },
  {
    title: 'Parent Notifications',
    description: 'Automated SMS and app notifications to parents about bus location, delays, and arrival times.',
    icon: DevicePhoneMobileIcon,
    benefits: ['Real-time Updates', 'Emergency Alerts', 'ETA Notifications']
  },
  {
    title: 'Safety & Security',
    description: 'Advanced safety features including speed monitoring, driver behavior tracking, and emergency protocols.',
    icon: ShieldCheckIcon,
    benefits: ['Speed Monitoring', 'Driver Safety', 'Emergency Response']
  },
  {
    title: 'Route Management',
    description: 'Efficient route planning and management with capacity optimization and schedule coordination.',
    icon: MapPinIcon,
    benefits: ['Route Planning', 'Capacity Management', 'Schedule Optimization']
  }
];

const transportStats = [
  { number: '500+', label: 'Vehicles Tracked' },
  { number: '99.9%', label: 'Uptime' },
  { number: '15K+', label: 'Daily Rides' },
  { number: '24/7', label: 'Monitoring' }
];

const TransportPage = () => {
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
                <TruckIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transport Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Comprehensive school transportation system with GPS tracking, parent notifications, and advanced safety features.
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
                  Track Vehicles
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
            {transportStats.map((stat, index) => (
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

      {/* GPS Tracking Dashboard Preview */}
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
                Live GPS Dashboard
              </h2>
              <p className="text-lg text-gray-600">
                Real-time fleet monitoring with interactive maps and comprehensive vehicle insights
              </p>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 shadow-lg bg-gray-50 rounded-2xl"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Vehicle Status */}
                <div className="space-y-4">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Fleet Status</h3>
                  <div className="space-y-3">
                    {[
                      { bus: 'Bus 001', status: 'Active', location: 'En route to school', students: 45 },
                      { bus: 'Bus 002', status: 'Active', location: 'Pick-up zone A', students: 38 },
                      { bus: 'Bus 003', status: 'Maintenance', location: 'Service center', students: 0 }
                    ].map((vehicle, index) => (
                      <div key={vehicle.bus} className="p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{vehicle.bus}</span>
                          <div className={`px-2 py-1 rounded-full text-xs ${
                            vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {vehicle.status}
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">{vehicle.location}</div>
                        <div className="text-xs text-gray-500">{vehicle.students} students</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Preview */}
                <div className="lg:col-span-2">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">Live Map View</h3>
                  <div className="bg-white rounded-lg border-2 border-gray-300 p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPinIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Interactive GPS map showing all vehicles</p>
                      <p className="mt-2 text-xs">Real-time location tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transport Solutions Showcase */}
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
                Transport Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Complete transportation management from route planning to parent communication
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { solution: 'Route Planning', emoji: '🗺️', description: 'Optimized routes & schedules' },
                { solution: 'GPS Tracking', emoji: '📍', description: 'Real-time vehicle monitoring' },
                { solution: 'Parent App', emoji: '📱', description: 'Mobile notifications' },
                { solution: 'Safety Systems', emoji: '🛡️', description: 'Advanced security features' }
              ].map((solution, index) => (
                <motion.div
                  key={solution.solution}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-6 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl"
                >
                  <div className="mb-3 text-3xl">{solution.emoji}</div>
                  <h3 className="mb-2 text-lg font-bold text-center text-gray-900">{solution.solution}</h3>
                  <p className="text-sm text-center text-gray-600">{solution.description}</p>
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
                Transport Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Advanced transportation solutions ensuring student safety and efficient fleet operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {transportFeatures.map((feature, index) => (
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
            Ready to Transform School Transportation?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Ensure student safety and streamline transportation operations with our comprehensive GPS tracking and management system.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Tracking
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

export default TransportPage;