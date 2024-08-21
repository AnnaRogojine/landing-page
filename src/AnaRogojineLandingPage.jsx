import React from "react";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
import heroImage from "./assets/hero-image.jpg";
import profileImage from "./assets/profile.jpg";
import workImage from "./assets/work.jpg";
import standupImage from "./assets/standup.jpg";
// import floatingIcon from "./assets/floating-icon.png";
// import heroBackground from "./assets/hero-background.mp4";

const AnaRogojineLandingPage = () => {
  const projects = [
    { image: workImage, title: "Project 1" },
    { image: standupImage, title: "Project 2" },
    { image: profileImage, title: "Project 3" },
  ];

  const skills = [
    { name: "Backend Development", percentage: 80 },
    { name: "DevOps", percentage: 70 },
    { name: "Frontend Development", percentage: 60 },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen px-6 py-10">
      {/* Hero Section */}
      <div className="relative w-full max-w-5xl h-96 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
        <video
          // src={heroBackground}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-10 p-8 text-white flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">Ana Rogojine</h1>
          <p className="text-2xl mt-2">Creative Software Developer</p>
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110">
            View Portfolio
          </button>
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <img
            // src={floatingIcon}
            alt="Floating Icon"
            className="w-16 h-16 animate-bounce"
          />
        </div>
      </div>

      {/* Showcase Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg">{project.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center mt-12">
        {skills.map((skill, index) => (
          <div key={index} className="relative m-4">
            <div
              className="radial-progress text-blue-500"
              style={{ "--value": skill.percentage, "--size": "10rem" }}
            >
              {skill.percentage}%
            </div>
            <p className="text-center mt-2 text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-12 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 mt-20 text-center text-gray-600 bg-gray-900 text-white">
        <div className="mb-4">
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-400 hover:text-white"
          >
            <FaDribbble size={24} />
          </a>
          <a
            href="https://linkedin.com/in/anna-rogojine"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-400 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/AnnaRogojine"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-gray-400 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p>© 2024 Ana Rogojine - All Rights Reserved</p>
        <a href="#top" className="block mt-4 text-blue-500 hover:text-blue-700">
          Back to top
        </a>
      </footer>
    </div>
  );
};

export default AnaRogojineLandingPage;