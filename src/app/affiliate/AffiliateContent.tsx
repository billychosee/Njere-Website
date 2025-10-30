// components/AffiliateContent.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  DocumentTextIcon,
  StarIcon,
  AcademicCapIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const PRIMARY_COLOR = '#00204f'; // Dark Blue
const ACCENT_COLOR = '#02ACC3'; // Teal/Cyan

const AffiliateContent = () => {
  const [activeTab, setActiveTab] = useState('connect');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [studentCount, setStudentCount] = useState('');
  const [earnings, setEarnings] = useState(0);

  const packages = {
    basic: { price: 2, name: 'Basic Package' },
    standard: { price: 5, name: 'Standard Package' },
    premium: { price: 10, name: 'Premium Package' },
    enterprise: { price: 15, name: 'Enterprise Package' }
  };

  const calculateEarnings = (pkg: string, students: string) => {
    if (!pkg || !students || parseInt(students) <= 0) {
      setEarnings(0);
      return;
    }

    const packagePrice = packages[pkg as keyof typeof packages].price;
    const numStudents = parseInt(students);
    const affiliateRate = 0.10; // 10%

    const totalRevenue = packagePrice * numStudents;
    const affiliateAmount = totalRevenue * affiliateRate;

    setEarnings(affiliateAmount);
  };

  const handlePackageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pkg = e.target.value;
    setSelectedPackage(pkg);
    calculateEarnings(pkg, studentCount);
  };

  const handleStudentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const students = e.target.value;
    setStudentCount(students);
    calculateEarnings(selectedPackage, students);
  };

  const faqs = [
    {
      question: 'How are commissions paid?',
      answer:
        'Commissions are typically paid quarterly, coinciding with the school payment terms. Payments are processed through a secure platform of your choice (e.g., bank transfer, PayPal) after the referral is fully validated.',
    },
    {
      question: 'Are there any requirements to join the affiliate program?',
      answer:
        'To join, you must: Have a relevant audience within the education sector or related industries. Be a passionate advocate for education and technology. Demonstrate a commitment to professionalism and ethical business practices. There is no cost to join.',
    },
    {
      question: 'Can I earn commissions on referrals from multiple platforms?',
      answer:
        'Yes, you can promote Njere on multiple platforms (website, social media, email, etc.) and earn commissions from referrals generated through each channel. We provide unique tracking links for this purpose.',
    },
    {
      question:
        'Are there any restrictions on the types of content I can create to promote Mzizi?',
      answer:
        'Yes, there are some restrictions. You cannot use misleading or deceptive advertising practices, engage in spamming, or use our brand name in PPC campaigns without explicit permission. Please refer to our detailed affiliate program terms and conditions for more details.',
    },
    {
      question: 'What kind of support does Njere provide to Affiliates?',
      answer:
        'Njere offers comprehensive support to its affiliates, including a dedicated account manager, a rich library of marketing materials (banners, email templates, content ideas), real-time tracking tools, product training sessions, and technical assistance. This ensures you have all the resources you need to succeed.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Education Consultant',
      content:
        'Partnering with Njere as an affiliate has been a game-changer for me. The program is simple to use, and I appreciate the flexibility to either refer schools directly or pass along leads for their team to handle. The consistent monthly commissions have been a great boost to my income.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Technology Blogger',
      content:
        "I've been part of many affiliate programs, but Njere stands out. The quality of their ERP solution makes it easy to promote, and the commission structure is generous. Their support team is always responsive to my questions and needs.",
      rating: 5,
    },
    {
      name: 'Grace Moyo',
      role: 'School Administrator',
      content:
        "As someone who works in education, I was excited to find an affiliate program that aligns with my values. Njere ERP has genuinely helped schools improve their operations, and I'm proud to be part of that journey while earning extra income.",
      rating: 5,
    },
  ];

  // Helper component for star rating
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

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
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              Become an Affiliate
            </h1>
            <p className="mb-8 text-xl text-white/90">
              Partner with the leading Education ERP solution and start earning
              recurring commissions today.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => window.open('/contact-us', '_self')}
                className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
              >
                Sign Up Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => window.open('/contact-us', '_self')}
                className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Card-based with a Modern Flow */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              The Path to Partnership
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Simple Steps to Success
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-3">
            {[
              {
                title: 'Sign Up',
                desc: 'Complete a quick, free registration and get instant access to your unique referral dashboard and resources.',
              },
              {
                title: 'Promote',
                desc: 'Share your tracking link via your website, social media, or direct referrals. We provide all the creative assets you need.',
              },
              {
                title: 'Earn',
                desc: 'Receive quarterly recurring commissions for every school that signs up and stays a customer through your link.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-8 text-center transition-all duration-300 bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="absolute flex items-center justify-center w-12 h-12 rounded-full left-1/2 -top-6 ring-4 ring-white"
                  style={{
                    backgroundColor: ACCENT_COLOR,
                    transform: 'translateX(-50%)',
                  }}
                >
                  <span className="text-xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3
                  className="mt-4 mb-3 text-2xl font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
                <ArrowRightIcon
                  className="w-6 h-6 mx-auto mt-4"
                  style={{ color: ACCENT_COLOR }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => window.open('/contact-us', '_self')}
              style={{ backgroundColor: PRIMARY_COLOR }}
              className="flex items-center justify-center px-8 py-3 mx-auto font-semibold text-white transition-all rounded-full cursor-pointer hover:opacity-90 w-fit"
            >
              Get Started Now
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Become an Affiliate Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        ></div>
        <div
          className="absolute bottom-0 right-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: PRIMARY_COLOR }}
        ></div>

        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Maximize Your Impact
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Why Partner with Njere?
            </h2>
            <p className="text-lg text-gray-600">
              Discover the benefits that set our affiliate program apart
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: UserGroupIcon,
                title: 'Network',
                desc: 'Be part of a growing network of educational technology advocates and industry professionals.',
                color: '#4F46E5', // Indigo
                bgColor: '#EEF2FF', // Light Indigo
              },
              {
                icon: CurrencyDollarIcon,
                title: 'Lucrative',
                desc: 'Benefit from recurring, high-percentage commissions with unlimited earning potential.',
                color: '#10B981', // Green
                bgColor: '#ECFDF5', // Light Green
              },
              {
                icon: ClockIcon,
                title: 'Flexible',
                desc: 'Work on your own terms, from anywhere. Our program adapts to your existing business model.',
                color: '#F59E0B', // Amber
                bgColor: '#FEF3C7', // Light Amber
              },
              {
                icon: DocumentTextIcon,
                title: 'Resources',
                desc: 'Access a complete suite of professionally designed marketing materials, training, and tracking tools.',
                color: '#EF4444', // Red
                bgColor: '#FEF2F2', // Light Red
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl group-hover:opacity-100 blur-xl"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="relative p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl">
                  <div
                    className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full group-hover:scale-110"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <item.icon
                      className="w-10 h-10 transition-all duration-300"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <div className="flex justify-center mt-6">
                    <div
                      className="w-12 h-1 transition-all duration-300 rounded-full group-hover:w-16"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Earnings Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Calculate Your Earnings
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Affiliate Earnings Calculator
            </h2>
            <p className="text-xl text-gray-600">
              If you want to become an affiliate for Njere, please select your preferred package and enter the number of students. The system will automatically calculate your affiliate earnings based on your selection.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white shadow-lg rounded-2xl">
              <div className="space-y-6">
                {/* Package Selection */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Choose your package:
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={handlePackageChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Package</option>
                    <option value="basic">Basic Package - $2 / student / term</option>
                    <option value="standard">Standard Package - $5 / student / term</option>
                    <option value="premium">Premium Package - $10 / student / term</option>
                    <option value="enterprise">Enterprise Package - $15 / student / term</option>
                  </select>
                </div>

                {/* Number of Students */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Enter number of students:
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={studentCount}
                    onChange={handleStudentChange}
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter number of students"
                  />
                </div>

                {/* Affiliate Rate Display */}
                <div className="p-4 rounded-lg bg-blue-50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Affiliate rate:</span>
                    <span className="text-lg font-bold text-blue-600">10%</span>
                  </div>
                </div>

                {/* Affiliate Amount Display */}
                <div className="p-4 rounded-lg bg-green-50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Affiliate amount:</span>
                    <span className="text-2xl font-bold text-green-600">${earnings.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-4 text-sm text-gray-600 rounded-lg bg-gray-50">
                  <strong>Formula:</strong> Affiliate Amount = (Package Price × Number of Students) × Affiliate Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Account Types Section - Sleek Tabbed Layout with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Tailored for You
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Choose Your Partnership Level
            </h2>
            <p className="text-xl text-gray-600">
              Three distinct programs to match your engagement level and earning
              goals.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Left Column: Image and Content */}
            <div className="relative flex-shrink-0 lg:w-1/2">
              <div className="overflow-hidden shadow-2xl rounded-2xl h-80 lg:h-full">
                <Image
                  src="/black-girl.png"
                  alt="A successful affiliate working on a laptop"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div
                className="absolute p-4 text-center text-white transform -translate-x-1/2 shadow-lg rounded-xl -bottom-6 left-1/2"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <AcademicCapIcon className="w-8 h-8 mx-auto mb-1" />
                <p className="text-sm font-semibold">EduTech Focus</p>
              </div>
            </div>

            {/* Right Column: Tabbed Content */}
            <div className="lg:w-1/2">
              <div className="flex p-1 mb-8 bg-gray-200 rounded-xl">
                {['connect', 'earn', 'fusion'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-lg font-semibold capitalize rounded-xl transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'text-white shadow-md'
                        : 'text-gray-700 hover:bg-white/50'
                    }`}
                    style={{
                      backgroundColor:
                        activeTab === tab ? PRIMARY_COLOR : 'transparent',
                    }}
                  >
                    Njere {tab}
                  </button>
                ))}
              </div>

              <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 min-h-[350px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'connect' && (
                    <motion.div
                      key="connect"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="mb-3 text-3xl font-bold"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        NJERE CONNECT
                      </h3>
                      <p className="mb-6 text-gray-600">
                        Designed for partners who excel at generating leads
                        but prefer to leave the complex sales process, demos,
                        and closing to our expert team.
                      </p>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="font-semibold text-gray-700">
                            5% Recurring Commission
                          </span>{' '}
                          (on successful referral)
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            Hands-off sales model
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            Dedicated Lead Tracking Portal
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={() => window.open('/contact-us', '_self')}
                        className="flex items-center justify-center w-full py-3 mt-4 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        Start Connecting
                      </button>
                    </motion.div>
                  )}
                  {activeTab === 'earn' && (
                    <motion.div
                      key="earn"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="mb-3 text-3xl font-bold"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        NJERE EARN
                      </h3>
                      <p className="mb-6 text-gray-600">
                        Perfect for influencers, website publishers, and
                        content creators looking to monetize their audience by
                        driving traffic directly to our sales page.
                      </p>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="font-semibold text-gray-700">
                            10% Recurring Commission
                          </span>{' '}
                          (on direct sale)
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            High Conversion Landing Pages
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            Full Marketing Asset Library
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={() => window.open('/contact-us', '_self')}
                        className="flex items-center justify-center w-full py-3 mt-4 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        Start Earning
                      </button>
                    </motion.div>
                  )}
                  {activeTab === 'fusion' && (
                    <motion.div
                      key="fusion"
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    >
                      <h3
                        className="mb-3 text-3xl font-bold"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        NJERE FUSION
                      </h3>
                      <p className="mb-6 text-gray-600">
                        The ultimate flexible program. Maximize your
                        earnings by getting commission for both successfully
                        referred leads and direct sales from your links.
                      </p>
                      <ul className="mb-6 space-y-3">
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="font-semibold text-gray-700">
                            10% (Sale) + 5% (Referral)
                          </span>{' '}
                          Commission
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            Full Training and Support Included
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">
                            Complete Flexibility for all Partners
                          </span>
                        </li>
                      </ul>
                      <button
                        onClick={() => window.open('/contact-us', '_self')}
                        className="flex items-center justify-center w-full py-3 mt-4 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        Start Fusing
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Sleek Card Design */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Trusted Partnerships
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Real People, Real Feedback
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 border-t-4 shadow-xl bg-gray-50 rounded-2xl"
                style={{ borderTopColor: ACCENT_COLOR }}
              >
                <StarRating rating={testimonial.rating} />
                <p className="my-6 text-lg italic text-gray-700">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <div
                    className="flex items-center justify-center w-12 h-12 mr-4 text-xl font-bold text-white uppercase rounded-full"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with Sleek Animations */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        ></div>
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: PRIMARY_COLOR }}
        ></div>
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              Got Questions?
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our affiliate program
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 overflow-hidden bg-white border border-gray-100 shadow-lg rounded-xl"
              >
                <motion.button
                  className="flex items-center justify-between w-full p-6 text-left transition-colors cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <h3 className="pr-8 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full"
                    style={{ backgroundColor: ACCENT_COLOR + '20' }}
                  >
                    {expandedFaq === index ? (
                      <MinusIcon
                        className="w-6 h-6"
                        style={{ color: ACCENT_COLOR }}
                      />
                    ) : (
                      <PlusIcon
                        className="w-6 h-6"
                        style={{ color: ACCENT_COLOR }}
                      />
                    )}
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pt-0 pb-6 border-t border-gray-100">
                        <p className="text-base text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-600">Still have questions?</p>
            <button
              onClick={() => window.open('/contact-us', '_self')}
              className="inline-block px-8 py-3 font-semibold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, #00204f 0%, #014a86 50%, #00bcd4 100%)',
        }}
      >
        <div className="container px-4 mx-auto md:px-6">
          <h2 className="mb-6 text-4xl font-extrabold">
            Ready to Start Earning?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
            Join our affiliate program today and start earning recurring
            commissions with Njere ERP.
          </p>
          <button
            onClick={() => window.open('/contact-us', '_self')}
            className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
          >
            Become an Affiliate
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AffiliateContent;
