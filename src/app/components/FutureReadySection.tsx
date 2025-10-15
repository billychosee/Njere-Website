import React from 'react';

const HeroCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#0d2d4f] to-[#13395e] py-20 px-4 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-cyan-500 blur-3xl"></div>
        <div className="absolute bg-blue-500 rounded-full bottom-20 right-10 w-96 h-96 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-white">
            {/* Decorative Wave */}
            <div className="mb-6">
              <svg width="80" height="25" viewBox="0 0 80 25" className="">
                <path
                  d="M 0 12 Q 6 0, 12 12 T 24 12 T 36 12 T 48 12 T 60 12 T 72 12 T 84 12"
                  stroke="#14b8a6"
                  fill="none"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-4xl">
              Is your school ready
              <br />
              for the future?
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-lg text-gray-300 md:text-lg">
              Register for a free demo of our innovative school ERP.
            </p>

            {/* CTA Button */}
            <button className="relative px-10 py-4 overflow-hidden font-semibold tracking-wide text-white uppercase transition-all duration-300 rounded-full group bg-cyan-500 hover:bg-cyan-600 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105">
              <span className="relative z-10">Join Us Now</span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-cyan-400 to-teal-500 group-hover:opacity-100"></div>
            </button>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Main Circle Container */}
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Center Circle Connector */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0a2540] rounded-full z-10 shadow-xl"></div>

              {/* Grid Layout */}
              <div className="grid h-full grid-cols-2 gap-4">
                {/* Top Left - Rectangle */}
                <div className="relative overflow-hidden bg-gray-200 rounded-tl-full shadow-2xl">
                  <img
                    src="/student-with-tablet.jpg"
                    alt="Student with tablet"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Top Right - Rectangle */}
                <div className="relative overflow-hidden bg-gray-200 rounded-tr-full shadow-2xl">
                  <img
                    src="/happy-students.jpg"
                    alt="Happy students"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Bottom Left - Rectangle */}
                <div className="relative overflow-hidden bg-gray-200 rounded-bl-full shadow-2xl">
                  <img
                    src="/teacher-in-classroom.jpg"
                    alt="Teacher in classroom"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Bottom Right - Rectangle */}
                <div className="relative overflow-hidden bg-gray-200 rounded-br-full shadow-2xl">
                  <img
                    src="/student-with-laptop.jpg"
                    alt="Student with laptop"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-cyan-500 blur-xl opacity-60 animate-pulse"></div>
              <div
                className="absolute w-16 h-16 bg-teal-500 rounded-full -bottom-4 -left-4 blur-xl opacity-60 animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCTASection;
