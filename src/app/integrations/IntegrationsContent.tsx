// IntegrationsContent.tsx
'use client';

import Image from 'next/image';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import {
  FingerPrintIcon,
  EyeIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import {
  GPSTransportationSection,
  OnlinePaymentSection,
  BulkSMSSection,
  UnifiedCTASection,
} from './IntegrationSections';

const PRIMARY_COLOR = '#00204f';
const ACCENT_COLOR = '#02ACC3';
const ORANGE_COLOR = '#F59E0B';

import React, { useState } from 'react';

// =======================
// REUSABLE COMPONENTS
// =======================

interface FeatureCardProps {
  icon: React.ElementType<{ className?: string }>;
  title: string;
  color: string;
}

const GlassyFeatureCard: React.FC<FeatureCardProps> = ({
  icon: IconComponent,
  title,
  color,
}) => (
  <div
    className="p-6 text-center transition-all duration-300 rounded-xl shadow-lg
           bg-white/10 backdrop-blur-md border border-white/20
           hover:bg-white/20 hover:shadow-2xl hover:scale-[1.02]"
  >
    <div
      className="inline-flex items-center justify-center mb-4 rounded-full w-14 h-14"
      style={{ backgroundColor: color, color: 'white' }}
    >
      <IconComponent className="w-8 h-8" />
    </div>
    <p className="text-sm font-bold text-white md:text-base">{title}</p>
  </div>
);

interface ChecklistProps {
  items: string[];
  accentColor: string;
}

const SleekChecklist: React.FC<ChecklistProps> = ({ items, accentColor }) => (
  <ul className="space-y-4 text-left">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <svg
          className="flex-shrink-0 w-6 h-6 mt-1 mr-3"
          style={{ color: accentColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="text-lg text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

// =======================
// PAGE COMPONENT
// =======================

const IntegrationsContent = () => {
  const [activeTab, setActiveTab] = useState<'features' | 'benefits'>(
    'features',
  );

  // Add scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    // Note: '.testimonial-card' class is no longer present, but the selector is kept for robustness
    document
      .querySelectorAll('.animate-on-scroll, .testimonial-card')
      .forEach((el) => {
        observer.observe(el);
      });

    return () => {
      document
        .querySelectorAll('.animate-on-scroll, .testimonial-card')
        .forEach((el) => {
          observer.unobserve(el);
        });
    };
  }, []);

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section
          className="relative pb-24 overflow-hidden text-white shadow-xl"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: PRIMARY_COLOR,
          }}
        >
          <div className={`absolute inset-0 bg-[${PRIMARY_COLOR}]/70`}></div>
          <div className="container relative z-10 px-6 mx-auto text-center pt-36">
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Integrations
            </h1>
          </div>
        </section>

        {/* BIOMETRIC ATTENDANCE SECTION */}
        <section className="py-20 bg-white animate-on-scroll">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-16">
              <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
                <h2 className="mb-6 text-xl font-extrabold leading-snug text-gray-900 md:text-2xl">
                  Live Real-time attendance data based on{' '}
                  <span style={{ color: ACCENT_COLOR }}>
                    Fingerprint, Face Recognition, RFID Card
                  </span>{' '}
                  and Walkthrough
                </h2>
                <p className="mb-6 text-base text-gray-600">
                  Educational institutions consider attendance tracking of
                  students and staff as one of their biggest challenges. Even
                  today, many schools rely on old traditional like attendance
                  registers and other manual systems.
                </p>
                <p className="mb-8 text-base text-gray-600">
                  Through Njere's next-generation biometric systems, tracking
                  the attendance of students and staff, record Punch in & Out
                  Time, calculating the aggregate work duration of staff, leave
                  management, etc have become simple, accurate and trustworthy.
                </p>

                {/* NEW BUTTON ADDED HERE */}
                <button
                  onClick={() => window.open('/integrations', '_self')}
                  className="inline-flex items-center px-6 py-3 font-bold text-white transition-all transform rounded-full shadow-lg hover:scale-105"
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  Explore Biometric Solutions
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-[450px] overflow-hidden">
                <div className="absolute w-[450px] h-[450px] bg-gray-100 rounded-full"></div>
                <div className="relative z-20 w-[300px] h-[400px] animate-float">
                  <Image
                    src="/device-3.png"
                    alt="Njere Biometric Attendance Device"
                    layout="fill"
                    objectFit="contain"
                    className="shadow-xl rounded-xl"
                    unoptimized
                  />
                </div>
                <div className="absolute z-10 w-24 h-24 -top-5 left-10 md:left-20 animate-float [animation-delay:1s]">
                  <Image
                    src="/device-1.png"
                    alt="Small Biometric Device 1"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg shadow-md opacity-80"
                    unoptimized
                  />
                </div>
                <div className="absolute z-10 w-20 h-20 -bottom-5 right-10 md:right-20 animate-float [animation-delay:0.5s]">
                  <Image
                    src="/device-2.png"
                    alt="Small Biometric Device 2"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg shadow-md opacity-80"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 z-0 opacity-20">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 250C150 150 350 150 400 250"
                      stroke={ACCENT_COLOR}
                      strokeWidth="2"
                      strokeDasharray="5 5"
                    />
                    <circle cx="100" cy="250" r="5" fill={ACCENT_COLOR} />
                    <circle cx="400" cy="250" r="5" fill={ACCENT_COLOR} />
                    <path
                      d="M250 100L200 200L300 300L250 400"
                      stroke={PRIMARY_COLOR}
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLASSMORPHISM SECTION */}
        <section
          className="relative py-16 overflow-hidden md:py-20 animate-on-scroll"
          style={{
            background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${ACCENT_COLOR} 100%)`,
          }}
        >
          <div className="container relative z-10 px-4 mx-auto overflow-hidden md:px-6">
            <h2 className="mb-12 text-3xl font-extrabold text-center text-white md:text-4xl">
              Key Advantages of Automated Biometric Attendance
            </h2>
            <div className="relative w-full h-64 mb-12 overflow-hidden shadow-2xl rounded-xl">
              <Image
                src="/biometric-banner.jpg"
                alt="Access control barrier and face recognition attendance"
                layout="fill"
                objectFit="cover"
                className="object-center"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-0">
              <GlassyFeatureCard
                icon={FingerPrintIcon}
                title="Automate the Attendance Data Collection"
                color={ORANGE_COLOR}
              />
              <GlassyFeatureCard
                icon={EyeIcon}
                title="Monitor Students Movement Within the Premises"
                color={ACCENT_COLOR}
              />
              <GlassyFeatureCard
                icon={DocumentTextIcon}
                title="Easily Generate Monthly Attendance Report"
                color={PRIMARY_COLOR}
              />
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-black/40"></div>
        </section>

        {/* FEATURES & BENEFITS TABS SECTION */}
        <section className="py-20 bg-gray-50 animate-on-scroll">
          <div className="container flex flex-col items-center justify-between gap-12 px-6 mx-auto lg:flex-row">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center w-full lg:w-1/2 lg:items-start">
              {/* Animated Tabs - LEFT ALIGNED */}
              <div
                className="relative flex p-1 mb-10 rounded-full bg-white/90 border border-[#02ACC3] w-fit"
                style={{ boxShadow: `0 4px 24px -2px ${ACCENT_COLOR}40` }}
              >
                {/* Animated background highlight */}
                <span
                  className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#00204f] to-[#02ACC3] rounded-full shadow-lg transition-all duration-500"
                  style={{
                    transform:
                      activeTab === 'features'
                        ? 'translateX(0%)'
                        : 'translateX(100%)',
                    transition:
                      'transform 0.4s cubic-bezier(.88,-0.04,.27,1.09)',
                  }}
                />
                <button
                  onClick={() => setActiveTab('features')}
                  className={`relative z-10 w-36 px-4 py-2 text-base font-bold transition-all text-center rounded-full
                    ${
                      activeTab === 'features'
                        ? 'text-white'
                        : 'text-[#02ACC3] hover:text-[#00204f]'
                    }`}
                  style={{
                    transition: 'color 0.35s, font-weight 0.35s',
                  }}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('benefits')}
                  className={`relative z-10 w-36 px-4 py-2 text-base font-bold transition-all text-center rounded-full
                    ${
                      activeTab === 'benefits'
                        ? 'text-white'
                        : 'text-[#02ACC3] hover:text-[#00204f]'
                    }`}
                  style={{
                    transition: 'color 0.35s, font-weight 0.35s',
                  }}
                >
                  Benefits
                </button>
              </div>

              {/* ANIMATED CHECKLIST CONTENT */}
              <div className="relative min-h-[240px] w-full">
                <div
                  className={`absolute inset-0 w-full transition-opacity duration-400 ease animated-fade 
                    ${
                      activeTab === 'features'
                        ? 'opacity-100 pointer-events-auto scale-100'
                        : 'opacity-0 pointer-events-none scale-98'
                    }`}
                >
                  {activeTab === 'features' && (
                    <SleekChecklist
                      accentColor={ACCENT_COLOR}
                      items={[
                        "RFID card/Finger Bio-metric's based attendance",
                        'Wireless Attendance machine',
                        'Real-Time attendance tracking for students, staff and teachers',
                        'Hassle free Payroll Calculation',
                        'Reduced Payroll errors',
                        'Instant notifications',
                        'One Time Investment',
                      ]}
                    />
                  )}
                </div>
                <div
                  className={`absolute inset-0 w-full transition-opacity duration-400 ease animated-fade 
                    ${
                      activeTab === 'benefits'
                        ? 'opacity-100 pointer-events-auto scale-100'
                        : 'opacity-0 pointer-events-none scale-98'
                    }`}
                >
                  {activeTab === 'benefits' && (
                    <SleekChecklist
                      accentColor={ACCENT_COLOR}
                      items={[
                        'Improved accountability for staff and students',
                        'Instant and accurate reporting',
                        'Seamless data integration into payroll system',
                        'Enhanced security and attendance verification',
                        'Real-time insights for better decision making',
                        'Reduces administrative workload and costs',
                      ]}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE - FULL WIDTH AND HEIGHT */}
            <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[600px] order-first lg:order-last">
              <Image
                src="/features-benefits.png"
                alt="Njere Features and Benefits"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl"
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* IMPORTED INTEGRATION SECTIONS */}
        <GPSTransportationSection />
        <OnlinePaymentSection />
        <BulkSMSSection />

        {/* UNIFIED CTA SECTION */}
        <UnifiedCTASection />
      </main>
      <Footer />
    </>
  );
};

export default IntegrationsContent;


