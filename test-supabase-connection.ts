import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Not set');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('Testing Supabase connection...');

    // Test basic connection
    const { data, error } = await supabase.from('schools').select('count');

    if (error) {
      console.error('Supabase error:', error);
    } else {
      console.log('Supabase connection successful!');
      console.log('Data:', data);
    }

    // Test insert
    console.log('Testing insert...');
    const { data: insertData, error: insertError } = await supabase
      .from('schools')
      .insert({
        school_name: 'Test School',
        location: 'Test Location',
        province: 'Test Province',
        contact_name: 'Test Contact',
        phone: '1234567890',
        email: 'test@example.com',
        school_fees: '1000',
        areas_of_need: 'ICT',
        motivation: 'Test motivation',
        consent: true,
      })
      .select();

    if (insertError) {
      console.error('Insert error:', insertError);
    } else {
      console.log('Insert successful:', insertData);
    }
  } catch (err) {
    console.error('Test error:', err);
  }
}

testConnection();
