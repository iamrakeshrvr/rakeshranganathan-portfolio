"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
       
      <h3 className="uppercase tracking-[20px] text-white-500 text-2xl mt-8 md:mt-0">
        About
      </h3>

      <div className="flex flex-col items-start md:flex-row mt-8">
        <div className="md:flex-shrink-0">
          
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 text-left">
          <p className="text-base animate-pulse">
            "I am a diligent and high-achieving student currently pursuing my postgraduate diploma in Full Stack Software Development at Lambton College,
             Canada. With a consistently strong academic track record and an unwavering passion for computer science,
              I am wholeheartedly dedicated to both my studies and personal growth.

             My academic journey has provided me with a deep expertise in Full Stack Web Development, 
             offering me a solid foundation in this field. In addition to excelling in coursework, I have actively engaged in various volunteering initiatives and sports, allowing me to cultivate invaluable leadership skills and make meaningful contributions to the campus community.

             I am genuinely enthusiastic about applying my well-rounded academic knowledge and honed skills to tackle real-world challenges 
             and explore new opportunities."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;