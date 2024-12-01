import React from "react";
import Header from "../components/about-us/Header";
import Section from "../components/about-us/Section";
import TeamMember from "../components/about-us/TeamMember";
import Stats from "../components/about-us/Stats";
import ContactSection from "../components/about-us/ContactSection";
import ContributeSection from "../components/about-us/ContributeSection";

const About = () => {
  const teamMembers = [
    {
      name: "Heera Singh Lodhi",
      role: "Software Developer",
      description:
        "I am Heera Singh Lodhi, a passionate and dedicated software developer with a strong foundation in computer science and engineering.",
      imageUrl: "https://avatars.githubusercontent.com/u/71516269",
    },
    {
      name: "Rahul Sen",
      role: "Web Developer",
      description:
        "I have a keen interest in programming and possess solid knowledge of object-oriented programming, HTML, CSS, JavaScript, WordPress and wix studio.",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQEx5e0Ffmg85w/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729663348133?e=1733688000&v=beta&t=KHpl1as2Q1FNceQkk8dVJawG7-zmNKi-IteQ0paru3Q",
    },
    {
      name: "Rahul Kurmi",
      role: "Web Developer",
      description:
        "Greate knowledge of web development and drag & drop website builders like WordPress, Wix Studio and also HTML, CSS, JS",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl px-4 py-12 mx-auto">
        <Section title="About edevhindi">
          <p className="mb-4 text-gray-600">
            edevhindi एक blogging website है जहाँ पर आप मिलते computer
            development सम्बन्धित articles मिलते है, जिनकी मदद से आप
            programming, कॉलेज, university आदि के लिए नोट्स प्राप्त कर सकते है।
          </p>
          <p className="mb-4 text-gray-600">
            edevhindi अभी एक developing website है, जिस पर blogs अभी बहुत कम है
            in future add करता रहूँगा।
          </p>
          <p className="text-gray-600">
            website एवं articles अच्छे लगे हो तो अपने friends के साथ share कर
            सकते और नोटिफिकेशन को चालू रखें latest update पाने के लिए।
          </p>
        </Section>

        <Stats />

        <Section title="Mission & Vision">
          <p className="mb-4 text-gray-600">
            इस वेबसाइट के माध्यम से हमारा एक ही उद्देश्य है की हिंदी मध्यम से
            कंप्यूटर पड़ने वाले छात्रों की मदद की जा सके आजकल बहुत सी वेबसाइट पर
            देखा गया है, हिंदी में programming के articles है पर उतनी अच्छी
            quality एवं quantity नहीं है।
          </p>
          <p className="mb-4 text-gray-600">
            यह वेबसाइट सभी की सहयोग से ही चल रही है, जो भी इस फील्ड में अच्छे
            जानकारी रखता जो वो हमारे साथ जुड़ सकता है एवं ब्लॉग पब्लिश करवा सकता
            है। वेबसाइट की लेटेस्ट अपडेट पाने के लिए नोटिफिकेशन चालू रखे ताकि
            भविष्य में आने कंटेंट अपडेटेड रहेंगे।
          </p>
          <p className="text-gray-600">
            इस वेबसाइट पर हमने एक बुक स्टोर भी लॉच किया है जहाँ पर बहुत प्रकार
            के पीडीऍफ़ नोट्स उपलब्ध होंगे, यदि आपके पास handwritten पढ़फ हो तो
            contribute कर सकते है।
          </p>
        </Section>

        <ContributeSection />

        <Section title="Meet Our Team">
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </Section>

        <ContactSection />
      </main>

      <footer className="py-8 mt-12 text-white bg-gray-800">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <p>© {new Date().getFullYear()} edevhindi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
