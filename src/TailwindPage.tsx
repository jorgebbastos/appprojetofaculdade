import React from 'react';
import FetchProfile from './components/FetchProfile';

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl text-gray-800">Tailwind CSS Profile</h1>
      <FetchProfile username="octocat" />
    </div>
  );
};

export default TailwindPage;
