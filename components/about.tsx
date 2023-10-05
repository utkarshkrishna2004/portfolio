"use client"
import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function About() {
   const {ref, inView} = useInView({
      threshold: 0.75
   })
   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

   useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
         setActiveSection("About");
      }
   }, [inView, setActiveSection, timeOfLastClick])


  return (
     <motion.section
         ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
     >
        <SectionHeading>about me</SectionHeading>

        <p className="mb-3">
           Hey there, I'm <span className="font-medium">Utkarsh</span>, a
           Front-End Dev geeking out over web stuff. Armed with HTML, CSS,
           JavaScript, TypeScript,{" "}
           <span className="font-medium">React.js and Next.js.</span> I love to
           create pixel-perfect, user-friendly interfaces.
           <br />
           I've got a secret sauce called{" "}
           <span className="font-medium">Tailwind CSS</span> or making designs
           pop and <span className="font-medium">Git/GitHub </span>
           for keeping my code game strong.
        </p>

        <p>
           When I'm not lost in code, I'm probably exploring new tech, geeking
           out on open-source projects, or writing some blogs on{" "}
           <span className="font-medium">Hashnode</span>. <br />
           Let's team up and turn your web dreams into reality. Drop me a line,
           and let's start the coding adventure!
        </p>
     </motion.section>
  );
}
