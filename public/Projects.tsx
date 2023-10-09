"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons'; // Import SocialIcon from react-social-icons

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
  liveAppLink: string;
};

type Props = {};

function Projects({}: Props) {
  const projects: Project[] = [
    {
      title: 'Netflix Clone',
      description: 'Created a secure and user-friendly Netflix-inspired web app with React, Firebase authentication and Stripe payments.',
      imageUrl: 'nett.png',
      githubLink: 'https://github.com/iamrakeshrvr/netflixx',
      liveAppLink: 'http://netflix-clone-d75ce.web.app',
    },
    {
      title: 'Cars Hub',
      description: 'Crafted a visually stunning Car Showcase Website using Next.js, React, and Tailwind CSS.',
      imageUrl: 'cars.png',
      githubLink: 'https://github.com/iamrakeshrvr/cars_hub',
      liveAppLink: 'https://cars-hub-nine.vercel.app/',
    },
    {
      title: 'Nike Website',
      description: 'Created an impressive Nike Clone Website using Tailwind CSS, offering dynamic features, top-notch user satisfaction.',
      imageUrl: 'nike.png',
      githubLink: 'https://github.com/iamrakeshrvr/nike',
      liveAppLink: 'https://iamrakeshrvr.github.io/nike/',
    },
    // Add more projects here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#191714]/80">
        {projects?.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen animate-pulse"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imageUrl}
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center animate-pulse font-bold text-gray-500">
                <span>Project {i + 1} of {projects.length}:</span> {project.title}
              </h4>
              <p className="text-lg text-center md:text-left animate-pulse">{project.description}</p>
              <div className="flex justify-center md:justify-start">
                {/* Centered Links with Padding */}
                <div className="flex items-center space-x-4 animate-pulse">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <SocialIcon url={project.githubLink} target="_blank" rel="noopener noreferrer" />
                  </a>
                  <a href={project.liveAppLink} target="_blank" rel="noopener noreferrer">
                    <SocialIcon url={project.liveAppLink} target="_blank" rel="noopener noreferrer" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;