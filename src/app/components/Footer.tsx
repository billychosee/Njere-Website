"use client";

import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile chat toggle

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('Sending message...');
    setIsError(false);

    try {
      const headers = {
        authtoken: '',
      };

      const bodyFormData = new FormData();
      bodyFormData.append('source', 'smatechgroup_website');
      bodyFormData.append('status', 'New');
      bodyFormData.append('email', formData.email);
      bodyFormData.append('description', formData.message);
      bodyFormData.append('name', 'Unknown');
      bodyFormData.append('assigned', 'Michelle Muhenyeri');

      const response = await fetch('https://erp.smatechgroup.com/api/leads', {
        method: 'POST',
        headers: headers,
        body: bodyFormData,
      });

      if (response.ok) {
        setStatusMessage('Your message was sent successfully!');
        setFormData({ email: '', message: '' });
      } else {
        setIsError(true);
        setStatusMessage('There was a problem sending your message.');
      }
    } catch (err) {
      setIsError(true);
      setStatusMessage('There was a problem sending your message.');
    }
  };

  // Define colors
  const FOOTER_BG = '#00204f'; 
  const FOOTER_TEXT = 'text-gray-400';
  const FOOTER_HEADING = 'text-white';
  const FOOTER_BORDER = 'border-gray-700';
  // Define new button colors as requested
  const BUTTON_BG = '#0296AD';
  const BUTTON_HOVER_BG = '#00204f';


  return (
    <div className={`relative w-full bg-[${FOOTER_BG}] ${FOOTER_TEXT}`}>
      {/* Main content container */}
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-24 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: Logo and Introductory Text */}
          <div className="flex flex-col items-start col-span-1 lg:col-span-2">
            <div className="mb-6">
              <a href="/">
                {/* *** LOGO CHANGE APPLIED HERE ***
                  Using an <img> tag for the 'njere-white-logo.svg'
                */}
                <img
                    src="/njere-white-logo.svg" 
                    alt="NJERE School ERP Logo"
                    width={150} 
                    height={30}
                    className="h-auto"
                />
              </a>
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Embrace the future of education with <strong>Njere</strong>!
              Register today and/or schedule a live demo and discover how{' '}
              <strong>Njere</strong> can transform your educational institution.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`p-2 border border-gray-400 rounded-full hover:border-white transition-colors duration-300`}
              >
                <FaFacebookF
                  size={16}
                  className={`text-gray-400 hover:text-white transition-colors duration-300`}
                />
              </a>
              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`p-2 border border-gray-400 rounded-full hover:border-white transition-colors duration-300`}
              >
                <FaInstagram
                  size={16}
                  className={`text-gray-400 hover:text-white transition-colors duration-300`}
                />
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`p-2 border border-gray-400 rounded-full hover:border-white transition-colors duration-300`}
              >
                <FaLinkedinIn
                  size={16}
                  className={`text-gray-400 hover:text-white transition-colors duration-300`}
                />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start col-span-1 lg:col-span-1">
            <h2 className={`mb-6 text-base font-bold ${FOOTER_HEADING}`}>
              Quick Links
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/about-us"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="https://erp.smatechgroup.com/recruitment/recruitment_portal"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                >
                  News & Articles
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="flex flex-col items-start col-span-1 lg:col-span-1">
            <h2 className={`mb-6 text-base font-bold ${FOOTER_HEADING}`}>
              Useful Links
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="/contact-us"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className={`hover:${FOOTER_HEADING} transition-colors duration-300`}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Call to Action (Adjusted with correct hover style) */}
          <div className="flex flex-col items-start col-span-1 lg:col-span-1">
            <h2 className={`mb-6 text-sm ${FOOTER_HEADING}`}>
              Is your school ready for the future ?
            </h2>
            <a
              href="#"
              // Default styling
              style={{ 
                backgroundColor: BUTTON_BG, 
                borderColor: BUTTON_BG 
              }}
              className={`w-full text-center text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2`}
              
              // Hover styling (white border, transparent background, white text/border)
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'white';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                // Restore default styling
                e.currentTarget.style.backgroundColor = BUTTON_BG;
                e.currentTarget.style.borderColor = BUTTON_BG;
                e.currentTarget.style.color = 'white';
              }}
            >
              JOIN US NOW
            </a>
          </div>
        </div>

        {/* Footer Bottom (Copyright and Policy Links) */}
        <div
          className={`mt-16 pt-6 text-xs ${FOOTER_TEXT} border-t ${FOOTER_BORDER} md:flex md:justify-between md:items-center`}
        >
          {/* Copyright */}
          <p className="mb-4 text-center md:mb-0 md:text-left">
            Copyright © {new Date().getFullYear()} Smatech Group. All rights
            reserved.
          </p>
          {/* Policy Links */}
          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            <a
              href="/privacy-policy"
              className={`hover:${FOOTER_HEADING} transition-colors duration-300 uppercase`}
            >
              Privacy Policy
            </a>
            <a
              href="/support"
              className={`hover:${FOOTER_HEADING} transition-colors duration-300 uppercase`}
            >
              Support
            </a>
            <a
              href="/terms-and-conditions"
              className={`hover:${FOOTER_HEADING} transition-colors duration-300 uppercase`}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Chat Button */}
      <div
        className="fixed z-50 flex items-center cursor-pointer bottom-6 right-6 group"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* Chat Text Bubble: Hidden by default on PC, shown on hover/mobile click */}
        <div
          className={`px-5 py-3 text-sm font-medium text-black bg-white rounded-full shadow-lg whitespace-nowrap transition-opacity duration-300 absolute right-12 top-1/2 transform -translate-y-1/2
            ${isMobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}
            md:group-hover:block md:group-hover:opacity-100 md:hidden 
          `}
        >
          Need Help? Chat with us
        </div>

        {/* WhatsApp Icon/Button */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`rounded-full p-3 shadow-lg transition-all duration-300 w-14 h-14 flex items-center justify-center 
            bg-[#25D366] 
            group-hover:bg-transparent group-hover:border-2 group-hover:border-white
          `}
        >
          {/* Icon SVG - remains white */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <path
              d="M16 0C7.164 0 0 7.164 0 16c0 2.82.736 5.464 2.024 7.752L0 32l8.496-2.232C10.736 30.976 13.264 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.604 0-5.02-.756-7.056-2.056l-.504-.304-5.232 1.372 1.396-5.096-.336-.524A13.128 13.128 0 012.8 16c0-7.288 5.912-13.2 13.2-13.2S29.2 8.712 29.2 16 23.288 29.2 16 29.2z"
              fill="white"
            />
            <path
              d="M11.992 9.2c-.28 0-.728.104-.952.548-.224.444-.856 1.68-.856 3.108 0 1.428 1.04 2.8 1.184 2.992.144.192 2.012 3.072 4.872 4.308 2.38.996 2.86.796 3.376.748.516-.048 1.664-.68 1.896-1.336.232-.656.232-1.22.164-1.336-.068-.116-.26-.184-.544-.32-.284-.136-1.68-.828-1.94-.924-.26-.096-.448-.14-.636.14-.188.28-.728.924-.892 1.112-.164.188-.328.212-.612.076-.284-.136-1.2-.444-2.288-1.412-.848-.756-1.42-1.692-1.588-1.976-.168-.284-.02-.44.124-.58.128-.128.284-.332.424-.496.14-.164.188-.284.284-.472.096-.188.048-.352-.024-.496-.072-.144-.636-1.54-.872-2.108-.236-.56-.476-.476-.636-.476h-.54z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;