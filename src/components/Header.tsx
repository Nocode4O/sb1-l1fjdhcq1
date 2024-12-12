import React from 'react';
import { Compass } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Wanderlust</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition">Plan Trip</a>
            <a href="#" className="hover:text-blue-200 transition">My Journeys</a>
            <a href="#" className="hover:text-blue-200 transition">Translate</a>
            <a href="#" className="hover:text-blue-200 transition">Journal</a>
          </nav>
        </div>
      </div>
    </header>
  );
}