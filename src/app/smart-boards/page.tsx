'use client';
import Head from 'next/head';
import Footer from '../components/Footer';
import { useRef, useState, ReactNode } from 'react';
import { FaSchool, FaCogs, FaChalkboardTeacher, FaHandPaper, FaMicrophone, FaWifi, FaDesktop, FaShieldAlt } from 'react-icons/fa';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const PRIMARY_COLOR = '#0296AD';

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const SmartBoardFeatures: Feature[] = [
  {
    icon: <FaHandPaper className="w-6 h-6 text-white" />,
    title: 'Touch & Gesture Control',
    description: 'Intuitive multi-touch interaction for seamless engagement.',
  },
  {
    icon: <FaMicrophone className="w-6 h-6 text-white" />,
    title: 'Built-in Audio & Camera',
    description: 'Integrated VC module for hybrid learning environments.',
  },
  {
    icon: <FaWifi className="w-6 h-6 text-[#fffff]" />,
    title: 'Wireless Projection',
    description: 'Share content from any device seamlessly.',
  },
  {
    icon: <FaDesktop className="w-6 h-6 text-white" />,
    title: 'Customizable OPS Computer',
    description: 'CPU, RAM, and storage tailored to your needs.',
  },
  {
    icon: <FaShieldAlt className="w-6 h-6 text-white" />,
    title: 'Certified & Safe',
    description: 'CE, ROHS, FCC, HDMI, ENERGY STAR compliant.',
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const useCasesRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const isUseCasesInView = useInView(useCasesRef, { once: true, amount: 0.3 });
  const isCalculatorInView = useInView(calculatorRef, { once: true, amount: 0.3 });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });

  const [roomLength, setRoomLength] = useState('');
  const [roomWidth, setRoomWidth] = useState('');
  const [distance, setDistance] = useState('');
  const [purpose, setPurpose] = useState('Classroom');
  const [recommendation, setRecommendation] = useState('');

  const calculateSize = () => {
    const length = parseFloat(roomLength);
    const width = parseFloat(roomWidth);
    const dist = parseFloat(distance);
    if (isNaN(length) || isNaN(width) || isNaN(dist)) {
      setRecommendation('Please enter valid numbers.');
      return;
    }
    const area = length * width;
    let size = '65"';
    if (area > 50) size = '75"';
    if (area > 100) size = '86"';
    const height = Math.max(90, dist * 10); // Simple calculation
    setRecommendation(`Recommended Screen Size: ${size} | Suggested Mounting Height: ${height} cm from floor. For a ${purpose.toLowerCase()} of this size, we recommend a ${size} Njere Smart Board to ensure clear visibility.`);
  };

  return (
    <>
      <Head>
        <title>Njere Smart Boards | Interactive Classroom Solutions</title>
        <meta
          name="description"
          content="Bring your classroom to life with Njere Smart Boards. Interactive, intuitive, and designed for effortless learning and collaboration."
        />
      </Head>

      <main className="min-h-screen text-black bg-njere-teal">
        {/* Hero Section */}
        <section
          className="relative py-32 overflow-hidden text-white"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#00204f',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00204f]/80 to-[#02ACC3]/60"></div>
          <div className="container relative z-10 px-4 mx-auto md:px-6">
            <div className="max-w-4xl pt-20 mx-auto text-center">
              <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
                Bring Your Classroom to Life with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02ACC3] to-[#00bcd4]">
                  Njere Smart Boards
                </span>
              </h1>
              <p className="mb-8 text-xl text-white/90">
                Interactive, intuitive, and designed to make learning and
                collaboration effortless.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => window.open('/contact-us', '_self')}
                  className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
                >
                  Get a Quote
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => window.open('/contact-us', '_self')}
                  className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Njere Smart Boards Section */}
        <section ref={aboutRef} className="py-16 bg-white md:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-stretch">
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/teacher-in-classroom.jpg"
                  alt="Smart board in classroom"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-extrabold text-gray-900">
                  Why Njere Smart Boards?
                </h2>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <FaSchool className="w-6 h-6 text-[#0296AD] mr-3 mt-1" />
                    <div>
                      <strong>Engage Every Student:</strong> Multi-touch display
                      for interactive lessons.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCogs className="w-6 h-6 text-[#0296AD] mr-3 mt-1" />
                    <div>
                      <strong>All-in-One Solution:</strong> Combines projector,
                      whiteboard, audio, and computing.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaChalkboardTeacher className="w-6 h-6 text-[#0296AD] mr-3 mt-1" />
                    <div>
                      <strong>Flexible OS Options:</strong> Windows or Android
                      for your preference.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaShieldAlt className="w-6 h-6 text-[#0296AD] mr-3 mt-1" />
                    <div>
                      <strong>High-Definition Visuals:</strong> Crisp, clear 4K
                      display for every detail.
                    </div>
                  </li>
                </ul>
                <div className="mt-8 text-center md:text-left">
                  <button
                    onClick={() => window.open('/contact-us', '_self')}
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#0296AD] to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Schedule a Demo Today
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features & Specs Section */}
        <section
          ref={featuresRef}
          className="relative py-20 overflow-hidden bg-gray-50"
        >
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: '#02ACC3' }}
          ></div>
          <div
            className="absolute bottom-0 right-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
            style={{ backgroundColor: '#00204f' }}
          ></div>

          <div className="container relative z-10 px-4 mx-auto md:px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2
                className="text-base font-semibold tracking-wider uppercase"
                style={{ color: '#02ACC3' }}
              >
                Powerful Features
              </h2>
              <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                Features & Specs
              </h2>
              <p className="text-lg text-gray-600">
                Discover the cutting-edge technology that makes our smart boards
                revolutionary
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SmartBoardFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-2xl group-hover:opacity-100 blur-xl"
                    style={{ backgroundColor: '#02ACC3' }}
                  ></div>
                  <div className="relative p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl">
                    <div
                      className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full group-hover:scale-110"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <div
                        className="flex items-center justify-center w-16 h-16 rounded-full"
                        style={{ backgroundColor: '#02ACC3' }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="flex justify-center mt-6">
                      <div
                        className="w-12 h-1 transition-all duration-300 rounded-full group-hover:w-16"
                        style={{ backgroundColor: '#02ACC3' }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <motion.button
                onClick={() => window.open('/contact-us', '_self')}
                className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90 w-fit"
                style={{ backgroundColor: '#00204f' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Smart Board Quote
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section ref={useCasesRef} className="py-16 bg-white md:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">
              Perfect for Every Space
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
                initial="initial"
                animate={isUseCasesInView ? 'animate' : 'initial'}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/classroom_black_students_smartboard.png"
                  alt="Classrooms"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Classrooms
                </h3>
                <p className="text-gray-600">
                  Students writing directly on the board, teacher guiding
                  lesson.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
                initial="initial"
                animate={isUseCasesInView ? 'animate' : 'initial'}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/boardroom_black_executives_interactive_board.png"
                  alt="Boardrooms"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Boardrooms
                </h3>
                <p className="text-gray-600">
                  Corporate meeting with interactive charts.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center text-center"
                variants={fadeInUp}
                initial="initial"
                animate={isUseCasesInView ? 'animate' : 'initial'}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="/training_room_black_professionals_collaboration.png"
                  alt="Training Rooms"
                  width={300}
                  height={200}
                  className="mb-4 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  Training Rooms
                </h3>
                <p className="text-gray-600">
                  Hands-on sessions, collaborative problem-solving.
                </p>
              </motion.div>
            </div>
            <div className="mt-8 text-center">
              <button
                onClick={() => window.open('/contact-us', '_self')}
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#0296AD] to-blue-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Schedule a Demo Today
              </button>
            </div>
          </div>
        </section>

        {/* Find the Perfect Screen Size Section */}
        <section ref={calculatorRef} className="py-16 bg-gray-50 md:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12 md:flex-row md:h-full">
              <motion.div
                className="relative w-full md:h-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={isCalculatorInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/interactive_smartboard_hd_black_classroom.png"
                  alt="Classroom illustration"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </motion.div>
              <motion.div
                className="flex flex-col justify-center w-full md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={isCalculatorInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
                  Not Sure Which Screen Size Fits Your Space?
                </h2>
                <p className="mb-6 text-gray-600">
                  Use our Smart Board Size Calculator to find the ideal fit for
                  your classroom, boardroom, or training space.
                </p>
                <div className="space-y-4">
                  <input
                    type="number"
                    placeholder="Room Length (m)"
                    value={roomLength}
                    onChange={(e) => setRoomLength(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Room Width (m)"
                    value={roomWidth}
                    onChange={(e) => setRoomWidth(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="number"
                    placeholder="Distance from board to last row (m)"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option>Classroom</option>
                    <option>Boardroom</option>
                    <option>Training Room</option>
                  </select>
                  <button
                    onClick={calculateSize}
                    className="w-full px-6 py-3 bg-[#0296AD] text-white font-semibold rounded-lg hover:bg-[#027A8A]"
                  >
                    Calculate
                  </button>
                  {recommendation && (
                    <p className="mt-4 text-gray-700">{recommendation}</p>
                  )}
                  <button
                    onClick={() => window.open('/contact-us', '_self')}
                    className="w-full px-6 py-3 border border-[#0296AD] text-[#0296AD] font-semibold rounded-lg hover:bg-[#0296AD] hover:text-white"
                  >
                    Request a Quote for This Size
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 text-center text-white"
          style={{
            background:
              'linear-gradient(135deg, #00204f 0%, #014a86 50%, #00bcd4 100%)',
          }}
        >
          <div className="container px-4 mx-auto md:px-6">
            <h2 className="mb-6 text-4xl font-extrabold">
              Ready to Transform Your Space?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-lg text-white/90">
              Join the revolution in interactive education. Get in touch with
              our experts today.
            </p>
            <motion.button
              onClick={() => window.open('/contact-us', '_self')}
              className="flex items-center justify-center px-8 py-4 mx-auto font-bold text-blue-900 transition-transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105 w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;