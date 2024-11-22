import React from 'react';
import { MapPin, Wifi, Calendar, Users, BookOpen, Video } from 'lucide-react';

const HybridLearning = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Hybrid Learning Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Online Mode */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <Wifi className="h-6 w-6 mr-2 text-purple-400" />
            Online Learning
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Video className="h-5 w-5 text-purple-400 mt-1" />
              <div>
                <h4 className="font-semibold">Live Interactive Sessions</h4>
                <p className="text-gray-400">Join live classes with real-time doubt resolution</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <BookOpen className="h-5 w-5 text-purple-400 mt-1" />
              <div>
                <h4 className="font-semibold">Digital Study Material</h4>
                <p className="text-gray-400">Access comprehensive study materials anytime</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 w-full bg-purple-600 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Start Learning Online
          </button>
        </div>

        {/* Offline Mode */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <MapPin className="h-6 w-6 mr-2 text-pink-400" />
            Offline Learning
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-pink-400 mt-1" />
              <div>
                <h4 className="font-semibold">Classroom Sessions</h4>
                <p className="text-gray-400">Traditional classroom experience with expert faculty</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-pink-400 mt-1" />
              <div>
                <h4 className="font-semibold">Flexible Schedule</h4>
                <p className="text-gray-400">Choose convenient batch timings</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 w-full bg-pink-600 py-2 rounded-lg hover:bg-pink-700 transition-colors">
            Find Nearby Centers
          </button>
        </div>
      </div>

      {/* Schedule Demo */}
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
          Schedule a Free Demo Class
        </button>
      </div>
    </div>
  );
};

export default HybridLearning;