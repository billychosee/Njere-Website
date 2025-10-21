import React, { useState, useEffect, useRef } from 'react';
import { Play, X } from 'lucide-react';

const VideoStatsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { number: 10000, label: 'Active Students' },
    { number: 500, label: 'Schools' },
    { number: 25, label: 'Modules' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 16); // 60fps

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(start);
                return newStats;
              });
            }, 16);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num + '+';
  };

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
              {/* Video Thumbnail */}
              <img
                src="https://vumbnail.com/1125449864.jpg"
                alt="Video thumbnail"
                className="object-cover w-full h-full"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center w-24 h-24 transition-all duration-300 rounded-full shadow-2xl bg-cyan-500 hover:bg-cyan-600 hover:scale-110 group"
                >
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
              <a
                href="/contact-us"
                className="inline-block px-8 py-4 font-semibold tracking-wide text-white uppercase transition-all duration-300 rounded-full bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                Join Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Statistics Floating Along Wave */}
        <div ref={statsRef} className="relative mt-12">
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
          <div className="relative z-10 flex flex-wrap justify-center max-w-5xl gap-4 mx-auto -mt-8 md:flex-nowrap md:justify-between">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative w-32 p-6 text-center transition-transform duration-300 transform shadow-lg bg-white/20 backdrop-blur-md rounded-2xl hover:-translate-y-3 md:w-40 md:p-8"
              >
                <div className="text-3xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl">
                  {formatNumber(animatedStats[index])}
                </div>
                <div className="text-sm font-medium text-cyan-400 md:text-lg xl:text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-6xl mx-4 bg-white rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute z-10 p-2 text-white transition-all bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-75"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-video">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1125449864?h=a8e8cd83f7"
                width="100%"
                height="100%"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoStatsSection;

