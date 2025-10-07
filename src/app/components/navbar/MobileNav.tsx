'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_ITEMS, ICONS } from './config';
import type { NavItem, DropdownItem } from './types';
import { motion, AnimatePresence } from 'framer-motion';

function hasDropdown(
  item: NavItem,
): item is NavItem & { dropdown: { items: readonly DropdownItem[] } } {
  return !!item.dropdown;
}

export default function MobileNav({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle();
      }
    },
    [onToggle],
  );

  useEffect(() => {
    if (!isOpen) setOpenDropdown(null);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClickOutside]);

  const renderDropdownItems = (items: readonly DropdownItem[]) => (
    <motion.ul
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#02ACC3] pl-4 overflow-hidden"
    >
      {items.map((subItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-50"
            onClick={onToggle}
          >
            {subItem.label}
          </Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="p-2 text-gray-700 lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <ICONS.times size={24} /> : <ICONS.bars size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 bottom-0 right-0 z-50 flex flex-col w-3/4 max-w-sm p-6 bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <Link href="/" onClick={onToggle}>
                  <Image
                    src="/njere-logo.svg"
                    alt="Njere Logo"
                    width={140}
                    height={35}
                    className="object-contain"
                  />
                </Link>
                <button
                  onClick={onToggle}
                  className="p-2 text-gray-700 rounded-full hover:bg-gray-100"
                >
                  <ICONS.times size={20} />
                </button>
              </div>

              {/* Nav Items */}
              <ul className="flex flex-col flex-1 gap-2 font-medium text-gray-700">
                {NAV_ITEMS.map((item) => {
                  const isDropdownItem = hasDropdown(item);
                  const isDropdownOnly =
                    isDropdownItem &&
                    (item.label === 'INDUSTRIES' || item.label === 'PRODUCTS');

                  return (
                    <li
                      key={item.href}
                      className="pb-2 border-b border-gray-100 last:border-0"
                    >
                      {isDropdownOnly ? (
                        <>
                          <button
                            className={`flex items-center justify-between w-full py-2.5 px-3 hover:bg-gray-50 rounded text-sm ${
                              openDropdown === item.href
                                ? 'text-[#02ACC3] font-semibold'
                                : ''
                            }`}
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === item.href ? null : item.href,
                              )
                            }
                          >
                            <span>{item.label}</span>
                            {openDropdown === item.href ? (
                              <ICONS.chevronUp size={16} />
                            ) : (
                              <ICONS.chevronDown size={16} />
                            )}
                          </button>

                          <AnimatePresence>
                            {openDropdown === item.href &&
                              renderDropdownItems(item.dropdown.items)}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-2.5 px-3 hover:bg-gray-50 rounded text-sm"
                          onClick={onToggle}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                        >
                          <span>{item.label}</span>
                          {isDropdownItem && <ICONS.chevronDown size={16} />}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Get Started Button */}
              <div className="pt-6 mt-6 border-t border-gray-200">
                <Link
                  href="/get-started"
                  className="bg-[#02ACC3] text-white px-5 py-3 rounded-full text-sm font-medium flex items-center justify-center shadow-lg transition-all duration-200 hover:bg-[#0296AD] active:scale-[0.98] w-full"
                  onClick={onToggle}
                >
                  Get started
                  <span className="flex items-center justify-center w-4 h-4 ml-2 rounded-full bg-white/10">
                    <span className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></span>
                  </span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
