// app/affiliate/page.tsx
import { Metadata } from 'next';
import AffiliateContent from './AffiliateContent';
import StructuredData from './StructuredData';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Become an Affiliate - Njere ERP',
  description:
    'Unlock passive income with Njere! Earn a generous 10% recurring commission by referring schools to Njere ERP, the leading school management solution in Zimbabwe.',
  keywords:
    'affiliate program, Njere ERP, school management, passive income, referral program',
  openGraph: {
    title: 'Become an Affiliate - Njere ERP',
    description:
      'Unlock passive income with Njere! Earn a generous 10% recurring commission by referring schools to Njere ERP.',
    images: [
      {
        url: '/og-affiliate.jpg',
        width: 1200,
        height: 630,
        alt: 'Njere ERP Affiliate Program',
      },
    ],
  },
};

export default function AffiliatePage() {
  return (
    <>
      <StructuredData />
      <AffiliateContent />
      <Footer />
    </>
  );
}
