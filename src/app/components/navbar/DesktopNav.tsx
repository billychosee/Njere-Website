'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, ICONS } from './config';
import type { NavItem, DropdownItem } from './types';
import { usePathname } from 'next/navigation';

function hasDropdown(
  item: NavItem,
): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname() || '';

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
  ) => (
    <ul
      className={`absolute ${activeDropdown === item.href ? 'block' : 'hidden'} group-hover:block bg-white/80 backdrop-blur-xl shadow-xl rounded-lg text-black font-normal min-w-[12rem] z-50 py-2 transition-all duration-200 ease-out border border-white/40 mt-2`}
      onMouseEnter={() => setActiveDropdown(item.href)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {item.dropdown.items.map((subItem: DropdownItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-4 py-2 text-sm font-bold transition-colors hover:bg-white/50 hover:text-black"
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

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
    const ChevronIcon =
      activeDropdown === item.href ? ICONS.chevronUp : ICONS.chevronDown;

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
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {isDropdownOnly ? (
          <div
            className={itemClassName}
            onClick={() =>
              setActiveDropdown(activeDropdown === item.href ? null : item.href)
            }
          >
            <span className="flex items-center gap-1">
              {item.label}
              <ChevronIcon className="w-3 h-3" />
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
                <ChevronIcon className="w-3 h-3" />
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
