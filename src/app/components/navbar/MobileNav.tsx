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
      className="ml-6 mt-1 flex flex-col gap-1 border-l-2 border-[#02ACC3] pl-4 overflow-hidden"
    >
      {items.map((subItem) => (
        <li key={subItem.href}>
          <Link
            href={subItem.href}
            className="block py-2.5 px-4 hover:bg-gray-50 rounded hover:text-[#02ACC3] text-sm"
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
        className="p-2 text-gray-700 md:hidden"
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
            className="fixed inset-0 z-40 bg-white/30 backdrop-blur-md md:hidden"
          >
            <motion.div
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed right-0 z-50 flex flex-col w-full max-h-screen px-4 pt-4 pb-10 overflow-y-auto bg-white border-b border-l border-gray-200 shadow-lg scrollbar-thin scrollbar-thumb-gray-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b">
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
              <ul className="flex flex-col flex-1 gap-1 font-semibold text-black">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isDropdownItem = hasDropdown(item);
                  const isModulesDropdown = item.label === 'MODULES';

                  // Skip commented out items
                  if (item.label.startsWith('//')) return null;

                  return (
                    <li
                      key={item.href}
                      className="border-b border-gray-100 last:border-0"
                    >
                      {isModulesDropdown ? (
                        <>
                          <button
                            className={`flex items-center justify-between w-full py-3 px-4 hover:bg-gray-50 rounded ${
                              openDropdown === item.href ? 'text-[#02ACC3]' : ''
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
                              item.dropdown &&
                              renderDropdownItems(item.dropdown.items)}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center py-3 px-4 hover:bg-gray-50 rounded hover:text-[#02ACC3]"
                          onClick={onToggle}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Get Started Button */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/contact-us"
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