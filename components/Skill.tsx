
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  name: string; // Skill name
  proficiency: string; // Proficiency level
  imageUrl: string; // URL to the skill image
};

function Skill({ directionLeft, name, proficiency, imageUrl }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imageUrl}
        alt={name}
        className="rounded-full border border-white-500 object-cover w-12 md:w-14 xl:w-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 md:w-14 xl:w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{proficiency}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;