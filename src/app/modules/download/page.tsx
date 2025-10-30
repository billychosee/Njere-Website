'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  CloudArrowDownIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const downloadFeatures = [
  {
    title: 'Mobile App Downloads',
    description: 'Native mobile applications for iOS and Android with offline capabilities.',
    icon: DevicePhoneMobileIcon,
    benefits: ['iOS & Android Apps', 'Offline Access', 'Push Notifications']
  },
  {
    title: 'Web Application',
    description: 'Full-featured web application accessible from any modern browser.',
    icon: ComputerDesktopIcon,
    benefits: ['Cross-browser Support', 'Responsive Design', 'Real-time Sync']
  },
  {
    title: 'Secure Downloads',
    description: 'Encrypted download process with secure authentication and verification.',
    icon: ShieldCheckIcon,
    benefits: ['SSL Encryption', 'Secure Authentication', 'Virus-free Guarantee']
  },
  {
    title: 'Auto Updates',
    description: 'Automatic updates ensure you always have the latest features and security patches.',
    icon: ClockIcon,
    benefits: ['Automatic Updates', 'Latest Features', 'Security Patches']
  }
];

const downloadStats = [
  { number: '50K+', label: 'Downloads Worldwide' },
  { number: '4.8', label: 'App Store Rating' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Download Support' }
];

const DownloadPage = () => {
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
                <CloudArrowDownIcon className="w-10 h-10" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Download Center
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A centralized hub where students can access and download educational content uploaded by teachers and administrators. School heads can manage and remove irrelevant materials to maintain quality and relevance.
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
                  Download Now
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
            {downloadStats.map((stat, index) => (
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

      {/* Download Section - Device Mockup with Store Buttons */}
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
                Download Our App
              </h2>
              <p className="text-lg text-gray-600">
                Get the full Njere experience on your mobile device
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Device Mockup */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative">
                  <Image
                    src="/mobile-app-mockup.png"
                    alt="Mobile App Mockup"
                    width={300}
                    height={600}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-3xl"></div>
                </div>
              </motion.div>

              {/* Download Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-6"
              >
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Available on all platforms</h3>
                  <p className="mb-8 text-gray-600">
                    Download the Njere mobile app and manage your educational institution on the go.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* App Store Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <button
                      onClick={() => window.open('https://apps.apple.com', '_blank')}
                      className="flex items-center justify-center flex-1 px-6 py-3 text-white transition-colors duration-300 bg-black rounded-lg hover:bg-gray-800"
                    >
                      <Image
                        src="/app-store-badge.png"
                        alt="Download on App Store"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </button>
                    <button
                      onClick={() => window.open('https://play.google.com', '_blank')}
                      className="flex items-center justify-center flex-1 px-6 py-3 text-white transition-colors duration-300 bg-black rounded-lg hover:bg-gray-800"
                    >
                      <Image
                        src="/google-play-badge.png"
                        alt="Get it on Google Play"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </button>
                  </div>

                  <button
                    onClick={() => window.open('https://appgallery.huawei.com', '_blank')}
                    className="flex items-center justify-center w-full px-6 py-3 text-white transition-colors duration-300 bg-black rounded-lg hover:bg-gray-800"
                  >
                    <Image
                      src="/huawei-appgallery-badge.png"
                      alt="Explore Huawei AppGallery"
                      width={120}
                      height={40}
                      className="object-contain"
                    />
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Free download • No in-app purchases • Regular updates
                  </p>
                </div>
              </motion.div>
            </div>
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
                Download Features
              </h2>
              <p className="text-lg text-gray-600">
                Experience seamless downloads with advanced features and security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {downloadFeatures.map((feature, index) => (
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
            Ready to Download?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Get started with our educational platform today. Choose your preferred platform and begin your journey.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Start Downloading
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

export default DownloadPage;