import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialIcons = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://www.linkedin.com/company/your-njere-page',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://www.instagram.com/your-njere-page',
  },
  { name: 'X', icon: FaTwitter, link: 'https://twitter.com/your-njere-page' },
];

const SINGLE_CARD_IMAGE = '/student-with-laptop.jpg';
const PROFILE_IMAGE_1 = '/founder-profile1.jpg';
const PROFILE_IMAGE_2 = '/founder-profile2.jpg';
const PROFILE_IMAGE_3 = '/founder-profile3.jpg';
const NJERE_ONBOARD = '/njere-onboard.png';
const NJERE_DASHBOARD = '/njere-dashboard.png';
const NJERE_EXAM  = '/njere-exam-group.png';
const NJERE_VISITOR = '/njere-visitor-book.png';

const HeroNjereCSRConnect: React.FC = () => {
  const staggeredCardLayout = [
    {
      top: '10%',
      left: '10%',
      size: 'w-[160px] h-[120px]',
      rotation: '-8',
      animation: 'float-card-one',
    },
    {
      top: '30%',
      left: '4%',
      size: 'w-[140px] h-[100px]',
      rotation: '6',
      animation: 'float-card-two',
    },
    {
      top: '15%',
      right: '12%',
      size: 'w-[180px] h-[140px]',
      rotation: '10',
      animation: 'float-card-three',
    },
    {
      top: '40%',
      right: '5%',
      size: 'w-[150px] h-[110px]',
      rotation: '-4',
      animation: 'float-card-four',
    },
    {
      bottom: '15%',
      left: '8%',
      size: 'w-[170px] h-[130px]',
      rotation: '3',
      animation: 'float-card-two',
    },
    {
      bottom: '35%',
      left: '15%',
      size: 'w-[130px] h-[90px]',
      rotation: '-12',
      animation: 'float-card-one',
    },
    {
      bottom: '10%',
      right: '10%',
      size: 'w-[190px] h-[150px]',
      rotation: '-5',
      animation: 'float-card-three',
    },
    {
      bottom: '30%',
      right: '18%',
      size: 'w-[145px] h-[105px]',
      rotation: '8',
      animation: 'float-card-four',
    },
  ];

  return (
    <section className="relative flex flex-col justify-start min-h-screen pt-20 pb-12 overflow-hidden text-gray-900 md:pt-24 lg:pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-4xl px-4 mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 w-20 h-20 flex items-center justify-center bg-[#0296ad2c] text-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-110 p-2">
          <img
            src="/njere-n-logo.png"
            alt="Njere N Logo"
            className="object-contain w-full h-full"
          />
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-4xl animate-fade-in-up">
          Support Schools.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0296AD] to-blue-600">
            Empower Futures.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl md:text-xl animate-fade-in-up animate-delay-200">
          Njere CSR Connect links schools in need with companies and
          organizations ready to sponsor education initiatives.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row animate-fade-in-up animate-delay-400">
          <a
            href="/register-school"
            className="px-8 py-3 bg-gradient-to-r from-[#0296AD] to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Register Your School
          </a>
          <a
            href="/sponsor-schools"
            className="px-8 py-3 bg-white border-2 border-[#0296AD] text-[#0296AD] text-lg font-bold rounded-full shadow-lg hover:bg-[#e6f6fa] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Find a School to Sponsor
          </a>
        </div>

        {/* Trusted Users */}
        <div className="flex items-center justify-center mb-6 animate-fade-in-up animate-delay-300">
          <div className="flex mr-3 -space-x-2 overflow-hidden">
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={NJERE_ONBOARD}
              alt="User Avatar"
            />
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={PROFILE_IMAGE_2}
              alt="User Avatar"
            />
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={NJERE_DASHBOARD}
              alt="User Avatar"
            />
          </div>
          <span className="font-medium text-gray-700">4M+ trusted users</span>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center mt-12 space-x-6 animate-fade-in-up animate-delay-600">
          {socialIcons.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-[#0296AD] transition-colors duration-200 ease-in-out transform hover:scale-125"
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>

      {/* Floating Cards */}
      {staggeredCardLayout.map((card, index) => (
        <div
          key={index}
          className={`absolute z-0 ${card.size} shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 opacity-90 hidden lg:block animate-${card.animation}`}
          style={{
            top: card.top,
            bottom: card.bottom,
            left: card.left,
            right: card.right,
            transform: `rotate(${card.rotation}deg)`,
            animationDelay: `${1.5 + index * 0.2}s`,
          }}
        >
          <img
            src={SINGLE_CARD_IMAGE}
            alt="CSR Card Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute hidden w-16 h-16 bg-blue-100 rounded-full top-12 left-1/4 opacity-70 animate-pulse lg:block"></div>
      <div className="absolute hidden w-12 h-12 bg-purple-100 top-16 right-1/4 opacity-70 animate-pulse lg:block"></div>
      <div className="absolute hidden bg-teal-100 rounded-full w-14 h-14 bottom-20 left-1/3 opacity-60 animate-pulse lg:block"></div>
      <div className="absolute hidden w-10 h-10 bg-pink-100 rounded-full bottom-1/4 right-1/3 opacity-65 animate-pulse lg:block"></div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-card-one {
          0%,
          100% {
            transform: translateY(0px) rotate(-8deg);
          }
          50% {
            transform: translateY(-15px) rotate(-8deg);
          }
        }
        @keyframes float-card-two {
          0%,
          100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-20px) rotate(6deg);
          }
        }
        @keyframes float-card-three {
          0%,
          100% {
            transform: translateY(0px) rotate(10deg);
          }
          50% {
            transform: translateY(-18px) rotate(10deg);
          }
        }
        @keyframes float-card-four {
          0%,
          100% {
            transform: translateY(0px) rotate(-4deg);
          }
          50% {
            transform: translateY(-12px) rotate(-4deg);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-float-card-one {
          animation: float-card-one 6s ease-in-out infinite;
        }
        .animate-float-card-two {
          animation: float-card-two 7s ease-in-out infinite;
        }
        .animate-float-card-three {
          animation: float-card-three 8s ease-in-out infinite;
        }
        .animate-float-card-four {
          animation: float-card-four 5.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroNjereCSRConnect;
