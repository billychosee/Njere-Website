'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, ICONS } from './config';
import type { NavItem, DropdownItem } from './types';
import { usePathname } from 'next/navigation';

// Add custom animations to global CSS
// const style = document.createElement('style');
const a = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(4, 186, 171, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(4, 186, 171, 0.6), 0 0 30px rgba(4, 186, 171, 0.4);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`;
// document.head.appendChild(style);

function hasDropdown(
  item: NavItem,
): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname() || '';

  // Close dropdown when pathname changes (page navigation)
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  const getIsActive = (item: NavItem) => {
    if (!hasDropdown(item)) {
      return pathname === item.href;
    }

    // Custom logic to handle active state for parent links like INDUSTRIES
    if (item.label === 'INDUSTRIES' && pathname.startsWith('/industries')) {
      return true;
    }

    if (pathname.startsWith(item.href) && item.href !== '/') {
      return true;
    }

    return false;
  };

  const renderDropdown = (
    item: NavItem & { dropdown: { items: readonly DropdownItem[] } },
  ) => {
    // Group items into rows of 6
    const itemsPerRow = 6;
    const rows = [];
    for (let i = 0; i < item.dropdown.items.length; i += itemsPerRow) {
      rows.push(item.dropdown.items.slice(i, i + itemsPerRow));
    }

    return (
      <div
        className={`fixed left-0 right-0 top-20 ${activeDropdown === item.href ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'} group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto bg-gradient-to-br from-white/95 via-white/98 to-gray-50/95 backdrop-blur-3xl shadow-2xl rounded-b-3xl text-black font-normal z-50 p-10 transition-all duration-500 ease-out border-b-2 border-l-0 border-r-0 border-t-0 border-white/60 mt-3`}
        onMouseEnter={() => setActiveDropdown(item.href)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="relative">
          <div className="grid grid-cols-6 gap-6">
            {item.dropdown.items.map((subItem: DropdownItem, index: number) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={() => setActiveDropdown(null)}
                className="group relative overflow-hidden px-6 py-5 text-sm font-bold text-gray-800 transition-all duration-500 hover:text-white hover:bg-gradient-to-br hover:from-[#04baab] hover:via-[#03a8a0] hover:to-[#00204f] rounded-2xl text-center transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent hover:border-white/30 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 25}ms`,
                  animation:
                    activeDropdown === item.href
                      ? 'fadeInUp 0.5s ease-out forwards, float 3s ease-in-out infinite 1s'
                      : 'none',
                }}
              >
                <span className="relative z-20 tracking-wide drop-shadow-lg">
                  {subItem.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-[#04baab]/30 via-transparent to-[#00204f]/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 transition-all duration-700 delay-100 opacity-0 rounded-2xl group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#04baab] to-[#00204f] rounded-2xl opacity-0 group-hover:opacity-20 group-hover:blur-xl transition-opacity duration-500 -z-10"></div>
              </Link>
            ))}
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-30"></div>
        </div>
      </div>
    );
  };

  // Split navigation items for left and right sides
  const splitIndex = Math.ceil(NAV_ITEMS.length / 2);
  const leftNavItems = NAV_ITEMS.slice(0, splitIndex);
  const rightNavItems = NAV_ITEMS.slice(splitIndex);

  const renderNavItem = (item: NavItem) => {
    const isActive = getIsActive(item);
    const isDropdownItem = hasDropdown(item);
    const isDropdownOnly =
      isDropdownItem &&
      (item.label === 'INDUSTRIES' || item.label === 'PRODUCTS');
    const ChevronIcon = ICONS.chevronDown;

    const itemClassName = `relative px-1 py-1 text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#04baab] font-semibold'
        : 'text-gray-700 hover:text-[#04baab]'
    }`;

    return (
      <li
        key={item.label}
        className={`relative ${isDropdownItem ? 'group' : ''}`}
        onMouseEnter={() => isDropdownItem && setActiveDropdown(item.href)}
        onMouseLeave={() => {
          // Keep dropdown visible when hovering over it
          // Only hide when mouse leaves both nav item and dropdown
        }}
      >
        {isDropdownOnly ? (
          <div
            className={`${itemClassName} cursor-pointer`}
            onClick={() =>
              setActiveDropdown(activeDropdown === item.href ? null : item.href)
            }
          >
            <span className="flex items-center gap-1">
              {item.label}
              <ChevronIcon
                className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.href ? 'rotate-180' : ''}`}
              />
            </span>
          </div>
        ) : (
          <Link
            href={item.href}
            className={itemClassName}
            target={item.href.startsWith('http') ? '_blank' : undefined}
          >
            <span className="flex items-center gap-1">
              {item.label}
              {/* Only show chevron if it's a non-click-through dropdown like SERVICES */}
              {isDropdownItem && !isDropdownOnly && (
                <ChevronIcon
                  className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.href ? 'rotate-180' : ''}`}
                />
              )}
            </span>
          </Link>
        )}
        {isDropdownItem && renderDropdown(item)}
      </li>
    );
  };

  return (
    // This div contains all desktop-specific content and is hidden on mobile
    <div className="items-center justify-between flex-1 hidden w-full lg:flex">
      {/* Left Navigation Items */}
      <ul className="flex items-center gap-7">
        {leftNavItems.map((item) => renderNavItem(item))}
      </ul>

      {/* Centered Logo (Desktop Only) */}
      <Link
        href="/"
        className="absolute hidden transform -translate-x-1/2 left-1/2 lg:block"
      >
        <img src="/njere-logo.svg" alt="Logo" className="w-auto h-8" />
      </Link>

      {/* Right Navigation Items + Get Started Button */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-7">
          {rightNavItems.map((item) => renderNavItem(item))}
        </ul>

        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="bg-[#02ACC3] text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center shadow-lg transition-all duration-200 hover:bg-[#0296AD] active:scale-[0.98] whitespace-nowrap"
        >
          Get started
          <span className="flex items-center justify-center w-4 h-4 ml-2 rounded-full bg-white/10">
            <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80 flicker"></span>
          </span>
        </Link>
      </div>
    </div>
  );
}
