import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

// Scenario images for floating cards
const TEACHER_USING_SOFTWARE = '/teacher-using-software.jpg';
const PARENT_CHECKING_PROGRESS = '/parent-checking-progress.jpg';
const ADMINISTRATOR_DASHBOARD = '/administrator-dashboard.jpg';
const STUDENTS_IN_CLASSROOM = '/students-in-classroom.jpg';
const VIRTUAL_TEACHER_PARENT_MEETING = '/virtual-teacher-parent-meeting.jpg';
const DASHBOARD_CLOSEUP = '/dashboard-closeup.jpg';
const MOBILE_APP_MONITORING = '/mobile-app-monitoring.jpg';
const TEACHER_COLLABORATION = '/teacher-collaboration.jpg';

// Array of scenario images for cards
const NJERE_CARD_IMAGES = [
  TEACHER_USING_SOFTWARE,
  PARENT_CHECKING_PROGRESS,
  ADMINISTRATOR_DASHBOARD,
  STUDENTS_IN_CLASSROOM,
  VIRTUAL_TEACHER_PARENT_MEETING,
  DASHBOARD_CLOSEUP,
  MOBILE_APP_MONITORING,
  TEACHER_COLLABORATION,
];

// Constants for profile images (assuming these are available)
const PROFILE_IMAGE_1 = '/founder-profile1.jpg';
const PROFILE_IMAGE_2 = '/founder-profile2.jpg';
const PROFILE_IMAGE_3 = '/founder-profile3.jpg';

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

const HeroNjereCSRConnect: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

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
    <motion.section
      ref={ref}
      className="relative flex flex-col justify-start min-h-screen pt-20 pb-12 overflow-hidden text-gray-900 md:pt-24 lg:pt-32"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-90"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-4xl px-4 mx-auto text-center"
        variants={itemVariants}
      >
        {/* Logo */}
        <motion.div
          className="mb-8 w-20 h-20 flex items-center justify-center bg-[#0296ad2c] text-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-110 p-2"
          variants={itemVariants}
        >
          <img
            src="/njere-n-logo.png"
            alt="Njere N Logo"
            className="object-contain w-full h-full"
          />
        </motion.div>

        {/* Headline - UPDATED for "School Management" in black and "Software" in gradient */}
        <motion.h1
          className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-4xl"
          variants={itemVariants}
        >
          School Management
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0296AD] to-blue-600">
            {' '}
            Software
          </span>
        </motion.h1>

        {/* Subheading (Kept from previous update) */}
        <motion.p
          className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl md:text-xl"
          variants={itemVariants}
        >
          Our school management software provides end-to-end monitoring
          capabilities, granting parents, administrators, and teachers a
          comprehensive view of students' academic and social activities at
          school.
        </motion.p>

        {/* Call to Action Button - Single CTA "Register Today" (Kept) */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row"
          variants={itemVariants}
        >
          <a
            href="/register-today"
            className="px-8 py-3 bg-gradient-to-r from-[#0296AD] to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Register Today
          </a>
        </motion.div>

        {/* Trusted Users (KEPT) */}
        <motion.div
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
        >
          <div className="flex mr-3 -space-x-2 overflow-hidden">
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={PROFILE_IMAGE_1}
              alt="User Avatar 1"
            />
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={PROFILE_IMAGE_2}
              alt="User Avatar 2"
            />
            <img
              className="inline-block object-cover w-8 h-8 rounded-full ring-2 ring-white"
              src={PROFILE_IMAGE_3}
              alt="User Avatar 3"
            />
          </div>
          <span className="font-medium text-gray-700">4M+ trusted users</span>
        </motion.div>

        {/* Social Media (KEPT) */}
        <motion.div
          className="flex items-center justify-center mt-12 space-x-6"
          variants={itemVariants}
        >
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
        </motion.div>
      </motion.div>

      {/* Floating Cards (KEPT) */}
      {staggeredCardLayout.map((card, index) => (
        <motion.div
          key={index}
          className={`absolute z-0 ${card.size} shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 opacity-90 hidden lg:block`}
          style={{
            top: card.top,
            bottom: card.bottom,
            left: card.left,
            right: card.right,
            transform: `rotate(${card.rotation}deg)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 1.5 + index * 0.2,
            ease: 'easeOut',
          }}
        >
          <img
            src={NJERE_CARD_IMAGES[index]}
            alt={`Scenario Screenshot ${index + 1}: a demonstration of the Njere system`}
            className="object-cover w-full h-full"
          />
        </motion.div>
      ))}

      {/* Decorative Elements (KEPT) */}
      <motion.div
        className="absolute hidden w-16 h-16 bg-blue-100 rounded-full top-12 left-1/4 opacity-70 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      ></motion.div>
      <motion.div
        className="absolute hidden w-12 h-12 bg-purple-100 top-16 right-1/4 opacity-70 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.7 }}
      ></motion.div>
      <motion.div
        className="absolute hidden bg-teal-100 rounded-full w-14 h-14 bottom-20 left-1/3 opacity-60 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 2.9 }}
      ></motion.div>
      <motion.div
        className="absolute hidden w-10 h-10 bg-pink-100 rounded-full bottom-1/4 right-1/3 opacity-65 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 3.1 }}
      ></motion.div>

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
    </motion.section>
  );
};

export default HeroNjereCSRConnect;

