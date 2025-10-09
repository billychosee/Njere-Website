// components/StructuredData.tsx
'use client';

const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Become an Affiliate - Njere ERP',
          description:
            'Unlock passive income with Njere! Earn a generous 10% recurring commission by referring schools to Njere ERP, the leading school management solution in Zimbabwe.',
          url: 'https://njere.co.zw/affiliate',
          mainEntity: {
            '@type': 'Program',
            name: 'Njere ERP Affiliate Program',
            description:
              'Earn recurring commissions by referring schools to Njere ERP',
            offers: {
              '@type': 'Offer',
              description: '10% recurring commission on successful referrals',
            },
            provider: {
              '@type': 'Organization',
              name: 'Njere',
              url: 'https://njere.co.zw',
            },
          },
        }),
      }}
    />
  );
};

export default StructuredData;
