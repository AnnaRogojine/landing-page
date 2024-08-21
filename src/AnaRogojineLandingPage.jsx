import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import heroImage from './assets/profile.jpg';
import profileImage from './assets/profile.jpg';
import workImage from './assets/work.jpg';
import standupImage from './assets/standup.jpg';

const AnaRogojineLandingPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen px-6 py-10">
      {/* Hero Section */}
      <div className="relative w-full max-w-3xl h-64 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <img src={heroImage} alt="Ana Rogojine" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative z-10 p-8 text-white">
          <h1 className="text-5xl font-bold">Ana Rogojine</h1>
          <p className="text-2xl mt-2">Software Developer</p>
        </div>
      </div>

      {/* About and Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600">
            Passionate software developer with 4 years of experience specializing in backend technologies, particularly in .NET and Node.js.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
          <p className="mt-4 text-gray-600">
            Tel Aviv, Israel | +972 54-752-5003 | anarogozin@gmail.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com/in/anna-rogojine" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/AnnaRogojine" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="w-full flex justify-center mt-20">
        <div className="w-full max-w-lg">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="w-full mb-4 animate__fadeInLeft">
              <img
                src={workImage}
                alt="Ana at work"
                className="w-full rounded shadow-lg"
                style={{ width: '400px', height: '320px' }} // Fixed size for work image
              />
            </div>
            <div className="w-full mb-4 animate__fadeInRight">
              <img
                src={standupImage}
                alt="Ana doing stand-up"
                className="w-full rounded shadow-lg"
                style={{ width: '400px', height: '320px' }} // Fixed size for stand-up image
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-12 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-800">Backend Development</span>
            <span className="text-gray-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-800">DevOps</span>
            <span className="text-gray-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-pink-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-800">Frontend Development</span>
            <span className="text-gray-600">60%</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 mt-20 text-center text-gray-600">
        © 2024 Ana Rogojine - All Rights Reserved
      </footer>
    </div>
  );
};

export default AnaRogojineLandingPage;