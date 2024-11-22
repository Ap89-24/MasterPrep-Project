import React from 'react';
import { BookOpen, Brain, Clock, Trophy } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Master Your Future with
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {" "}MasterPrep
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Comprehensive preparation platform for JEE, NEET, CUET, GATE, CAT and more.
              Practice with our adaptive question bank and real-time analytics.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Preparing Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-purple-400" />}
              title="Adaptive Learning"
              description="Questions tailored to your learning pace and skill level"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-purple-400" />}
              title="Smart Analytics"
              description="Track your progress with detailed performance insights"
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-purple-400" />}
              title="Time Management"
              description="Practice with timed tests to improve speed and accuracy"
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8 text-purple-400" />}
              title="Previous Year Papers"
              description="Access and practice with authentic previous year questions"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Home;