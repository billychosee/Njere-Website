import { NextRequest, NextResponse } from 'next/server';
import { supabase } from  '@/app/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');
    const need = searchParams.get('need');
    const level = searchParams.get('level');

    let query = supabase.from('schools').select('*');

    // Apply filters if provided
    if (location) {
      query = query.ilike('location', `%${location}%`);
    }

    if (need) {
      query = query.ilike('areas_of_need', `%${need}%`);
    }

    if (level) {
      query = query.eq('level', level);
    }

    // Execute the query
    const { data, error } = await query;

    if (error) {
      console.error('Error fetching schools:', error);
      return NextResponse.json(
        { error: 'Failed to fetch schools' },
        { status: 500 },
      );
    }

    // Transform data to match frontend expectations
    const transformedSchools = data.map((school: any) => ({
      ...school,
      needs: school.areas_of_need ? school.areas_of_need.split(',').map((s: string) => s.trim()) : [],
    }));

    return NextResponse.json({ schools: transformedSchools });
  } catch (error) {
    console.error('Error in fetching schools:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
