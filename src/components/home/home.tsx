import React from 'react';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn Programming with Expert Guidance
            </h1>
            <p className="text-lg mb-8 text-indigo-100">
              Master coding skills with our comprehensive courses and hands-on projects.
              Join thousands of successful developers who started their journey with us.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-indigo-50 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                View Courses
              </button>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <StatCard icon={<BookOpen />} title="100+" description="Video Courses" />
            <StatCard icon={<Users />} title="50k+" description="Active Students" />
            <StatCard icon={<Award />} title="15+" description="Expert Mentors" />
            <StatCard icon={<BookOpen />} title="24/7" description="Support Available" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-indigo-100">{description}</div>
    </div>
  );
}