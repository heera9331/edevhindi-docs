import React from "react";
import { BookOpen, Users, Globe } from "lucide-react";

export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About eDevHindi
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              eDevHindi एक blogging website है जहाँ पर आप मिलते computer
              development सम्बन्धित articles मिलते है, जिनकी मदद से आप
              programming, कॉलेज, university आदि के लिए नोट्स प्राप्त कर सकते
              है।
            </p>
            <p className="text-lg text-gray-600 mb-6">
              eDevHindi अभी एक developing website है, जिस पर blogs अभी बहुत कम
              है in future add करता रहूँगा।
            </p>
            <p className="text-lg text-gray-600">
              website एवं articles अच्छे लगे हो तो अपने friends के साथ share कर
              सकते और नोटिफिकेशन को चालू रखें latest update पाने के लिए।
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-600">
                Comprehensive articles and tutorials for developers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growing Community</h3>
              <p className="text-gray-600">
                Join our community of passionate developers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hindi Content</h3>
              <p className="text-gray-600">
                Learn programming in Hindi language
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
