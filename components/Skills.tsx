"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = () => {
  return (
    <motion.div
    initial={{opacity:0
    }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-white-500 text-sm'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill name="React" proficiency="70%" imageUrl='https://cdn.buttercms.com/fh9E8EjQQuBnvpcpHHlZ' />
            <Skill name='Next' proficiency='70%' imageUrl='https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png' />
            <Skill name='Javascript' proficiency='80%' imageUrl='https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg' />
            <Skill name='CSS' proficiency='80%' imageUrl='https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png'/>
            <Skill name='HTML' proficiency='80%' imageUrl='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/html5-512.png'/>
            <Skill name='Python' proficiency='70%' imageUrl='https://banner2.cleanpng.com/20180712/yka/kisspng-professional-python-programmer-computer-programmin-python-logo-download-5b47725c1cc0d6.3474912915314089881178.jpg' />
            <Skill name='Firebase' proficiency='70%' imageUrl='https://ionicacademy.com/wp-content/uploads/2017/06/firebase-circle.png' />
            <Skill name='Stripe' proficiency='70%' imageUrl='https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp'/>
            <Skill name='Typescript' proficiency='70%' imageUrl='https://cdn-icons-png.flaticon.com/512/5968/5968381.png'/>
            <Skill name='Tailwind CSS' proficiency='70%' imageUrl='https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90'/>
            <Skill name='Framer Motion' proficiency='70%' imageUrl='https://cdn.iconscout.com/icon/free/png-256/free-framer-2296068-1912027.png'/>
            <Skill name='Git' proficiency='70%' imageUrl='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/github-512.png'/>
            <Skill name='PostgreSQL' proficiency='70%' imageUrl='https://camo.githubusercontent.com/4961a710549dc654987f38a9c64a1c467ff138d90c9fd84e3e20c6ea1484426d/68747470733a2f2f7261772e6769746875622e636f6d2f436972636c6543492d5075626c69632f63696d672d706f7374677265732f6d61696e2f696d672f636972636c652d706f7374677265732e7376673f73616e6974697a653d74727565' />
            <Skill name='Rest api' proficiency='70%' imageUrl='https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png' />
            <Skill name='Node.js' proficiency='70%' imageUrl='https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png' />
            <Skill name='Express.js' proficiency='70%' imageUrl='https://banner2.cleanpng.com/20180808/tg/kisspng-website-development-express-js-node-js-javascript-issuehub-io-5b6aa8071ea695.3600640215337164871256.jpg' />
        </div>
      
    </motion.div>
  )
}

export default Skills