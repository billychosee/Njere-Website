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
          // Outer Banner: Centered horizontally on all screen sizes
          className="fixed bottom-4 left-0 right-0 mx-auto z-50 p-1 rounded-3xl shadow-2xl 
                     md:bottom-6 max-w-4xl w-[95%]"
          style={{
            background:
              'linear-gradient(135deg, #00204f 0%, #04baab 50%, #00204f 100%)',
          }}
        >
          <div className="p-4 bg-white shadow-inner md:p-6 rounded-3xl backdrop-blur-md bg-opacity-98">
            {/* Main Content Wrapper: NOW ALWAYS flex-col and items-center */}
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {/* Icon Section (Stays Centered) */}
              <div className="relative flex-shrink-0">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 text-3xl text-white shadow-xl md:w-20 md:h-20 md:text-4xl rounded-2xl"
                  style={{ backgroundColor: '#00204f' }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FaCookieBite />
                </motion.div>
                <motion.div
                  className="absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full shadow-lg md:w-8 md:h-8 md:text-sm -bottom-2 -right-2"
                  style={{ backgroundColor: '#04baab' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <FaShieldAlt />
                </motion.div>
              </div>

              {/* Text Content: ALWAYS text-center */}
              <div className="flex-1 min-w-0 text-center">
                <h3
                  // Ensures the title and badge are centered together, removing md:justify-start
                  className="flex flex-col items-center justify-center gap-2 text-xl font-bold md:text-2xl md:flex-row md:gap-3"
                  style={{ color: '#00204f' }}
                >
                  <span>Njere ERP</span>
                  <motion.span
                    className="px-3 py-1 text-sm font-medium text-white rounded-full md:text-lg whitespace-nowrap"
                    style={{ backgroundColor: '#04baab' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Cookie Notice
                  </motion.span>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-700 md:mt-3 md:text-base">
                  We use cookies to enhance your Njere ERP experience,
                  personalize your dashboard, and analyze system performance.
                  Your data security and privacy are our top priorities.
                </p>

                {/* Features List: justify-center ensures badges are centered on all sizes */}
                <div className="flex flex-wrap justify-center gap-2 mt-3 md:gap-3 md:mt-4">
                  {[
                    {
                      icon: FaCheckCircle,
                      text: 'Essential Features',
                      color: '#00204f',
                    },
                    {
                      icon: FaCheckCircle,
                      text: 'Analytics & Insights',
                      color: '#04baab',
                    },
                    {
                      icon: FaCheckCircle,
                      text: 'Personalized Experience',
                      color: '#00204f',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full md:gap-2 md:px-3 md:py-2 md:text-sm whitespace-nowrap"
                      style={{
                        backgroundColor: item.color,
                        color: item.color === '#00204f' ? '#04baab' : 'white',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <item.icon className="text-xs" />
                      <span className="hidden sm:inline">{item.text}</span>
                      <span className="sm:hidden">
                        {item.text.split(' ')[0]}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Buttons: Stacked and centered by the parent, but now always full width */}
              <div className="flex flex-col flex-shrink-0 w-full max-w-sm gap-3 mx-auto mt-4 sm:flex-row sm:gap-4 md:mt-6">
                <motion.button
                  onClick={declineCookies}
                  className="w-full px-6 py-2 text-sm font-semibold transition-all duration-300 border-2 cursor-pointer rounded-xl hover:shadow-lg md:px-8 md:py-3 md:text-base md:rounded-2xl"
                  style={{
                    color: '#00204f',
                    borderColor: '#00204f',
                    backgroundColor: 'transparent',
                  }}
                  whileHover={{
                    backgroundColor: '#00204f',
                    color: 'white',
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Decline
                </motion.button>

                <motion.button
                  onClick={acceptCookies}
                  className="w-full px-6 py-2 text-sm font-semibold text-white transition-all duration-300 shadow-xl cursor-pointer rounded-xl md:px-8 md:py-3 md:text-base md:rounded-2xl"
                  style={{ backgroundColor: '#04baab' }}
                  whileHover={{
                    backgroundColor: '#00204f',
                    scale: 1.02,
                    boxShadow: '0 10px 25px rgba(0, 32, 79, 0.3)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Accept All
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
