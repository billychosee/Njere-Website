'use client';

import {
  AcademicCapIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  UsersIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';
import Footer from '../components/Footer';
import Head from 'next/head';

// --- START: Sleek Vision & Mission Component ---
const SleekVisionMission = () => (
  <section className="flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-gray-100">
    <div className="grid w-full max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-2">
      {/* Vision Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.16)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_12px_48px_0_rgba(31,38,135,0.25)] group">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/5 blur-3xl z-0" />
        <div className="relative z-10 flex flex-col items-center p-10">
          {/* Vision Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/10 mb-6 shadow-lg group-hover:shadow-xl group-hover:from-[#2DD4BF]/30 group-hover:to-[#2DD4BF]/15 transition-all duration-500">
            <GlobeAltIcon className="w-8 h-8 text-[#2DD4BF]" />
          </div>
          <h3 className="mb-4 text-lg font-bold text-[#00204f] tracking-wide">
            Vision
          </h3>
          <p className="text-sm font-medium leading-relaxed text-center text-gray-700">
            To be the leading provider of intelligent and intuitive ERP
            solutions for educational institutions worldwide. We aspire to
            revolutionize the education industry by leveraging technology to
            simplify complex operations and enable seamless information flow,
            fostering efficiency, collaboration, and data-driven decision
            making.
          </p>
        </div>
      </div>

      {/* Mission Card */}
      <div className="relative overflow-hidden rounded-3xl bg-white/60 backdrop-blur-lg border border-white/30 shadow-[0_8px_32px_0_rgba(236,72,153,0.14)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_12px_48px_0_rgba(236,72,153,0.22)] group">
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-gradient-to-tr from-[#ec4899]/15 to-[#ec4899]/5 blur-3xl z-0" />
        <div className="relative z-10 flex flex-col items-center p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/10 mb-6 shadow-lg group-hover:shadow-xl group-hover:from-[#ec4899]/30 group-hover:to-[#ec4899]/15 transition-all duration-500">
            {/* Custom SVG for Mission/Time */}
            <svg width="32" height="32" fill="none" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="14"
                stroke="#ec4899"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M18 8v10l7 4"
                stroke="#ec4899"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="18" cy="18" r="2" fill="#ec4899" />
            </svg>
          </div>
          <h3 className="mb-4 text-lg font-bold text-[#00204f] tracking-wide">
            Mission
          </h3>
          <p className="text-sm font-medium leading-relaxed text-center text-gray-700">
            To empower educational institutions with innovative and
            comprehensive ERP solutions tailored to their unique needs. We are
            committed to delivering cutting-edge technology that drives student
            achievement, promotes excellence, enhances academic resilience, and
            enables data-driven decision making throughout our solution.
          </p>
        </div>
      </div>
    </div>
  </section>
);
// --- END: Sleek Vision & Mission Component ---

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Njere School ERP</title>
        <meta
          name="description"
          content="Learn about Njere School ERP's mission, vision, and commitment to educational technology."
        />
      </Head>

      <main>
        {/* HERO SECTION */}
        <section
          className="relative pb-24 overflow-hidden text-white shadow-xl"
          style={{
            backgroundImage: `url('/about-us-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#00204f',
          }}
        >
          <div className="absolute inset-0 bg-[#00204f]/50"></div>{' '}
          {/* Added a semi-transparent overlay */}
          <div className="container relative z-10 px-6 mx-auto text-center pt-36">
            <h1 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
              About us
            </h1>
          </div>
        </section>

        {/* COMPANY OVERVIEW AND STATS */}
        <section className="bg-white py-14">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="flex justify-center mb-10">
              <svg
                width="60"
                height="12"
                viewBox="0 0 60 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6C15 0 15 12 30 6C45 0 45 12 60 6"
                  stroke="#2DD4BF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="max-w-4xl mx-auto mb-10 text-sm md:text-base text-center text-[#00204f] leading-relaxed">
              Njere is deeply committed to driving innovation in education,
              extending beyond software solutions. Our extensive range of
              cutting-edge IT hardware is specifically tailored for schools.
              With a team of dedicated experts, we are passionate about helping
              schools achieve their goals through the transformative power of
              technology. Through our comprehensive consulting services, we
              assess the unique needs of your school, design a customized IT
              solution, and ensure seamless implementation and ongoing support.
              At Njere, we firmly believe that technology is the key to
              unlocking growth and fostering innovation in the educational
              landscape. We are dedicated to providing schools with the software
              solutions and IT hardware they need to thrive in the digital age.
            </p>

            <div className="grid grid-cols-1 gap-8 py-10 border-t border-b border-gray-200 md:grid-cols-3">
              <div className="p-4 text-center">
                <p className="mb-2 text-2xl md:text-2xl font-bold text-[#00204f]">
                  5k+
                </p>
                <p className="text-xs md:text-sm text-[#2DD4BF]">
                  Active Students
                </p>
              </div>
              <div className="p-4 text-center border-l border-r border-gray-200">
                <p className="mb-2 text-2xl md:text-2xl font-bold text-[#00204f]">
                  25+
                </p>
                <p className="text-xs md:text-sm text-[#2DD4BF]">Schools</p>
              </div>
              <div className="p-4 text-center">
                <p className="mb-2 text-2xl md:text-2xl font-bold text-[#00204f]">
                  20+
                </p>
                <p className="text-xs md:text-sm text-[#2DD4BF]">Modules</p>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO INTRO SECTION */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="flex justify-center">
              <div className="relative flex flex-col items-center w-full max-w-4xl md:items-start">
                <div className="relative w-full overflow-visible shadow-2xl rounded-2xl">
                  <img
                    src="/student-with-laptop.jpg"
                    alt="A student smiling while using a laptop in a brightly lit classroom" // Added descriptive alt text
                    className="object-cover w-full h-96 rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-[-80px] z-20">
                    <div className="flex items-center bg-[#00204f] text-white rounded-xl px-5 py-3 shadow-xl border-4 border-white">
                      <div className="flex items-center justify-center w-10 h-10 mr-3 bg-white rounded-full">
                        {/* Star Icon for count */}
                        <svg
                          className="w-5 h-5 text-[#2DD4BF]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14l-6-4.8h7.6L12 2z" />
                        </svg>
                      </div>
                      <span className="text-base font-bold">25+ Schools</span>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:absolute md:top-1/2 md:right-[-140px] md:translate-y-[-50%] md:w-auto -mt-8 md:mt-0 z-20">
                  <div className="w-64 p-6 text-center bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl md:p-8 md:w-80 animate-[float_3s_ease-in-out_infinite]">
                    <button className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2DD4BF] mb-4 mx-auto shadow-lg hover:bg-[#26c0a9] transition-colors cursor-pointer">
                      {/* Play Icon */}
                      <svg
                        className="ml-1 text-white w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <polygon points="9.5,7.5 9.5,16.5 16.5,12" />
                      </svg>
                    </button>
                    <h3 className="text-base md:text-lg font-semibold text-[#00204f] mb-2">
                      Intro Njere Video
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-600 md:text-sm">
                      See how Njere can transform your school! Watch the video
                      now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLEEK VISION & MISSION SECTION */}
        <SleekVisionMission />

        {/* PROJECT OVERVIEW SECTION */}
        <section className="relative px-4 py-20 overflow-hidden bg-white md:py-32">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Side: Overlapping Images */}
              <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:mx-0">
                <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                  <img
                    src="/teacher-in-classroom.jpg"
                    alt="Teacher assisting students in a classroom"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-[45%] left-[35%] w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                  <img
                    src="/student-with-laptop.jpg"
                    alt="Student focused on a laptop screen"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-[20%] left-[73%] w-[35%] h-[45%] rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-white">
                  <img
                    src="/happy-students.jpg"
                    alt="Three happy students looking at a tablet"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              {/* Right Side: Project Overview Content */}
              <div className="mt-20 text-gray-800 lg:pl-10 lg:mt-0">
                <p className="text-base font-semibold text-[#2DD4BF] mb-3">
                  Project —
                </p>
                <h2 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-2xl">
                  Project Overview
                </h2>
                <p className="mb-8 text-sm text-gray-600 md:text-base">
                  In the fast-paced realm of modern education, institutions that
                  overlook the power of digital transformation run the risk of
                  lagging behind their peers and limiting their growth
                  potential. With the objective of revolutionizing operational
                  efficiency and promoting excellence, the implementation of an
                  innovative School ERP Solution endeavors to bring about a
                  transformative change at Sacred Heart College, fostering
                  growth and success in the dynamic digital landscape. The
                  project encompasses a comprehensive digitization strategy that
                  encompasses the following key areas:
                </p>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <div className="p-5 text-center rounded-lg shadow-sm bg-gray-50">
                    <p className="text-2xl font-bold text-[#00204f]">5k+</p>
                    <p className="text-xs text-gray-500 md:text-sm">
                      Active Students
                    </p>
                  </div>
                  <div className="p-5 text-center rounded-lg shadow-sm bg-gray-50">
                    <p className="text-2xl font-bold text-[#00204f]">25+</p>
                    <p className="text-xs text-gray-500 md:text-sm">Schools</p>
                  </div>
                  <div className="p-5 text-center rounded-lg shadow-sm bg-gray-50">
                    <p className="text-2xl font-bold text-[#00204f]">20+</p>
                    <p className="text-xs text-gray-500 md:text-sm">Modules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY FEATURES SECTION */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-6xl px-6 mx-auto">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold text-[#00204f]">
                Key Features
              </h2>
              <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                Discover how our comprehensive ERP solution transforms
                educational institutions through innovative technology
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {/* Business Process Automation Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2DD4BF] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/10 text-[#2DD4BF]">
                    <RocketLaunchIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-[#00204f]">
                    Business Process Automation
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Revolutionize administrative tasks such as student
                    admissions, attendance tracking, and fee management.
                    Streamlined processes and automated workflows ensure
                    accuracy, reduce paperwork, and enable efficient management.
                  </p>
                </div>
              </div>

              {/* Academic Excellence Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ec4899] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#ec4899]/20 to-[#ec4899]/10 text-[#ec4899]">
                    <AcademicCapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-[#00204f]">
                    Academic Excellence
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Enhance the academic experience with a centralized platform
                    for curriculum management, lesson planning, and grade
                    tracking. Teachers get tools for effective lesson delivery
                    and assessment, while students and parents benefit from
                    real-time progress tracking.
                  </p>
                </div>
              </div>

              {/* Data Management & Analytics Card */}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#8b5cf6]/20 to-[#8b5cf6]/10 text-[#8b5cf6]">
                    <ChartBarIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-[#00204f]">
                    Data Management & Analytics
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Implement a robust data management system ensuring data
                    integrity, accessibility, and security. Leverage analytics
                    tools to extract valuable insights into student performance,
                    resource allocation, and institutional effectiveness for
                    data-driven decision-making.
                  </p>
                </div>
              </div>

              {/* User Experience Optimization Card - RENAMED FOR CLARITY IN CONTENT*/}
              <div className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f59e0b] to-[#00204f]"></div>
                <div className="flex flex-col items-center p-8 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/10 text-[#f59e0b]">
                    <UsersIcon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-[#00204f]">
                    Stakeholder Collaboration
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Foster seamless communication and collaboration among
                    stakeholders including teachers, parents, and students.
                    Features like messaging, announcements, and discussion
                    forums facilitate effective communication, information
                    sharing, and community building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default About;
