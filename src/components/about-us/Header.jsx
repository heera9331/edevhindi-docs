import React from 'react';

const Header = () => {
  return (
    <header className="py-16 text-white bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-4xl px-4 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">About edevhindi</h1>
        <p className="text-xl text-blue-100">Empowering Hindi-speaking developers with quality programming resources</p>
      </div>
    </header>
  );
};

export default Header;