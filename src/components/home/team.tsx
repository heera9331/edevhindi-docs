import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Heera Singh Lodhi',
    role: 'Software Developer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHzG7m5bGbuJg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691073978482?e=1738800000&v=beta&t=PomRoyVbHWOZ3yw2SVaQKFaSdY__udenj-u0gmxz-W4',
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
    image: 'https://media.licdn.com/dms/image/v2/D5635AQEx5e0Ffmg85w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1729663348185?e=1733688000&v=beta&t=zjTV5Bqt-MGgoRYevnDChPzBd7eioCkEH4mLxi7v49Y',
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
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-lg text-gray-600">The passionate developers behind eDevHindi</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div key={index} className="overflow-hidden transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <img src={member.image} alt={member.name} className="object-cover w-full h-64" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                <div className="mb-4 text-indigo-600">{member.role}</div>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-900">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.email} className="text-gray-600 hover:text-gray-900">
                    <Mail className="w-5 h-5" />
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