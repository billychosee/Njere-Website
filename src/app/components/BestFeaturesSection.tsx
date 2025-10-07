import React from 'react';
import { GraduationCap, CreditCard, Monitor } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Advanced Academic System',
      description:
        'This system provides student information, class, section, subject, syllabus, assignment, routine, live class, tutorial, and many more features. It covers almost all the academic aspects you can imagine.',
    },
    {
      icon: CreditCard,
      title: 'Integrated Payment Gateway',
      description:
        'Pay school fees worldwide in one click with our secure technology. Our payment gateways simplify payment processing, eliminate manual tracking, and ensure reliability and safety for a stress-free experience.',
    },
    {
      icon: Monitor,
      title: 'Virtual Classroom Software',
      description:
        'A purpose-built virtual classroom that empowers teachers to teach and learners to learn, easily conduct live classes without the hassles of licensing.',
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <style jsx>{`
        .glass-card {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 0 0 1px rgba(156, 163, 175, 0.3); /* subtle grey border effect */
        }

        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow:
            0 8px 25px rgba(20, 184, 166, 0.3),
            0 4px 15px rgba(6, 182, 212, 0.2),
            0 0 0 1px rgba(156, 163, 175, 0.3); /* keep subtle grey border */
        }

        .shine {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
        }

        .glass-card:hover .shine {
          animation: shine 2s ease-in-out;
        }

        @keyframes shine {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <svg width="80" height="20" viewBox="0 0 80 20" className="mx-auto">
              <path
                d="M 0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10"
                stroke="#14b8a6"
                fill="none"
                strokeWidth="3"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Our Best Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative p-8 glass-card group">
                {/* Shine effect */}
                <div className="shine"></div>

                {/* Icon in Circle */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-20 h-20 transition-all duration-300 rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110">
                    <Icon className="w-10 h-10 text-cyan-600" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-center text-gray-900 transition-colors duration-300 group-hover:text-cyan-600">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-center text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
