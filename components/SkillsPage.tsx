import React from 'react';
import Skill from './Skill'; // Import the Skill component

const SkillsPage: React.FC = () => {
  // Define an array of skills, each with its own properties
  const skills = [
    {
      skillName: 'React',
      proficiency: '70%', // Convert proficiency to string
      imageUrl: 'https://cdn.buttercms.com/fh9E8EjQQuBnvpcpHHlZ', // Replace with actual URL
    },
    {
      skillName: 'Next.js',
      proficiency: '70%', // Convert proficiency to string
      imageUrl: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png', // Replace with actual URL
    },
    {
      skillName: 'Javascript',
      proficiency: '80%', // Convert proficiency to string
      imageUrl: 'https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg', // Replace with actual URL
    },
    {
        skillName: 'CSS',
        proficiency: '80%', // Convert proficiency to string
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png', // Replace with actual URL
      },
      {
        skillName: 'HTML',
        proficiency: '80%', // Convert proficiency to string
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png', // Replace with actual URL
      },
      {
        skillName: 'Python',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://banner2.cleanpng.com/20180712/yka/kisspng-professional-python-programmer-computer-programmin-python-logo-download-5b47725c1cc0d6.3474912915314089881178.jpg', // Replace with actual URL
      },
      {
        skillName: 'Firebase',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://ionicacademy.com/wp-content/uploads/2017/06/firebase-circle.png', // Replace with actual URL
      },
      {
        skillName: 'Stripe',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp', // Replace with actual URL
      },
      {
        skillName: 'Typescript',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', // Replace with actual URL
      },
      {
        skillName: 'Tailwind CSS',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90', // Replace with actual URL
      },
      {
        skillName: 'Framer Motion',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-framer-2296068-1912027.png', // Replace with actual URL
      },
      {
        skillName: 'Git',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png', // Replace with actual URL
      },
      {
        skillName: 'PostgreSQL',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://camo.githubusercontent.com/4961a710549dc654987f38a9c64a1c467ff138d90c9fd84e3e20c6ea1484426d/68747470733a2f2f7261772e6769746875622e636f6d2f436972636c6543492d5075626c69632f63696d672d706f7374677265732f6d61696e2f696d672f636972636c652d706f7374677265732e7376673f73616e6974697a653d74727565', // Replace with actual URL
      },
      {
        skillName: 'Rest api',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png', // Replace with actual URL
      },
      {
        skillName: 'Node.js',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png', // Replace with actual URL
      },
      {
        skillName: 'Express.js',
        proficiency: '70%', // Convert proficiency to string
        imageUrl: 'https://banner2.cleanpng.com/20180808/tg/kisspng-website-development-express-js-node-js-javascript-issuehub-io-5b6aa8071ea695.3600640215337164871256.jpg', // Replace with actual URL
      },
    // Add more skills here
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <Skill
          key={index}
          name={skill.skillName}
          proficiency={skill.proficiency}
          imageUrl={skill.imageUrl}
        />
      ))}
    </div>
  );
};

export default SkillsPage;