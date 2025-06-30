'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Skills from './Skills';
import Projects from '../components/Projects';
import ShadowBlock from '../components/ShadowBlock';
import ProjectsHeading from '../components/ProjectsHeading';
import Contact from '../components/Contact';
import Article from './Article';
import StickyNav from '../components/chat/sticky-nav';

const Home = () => {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
  }, [controls, inView]);

  return (
    <Article>
      <StickyNav />
      <div className="flex flex-col items-center md:flex-row my-8 md:my-14" id="header">
        <div className="self-start text-zinc-900 dark:text-zinc-100 transition duration-500 ease-in-out">
          <h2 className="text-3xl  font-semibold font-mplus">
            Sheila Susan
          </h2>
          <p> Full-stack developer </p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="border-teal-900/40 border-2 rounded-full w-35 h-35 inline-block overflow-hidden">
            <Image
              src="/images/sue-profile-pic.jpg"
              alt="Sue"
              width={300}
              height={300}
            />
          </div>
        </div>

      </div>
      <section className="mt-6">
        <SectionHeading>Work</SectionHeading>
        <p className="mb-6 dark:text-zinc-100 text-zinc-900 transition duration-500 ease-in-out">
          &nbsp;&nbsp;&nbsp;I have a strong foundation in web development with hands-on experience in HTML, CSS, and JavaScript.
           I am proficient in using modern tools like Git, VS Code, Figma, and Canva for collaborative development and design. 
           I have also worked with frameworks such as React, Tailwind CSS and Next.js, and have experience building responsive, 
           user-friendly websites. My technical background is complemented by problem-solving skills and a passion for creating impactful digital solutions.
        </p>
      </section>
      <section className="mt-6" id="works">
        <SectionHeading>Skills</SectionHeading>
        <Skills />
      </section>
      <section className="mt-8">
        <ProjectsHeading />
        <Projects />
      </section>
      <motion.section
        id="contact"
        className="my-12 md:my-24"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.7, type: 'tween' }}
      >
        <div className="relative mb-3">
          <SectionHeading overlay className="text-5xl md:text-8xl text-center">Contact</SectionHeading>
          <ShadowBlock />
        </div>
        <div className="flex flex-col md:gap-3 justify-center text-center items-center text-zinc-900 dark:text-zinc-50 md:text-4xl font-semibold transition duration-500 ease-in-out">
          <p> And that&apos;s a wrap! </p>
          <p>
            <span> I look foward to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-teal-400 to-teal-600 transition duration-500 ease-in-out">
              chatting with you soon.
            </span>
          </p>
          <Contact />
        </div>
      </motion.section>
    </Article>
  );
};

export default Home;