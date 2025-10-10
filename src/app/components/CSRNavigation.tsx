'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Define the primary and accent colors for a sleek, professional look
const PRIMARY_COLOR = '#00204f'; // Njere Blue
const ACCENT_COLOR = '#04baab'; // Njere Teal

const CSRNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Njere ERP</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-white transition-colors rounded-md hover:bg-white hover:bg-opacity-10"
              >
                Home
              </Link>
              <Link
                href="/csr"
                className="px-3 py-2 text-sm font-medium text-white transition-colors rounded-md hover:bg-white hover:bg-opacity-10"
              >
                CSR Connect
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-white transition-colors rounded-md hover:bg-white hover:bg-opacity-10"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-white transition-colors rounded-md hover:bg-white hover:bg-opacity-10"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-white hover:bg-opacity-10 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-white hover:bg-opacity-10"
            >
              Home
            </Link>
            <Link
              href="/csr"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-white hover:bg-opacity-10"
            >
              CSR Connect
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-white hover:bg-opacity-10"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-white hover:bg-opacity-10"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CSRNavigation;
