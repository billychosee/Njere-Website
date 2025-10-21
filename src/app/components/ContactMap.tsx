// app/components/ContactMap.tsx

'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the required props for the map component
interface ContactMapProps {
  lat: number;
  lng: number;
}

// 13 Brentwood Avenue, Mt Harare, Zimbabwe
// Approx Coordinates for 13 Brentwood Avenue
const DEFAULT_CENTER = {
  lat: -17.7818, // Latitude
  lng: 31.0264, // Longitude
};

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '0 0 1rem 1rem',
};

// Define the libraries array for the Google Maps API
const libraries: ('places' | 'drawing' | 'geometry')[] = ['places'];

const ContactMap: React.FC<ContactMapProps> = ({ lat, lng }) => {
  const center = { lat, lng };

  // NEXT_PUBLIC prefix for client-side environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex items-center justify-center w-full p-8 text-center bg-red-100 h-96">
        <p className="text-lg text-red-700">
          Error: Google Maps API key is missing. Please set
          NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
        </p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={libraries}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default ContactMap;
