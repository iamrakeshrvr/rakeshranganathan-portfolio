"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EmailShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';

const Header = () => {
  const shareUrl = ''; // Replace with your URL

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between mx-auto z-20 xl:items-center"> {/* Removed max-w-7xl */}
      <div className="flex flex-row items-center justify-between w-full"> {/* Added a new div */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.8, // Adjust the scale as needed
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <LinkedinShareButton url="https://www.linkedin.com/in/rakesh-ranganathan-ab9337194?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BYwEjreKQ7aD4fDFxrddRA%3D%3D">
            <img src="/linkedin.png" alt="LinkedIn" className="icon" /> {/* Added className */}
          </LinkedinShareButton>
          <a href="https://github.com/iamrakeshrvr" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="icon filter brightness-0 invert" /> {/* Updated the image source and added className */}
          </a>
          <a href="https://www.instagram.com/iamrakeshrvr/?next=%2F#" target="_blank" rel="noopener noreferrer">
            <img src="/insta.png" alt="Instagram" className="icon" /> {/* Updated the image source and added className */}
          </a>
        </motion.div>
        <Link href="#contactme">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.8, // Adjust the scale as needed
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <EmailShareButton url={shareUrl}>
              <img src="/mail.png" alt="Email" className="icon filter brightness-0 invert" /> {/* Added className */}
            </EmailShareButton>
            <p className="uppercase hidden md:inline-flex text-sm text-white-400">
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Add CSS for the "icon" class in your styles */}
      <style jsx>{`
        .icon {
          width: 30px; /* Adjust the width as needed */
          height: auto; /* Maintain aspect ratio */
          margin-right: 10px; /* Add spacing between icons */
        }
      `}</style>
    </header>
  );
};

export default Header;
