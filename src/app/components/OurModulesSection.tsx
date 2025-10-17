import React from 'react';
import { User, Building2, Wallet, Monitor } from 'lucide-react';

const ModulesSection = () => {
  const modules = [
    {
      icon: User,
      title: 'Administrative',
      count: '6 Modules',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Building2,
      title: 'Academics',
      count: '8 modules',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Wallet,
      title: 'Finance',
      count: '7 Modules',
      color: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: Monitor,
      title: 'Others',
      count: '8 modules',
      color: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-0">
            <svg width="60" height="20" viewBox="0 0 60 20" className="mx-auto">
              <path
                d="M 0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10"
                stroke="#04baab"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Our Modules
          </h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 gap-6 mb-10 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="relative card-wrapper group">
                {/* SVG Border Animation */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                >
                  <rect
                    className="animated-border"
                    x="1"
                    y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="16"
                    fill="none"
                    stroke="#04baab"
                    strokeWidth="2"
                  />
                </svg>

                {/* Card Content */}
                <div className="relative flex flex-col items-center justify-center p-8 transition-all duration-500 bg-white rounded-2xl h-72 group-hover:shadow-2xl group-hover:transform group-hover:-translate-y-2">
                  <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={
                        module.title === 'Administrative'
                          ? 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&h=200&fit=crop'
                          : module.title === 'Academics'
                          ? 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop'
                          : module.title === 'Finance'
                          ? 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop'
                          : 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop'
                      }
                      alt={`${module.title} module`}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-center text-gray-900 transition-colors duration-300 group-hover:text-cyan-500">
                    {module.title}
                  </h3>
                  <p className="font-medium text-center transition-colors duration-300 text-cyan-500 group-hover:text-cyan-500">
                    {module.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <button className="bg-cyan-500 hover:bg-[#0d2854] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
