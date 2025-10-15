'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Define the primary and accent colors for a sleek, professional look
const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const SchoolProfilePage = () => {
  const params = useParams();
  const schoolId = params.id as string;
  const [selectedSponsorship, setSelectedSponsorship] = useState<string | null>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        // First try to get individual school by ID
        const response = await fetch(`https://csr-njere.smathub.com/api/schools/${schoolId}`);
        if (response.ok) {
          const data = await response.json();
          setSchool(data);
        } else {
          // If individual endpoint fails, fetch all schools and find by ID
          const allSchoolsResponse = await fetch('https://csr-njere.smathub.com/api/schools');
          if (allSchoolsResponse.ok) {
            const allData = await allSchoolsResponse.json();
            const foundSchool = allData.data?.find((s: any) => s.id.toString() === schoolId);
            setSchool(foundSchool);
          }
        }
      } catch (error) {
        console.error('Error fetching school:', error);
        // Try fallback to all schools endpoint
        try {
          const fallbackResponse = await fetch('https://csr-njere.smathub.com/api/schools');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            const foundSchool = fallbackData.data?.find((s: any) => s.id.toString() === schoolId);
            setSchool(foundSchool);
          }
        } catch (fallbackError) {
          console.error('Fallback fetch also failed:', fallbackError);
        }
      } finally {
        setLoading(false);
      }
    };

    if (schoolId) {
      fetchSchool();
    }
  }, [schoolId]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">School Not Found</h1>
          <Link href="/csr" className="text-blue-600 hover:underline">
            Back to CSR Connect
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* School Header */}
      <section className="relative">
        <div className="relative h-64 md:h-80">
          <Image
            src={school.image}
            alt={school.name}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          ></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">{school.name}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-1" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex gap-2">
                      <span
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        {school.level}
                      </span>
                      <span
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                      >
                        {school.province}
                      </span>
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                About the School
              </h2>
              <p className="text-lg text-gray-700">{school.motivation || 'This school is seeking support to improve educational opportunities for its students.'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas of Need */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Areas of Need
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {school.needs && school.needs.length > 0 ? (
                  school.needs.map((need: string, index: number) => (
                    <div key={index} className="flex items-start p-4 rounded-lg bg-gray-50">
                      <div
                        className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white rounded-full"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        {need.includes('ICT') || need.includes('Computer') ? (
                          <ComputerDesktopIcon className="w-5 h-5" />
                        ) : need.includes('Textbook') || need.includes('Stationery') ? (
                          <BookOpenIcon className="w-5 h-5" />
                        ) : need.includes('Infrastructure') ? (
                          <BuildingOfficeIcon className="w-5 h-5" />
                        ) : need.includes('Fees') ? (
                          <CurrencyDollarIcon className="w-5 h-5" />
                        ) : (
                          <AcademicCapIcon className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-900">{need}</h3>
                        <p className="text-gray-600">Support needed for {need.toLowerCase()}</p>
                      </div>
                    </div>
                  ))
                ) : school.areasOfNeed ? (
                  <div className="flex items-start p-4 rounded-lg bg-gray-50">
                    <div
                      className="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-4 text-white rounded-full"
                      style={{ backgroundColor: ACCENT_COLOR }}
                    >
                      <AcademicCapIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">{school.areasOfNeed}</h3>
                      <p className="text-gray-600">Support needed for {school.areasOfNeed.toLowerCase()}</p>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-500">
                    <p>No specific areas of need listed for this school.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <h2 className="mb-4 text-2xl font-bold text-white">Impact Statement</h2>
              <p className="text-lg text-white/90">Your support will help improve educational opportunities and resources for students at {school.school_name}.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support This School */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2
                className="mb-6 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Support This School
              </h2>
              <div className="text-center">
                <p className="mb-6 text-gray-600">
                  Make a difference in the lives of students at {school.school_name}. Your contribution will directly support their educational needs.
                </p>
                <div className="flex justify-center">
                  <button
                    className="flex items-center px-8 py-3 font-bold text-white transition-all rounded-full cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                    onClick={() => setShowDonationModal(true)}
                  >
                    Make a Donation
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Transparency Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl"
            >
              <h2 
                className="mb-4 text-2xl font-bold text-gray-900"
                style={{ color: PRIMARY_COLOR }}
              >
                Transparency & Accountability
              </h2>
              <p className="mb-4 text-gray-700">
                All sponsorships are tracked through Njere CSR Connect to ensure accountability. Reports and updates will be shared with sponsors.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Regular progress reports</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Financial transparency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-700">Impact measurement</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Back to CSR Connect */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/csr"
              className="inline-flex items-center font-medium text-blue-600 hover:underline"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2 transform rotate-180" />
              Back to CSR Connect
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-6 mx-4 bg-white shadow-xl rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Make a Donation</h3>
              <button
                onClick={() => setShowDonationModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your donation request! We will verify your donation and communicate with both you and the school. You will receive an email notification once the process is approved.'); }}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Donation Amount (ZAR)</label>
                <input
                  type="number"
                  min="1"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter amount"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Company/Organization (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter company name"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 font-bold text-white rounded-full cursor-pointer"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                Book a Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolProfilePage;