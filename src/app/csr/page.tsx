'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import {
  MapPinIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import RegisterSchoolModal from '../components/RegisterSchoolModal';
import RegisterCompanyModal from '../components/RegisterCompanyModal';

const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const CSRPage = () => {
  const [filterLocation, setFilterLocation] = useState('');
  const [filterNeed, setFilterNeed] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch schools from API
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          'https://csr-njere.smathub.com/api/schools',
        );
        const data = response.data.data;
        console.log(data);
        setSchools(data || []);
      } catch (error) {
        console.error('Error fetching schools:', error);
        // Fallback sample data
        setSchools([
          {
            id: 1,
            name: 'Sunrise Primary School',
            location: 'Johannesburg, Gauteng',
            level: 'Primary',
            needs: ['ICT Equipment', 'Textbooks'],
            image: '/black-girl.png',
            urgent: true,
          },
          {
            id: 2,
            name: 'Mthatha High School',
            location: 'Mthatha, Eastern Cape',
            level: 'Secondary',
            needs: ['Infrastructure', 'Stationery'],
            image: '/black-girl.png',
            urgent: false,
          },
          {
            id: 3,
            name: 'Rural Hope Academy',
            location: 'Polokwane, Limpopo',
            level: 'Primary',
            needs: ['Fees Support', 'Computer Lab'],
            image: '/black-girl.png',
            urgent: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSchools();
  }, []);

  // Filter schools
  const filteredSchools = schools.filter((school) => {
    return (
      (filterLocation === '' ||
        school.location.toLowerCase().includes(filterLocation.toLowerCase())) &&
      (filterNeed === '' ||
        (school.needs && school.needs.some((need: string) =>
          need.toLowerCase().includes(filterNeed.toLowerCase()),
        )) || (school.areasOfNeed && school.areasOfNeed.toLowerCase().includes(filterNeed.toLowerCase()))) &&
      (filterLevel === '' || school.level === filterLevel)
    );
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-40 pb-20 overflow-hidden text-white"
        style={{ backgroundColor: PRIMARY_COLOR }}
      >
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full w-96 h-96 opacity-10 blur-3xl"
          style={{ backgroundColor: ACCENT_COLOR }}
        />
        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="mb-4 text-4xl font-extrabold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Support Schools. Empower Futures.
            </motion.h1>
            <motion.p
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Njere CSR Connect links schools in need with companies and
              organizations ready to sponsor education initiatives.
            </motion.p>
            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                className="flex items-center justify-center px-8 py-4 font-bold text-blue-900 transition-all transform bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100 hover:scale-105"
                onClick={() => setIsSchoolModalOpen(true)}
              >
                Register Your School
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button
                className="px-8 py-4 font-bold text-white transition-all border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-blue-900"
                onClick={() => setIsCompanyModalOpen(true)}
              >
                Register Your Company
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Companies - Browse Schools */}
      <section id="browse-schools" className="py-20 bg-white">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2
              className="text-base font-semibold tracking-wider uppercase"
              style={{ color: ACCENT_COLOR }}
            >
              For Companies
            </h2>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Browse Schools
            </h2>
            <p className="text-lg text-gray-600">
              Companies and organizations can explore registered schools and
              choose where to direct their support.
            </p>
          </div>

          {/* Filters */}
          <motion.div
            className="max-w-4xl p-6 mx-auto mb-8 bg-gray-50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Location */}
              <div>
                <label
                  htmlFor="filterLocation"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="filterLocation"
                  placeholder="Enter location"
                  value={filterLocation}
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-400 rounded-lg focus:ring-2 focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* Need */}
              <div>
                <label
                  htmlFor="filterNeed"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Area of Need
                </label>
                <select
                  id="filterNeed"
                  value={filterNeed}
                  onChange={(e) => setFilterNeed(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Needs</option>
                  <option value="ICT Equipment">ICT Equipment</option>
                  <option value="Textbooks">Textbooks</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Stationery">Stationery</option>
                  <option value="Fees Support">Fees Support</option>
                  <option value="Computer Lab">Computer Lab</option>
                </select>
              </div>
              {/* Level */}
              <div>
                <label
                  htmlFor="filterLevel"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  School Level
                </label>
                <select
                  id="filterLevel"
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none cursor-pointer focus:ring-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">All Levels</option>
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* School Listings */}
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
          ) : (
            <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map((school, index) => (
                <motion.div
                  key={school.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden transition-shadow bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={school.image || '/black-girl.png'}
                      alt={school.schoolName}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    {school.urgent && (
                      <div
                        className="absolute px-3 py-1 text-xs font-bold text-white rounded-full top-4 right-4"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        Urgent Need
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {school.name || school.schoolName}
                    </h3>
                    <div className="flex items-center mb-4 text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{school.location}</span>
                    </div>
                    <div className="mb-4">
                      <p className="mb-2 text-sm font-medium text-gray-700">
                        Needs:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className="px-2 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: '#f0f9ff',
                            color: PRIMARY_COLOR,
                          }}
                        >
                          {school.needs && school.needs.length > 0 ? school.needs[0] : school.areasOfNeed}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/csr/school/${school.id}`}
                      className="flex items-center justify-center w-full py-2 font-medium text-white transition-opacity rounded-full cursor-pointer hover:opacity-90"
                      style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                      View Full Profile
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section, Featured Schools, Why Join, and Footer remain unchanged */}

      <Footer />
      <RegisterSchoolModal
        isOpen={isSchoolModalOpen}
        onClose={() => setIsSchoolModalOpen(false)}
      />
      <RegisterCompanyModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
      />
    </div>
  );
};

export default CSRPage;


