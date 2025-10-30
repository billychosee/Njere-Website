'use client';
import Head from 'next/head';
import Footer from './components/Footer';
import { useRef, ReactNode } from 'react';
import Hero from './components/Hero'; // This is HeroNjereERP
import { FaSchool, FaCogs, FaChalkboardTeacher } from 'react-icons/fa';
import ERPTargetInstitutions from './components/ERPTargetInstitutions';
import IntegratedSyllabusAI from './components/IntegratedSyllabusAI';
import PaymentMethodSection from './components/PaymentMethodSection';
import Image from 'next/image';
import OurModulesSection from './components/OurModulesSection';
import FutureReadySection from './components/FutureReadySection';
import BestFeaturesSection from './components/BestFeaturesSection';
import VideoStatsSection from './components/VideoStatsSection';
import DownloadAppSection from './components/DownloadAppSection';
// Import 'motion', 'useInView', and 'Variants' from framer-motion
import { motion, useInView, Variants } from 'framer-motion';

const PRIMARY_COLOR = '#0296AD';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const EdTechFeatures: Feature[] = [
   {
     icon: <FaSchool className="w-6 h-6 text-white" />,
     title: 'Comprehensive Learning Platform',
     description:
       'A unified platform serving schools, colleges, universities, and online learning institutions across Africa with integrated management solutions.',
   },
   {
     icon: <FaCogs className="w-6 h-6 text-white" />,
     title: 'Multi-User Access System',
     description:
       'Empowering administrators, teachers, students, and parents with role-based access to monitor progress, assignments, and academic performance.',
   },
   {
     icon: <FaChalkboardTeacher className="w-6 h-6 text-white" />,
     title: 'Pan-African Education Network',
     description:
       'Connecting educational institutions across Africa with standardized curricula, collaborative tools, and shared resources for enhanced learning.',
   },
 ];

// --- New Component for Word-Level Animation ---
interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
  // Prop to control animation start
  animateNow: boolean;
}

const AnimatedHeadline = ({
  text,
  className = '',
  delay = 0,
  animateNow,
}: AnimatedHeadlineProps) => {
  const words = text.split(' ');

  // Container variant for staggering the word animation
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay + 0.5, // Combined delay from parent motion.div + internal stagger
      },
    }),
  };

  // Variant for each individual word
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      // Use the prop to determine the animation state
      animate={animateNow ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};

// Define animation variants for features (reused from previous step)
const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  // Ref for the entire About section to trigger animations
  const aboutRef = useRef<HTMLElement>(null);
  // Trigger animation when 30% of the section is visible
  const isInView = useInView(aboutRef, { once: true, amount: 0.3 });

  return (
    <>
      <Head>
        <title>
          Njere Website | Cutting-Edge IT Solutions & Software Development
        </title>
        <meta
          name="description"
          content="Njere Website provides cutting-edge IT solutions, custom software development, AI & ML services, and robust cybersecurity. Empowering businesses for digital transformation and growth."
        />
      </Head>

      <main className="min-h-screen text-black bg-njere-teal">
        <Hero />

        {/* The 'About Njere EdTech' section with animation setup */}
        <section ref={aboutRef} className="py-16 bg-white md:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              {/* Image Column - Animated to slide in from the left */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                // Controlled by isInView
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full overflow-hidden rounded-lg aspect-w-16 aspect-h-9 md:aspect-w-auto md:aspect-h-auto md:h-full">
                  <img
                    src="/Digital-Education.png"
                    alt="Digital Education Technology Platform Placeholder"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>

              {/* Text and Features Column - Animated to slide in from the right */}
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                // Controlled by isInView
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="mb-6 text-center md:text-left">
                  <p className="flex justify-center items-center mb-1 text-sm font-semibold tracking-wider text-[#0296AD] uppercase md:justify-start">
                    <span className="inline-block w-2 h-2 mr-2 bg-[#0296AD] rounded-full"></span>
                    About Njere EdTech
                  </p>

                  {/* HEADLINE REPLACED WITH ANIMATED COMPONENT */}
                  <AnimatedHeadline
                    text="Pan-African Learning Management System"
                    className="text-4xl font-extrabold leading-tight text-gray-900 md:text-4xl"
                    delay={0} // Staggered delay handled internally. Starting after the parent slide-in (0.4s)
                    animateNow={isInView} // Pass the state down to control animation
                  />

                  <p className="max-w-lg mx-auto mt-2 text-base text-gray-600 md:mx-0">
                    <strong className="text-[#0296AD]">Njere</strong> is a comprehensive educational technology platform developed by Smatech Group.
                    Our mission is to{' '}
                    <strong>transform education across Africa</strong> by providing robust learning management solutions for schools, colleges, universities, and online learning institutions. Empowering educators and students with innovative tools for teaching, learning, and administration.
                  </p>
                </div>

                {/* Features List - Each item animates in sequence */}
                <div className="space-y-4">
                  {EdTechFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center md:flex-row md:items-start md:justify-start"
                      variants={fadeInUp}
                      initial="initial"
                      // Controlled by isInView
                      animate={isInView ? 'animate' : 'initial'}
                      // Delay is set to start after the headline animation finishes
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.15 }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0296AD]/80">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="mt-2 text-center md:ml-4 md:mt-0 md:text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="max-w-lg mt-0.5 text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ERPTargetInstitutions />
        <IntegratedSyllabusAI />

        {/* *** NEW PAYMENT METHOD SECTION *** */}
        <PaymentMethodSection />
        {/* ********************************* */}

        {/* ParentPortalSection */}

        <section className="py-16 bg-white">
          <div className="px-4 mx-auto text-center max-w-7xl lg:px-0">
            <h2 className="mb-12 text-4xl font-extrabold text-gray-900">
              Parent Portal & Mobile APP
            </h2>
            <div className="flex items-center justify-center">
              {/* The image will be placed here by the user */}
              <Image
                src="/mobile-app-2-devices.jpg" // Replace with the actual path to your image
                alt="Parent Portal and Mobile App devices"
                width={1200} // Adjust width as needed
                height={600} // Adjust height as needed
                layout="intrinsic" // Or "responsive" depending on desired behavior
              />
            </div>
          </div>
        </section>

        <OurModulesSection />

        <FutureReadySection />

        <BestFeaturesSection />

        <VideoStatsSection />

        <DownloadAppSection />
      </main>

      <Footer />
    </>
  );
};

export default Page;
