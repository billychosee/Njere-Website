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
  QuestionMarkCircleIcon,
  StarIcon,
  AcademicCapIcon,
  ChartBarIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const PRIMARY_COLOR = '#00204f';
const ACCENT_COLOR = '#02ACC3';

const AffiliateContent = () => {
  const [activeTab, setActiveTab] = useState('connect');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How are commissions paid?',
      answer: 'Commissions are typically paid quarterly, coinciding with the school payment terms.',
    },
    {
      question: 'Are there any requirements to join the affiliate program?',
      answer: 'To join, you must: Have a relevant audience within the education sector or related industries. Be a passionate advocate for education and technology. Demonstrate a commitment to professionalism and ethical business practices.',
    },
    {
      question: 'Can I earn commissions on referrals from multiple platforms?',
      answer: 'Yes, you can promote Mzizi on multiple platforms and earn commissions from referrals generated through each channel.',
    },
    {
      question: 'Are there any restrictions on the types of content I can create to promote Mzizi?',
      answer: 'Yes, there are some restrictions. You cannot use misleading or deceptive advertising practices. Please refer to our affiliate program terms and conditions for more details.',
    },
    {
      question: 'What kind of support does Njere provide to Affiliates?',
      answer: 'Njere offers comprehensive support to its affiliates, including dedicated account managers, marketing materials, tracking tools, training, and technical assistance. This support ensures affiliates have the resources they need to effectively promote Njere and maximize their earnings.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Education Consultant',
      content: 'Partnering with Njere as an affiliate has been a game-changer for me. The program is simple to use, and I appreciate the flexibility to either refer schools directly or pass along leads for their team to handle. The consistent monthly commissions have been a great boost to my income.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Technology Blogger',
      content: "I've been part of many affiliate programs, but Njere stands out. The quality of their ERP solution makes it easy to promote, and the commission structure is generous. Their support team is always responsive to my questions.",
      rating: 5,
    },
    {
      name: 'Grace Moyo',
      role: 'School Administrator',
      content: "As someone who works in education, I was excited to find an affiliate program that aligns with my values. Njere ERP has genuinely helped schools improve their operations, and I'm proud to be part of that journey while earning extra income.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
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
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              Become an Affiliate
            </h1>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105">
                Sign Up Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full hover:bg-white hover:text-blue-900">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              How Does It Work?
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start earning with our affiliate program
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <span
                  className="text-2xl font-bold"
                  style={{ color: ACCENT_COLOR }}
                >
                  1
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sign Up</h3>
              <p className="text-gray-600">
                Join the hundreds of Njere affiliates earning with us by filling
                out a simple registration form.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <span
                  className="text-2xl font-bold"
                  style={{ color: ACCENT_COLOR }}
                >
                  2
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Promote</h3>
              <p className="text-gray-600">
                Advertise or promote Njere ERP to potential customers using your
                referral link.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <span
                  className="text-2xl font-bold"
                  style={{ color: ACCENT_COLOR }}
                >
                  3
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Earn</h3>
              <p className="text-gray-600">
                For every school that signs up using your referral link, you
                earn a commission.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              The more you sell or promote, the more you can earn! Make the
              right money moves with Njere.
            </p>
          </div>
        </div>
      </section>

      {/* Why Become an Affiliate Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Why Become a Njere Affiliate
            </h2>
            <p className="text-xl text-gray-600">
              Benefits of joining our affiliate program
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <UserGroupIcon
                  className="w-8 h-8"
                  style={{ color: ACCENT_COLOR }}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Network</h3>
              <p className="text-gray-600">
                Be part of a growing network of affiliates and industry
                professionals.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <CurrencyDollarIcon
                  className="w-8 h-8"
                  style={{ color: ACCENT_COLOR }}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lucrative</h3>
              <p className="text-gray-600">
                Unlimited earning potential.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <ClockIcon
                  className="w-8 h-8"
                  style={{ color: ACCENT_COLOR }}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Flexible</h3>
              <p className="text-gray-600">
                Work on your own terms.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <DocumentTextIcon
                  className="w-8 h-8"
                  style={{ color: ACCENT_COLOR }}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Resources</h3>
              <p className="text-gray-600">
                Benefit from our marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Account Types Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Our Affiliate Account Types
            </h2>
            <p className="text-xl text-gray-600">
              Choose the affiliate program that best suits your skills
            </p>
          </div>

          <div className="flex flex-col justify-center gap-8 lg:flex-row">
            {/* Njere Connect */}
            <div className="flex-1 max-w-md overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl">
              <div
                className="p-6 text-center"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <h3
                  className="mb-2 text-2xl font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  NJERE CONNECT
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600">
                  The Njere Connect program is designed for partners who excel
                  at generating leads but prefer to leave the sales process to
                  us.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      5% Commission (Successful Referral)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Recurring Commission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Marketing Material</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shref-0" />
                    <span className="text-gray-700">Training</span>
                  </li>
                </ul>
                <button
                  className="w-full py-3 font-bold text-white transition-all rounded-lg hover:opacity-90"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Start Connecting
                </button>
              </div>
            </div>

            {/* Njere Earn */}
            <div className="flex-1 max-w-md overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl">
              <div
                className="p-6 text-center"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <h3
                  className="mb-2 text-2xl font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  NJERE EARN
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600">
                  The Njere Earn program is perfect for influencers, website
                  publishers, and businesses looking to monetize their audience.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">10% Commission (Sale)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Recurring Commission</span>
                  </li>
                  <li>
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Marketing Material</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Training</span>
                  </li>
                </ul>
                <button
                  className="w-full py-3 font-bold text-white transition-all rounded-lg hover:opacity-90"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Start Earning
                </button>
              </div>
            </div>

            {/* Njere Fusion */}
            <div className="flex-1 max-w-md overflow-hidden bg-white border border-gray-200 shadow-xl rounded-2xl">
              <div
                className="p-6 text-center"
                style={{ backgroundColor: '#f0f9ff' }}
              >
                <h3
                  className="mb-2 text-2xl font-bold"
                  style={{ color: PRIMARY_COLOR }}
                >
                  NJERE FUSION
                </h3>
              </div>
              <div className="p-6">
                <p className="mb-6 text-gray-600">
                  Our Fusion affiliate program offers you the flexibility to
                  earn income in multiple ways.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">10% Commission (Sale)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      5% Commission (Successful Referral)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Recurring Commission</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">
                      Marketing Material & Training
                    </span>
                  </li>
                </ul>
                <button
                  className="w-full py-3 font-bold text-white transition-all rounded-lg hover:opacity-90"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  Start Earning
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our affiliate program
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 overflow-hidden bg-white rounded-lg shadow-md"
              >
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-gray-50"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <QuestionMarkCircleIcon
                    className={`w-5 h-5 transition-transform ${
                      expandedFaq === index ? 'rotate-45' : ''
                    }`}
                    style={{ color: ACCENT_COLOR }}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Real People, Real Feedback
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our successful affiliates
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 shadow-md bg-gray-50 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 bg-gray-300 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
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

      {/* CTA Section */}
      <section
        className="py-20 overflow-hidden"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
              Ready to Start Earning?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-xl text-white/90">
              Join our affiliate program today and start earning recurring
              commissions with Njere ERP
            </p>
            <button className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105">
              Become an Affiliate
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffiliateContent;