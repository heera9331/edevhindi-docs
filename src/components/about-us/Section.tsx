import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

export default Section;