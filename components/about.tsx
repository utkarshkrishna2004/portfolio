"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';


export default function About() {
   const { ref } = useSectionInView("About");


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
           Hey, I'm <span className="font-medium">Utkarsh</span>, a MERN Stack
           Developer passionate about crafting captivating{" "}
           <span className="font-bold">front-end interfaces</span> and exploring
           the intricacies of{" "}
           <span className="font-bold">backend development</span>. Specializing
           in creating seamless user experiences, I thrive on turning ideas into
           visually appealing realities.
        </p>

        <p className="mb-3">
           My love extends beyond the surface. I'm equally enamored with the{" "}
           <span className="font-bold">backend magic</span> that powers web
           applications. With expertise in{" "}
           <span className="font-bold">Node.js, Express.js, and MongoDB</span>,
           I enjoy architecting the backbone of solutions. Whether it's making
           designs pop with <span className="font-bold">Tailwind CSS</span> or
           delving into the complexities of{" "}
           <span className="font-bold">backend tech</span>, I'm here to turn
           your web dreams into a fusion of aesthetics and functionality.
        </p>

        <p>
           Beyond the code, I explore tech, contribute to open-source projects,
           and share insights on <span className="font-bold">Hashnode</span>.
           Ready to bring your web vision to life? Drop me a line, and let's
           embark on a coding adventure!
        </p>
     </motion.section>
  );
}
