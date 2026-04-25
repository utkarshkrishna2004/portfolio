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
        I'm <span className="font-medium">Utkarsh</span>, a full-stack developer
        based in <span className="font-medium">Kolkata</span>. I build complete,
        production-ready web applications — from responsive frontends to
        scalable backend systems.
      </p>

      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and PostgreSQL</span>,
        and I work with tools like Prisma, Tailwind CSS, and Cloudinary to ship
        polished, performant products. I'm equally comfortable designing a clean
        UI and architecting the APIs that power it.
      </p>

      <p>
        What drives me is the craft itself — writing code that's not just
        functional, but clean, maintainable, and thoughtfully built. I'm
        actively looking for developer roles where I can contribute, grow, and
        work on problems that matter.
      </p>
    </motion.section>
  );
}