import React from 'react';

const TeamMember = ({ name, role, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 font-medium mb-2">{role}</p>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default TeamMember;