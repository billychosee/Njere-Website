import { NextRequest, NextResponse } from 'next/server';

// Force static generation for API routes when using output: export
export const dynamic = 'force-static';

// In-memory storage for demo purposes - replace with actual database
let companies: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'companyName',
      'industry',
      'location',
      'province',
      'contactName',
      'position',
      'phone',
      'email',
      'areasOfInterest',
      'budget',
      'motivation',
      'consent'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Check if consent is given
    if (!body.consent) {
      return NextResponse.json(
        { error: 'Consent is required' },
        { status: 400 }
      );
    }

    // Create company object
    const company = {
      id: Date.now().toString(),
      ...body,
      registeredAt: new Date().toISOString(),
    };

    // Save to storage (in production, save to database)
    companies.push(company);

    console.log('Company registered:', company);

    return NextResponse.json(
      {
        message: 'Company registered successfully',
        company: {
          id: company.id,
          companyName: company.companyName,
          email: company.email,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error registering company:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Fetch companies from the external API
    const response = await fetch('https://csr-njere.smathub.com/api/companies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Return the data from the external API
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}