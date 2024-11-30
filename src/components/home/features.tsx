
import React from 'react';
import { BookOpen, Video, MessageCircle, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Comprehensive Curriculum',
    description: 'Well-structured courses designed by industry experts covering fundamentals to advanced topics.'
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: 'HD Video Lessons',
    description: 'Clear and concise video tutorials with practical examples and real-world applications.'
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: 'Expert Support',
    description: '24/7 support from our team of experienced developers to help you overcome challenges.'
  },
  {
    icon: <GraduationCap className="h-8 w-8" />,
    title: 'Certification',
    description: 'Earn industry-recognized certificates upon successful completion of courses.'
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Discover what makes our platform the best choice for learning</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}