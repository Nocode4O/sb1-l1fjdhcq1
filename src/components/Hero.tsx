import React from 'react';
import { MapPin, Calendar, Globe } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">Your Journey Begins Here</h1>
          <p className="text-xl mb-8">Personalized travel experiences powered by AI. Plan, explore, and create memories that last a lifetime.</p>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="text-blue-600" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full p-2 text-gray-800 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="text-blue-600" />
                <input
                  type="date"
                  className="w-full p-2 text-gray-800 border rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Plan My Trip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}