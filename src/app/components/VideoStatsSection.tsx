import React from 'react';
import { Play } from 'lucide-react';

const VideoStatsSection = () => {
  const stats = [
    { number: '5K+', label: 'Active Students' },
    { number: '25+', label: 'Schools' },
    { number: '20+', label: 'Modules' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#0d2d4f] to-[#1a3a5c] py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute border-2 border-white rounded-full top-1/4 left-1/4 w-96 h-96"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border-2 border-white rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top Section - Video and CTA */}
        <div className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-2">
          {/* Video Card */}
          <div className="relative group">
            <div className="relative overflow-hidden bg-gray-200 shadow-2xl rounded-3xl aspect-video">
              {/* Placeholder for video/image */}
              <img
                src="/api/placeholder/600/400"
                alt="Video thumbnail"
                className="object-cover w-full h-full"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center justify-center w-24 h-24 transition-all duration-300 rounded-full shadow-2xl bg-cyan-500 hover:bg-cyan-600 hover:scale-110 group">
                  <Play className="w-10 h-10 ml-1 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex items-center">
            <div className="relative z-10 p-10 bg-white shadow-2xl rounded-3xl">
              {/* Decorative Wave */}
              <div className="relative z-0 mb-6">
                <svg width="100%" height="40" viewBox="0 0 800 40">
                  <path
                    d="M0 20 Q100 0 200 20 T400 20 T600 20 T800 20"
                    stroke="#14b8a6"
                    fill="none"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              {/* Heading */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                Committed To
                <br />
                The Best Results!
              </h2>

              {/* Description */}
              <p className="mb-8 text-gray-600">
                See how Njere can transform your school! Watch the video now.
              </p>

              {/* CTA Button */}
              <button className="px-8 py-4 font-semibold tracking-wide text-white uppercase transition-all duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                Join Us Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Statistics Floating Along Wave */}
        <div className="relative mt-12">
          {/* Wave Line */}
          <svg
            className="absolute top-0 left-0 w-full h-16"
            viewBox="0 0 800 40"
            fill="none"
          >
            <path
              d="M0 20 Q100 0 200 20 T400 20 T600 20 T800 20"
              stroke="#14b8a6"
              strokeWidth="3"
            />
          </svg>

          {/* Floating Stats Cards */}
          <div className="relative z-10 flex justify-between max-w-5xl mx-auto -mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative w-40 p-8 text-center transition-transform duration-300 transform shadow-lg bg-white/20 backdrop-blur-md rounded-2xl hover:-translate-y-3"
              >
                <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-cyan-400 md:text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStatsSection;
