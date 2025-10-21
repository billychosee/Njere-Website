'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { FaCookieBite, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      // Delay showing banner for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  const declineCookies = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl p-1 rounded-3xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #00204f 0%, #04baab 50%, #00204f 100%)',
          }}
        >
          <div className="p-6 bg-white shadow-inner rounded-3xl backdrop-blur-md bg-opacity-98">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              {/* Icon with enhanced animation */}
              <div className="relative flex-shrink-0">
                <motion.div
                  className="flex items-center justify-center w-20 h-20 text-4xl text-white shadow-xl rounded-2xl"
                  style={{ backgroundColor: '#00204f' }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCookieBite />
                </motion.div>
                <motion.div
                  className="absolute flex items-center justify-center w-8 h-8 text-sm text-white rounded-full shadow-lg -bottom-2 -right-2"
                  style={{ backgroundColor: '#04baab' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaShieldAlt />
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="flex items-center justify-center gap-3 text-2xl font-bold md:justify-start"
                  style={{ color: '#00204f' }}
                >
                  <span>Njere ERP</span>
                  <motion.span
                    className="px-3 py-1 text-lg font-medium text-white rounded-full"
                    style={{ backgroundColor: '#04baab' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Cookie Notice
                  </motion.span>
                </h3>

                <p className="mt-3 text-base leading-relaxed text-gray-700">
                  We use cookies to enhance your Njere ERP experience, personalize your dashboard,
                  and analyze system performance. Your data security and privacy are our top priorities.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-4 md:justify-start">
                  {[
                    { icon: FaCheckCircle, text: 'Essential Features', color: '#00204f' },
                    { icon: FaCheckCircle, text: 'Analytics & Insights', color: '#04baab' },
                    { icon: FaCheckCircle, text: 'Personalized Experience', color: '#00204f' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full"
                      style={{
                        backgroundColor: item.color,
                        color: item.color === '#00204f' ? '#04baab' : 'white'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="text-xs" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col flex-shrink-0 gap-4 sm:flex-row">
                <motion.button
                  onClick={declineCookies}
                  className="px-8 py-3 text-base font-semibold transition-all duration-300 border-2 cursor-pointer rounded-2xl hover:shadow-lg"
                  style={{
                    color: '#00204f',
                    borderColor: '#00204f',
                    backgroundColor: 'transparent',
                  }}
                  whileHover={{
                    backgroundColor: '#00204f',
                    color: 'white',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Decline Cookies
                </motion.button>

                <motion.button
                  onClick={acceptCookies}
                  className="px-8 py-3 text-base font-semibold text-white transition-all duration-300 shadow-xl cursor-pointer rounded-2xl"
                  style={{ backgroundColor: '#04baab' }}
                  whileHover={{
                    backgroundColor: '#00204f',
                    scale: 1.02,
                    boxShadow: '0 10px 25px rgba(0, 32, 79, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Accept All Cookies
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
