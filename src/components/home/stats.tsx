import React from 'react';
import { Users, Eye, Book, FileText } from 'lucide-react';

const stats = [
  { icon: <Users className="h-8 w-8" />, value: '1,200+', label: 'Visitors' },
  { icon: <Eye className="h-8 w-8" />, value: '50K+', label: 'All Time Impressions' },
  { icon: <Book className="h-8 w-8" />, value: '40+', label: 'Covered Topics' },
  { icon: <FileText className="h-8 w-8" />, value: '3+', label: 'PDFs' },
];

export function Stats() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}