import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Heera Singh Lodhi',
    role: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'I am Heera Singh Lodhi, a passionate and dedicated software developer with a strong foundation in computer science and engineering.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:heera@example.com'
    }
  },
  {
    name: 'Rahul Sen',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'I have a keen interest in programming and possess solid knowledge of object-oriented programming, HTML, CSS, JavaScript, WordPress and wix studio.',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:rahul.sen@example.com'
    }
  },
  {
    name: 'Rahul Kurmi',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80',
    bio: 'Great knowledge of web development and drag & drop website builders like WordPress, Wix Studio and also HTML, CSS, JS',
    social: {
      github: '#',
      linkedin: '#',
      email: 'mailto:rahul.kurmi@example.com'
    }
  }
];

export function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">The passionate developers behind eDevHindi</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-indigo-600 mb-4">{member.role}</div>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.email} className="text-gray-600 hover:text-gray-900">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}