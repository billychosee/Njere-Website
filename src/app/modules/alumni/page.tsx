'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  UserGroupIcon,
  CalendarDaysIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const features = [
  {
    title: 'Alumni Directory',
    description: 'Comprehensive alumni database with contact information, career updates, and networking opportunities.',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-blue-600',
    benefits: ['Contact Database', 'Career Tracking', 'Networking Hub']
  },
  {
    title: 'Event Management',
    description: 'Organize reunions, career fairs, and alumni events with integrated RSVP and communication tools.',
    icon: CalendarDaysIcon,
    color: 'from-green-500 to-green-600',
    benefits: ['Event Planning', 'RSVP System', 'Automated Invites']
  },
  {
    title: 'Donation Tracking',
    description: 'Manage alumni donations, scholarships, and fundraising campaigns with transparent reporting.',
    icon: GiftIcon,
    color: 'from-purple-500 to-purple-600',
    benefits: ['Donation Portal', 'Scholarship Funds', 'Impact Reports']
  },
  {
    title: 'Communication Hub',
    description: 'Multi-channel communication platform for newsletters, announcements, and alumni engagement.',
    icon: ChatBubbleLeftRightIcon,
    color: 'from-orange-500 to-orange-600',
    benefits: ['Newsletters', 'Social Feed', 'Mentorship Program']
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    graduation: 'Class of 2015',
    message: 'The alumni network helped me find my dream job and stay connected with my roots.',
    role: 'Software Engineer'
  },
  {
    name: 'Michael Chen',
    graduation: 'Class of 2012',
    message: 'Being able to give back through the donation portal has been incredibly rewarding.',
    role: 'Business Owner'
  },
  {
    name: 'Emily Rodriguez',
    graduation: 'Class of 2018',
    message: 'The mentorship program connected me with amazing professionals in my field.',
    role: 'Marketing Director'
  }
];

const stats = [
  { number: '5000+', label: 'Active Alumni' },
  { number: '150+', label: 'Events Organized' },
  { number: '$250K+', label: 'Donations Raised' },
  { number: '95%', label: 'Engagement Rate' }
];

const AlumniPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-80 h-80 bg-white/10 blur-3xl"></div>

        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-20 h-20 border bg-white/20 backdrop-blur-sm rounded-2xl border-white/30">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Alumni Network
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Build lifelong connections, foster mentorship, and create opportunities for current and former students.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 font-bold text-white transition-all transform border rounded-full shadow-lg cursor-pointer bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 hover:scale-105"
              >
                Join the Network
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
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
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
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
                Powerful Alumni Features
              </h2>
              <p className="text-lg text-gray-600">
                Connect, engage, and grow your alumni community with comprehensive management tools
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
                  className="relative p-8 overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg group hover:shadow-2xl"
                >
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br group-hover:opacity-5"
                       style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', '')}, ${feature.color.split(' ')[1].replace('to-', '')})` }}></div>

                  <div className="mb-4">
                    <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={
                          feature.title === 'Alumni Directory'
                            ? 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=200&fit=crop'
                            : feature.title === 'Event Management'
                            ? 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=200&fit=crop'
                            : feature.title === 'Donation Tracking'
                            ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop'
                            : 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=200&fit=crop'
                        }
                        alt={`${feature.title} feature`}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
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

      {/* Testimonials Section */}
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
                Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Hear from alumni who have benefited from our network
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white border border-gray-100 shadow-lg rounded-2xl"
                >
                  <div className="flex items-center mb-4">
                    <HeartIcon className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-sm text-gray-500">{testimonial.graduation}</span>
                  </div>
                  <p className="mb-4 italic text-gray-700">"{testimonial.message}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Image */}
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
                  Why Build an Alumni Network?
                </h2>
                <p className="mb-6 text-lg text-gray-600">
                  Strong alumni connections create opportunities for current students and help your school thrive through ongoing support and engagement.
                </p>
                <ul className="space-y-3">
                  {[
                    'Career opportunities and mentorship',
                    'Increased donations and fundraising',
                    'Enhanced school reputation',
                    'Lifelong learning community',
                    'Professional networking platform',
                    'Legacy and tradition building'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <TrophyIcon className="w-5 h-5 mr-3 text-yellow-500" />
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
                    src="/alumni-module.png"
                    alt="Alumni community and networking"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute text-white bottom-4 left-4">
                    <div className="text-lg font-bold">Building Futures Together</div>
                    <div className="text-sm opacity-90">Alumni making a difference</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold">
                Ready to Build Your Alumni Community?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Join schools already connecting with thousands of alumni worldwide.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all bg-white rounded-full cursor-pointer hover:bg-gray-100"
                >
                  Get Started Today
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/modules"
                  className="px-8 py-4 font-medium text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white/10"
                >
                  Explore All Modules
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

export default AlumniPage;
