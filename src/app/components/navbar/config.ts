import { 
  FiHome, 
  FiInfo, 
  FiGrid, 
  FiBox, 
  FiUsers, 
  FiMail,
  FiSearch,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiGlobe
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
    label: 'SERVICES',
    href: '/services',
    icon: FiGrid,
  },
  {
    label: 'INTEGRATIONS',
    href: '/industries',
    icon: FiGrid,
    iconClass: 'text-current',
  },
  {
    label: 'CAREERS',
    href: 'https://erp.smatechgroup.com/recruitment/recruitment_portal',
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
    href: '/contact-us',
    icon: FiMail,
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
          label: 'AI & Machine Learning',
          href: '/services/ai-and-machine-learning',
        },
        { label: 'Cyber Security', href: '/services/cyber-security' },
        {
          label: 'Software Development',
          href: '/services/software-development',
        },
      ] as const,
    },
  },
  // {
  //   label: 'PRICING',
  //   href: '/contact-us',
  //   icon: FiMail,
  //   iconClass: 'text-current',
  // },
  {
    label: 'CONTACT',
    href: '/contact-us',
    icon: FiMail,
    iconClass: 'text-current',
  },
] as const;

export const ICONS = {
  search: FiSearch,
  bars: FiMenu,
  times: FiX,
  chevronDown: FiChevronDown,
  chevronUp: FiChevronUp
} as const;
