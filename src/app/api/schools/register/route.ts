import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('=== API: Received school registration ===');
    console.log('School Name:', body.schoolName);
    console.log('Email:', body.email);

    // Validate required fields
    const requiredFields = [
      'schoolName',
      'location',
      'province',
      'level',
      'contactName',
      'email',
      'phone',
      'schoolFees',
      'areasOfNeed',
      'motivation',
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    // Prepare data exactly like the test
    const schoolData = {
      school_name: body.schoolName,
      location: body.location,
      province: body.province,
      level: body.level,
      contact_name: body.contactName,
      position: body.position || null,
      phone: body.phone,
      email: body.email,
      school_fees: body.schoolFees,
      internet_connectivity: body.internetConnectivity || null,
      service_provider: body.serviceProvider || null,
      computer_lab: body.computerLab || null,
      computer_count: body.computerCount ? String(body.computerCount) : null,
      areas_of_need: body.areasOfNeed,
      motivation: body.motivation,
      consent: Boolean(body.consent),
    };

    console.log('Prepared data for Supabase:', schoolData);

    // Insert into Supabase
    const { data, error } = await supabase
      .from('schools')
      .insert(schoolData)
      .select();

    if (error) {
      console.error('=== API: Supabase Error ===');
      console.error('Error:', error);
      return NextResponse.json(
        { error: `Failed to register school: ${error.message}` },
        { status: 500 },
      );
    }

    console.log('=== API: Success ===');
    console.log('Inserted data:', data);

    return NextResponse.json(
      { message: 'School registered successfully', data },
      { status: 201 },
    );
  } catch (error) {
    console.error('=== API: Catch Error ===');
    console.error('Error:', error);
    return NextResponse.json(
      {
        error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      },
      { status: 500 },
    );
  }
}
