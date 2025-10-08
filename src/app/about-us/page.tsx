'use client';

import {
  WrenchScrewdriverIcon, // New Icon for Service/IT Focus
  ShieldCheckIcon, // New Icon for Security/Support
  AcademicCapIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';
import Footer from '../components/Footer'; // Assuming this exists
import Head from 'next/head'; // Assuming you use this for SEO meta tags

// --- CONSTANTS for consistent styling ---
const PRIMARY_COLOR = '#00204f';
const ACCENT_COLOR = '#2DD4BF';
const SECONDARY_ACCENT = '#ec4899';
const TERTIARY_ACCENT = '#8b5cf6';
const QUATERNARY_ACCENT = '#f59e0b';

// --- START: Sleek Service Philosophy Component (Adapted from Vision/Mission) ---
const SleekServicePhilosophy = () => (
  <section className="flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="grid w-full max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
      {/* Consulting Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.16)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_12px_48px_0_rgba(31,38,135,0.25)] group">
        <div className="absolute w-40 h-40 rounded-full -top-10 -right-10" style={{ background: `linear-gradient(to br, ${ACCENT_COLOR}/20, ${ACCENT_COLOR}/5)`, filter: 'blur(3rem)', zIndex: 0 }} />
        <div className="relative z-10 flex flex-col items-center p-10">
          {/* Consulting Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-500 shadow-lg rounded-2xl" style={{ background: `linear-gradient(to br, ${ACCENT_COLOR}/20, ${ACCENT_COLOR}/10)` }}>
            <WrenchScrewdriverIcon className="w-8 h-8" style={{ color: ACCENT_COLOR }} />
          </div>
          <h3 className="mb-4 text-lg font-bold tracking-wide" style={{ color: PRIMARY_COLOR }}>
            IT Consulting
          </h3>
          <p className="text-sm font-medium leading-relaxed text-center text-gray-700">
            Our experts assess your school's unique technological landscape, designing bespoke IT solutions and digital transformation roadmaps to maximize efficiency and pedagogical impact.
          </p>
        </div>
      </div>

      {/* Support Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(236,72,153,0.14)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_12px_48px_0_rgba(236,72,153,0.22)] group">
        <div className="absolute rounded-full -bottom-12 -left-12 w-44 h-44" style={{ background: `linear-gradient(to tr, ${SECONDARY_ACCENT}/15, ${SECONDARY_ACCENT}/5)`, filter: 'blur(3rem)', zIndex: 0 }} />
        <div className="relative z-10 flex flex-col items-center p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-all duration-500 shadow-lg rounded-2xl" style={{ background: `linear-gradient(to br, ${SECONDARY_ACCENT}/20, ${SECONDARY_ACCENT}/10)` }}>
            <ShieldCheckIcon className="w-8 h-8" style={{ color: SECONDARY_ACCENT }} />
          </div>
          <h3 className="mb-4 text-lg font-bold tracking-wide" style={{ color: PRIMARY_COLOR }}>
            Dedicated Support
          </h3>
          <p className="text-sm font-medium leading-relaxed text-center text-gray-700">
            We provide comprehensive, ongoing technical support and maintenance for all hardware and software deployments, ensuring minimal downtime and maximum operational stability for your institution.
          </p>
        </div>
      </div>
    </div>
  </section>
);
// --- END: Sleek Service Philosophy Component ---

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Our Services - IT, Consulting & Support | Njere School ERP</title>
        <meta
          name="description"
          content="Njere offers comprehensive services including IT consulting, hardware supply, software integration, and dedicated technical support for educational institutions."
        />
      </Head>

      <main>
        {/* HERO SECTION - Consistent with About page */}
        <section
          className="relative pb-24 overflow-hidden text-white shadow-xl"
          style={{
            backgroundImage: `url('/services-hero-bg.jpg')`, // Use a different hero image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: PRIMARY_COLOR,
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: `${PRIMARY_COLOR}/50` }}></div>
          {/* Font size md:text-3xl consistent with About page */}
          <div className="container relative z-10 px-6 mx-auto text-center pt-36">
            <h1 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
              Our Services
            </h1>
            <p className="text-lg font-medium opacity-90">IT Solutions & Expert Consulting for Education</p>
          </div>
        </section>

        {/* SERVICE OVERVIEW AND STATS - Consistent with About page */}
        <section className="bg-white py-14">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="flex justify-center mb-10">
              {/* SVG Separator - Consistent with About page */}
              <svg
                width="60"
                height="12"
                viewBox="0 0 60 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C15 0 15 12 30 6C45 0 45 12 60 6"
                  stroke={ACCENT_COLOR}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Font size sm:text-base consistent with About page */}
            <p className="max-w-4xl mx-auto mb-10 text-sm md:text-base text-center text-[#00204f] leading-relaxed">
              Njere offers a complete suite of technology services designed to support and accelerate digital transformation in schools. From strategic **IT consulting** and the **supply of cutting-edge hardware** to bespoke software integration and **unwavering technical support**, we provide a holistic approach to ensure your institution is equipped to thrive in the modern educational landscape. Our mission is to simplify complex operations and empower educators through reliable technology.
            </p>

            {/* Stats Grid - Consistent with About page */}
            <div className="grid grid-cols-1 gap-8 py-10 border-t border-b border-gray-200 md:grid-cols-3">
              <div className="p-4 text-center">
                <p className="mb-2 text-2xl font-bold md:text-2xl" style={{ color: PRIMARY_COLOR }}>
                  10+
                </p>
                <p className="text-xs md:text-sm" style={{ color: ACCENT_COLOR }}>
                  Years in Ed-Tech
                </p>
              </div>
              <div className="p-4 text-center border-l border-r border-gray-200">
                <p className="mb-2 text-2xl font-bold md:text-2xl" style={{ color: PRIMARY_COLOR }}>
                  100%
                </p>
                <p className="text-xs md:text-sm" style={{ color: ACCENT_COLOR }}>
                  Success Rate
                </p>
              </div>
              <div className="p-4 text-center">
                <p className="mb-2 text-2xl font-bold md:text-2xl" style={{ color: PRIMARY_COLOR }}>
                  24/7
                </p>
                <p className="text-xs md:text-sm" style={{ color: ACCENT_COLOR }}>
                  Expert Support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO/CASE STUDY SECTION (Adapted from Video Intro) */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center w-full max-w-4xl md:items-start">
                <div className="relative w-full overflow-visible shadow-2xl rounded-2xl">
                  {/* Image/Video Placeholder */}
                  <img
                    src="/service-consulting-session.jpg" // Different image
                    alt="An IT consultant presenting to school administrators"
                    className="object-cover w-full h-96 rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-[-80px] z-20">
                    <div className="flex items-center px-5 py-3 text-white border-4 border-white shadow-xl rounded-xl" style={{ backgroundColor: PRIMARY_COLOR }}>
                      <div className="flex items-center justify-center w-10 h-10 mr-3 bg-white rounded-full">
                        {/* Custom Icon for success */}
                        <AcademicCapIcon className="w-6 h-6" style={{ color: ACCENT_COLOR }} />
                      </div>
                      <span className="text-base font-bold">Proven Strategy</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:absolute md:top-1/2 md:right-[-140px] md:translate-y-[-50%] md:w-auto -mt-8 md:mt-0 z-20">
                  <div className="w-64 p-6 text-center bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl md:p-8 md:w-80 animate-[float_3s_ease-in-out_infinite]">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full shadow-lg cursor-default" style={{ backgroundColor: SECONDARY_ACCENT }}>
                      {/* Chart Icon */}
                      <ChartBarIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold md:text-lg" style={{ color: PRIMARY_COLOR }}>
                      Impact Driven IT
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                      We focus on tangible results: increased operational efficiency and improved student outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLEEK SERVICE PHILOSOPHY SECTION */}
        <SleekServicePhilosophy />

        {/* SERVICE CATEGORIES SECTION (Adapted from Project Overview) */}
        <section className="relative px-4 py-20 overflow-hidden bg-white md:py-32">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Side: Service Details Content */}
              <div className="text-gray-800 lg:pr-10">
                <p className="mb-3 text-base font-semibold" style={{ color: ACCENT_COLOR }}>
                  Service Categories —
                </p>
                {/* Font size lg:text-2xl consistent with About page */}
                <h2 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-2xl" style={{ color: PRIMARY_COLOR }}>
                  A Unified Approach to School Technology
                </h2>
                <p className="mb-8 text-sm text-gray-600 md:text-base">
                  We don't just sell products; we implement comprehensive solutions. Our strategy integrates hardware, software, and expertise to create a seamless digital ecosystem. This ensures that every component—from the latest tablets to the ERP modules—works together efficiently, driving better academic and administrative results.
                </p>
                {/* Detailed Service Cards */}
                <div className="space-y-4">
                  <div className="p-5 rounded-lg shadow-sm" style={{ backgroundColor: `${ACCENT_COLOR}/10` }}>
                    <p className="text-sm font-bold" style={{ color: PRIMARY_COLOR }}>
                      1. Hardware Provisioning & Setup
                    </p>
                    <p className="text-xs text-gray-600">
                      Sourcing and deploying devices (laptops, servers, biometrics) optimized for the education environment.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg shadow-sm" style={{ backgroundColor: `${SECONDARY_ACCENT}/10` }}>
                    <p className="text-sm font-bold" style={{ color: PRIMARY_COLOR }}>
                      2. Software Integration & Training
                    </p>
                    <p className="text-xs text-gray-600">
                      Seamless integration of Njere ERP with existing systems and thorough staff training.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg shadow-sm" style={{ backgroundColor: `${TERTIARY_ACCENT}/10` }}>
                    <p className="text-sm font-bold" style={{ color: PRIMARY_COLOR }}>
                      3. Long-Term Maintenance & SLA
                    </p>
                    <p className="text-xs text-gray-600">
                      Guaranteed service level agreements (SLAs) for continuous monitoring and rapid incident resolution.
                    </p>
                  </div>
                </div>
              </div>
              {/* Right Side: Overlapping Images - Consistent with About page */}
              <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:mx-0 mt-10 lg:mt-0 order-first lg:order-last">
                <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                  <img
                    src="/IT-setup-1.jpg" // Image 1
                    alt="IT professional setting up server equipment"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-[45%] left-[35%] w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                  <img
                    src="/IT-setup-2.jpg" // Image 2
                    alt="Network diagram on a tablet"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-[20%] left-[73%] w-[35%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                  <img
                    src="/IT-setup-3.jpg" // Image 3
                    alt="Biometric device in use at a school entrance"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES SECTION (Adapted from About page, focusing on service value) */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="mb-16 text-center">
              {/* Font size md:text-3xl consistent with About page */}
              <h2 className="mb-4 text-2xl font-bold md:text-3xl" style={{ color: PRIMARY_COLOR }}>
                Why Choose Njere Services?
              </h2>
              {/* Font size md:text-base consistent with About page */}
              <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                Our service model is built around educational requirements, ensuring every solution directly contributes to better learning and administration.
              </p>
            </div>

            {/* Grid of Features/Services */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {/* Hardware Supply Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2DD4BF] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-white rounded-xl" style={{ background: `linear-gradient(to br, ${ACCENT_COLOR}, ${PRIMARY_COLOR})` }}>
                    <WrenchScrewdriverIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold" style={{ color: PRIMARY_COLOR }}>
                    Specialized Ed-Tech Hardware
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We supply robust, education-grade laptops, interactive boards, and biometric attendance systems, all pre-configured for seamless integration with the Njere ERP environment.
                  </p>
                </div>
              </div>

              {/* Data Security & Compliance Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec4899] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-white rounded-xl" style={{ background: `linear-gradient(to br, ${SECONDARY_ACCENT}, ${PRIMARY_COLOR})` }}>
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold" style={{ color: PRIMARY_COLOR }}>
                    Data Security and Compliance
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Our consulting includes strict security audits and deployment protocols to ensure your school's data is protected and compliant with educational privacy standards.
                  </p>
                </div>
              </div>

              {/* Training and Adoption Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-white rounded-xl" style={{ background: `linear-gradient(to br, ${TERTIARY_ACCENT}, ${PRIMARY_COLOR})` }}>
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold" style={{ color: PRIMARY_COLOR }}>
                    Comprehensive Staff Training
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We ensure high user adoption with structured, role-specific training for administrators, teachers, and IT staff, maximizing your technology investment.
                  </p>
                </div>
              </div>

              {/* Strategic Roadmap Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f59e0b] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-white rounded-xl" style={{ background: `linear-gradient(to br, ${QUATERNARY_ACCENT}, ${PRIMARY_COLOR})` }}>
                    <ChartBarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold" style={{ color: PRIMARY_COLOR }}>
                    Strategic Digital Roadmap
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Beyond initial setup, we provide ongoing strategic guidance to help your school continually evolve its technology use to meet future educational challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Tailwind animation keyframes for floating effect */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>

      <Footer />
    </>
  );
};

export default ServicesPage;