// IntegrationSections.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  BellIcon,
  TruckIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CreditCardIcon,
  BanknotesIcon,
  LockClosedIcon,
  ClockIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  CakeIcon,
  ReceiptPercentIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const PRIMARY_COLOR = '#00204f';
const ACCENT_COLOR = '#02ACC3';
const ORANGE_COLOR = '#F59E0B';

// GPS Transportation Management System Section
const GPSTransportationSection = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'benefits'>(
    'features',
  );
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const gpsFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'User-friendly Interface',
      description: 'Intuitive design for easy navigation',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Bus Tracking',
      description: 'Check school bus location on your phone',
    },
    {
      icon: MapPinIcon,
      title: 'Real-time Tracking',
      description: 'Live location updates every few seconds',
    },
    {
      icon: ChartBarIcon,
      title: 'Admin Dashboard',
      description: 'Comprehensive fleet management tools',
    },
  ];

  const gpsBenefits = [
    {
      icon: TruckIcon,
      title: 'Automated GPS',
      description: 'Eliminate manual tracking processes',
    },
    {
      icon: BellIcon,
      title: 'Parent Communication',
      description: 'Instant alerts for bus arrivals',
    },
    {
      icon: MapPinIcon,
      title: 'Real-time Tracking',
      description: 'Know exactly where students are',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enhanced Safety',
      description: 'Ensure student security at all times',
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden animate-on-scroll"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: ACCENT_COLOR }}
      ></div>
      <div
        className="absolute bottom-0 right-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
        style={{ backgroundColor: PRIMARY_COLOR }}
      ></div>

      <div className="container relative z-10 flex flex-col justify-center flex-grow px-4 mx-auto md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: ACCENT_COLOR, opacity: 0.2 }}
              ></div>
              <div
                className="relative p-3 rounded-full"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            GPS Transportation Management System
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Revolutionize your school transportation with our cutting-edge GPS
            tracking technology
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Interactive Image Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] w-full h-[440px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
              <Image
                src="/school_bus_gps_tracking_black_people.png"
                alt="GPS Transportation Management System Map View"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
                unoptimized
              />

              {/* Floating Elements */}
              <div className="absolute px-3 py-2 rounded-lg shadow-lg top-4 right-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 rounded-full animate-pulse"
                    style={{ backgroundColor: '#10b981' }}
                  ></div>
                  <span className="text-sm font-medium text-gray-800">
                    Live Tracking
                  </span>
                </div>
              </div>

              <div className="absolute px-3 py-2 rounded-lg shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <MapPinIcon
                    className="w-4 h-4 mr-2"
                    style={{ color: ACCENT_COLOR }}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    12 Buses Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Features & Benefits */}
          <div className="flex flex-col justify-center">
            {/* Tab Navigation */}
            <div className="flex p-1 mb-8 bg-gray-100 rounded-xl">
              <button
                onClick={() => setActiveTab('features')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  activeTab === 'features'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  activeTab === 'benefits'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Benefits
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-3">
              {activeTab === 'features'
                ? gpsFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredFeature === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredFeature === index ? ACCENT_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredFeature === index ? '#f0f9ff' : 'white',
                      }}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: ACCENT_COLOR }}
                        >
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : gpsBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredFeature === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredFeature === index ? PRIMARY_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredFeature === index ? '#f0f4f8' : 'white',
                      }}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Online Fee Payment Gateway Section
const OnlinePaymentSection = () => {
  const [paymentTab, setPaymentTab] = useState<'features' | 'benefits'>(
    'features',
  );
  const [hoveredPayment, setHoveredPayment] = useState<number | null>(null);

  const paymentFeatures = [
    {
      icon: LockClosedIcon,
      title: 'Secure Transactions',
      description: 'Ensuring client personal information is secured',
    },
    {
      icon: CreditCardIcon,
      title: 'Multiple Payment Options',
      description: 'Supports Credit Card, Debit Card, Wallets, and Net Banking',
    },
    {
      icon: CheckCircleIcon,
      title: 'Certified Gateway',
      description: 'Uses certified gateway with global security benchmarks',
    },
    {
      icon: ArrowPathIcon,
      title: 'Automatic Transfer',
      description: 'Automatic transfer to your bank account',
    },
  ];

  const paymentBenefits = [
    {
      icon: BanknotesIcon,
      title: 'Split Payments',
      description: 'Split payments across multiple bank accounts',
    },
    {
      icon: ClockIcon,
      title: 'Real-time Processing',
      description: 'Real-time transactions and payments',
    },
    {
      icon: CreditCardIcon,
      title: 'Time & Money Saving',
      description: 'Spare time and money required for connecting physically',
    },
    {
      icon: ChartBarIcon,
      title: 'Daily Reports',
      description: 'Get daily collection reports',
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden animate-on-scroll"
      style={{ backgroundColor: '#f0f4f8' }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: ACCENT_COLOR }}
      ></div>
      <div
        className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
        style={{ backgroundColor: PRIMARY_COLOR }}
      ></div>

      <div className="container relative z-10 flex flex-col justify-center flex-grow px-4 mx-auto md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: ACCENT_COLOR, opacity: 0.2 }}
              ></div>
              <div
                className="relative p-3 rounded-full"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <CreditCardIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Online Fee Payment Gateway
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Simple & Secure gateway tool that instantly enable your smartphone
            to pay the payment at your ease
          </p>
        </div>

        {/* Main Content - IMAGE RIGHT, FEATURES/BENEFITS LEFT */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Interactive Features & Benefits */}
          <div className="flex flex-col justify-center">
            {/* Tab Navigation */}
            <div className="flex p-1 mb-8 bg-gray-100 rounded-xl">
              <button
                onClick={() => setPaymentTab('features')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  paymentTab === 'features'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setPaymentTab('benefits')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  paymentTab === 'benefits'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Benefits
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-3">
              {paymentTab === 'features'
                ? paymentFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredPayment === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredPayment === index ? ACCENT_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredPayment === index ? '#f0f9ff' : 'white',
                      }}
                      onMouseEnter={() => setHoveredPayment(index)}
                      onMouseLeave={() => setHoveredPayment(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: ACCENT_COLOR }}
                        >
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : paymentBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredPayment === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredPayment === index ? PRIMARY_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredPayment === index ? '#f0f4f8' : 'white',
                      }}
                      onMouseEnter={() => setHoveredPayment(index)}
                      onMouseLeave={() => setHoveredPayment(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {/* Right Side - Interactive Image Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] w-full h-[440px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
              <Image
                src="/secure_online_fee_payment_black_people.png"
                alt="Online Fee Payment Gateway"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
                unoptimized
              />

              {/* Floating Elements */}
              <div className="absolute px-3 py-2 rounded-lg shadow-lg top-4 right-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 rounded-full animate-pulse"
                    style={{ backgroundColor: '#10b981' }}
                  ></div>
                  <span className="text-sm font-medium text-gray-800">
                    Secure Payment
                  </span>
                </div>
              </div>

              <div className="absolute px-3 py-2 rounded-lg shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <CreditCardIcon
                    className="w-4 h-4 mr-2"
                    style={{ color: ACCENT_COLOR }}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    Multiple Options
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bulk SMS Gateway Integration Section
const BulkSMSSection = () => {
  const [smsTab, setSmsTab] = useState<'features' | 'benefits'>('features');
  const [hoveredSMS, setHoveredSMS] = useState<number | null>(null);

  const smsFeatures = [
    {
      icon: DocumentTextIcon,
      title: 'Message Templates',
      description: 'Can be used as per institute convenience message',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Custom Messages',
      description: 'Can be made according to necessities',
    },
    {
      icon: CalendarIcon,
      title: 'Schedule Message',
      description:
        'Can be a frame to send automatically without any manual interfere',
    },
    {
      icon: BellIcon,
      title: 'Absent SMS',
      description: 'With the single one click send absent SMS to the parents',
    },
    {
      icon: CakeIcon,
      title: 'Birthday SMS',
      description: 'Can be sent to parent wishing their child a happy birthday',
    },
    {
      icon: ReceiptPercentIcon,
      title: 'Fee Transaction Details',
      description:
        'Parents can receive details information of fee transactions like dues & paid',
    },
    {
      icon: DocumentTextIcon,
      title: 'Exam Notifications',
      description:
        'Notifications of scheduled exams for the student can be sent to parents',
    },
  ];

  const smsBenefits = [
    {
      icon: UserGroupIcon,
      title: 'Bridges Communication Gap',
      description:
        'Bridges the gap between the higher authorities and parents by frequent communication',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'One-way Communication',
      description:
        'This will be the one-way communication channel, so the institution will not receive any unwanted SMS',
    },
    {
      icon: LockClosedIcon,
      title: 'Privacy & Branding',
      description:
        'Privacy can be maintained and message branding can be done, the SMS number will not reflect the sender ID',
    },
    {
      icon: ClockIcon,
      title: 'Saves Time & Energy',
      description: 'Saves time and energy and reduces administrative work',
    },
    {
      icon: BanknotesIcon,
      title: 'Easy Refill',
      description: 'Easy to refill the SMS balance as and when you need to',
    },
  ];

  return (
    <section
      className="relative flex flex-col justify-center min-h-screen py-20 overflow-hidden animate-on-scroll"
      style={{ backgroundColor: '#f8fafc' }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: ACCENT_COLOR }}
      ></div>
      <div
        className="absolute bottom-0 right-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
        style={{ backgroundColor: PRIMARY_COLOR }}
      ></div>

      <div className="container relative z-10 flex flex-col justify-center flex-grow px-4 mx-auto md:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ backgroundColor: ACCENT_COLOR, opacity: 0.2 }}
              ></div>
              <div
                className="relative p-3 rounded-full"
                style={{ backgroundColor: ACCENT_COLOR }}
              >
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Bulk SMS Gateway Integration
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            For every institution, one of the drawbacks is the lack of proper
            communication. Our plugin of communication keeps the parent updated
            about their child on a daily basis.
          </p>
        </div>

        {/* Main Content - IMAGE LEFT, FEATURES/BENEFITS RIGHT */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Interactive Image Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] w-full h-[440px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600/20 to-cyan-500/20"></div>
              <Image
                src="/school_bulk_sms_communication_black_people.png"
                alt="Bulk SMS Gateway Integration"
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
                unoptimized
              />

              {/* Floating Elements */}
              <div className="absolute px-3 py-2 rounded-lg shadow-lg top-4 right-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 mr-2 rounded-full animate-pulse"
                    style={{ backgroundColor: '#10b981' }}
                  ></div>
                  <span className="text-sm font-medium text-gray-800">
                    Instant Delivery
                  </span>
                </div>
              </div>

              <div className="absolute px-3 py-2 rounded-lg shadow-lg bottom-4 left-4 bg-white/90 backdrop-blur-md">
                <div className="flex items-center">
                  <ChatBubbleLeftRightIcon
                    className="w-4 h-4 mr-2"
                    style={{ color: ACCENT_COLOR }}
                  />
                  <span className="text-sm font-medium text-gray-800">
                    1000+ Messages
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Features & Benefits */}
          <div className="flex flex-col justify-center">
            {/* Tab Navigation */}
            <div className="flex p-1 mb-8 bg-gray-100 rounded-xl">
              <button
                onClick={() => setSmsTab('features')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  smsTab === 'features'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setSmsTab('benefits')}
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                  smsTab === 'benefits'
                    ? 'bg-white shadow-md text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Benefits
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {smsTab === 'features'
                ? smsFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredSMS === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredSMS === index ? ACCENT_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredSMS === index ? '#f0f9ff' : 'white',
                      }}
                      onMouseEnter={() => setHoveredSMS(index)}
                      onMouseLeave={() => setHoveredSMS(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: ACCENT_COLOR }}
                        >
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : smsBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredSMS === index
                          ? 'shadow-lg transform translate-x-2'
                          : 'shadow-sm'
                      }`}
                      style={{
                        borderColor:
                          hoveredSMS === index ? PRIMARY_COLOR : '#e5e7eb',
                        backgroundColor:
                          hoveredSMS === index ? '#f0f4f8' : 'white',
                      }}
                      onMouseEnter={() => setHoveredSMS(index)}
                      onMouseLeave={() => setHoveredSMS(null)}
                    >
                      <div className="flex items-start">
                        <div
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 rounded-lg"
                          style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                          <benefit.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Unified CTA Section for all integrations
const UnifiedCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${ACCENT_COLOR} 100%)`,
        }}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl bg-white/10"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-20 blur-3xl bg-white/10"></div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="mb-6 text-4xl font-extrabold text-white md:text-5xl">
            Transform Your Institution Today
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl text-white/90">
            Experience the power of seamless integration with our comprehensive
            suite of educational management tools
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Smart Tracking
              </h3>
              <p className="text-sm text-white/80">
                Real-time GPS monitoring for complete safety
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                <CreditCardIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Secure Payments
              </h3>
              <p className="text-sm text-white/80">
                Effortless fee collection with multiple options
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                Instant Communication
              </h3>
              <p className="text-sm text-white/80">
                Stay connected with parents and students
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105">
              Get Started Now
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full hover:bg-white hover:text-blue-900">
              Schedule a Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 mt-12 border-t border-white/20">
            <p className="mb-4 text-white">
              /70 text-smTrusted by leading educational institutions
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-sm text-white/60">500+ Schools</div>
              <div className="text-sm text-white/60">100K+ Students</div>
              <div className="text-sm text-white/60">99.9% Uptime</div>
              <div className="text-sm text-white/60">24/7 Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export all components
export {
  GPSTransportationSection,
  OnlinePaymentSection,
  BulkSMSSection,
  UnifiedCTASection,
};

