import { NextResponse } from 'next/server';

// Force static generation for API routes when using output: export
export const dynamic = 'force-static';

export async function GET() {
  return NextResponse.json({ message: 'API is working!' });
}
