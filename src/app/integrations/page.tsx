import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Footer from '../components/Footer';

// Define the site base URL and relevant information variables
const siteUrl = 'https://njere.africa';
const pageTitle =
  'Integrations - Seamlessly Connect Your School Systems | Njere Africa';
const pageDescription =
  'Explore how Njere Africa integrates with existing school management systems, payment gateways, and educational tools to create a unified ecosystem, featuring Biometric Attendance and Real-time School Bus Tracking.';

// Define custom colors for clarity
const PRIMARY_COLOR = '#00204f'; // Your deep blue
const ACCENT_COLOR = '#02ACC3'; // Vibrant teal
const ORANGE_COLOR = '#F59E0B'; // Tailwind amber-500 equivalent

// =======================
// 1. REUSABLE CARD COMPONENTS (UPDATED FOR GLASSPHORPHISM)
// =======================

// Define props structure for FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  color: string; // Color for the icon background
}

/**
 * NEW: Glassy Feature Card Component
 * Uses backdrop-blur for the glass effect over a gradient background.
 */
const GlassyFeatureCard: React.FC<FeatureCardProps> = ({
  icon,
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
      {icon}
    </div>
    {/* Text is white for high contrast against the dark glassy card */}
    <p className="text-sm font-bold text-white md:text-base">{title}</p>
  </div>
);

// Define props structure for IntegrationCard (Kept original style for the bottom section)
interface IntegrationCardProps {
  title: string;
  description: string;
}

/**
 * Reusable component for the Main Integration Partner cards.
 */
const IntegrationCard: React.FC<IntegrationCardProps> = ({
  title,
  description,
}) => (
  <div className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1">
    <h3 className="mb-2 text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
      {title}
    </h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

// =======================
// 2. NEW CHECKLIST COMPONENT (Kept original style as requested)
// =======================

interface ChecklistProps {
  items: string[];
  accentColor: string;
}

/**
 * Renders a sleek list of features with a checkmark icon.
 */
const SleekChecklist: React.FC<ChecklistProps> = ({ items, accentColor }) => (
  <ul className="space-y-4 text-left">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        {/* Checkmark Icon with Accent Color */}
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
        {/* Text Content */}
        <span className="text-lg text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

// =======================
// 3. PAGE-SPECIFIC METADATA
// =======================
export const metadata: Metadata = {
  // Primary Meta Tags
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/integrations`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: `${siteUrl}/integrations`,
  },
};

// =======================
// 4. ICONS (KEPT FOR FEATURECARD USAGE)
// =======================
const GearIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35-.426.426-.677 1.018-.677 1.723s.251 1.297.677 1.723c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-2.572 1.066c-.94.94-2.707 1.173-3.35.35-.426-.426-1.018-.677-1.723-.677s-1.297.251-1.723.677c-.643.823-2.41 1.056-3.35-.35a1.724 1.724 0 00-2.572-1.066c-1.756-.426-1.756-2.924 0-3.35.426-.426.677-1.018.677-1.723s-.251 1.297-.677 1.723c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 002.572-1.066c.94-.94 2.707-1.173 3.35-.35z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);
const MagnifyingGlassIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
  </svg>
);
const ChartIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 8v8m-4-8v8m-4-8v8m8-12H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
    ></path>
  </svg>
);
const RfidIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    ></path>
  </svg>
);
const WirelessIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    ></path>
  </svg>
);
const RealtimeIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);
const MobileIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    ></path>
  </svg>
);
const RouteIcon = (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

// =======================
// 5. INTEGRATIONS PAGE COMPONENT
// =======================
const IntegrationsPage = () => {
  // Data for the School Bus Tracking list
  const trackingFeatures = [
    'School Bus Live Tracking on Standard Map',
    'Parent Mobile App Tracking of School Vehicles',
    'Route Detail & Route Replay for Administration',
    'Administrator Dashboard for Clear Get/Drop Time & Stoppage',
    'Detailed Trip Reports (Speed, Distance, Time, Students)',
    'Driver Efficiency Report (Average/Maximum/Over Speed)',
    'Parent Notification on Mobile App for Pick up & Drop',
    'Availability Management & Compliance',
  ];

  const trackingBenefits = [
    'Automated GPS System for precision',
    'Optimized Routes for fuel and time saving',
    'Enhanced Security and Safety for students',
    'Real-time visibility for administrators',
    'Direct Parent Communication via mobile app',
    'Comprehensive Reporting for better management',
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="integrations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            url: `${siteUrl}/integrations`,
            description: pageDescription,
          }),
        }}
      />

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
          {/* Dark overlay for text readability */}
          <div className={`absolute inset-0 bg-[${PRIMARY_COLOR}]/70`}></div>
          <div className="container relative z-10 px-6 mx-auto text-center pt-36">
            <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
              Integrations
            </h1>
          </div>
        </section>

        {/* ========================================= */}
        {/* BIOMETRIC ATTENDANCE SECTION */}
        {/* ========================================= */}
        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:gap-16">
              {/* Left Content Column */}
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
                <p className="text-base text-gray-600">
                  Through Njere's next-generation biometric systems, tracking
                  the attendance of students and staff, record Punch in & Out
                  Time, calculating the aggregate work duration of staff, leave
                  management, etc have become simple, accurate and trustworthy.
                </p>
              </div>

              {/* Right Image Column - Device Visualization */}
              <div className="relative flex items-center justify-center w-full lg:w-1/2 min-h-[450px]">
                {/* Background Circle */}
                <div className="absolute w-[450px] h-[450px] bg-gray-100 rounded-full"></div>

                {/* Main Device Image */}
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

                {/* Floating Smaller Device 1 */}
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

                {/* Floating Smaller Device 2 */}
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

                {/* Abstract Data Flow Lines (Illustrative) */}
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

        {/* BIOMETRIC FEATURES/BENEFITS */}
        {/* === START: GLASSPHORPHISM SECTION === */}
        <section
          className="relative py-16 overflow-hidden md:py-20"
          style={{
            background: `linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${ACCENT_COLOR} 100%)`,
          }}
        >
          <div className="container relative z-10 px-4 mx-auto md:px-6">
            {/* Top Image Banner - Used as background for the cards */}
            <div className="relative w-full h-64 mb-12 overflow-hidden shadow-2xl rounded-xl">
              <Image
                src="/biometric-banner.jpg" // Placeholder for the combined image_c2abde.jpg
                alt="Access control barrier and face recognition attendance"
                layout="fill"
                objectFit="cover"
                className="object-center"
                unoptimized
              />
            </div>

            {/* Feature Cards Grid - Now using GlassyFeatureCard */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <GlassyFeatureCard
                icon={GearIcon}
                title="Automate the Attendance Data Collection"
                color={ORANGE_COLOR}
              />
              <GlassyFeatureCard
                icon={MagnifyingGlassIcon}
                title="Monitor Students Movement Within the Premises"
                color={ACCENT_COLOR}
              />
              <GlassyFeatureCard
                icon={ChartIcon}
                title="Easily Generate Monthly Attendance Report"
                color={PRIMARY_COLOR}
              />
            </div>
          </div>
          {/* Subtle background overlay to dim the image slightly and enhance glass effect */}
          <div className="absolute inset-0 z-0 bg-black/40"></div>
        </section>
        {/* === END: GLASSPHORPHISM SECTION === */}

        {/* KEY BIOMETRIC FEATURES SECTION */}
        {/* === START: GLASSPHORPHISM SECTION 2 === */}
        <section
          className="relative py-16 overflow-hidden md:py-20"
          style={{
            background: `linear-gradient(45deg, ${PRIMARY_COLOR} 0%, ${ACCENT_COLOR} 100%)`,
          }}
        >
          <div className="container relative z-10 px-4 mx-auto md:px-6">
            <h2 className="mb-12 text-3xl font-extrabold text-center text-white">
              Key Biometric & Access Control Features
            </h2>

            {/* Feature Cards Grid (7 cards from the provided image) */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <GlassyFeatureCard
                icon={RfidIcon}
                title="RFID Card/Fingerprint Biometric Attendance"
                color={ORANGE_COLOR}
              />
              <GlassyFeatureCard
                icon={WirelessIcon}
                title="Wireless Attendance Machines"
                color={PRIMARY_COLOR}
              />
              <GlassyFeatureCard
                icon={RealtimeIcon}
                title="Real-time Attendance Tracking for Students & Staff"
                color={ACCENT_COLOR}
              />
              <GlassyFeatureCard
                icon={GearIcon}
                title="Convenient Payroll Calculation"
                color={ORANGE_COLOR}
              />
              <GlassyFeatureCard
                icon={ChartIcon}
                title="Automated Report Generation"
                color={PRIMARY_COLOR}
              />
              <GlassyFeatureCard
                icon={MobileIcon}
                title="Mobile App Support"
                color={ACCENT_COLOR}
              />
              <GlassyFeatureCard
                icon={RouteIcon}
                title="Multi-location Management"
                color={ORANGE_COLOR}
              />
            </div>

            {/* System Interface Visualization - Using a light layer over the image */}
            <div className="relative mt-16 overflow-hidden shadow-2xl rounded-xl">
              <div className="absolute inset-0 z-10 bg-black/20"></div>
              <Image
                src="https://z-cdn-media.chatglm.cn/files/9a0866b6-c387-4b9a-bac4-fe7fb6a69ca1_Screenshot%202025-10-08%20155812.png?auth_key=1791468130-03a59a37aa1c4eb0a6eab1b5ca570dc7-0-ef28a6ac85939ad916a588dccd84c443"
                alt="Attendance System Interface with Fingerprint, Face Recognition and RFID Options"
                layout="responsive"
                width={1200}
                height={600}
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          {/* Subtle background overlay to dim the image slightly and enhance glass effect */}
          <div className="absolute inset-0 z-0 bg-black/40"></div>
        </section>
        {/* === END: GLASSPHORPHISM SECTION 2 === */}

        {/* ----------------------------------------- */}
        {/* SCHOOL BUS TRACKING (Checklist Style - Back to original white BG) */}
        {/* ----------------------------------------- */}
        <section className="py-16 bg-white md:py-20">
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-4 text-3xl font-extrabold text-center text-gray-900">
              School Bus Tracking: Safety & Operational Efficiency
            </h2>

            <p className="max-w-4xl mx-auto mb-16 text-lg text-center text-gray-600">
              Our GPS tracking system provides comprehensive safety features and
              administrative tools for total transport peace of mind.
            </p>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Column 1: Core Tracking Features */}
              <div
                className="p-8 border-t-4 rounded-lg shadow-xl bg-gray-50"
                style={{ borderColor: PRIMARY_COLOR }}
              >
                <h3 className="mb-8 text-2xl font-bold text-gray-900">
                  Core System Features
                </h3>
                <SleekChecklist
                  items={trackingFeatures}
                  accentColor={ACCENT_COLOR}
                />
              </div>

              {/* Column 2: Key Safety and Management Benefits */}
              <div
                className="p-8 border-t-4 rounded-lg shadow-xl bg-gray-50"
                style={{ borderColor: ACCENT_COLOR }}
              >
                <h3 className="mb-8 text-2xl font-bold text-gray-900">
                  Key Safety & Management Benefits
                </h3>
                <SleekChecklist
                  items={trackingBenefits}
                  accentColor={PRIMARY_COLOR}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------- */}
        {/* MAIN INTEGRATION PARTNERS SECTION */}
        {/* ----------------------------------------- */}
        <section className="py-16 bg-gray-50 md:py-24">
          <div className="container px-4 mx-auto text-center md:px-6">
            <h2 className="mb-6 text-3xl font-extrabold text-gray-900">
              Ready to Connect?
            </h2>
            <p className="max-w-4xl mx-auto mb-10 text-lg text-gray-600">
              We partner with leading technology providers to ensure our
              platform fits perfectly into your existing school ecosystem. See a
              few of our popular integrations below.
            </p>

            {/* Integration Cards (Kept original non-glassy style) */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <IntegrationCard
                title="School Management Systems"
                description="Sync student records, attendance, and grades effortlessly."
              />
              <IntegrationCard
                title="Payment Gateways"
                description="Securely handle school fees and transactions."
              />
              <IntegrationCard
                title="LMS & E-Learning Tools"
                description="Integrate with Google Classroom, Moodle, and more."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IntegrationsPage;
