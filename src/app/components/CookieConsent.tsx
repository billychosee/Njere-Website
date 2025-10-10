'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import { FaCookieBite, FaShieldAlt } from 'react-icons/fa';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookieConsent');
    if (!consent) {
      setShowBanner(true);
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
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[700px] p-1 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #00204f 0%, #04baab 100%)',
          }}
        >
          <div className="p-6 bg-white rounded-2xl backdrop-blur-md bg-opacity-95">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              {/* Icon with animation */}
              <div className="relative">
                <div
                  className="flex items-center justify-center w-16 h-16 text-3xl text-white rounded-full shadow-lg"
                  style={{ backgroundColor: '#00204f' }}
                >
                  <FaCookieBite />
                </div>
                <div
                  className="absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full -bottom-1 -right-1"
                  style={{ backgroundColor: '#04baab' }}
                >
                  <FaShieldAlt />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3
                  className="flex items-center justify-center gap-2 text-xl font-bold md:justify-start"
                  style={{ color: '#00204f' }}
                >
                  <span>NJERE ERP</span>
                  <span className="text-sm" style={{ color: '#04baab' }}>
                    uses cookies
                  </span>
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  We use cookies to enhance your NJERE ERP experience,
                  personalize your dashboard, and analyze system performance.
                  Your data security is our priority.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-3 md:justify-start">
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: '#00204f', color: '#04baab' }}
                  >
                    Essential
                  </span>
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: '#00204f', color: '#04baab' }}
                  >
                    Analytics
                  </span>
                  <span
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ backgroundColor: '#00204f', color: '#04baab' }}
                  >
                    Personalization
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={declineCookies}
                  className="px-6 py-2 text-sm font-medium transition rounded-full cursor-pointer hover:shadow-md"
                  style={{
                    color: '#00204f',
                    border: `1px solid #00204f`,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00204f';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#00204f';
                  }}
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 text-sm font-medium text-white transition rounded-full shadow-lg cursor-pointer"
                  style={{ backgroundColor: '#04baab' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#00204f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#04baab';
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
