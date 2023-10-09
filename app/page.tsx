import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="gradient-bg text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#191714]/80">
        <Head>
          <title>Rakesh's Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id='skills' className='snap-start'>
          <Skills />
        </section>
        <section id='projects' className='snap-start'>
          <Projects />
        </section>
        <section id='contactme' className='snap-start'>
          <ContactMe />
        </section>
        <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://i.pinimg.com/originals/30/2a/15/302a150247c3e9c8332afcabbb8ea6d9.png'
              alt='home' />
            </div>
          </footer>
        </Link>
      </div>
    </main>
  )
}