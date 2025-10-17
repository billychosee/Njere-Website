'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  TrophyIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const certificateFeatures = [
  {
    title: 'Digital Certificates',
    description: 'Generate and issue digital certificates with customizable templates and secure verification.',
    icon: DocumentTextIcon,
    benefits: ['Custom Templates', 'Digital Verification', 'Bulk Generation']
  },
  {
    title: 'Certificate Templates',
    description: 'Professional certificate designs with your school branding and customizable layouts.',
    icon: CheckBadgeIcon,
    benefits: ['Brand Integration', 'Multiple Formats', 'Easy Customization']
  },
  {
    title: 'Verification System',
    description: 'Secure verification portal for employers and institutions to validate certificate authenticity.',
    icon: ShieldCheckIcon,
    benefits: ['Instant Verification', 'QR Code Integration', 'Blockchain Security']
  },
  {
    title: 'Automated Issuance',
    description: 'Automatically generate certificates based on completion criteria and academic achievements.',
    icon: TrophyIcon,
    benefits: ['Auto-Generation', 'Achievement Tracking', 'Email Delivery']
  }
];

const certificateStats = [
  { number: '10,000+', label: 'Certificates Issued' },
  { number: '500+', label: 'Partner Institutions' },
  { number: '99.9%', label: 'Verification Success' },
  { number: '24/7', label: 'Verification Portal' }
];

const CertificatePage = () => {
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
                <TrophyIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Certificate Management
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional certificate generation, secure verification, and automated issuance system for academic excellence.
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
                  Start Issuing Certificates
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
            {certificateStats.map((stat, index) => (
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

      {/* Features Section with Interactive Cards */}
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
                Certificate Management Features
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive tools for professional certificate creation, management, and verification
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {certificateFeatures.map((feature, index) => (
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

      {/* Certificate Showcase Section */}
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
                Certificate Showcase
              </h2>
              <p className="text-lg text-gray-600">
                Professional certificate designs that showcase academic achievements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                { type: 'Achievement', color: 'from-yellow-400 to-orange-500' },
                { type: 'Completion', color: 'from-green-400 to-blue-500' },
                { type: 'Excellence', color: 'from-purple-400 to-pink-500' }
              ].map((cert, index) => (
                <motion.div
                  key={cert.type}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative p-6 bg-white border border-gray-100 rounded-lg shadow-lg"
                >
                  <div className={`w-full h-32 bg-gradient-to-r ${cert.color} rounded-lg mb-4 flex items-center justify-center`}>
                    <TrophyIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{cert.type} Certificate</h3>
                  <p className="text-sm text-gray-600">Professional design with secure verification</p>
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
                  Why Choose Our Certificate System?
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Streamline certificate management with professional designs, secure verification, and automated processes.
                </p>
                <ul className="space-y-3">
                  {[
                    'Professional certificate templates',
                    'Secure digital verification system',
                    'Automated issuance and delivery',
                    'Integration with academic records',
                    'Multi-format export options',
                    'Employer verification portal'
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
                    src="/certificate-module.png"
                    alt="Certificate management and verification"
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
            Ready to Issue Professional Certificates?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Join institutions worldwide using our certificate management system for secure, professional credentialing.
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

export default CertificatePage;
