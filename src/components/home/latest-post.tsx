
import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    excerpt: 'Learn the basics of HTML, CSS, and JavaScript to start your web development journey.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    date: '2024-03-15'
  },
  {
    id: 2,
    title: 'Python Programming Guide',
    excerpt: 'Master Python programming with our comprehensive guide for beginners.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80',
    date: '2024-03-10'
  },
  {
    id: 3,
    title: 'Database Management Systems',
    excerpt: 'Understanding the fundamentals of database management and SQL.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80',
    date: '2024-03-05'
  }
];

export function LatestPosts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h2>
          <p className="text-lg text-gray-600">Stay updated with our latest articles and tutorials</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-indigo-600 font-semibold flex items-center hover:text-indigo-700">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}