"use client"
import React from 'react'
import { useTypewriter , Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      'Hello World, The name is Rakesh!',
      "I'm a Full Stack Web Developer",
      'I love to travel.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover text-center overflow-hidden"
        src="/rakesh's photo.jpeg"
        alt="rakesh's photo"
      />
      <div className="z-20">
        <h2 className="text-sm animate-pulse uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold">
          <span className="gradient-text animate-pulse">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="herobutton animate-pulse">About</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton animate-pulse">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton animate-pulse">Projects</button>
          </Link>
          <Link href="#contactme">
            <button className="herobutton animate-pulse">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;


