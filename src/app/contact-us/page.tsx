// app/contact/page.tsx

import type { Metadata } from 'next';
import Script from 'next/script';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

// --- Import the new Map Component
import ContactMap from '../components/ContactMap';

// --- Font Awesome Imports for Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Define the site base URL and contact information variables
const siteUrl = 'https://njere.africa';
const pageTitle = 'Contact Us - Njere Africa';
const pageDescription =
  'Get in touch with Njere Africa. Find our location at 13 Brentwood Avenue, Mt Harare, Zimbabwe.';
const locationAddress = '13 Brentwood Avenue, Mount Pleasant, Harare, Zimbabwe'; // Updated address
const phoneNumber = '+263 789 566 427';
const emailAddress = 'info@njere.africa';

// **IMPORTANT: Define the Map Coordinates (find exact coordinates for your address)**
const MAP_CENTER = {
  // These are approximate coordinates for Mount Pleasant, Harare (Update these!)
  lat: -17.7801,
  lng: 31.0505,
};

// Define custom colors for clarity
const PRIMARY_COLOR = '#00204f'; // Your deep blue
const ACCENT_COLOR = '#02ACC3'; // Vibrant teal

// =======================
// 1. PAGE-SPECIFIC METADATA
// =======================
export const metadata: Metadata = {
  // Primary Meta Tags
  title: pageTitle,
  description: pageDescription,

  // Open Graph / Social Sharing Meta Tags
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/contact-us`,
    type: 'website',
  },

  // Twitter Meta Tags
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },

  // Canonical Link
  alternates: {
    canonical: `${siteUrl}/contact-us`,
  },
};

// =======================
// 2. CONTACT PAGE COMPONENT
// =======================
const ContactPage = () => {
  return (
    <>
      {/* JSON-LD Structured Data - Updated with a more general address structure */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: `${siteUrl}/contact`,
            description: pageDescription,
            address: {
              '@type': 'PostalAddress',
              // Note: Using the single combined address here for simplicity
              streetAddress: '13 Brentwood Avenue, Mount Pleasant',
              addressLocality: 'Harare',
              addressCountry: 'ZW',
            },
            telephone: phoneNumber,
            email: emailAddress,
          }),
        }}
      />

      <main>
        {/* HERO SECTION */}
        <section
          className="relative pb-24 overflow-hidden text-white shadow-xl"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: PRIMARY_COLOR,
          }}
        >
          <div className={`absolute inset-0 bg-[${PRIMARY_COLOR}]/50`}></div>
          <div className="container relative z-10 px-6 mx-auto text-center pt-36">
            <h1 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
              Contact us
            </h1>
            <p className="text-lg font-medium opacity-90">{locationAddress}</p>
          </div>
        </section>

        {/* ===================================== */}
        {/* GET IN TOUCH SECTION (Teal/White Layout) */}
        {/* ===================================== */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            {/* Main Contact Container (Form and Info) */}
            <div className="flex flex-col max-w-6xl mx-auto overflow-hidden shadow-2xl rounded-3xl">
              {/* --- 1. Top Section: Info & Form --- */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Column: Contact Information (Teal Background) */}
                <div
                  className={`w-full lg:w-2/5 p-10 md:p-12 text-white relative z-10`}
                  style={{ backgroundColor: ACCENT_COLOR }}
                >
                  {/* Background circles for flair */}
                  <div className="absolute w-40 h-40 bg-white/10 rounded-full bottom-[-20px] left-[-20px]"></div>
                  <div className="absolute w-60 h-60 bg-white/10 rounded-full top-[-50px] right-[-50px] opacity-50"></div>

                  <h2 className="relative z-20 mb-4 text-3xl font-bold">
                    Contact Information
                  </h2>
                  <p className="relative z-20 mb-10 text-gray-100">
                    Empowering Schools, Transforming Education: Partner with
                    Njere.
                  </p>

                  {/* Contact Items */}
                  <div className="relative z-20 space-y-8">
                    {/* Phone */}
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="w-6 mt-1 mr-4 text-2xl"
                      />
                      <div>
                        <p className="text-lg font-semibold">Phone Number :</p>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="text-white hover:underline"
                        >
                          {phoneNumber}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="w-6 mt-1 mr-4 text-2xl"
                      />
                      <div>
                        <p className="text-lg font-semibold">Email Address :</p>
                        <a
                          href={`mailto:${emailAddress}`}
                          className="text-white hover:underline"
                        >
                          {emailAddress}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="w-6 mt-1 mr-4 text-2xl"
                      />
                      <div>
                        <p className="text-lg font-semibold">
                          Location Address :
                        </p>
                        <p>{locationAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="w-full p-8 bg-white lg:w-3/5 md:p-12">
                  <ContactForm />
                </div>
              </div>

              {/* --- 2. Bottom Section: Google Map --- */}
              <div className="w-full">
                {/* Google Map */}
                <div className="mx-5 my-6 overflow-hidden rounded-lg md:mx-0 h-96 md:my-0">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=13+Brentwood+Ave,+Groombridge,+Harare,+Zimbabwe&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= */}
        {/* FURTHER SECTIONS WILL GO HERE */}
        {/* ======================= */}
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
