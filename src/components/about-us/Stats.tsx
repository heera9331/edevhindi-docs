import React from 'react';
import { FaUsers, FaBookOpen, FaCode } from 'react-icons/fa';

const StatsCard = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Icon className="mb-3 text-4xl text-blue-600" />
    <span className="mb-2 text-3xl font-bold text-gray-800">{number}</span>
    <span className="text-gray-600">{label}</span>
  </div>
);

const Stats = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
      <StatsCard icon={FaUsers} number="1000+" label="Active Users" />
      <StatsCard icon={FaBookOpen} number="100+" label="Articles" />
      <StatsCard icon={FaCode} number="50+" label="Programming Tutorials" />
    </div>
  );
};

export default Stats;