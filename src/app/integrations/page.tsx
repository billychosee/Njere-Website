import type { Metadata } from 'next';
import Script from 'next/script';
import IntegrationsContent from './IntegrationsContent';

const siteUrl = 'https://njere.africa';
const pageTitle =
  'Integrations - Seamlessly Connect Your School Systems | Njere Africa';
const pageDescription =
  'Explore how Njere Africa integrates with existing school management systems, payment gateways, and educational tools to create a unified ecosystem, featuring Biometric Attendance and Real-time School Bus Tracking.';

// =======================
// PAGE METADATA (Server-Side)
// =======================
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/integrations`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
  alternates: {
    canonical: `${siteUrl}/integrations`,
  },
};

// =======================
// PAGE (Server Component)
// =======================
const IntegrationsPage = () => {
  return (
    <>
      {/* Schema Markup for SEO (Server-Side) */}
      <Script
        id="integrations-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: pageTitle,
            url: `${siteUrl}/integrations`,
            description: pageDescription,
          }),
        }}
      />

      {/* Client Component for the main page content */}
      <IntegrationsContent />
    </>
  );
};

export default IntegrationsPage;
