import React from 'react';
import { Brain, Languages, BookOpen, Camera } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Planning",
      description: "Get personalized recommendations based on your preferences and travel style."
    },
    {
      icon: <Languages className="h-8 w-8" />,
      title: "Real-time Translation",
      description: "Break language barriers with instant translation capabilities."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Travel Journal",
      description: "Document your adventures and create lasting memories."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photo Collections",
      description: "Capture and organize your travel moments in one place."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Wanderlust</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}