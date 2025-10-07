'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import useScrollHide from './hooks/useScrollHide';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navbarVisible = useScrollHide(mobileMenuOpen);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    // Outer Fixed Container: provides the z-index and spacing for the floating effect
    <div className="fixed top-0 left-0 z-50 w-full pt-6">
      {/* Floating Glass Nav Container: handles the max-width, full border, glassmorphism, and shadow */}
      <nav
        className={`mx-auto max-w-7xl border border-white/80 shadow-2xl bg-white/50 backdrop-blur-xl rounded-2xl transition-transform duration-300 ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Inner Content Wrapper: handles spacing and alignment within the floating bar */}
        <div className="relative flex items-center justify-between w-full px-8 py-3">
          {/* Mobile Logo - visible on mobile only and ensures it's on the left */}
          <div className="flex items-center flex-shrink-0 lg:hidden">
            <Link href="/">
              <Image
                src="/njere-logo.svg"
                alt="Njere Logo"
                width={140}
                height={35}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Component */}
          <DesktopNav />

          {/* Mobile Navigation Component */}
          <MobileNav
            isOpen={mobileMenuOpen}
            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </nav>
    </div>
  );
}
