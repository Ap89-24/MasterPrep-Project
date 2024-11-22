import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import QuestionBank from '../components/QuestionBank';
import HybridLearning from '../components/HybridLearning';

const Dashboard = () => {
  const performanceData = [
    { date: 'Mon', score: 85 },
    { date: 'Tue', score: 78 },
    { date: 'Wed', score: 90 },
    { date: 'Thu', score: 88 },
    { date: 'Fri', score: 92 },
  ];

  const subjectData = [
    { name: 'Physics', value: 35 },
    { name: 'Chemistry', value: 30 },
    { name: 'Mathematics', value: 35 },
  ];

  const COLORS = ['#8b5cf6', '#ec4899', '#6366f1'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Performance Chart */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
          <LineChart width={500} height={300} data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="date" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#8b5cf6"
              strokeWidth={2}
            />
          </LineChart>
        </div>

        {/* Subject Distribution */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Subject Distribution</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={subjectData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {subjectData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Question Bank Section */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-6">Practice Questions</h2>
        <QuestionBank />
      </div>

      {/* Hybrid Learning Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <HybridLearning />
      </div>
    </div>
  );
};

export default Dashboard;