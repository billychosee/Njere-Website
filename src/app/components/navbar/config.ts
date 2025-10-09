import {
  FiHome,
  FiInfo,
  FiGrid,
  FiUsers,
  FiMail,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';

export const NAV_ITEMS = [
  {
    label: 'HOME',
    href: '/',
    icon: FiHome,
    iconClass: 'text-current',
  },
  {
    label: 'ABOUT US',
    href: '/about-us',
    icon: FiInfo,
    iconClass: 'text-current',
  },
  {
    label: 'MODULES',
    href: '/contact-us',
    icon: FiMail,
    iconClass: 'text-current',
    dropdown: {
      items: [
        {
          label: 'Administrative',
          href: '/',
        },
        { label: 'Finances', href: '/' },
        {
          label: 'Academics',
          href: '/',
        },
      ],
    },
  },
  {
    label: 'INTEGRATIONS',
    href: '/integrations',
    icon: FiGrid,
    iconClass: 'text-current',
  },
  {
    label: 'CAREERS',
    href: '/',
    icon: FiUsers,
    iconClass: 'text-current',
  },
  {
    label: 'CSR',
    href: '/contact-us',
    icon: FiMail,
    iconClass: 'text-current',
  },
  {
    label: 'AFFILIATE',
    href: '/affiliate',
    icon: FiMail,
    iconClass: 'text-current',
  },
  {
    label: 'CONTACT',
    href: '/contact-us',
    icon: FiMail,
    iconClass: 'text-current',
  },
];

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp,
};
