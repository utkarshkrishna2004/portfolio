import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import currencyImg from "@/public/currency.jpeg"
import passwordImg from "@/public/password.jpeg"
import reactPortfolioImg from "@/public/reactPortfolio.jpeg"

export const links = [
   {
      name: "Home",
      hash: "#home",
   },
   {
      name: "About",
      hash: "#about",
   },
   {
      name: "Projects",
      hash: "#projects",
   },
   {
      name: "Skills",
      hash: "#skills",
   },
   // {
   //    name: "Experience",
   //    hash: "#experience",
   // },
   {
      name: "Contact",
      hash: "#contact",
   },
] as const;

export const experiencesData = [
   {
      title: "Graduated college",
      location: "Kolkata, IND",
      description:
         "I graduated after 4 years of studying B.Tech and I immediately found a job as a full-stack developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2026",
   },
   {
      title: "Front-End Developer",
      location: "Pune, IND",
      description:
         "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2024 - 2026",
   },
   {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
         "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2026 - present",
   },
] as const;

export const projectsData = [
   {
      title: "React Portfolio",
      description:
         "Responsive React portfolio site with smooth scrolling, Tailwind CSS, and Getform.io integration for contact forms.",
      tags: ["React", "JavaScript", "Tailwind", "Getform.io"],
      imageUrl: reactPortfolioImg,
      deploymentLink: "https://utkarsh-krishna-portfolio.vercel.app/",
      codeLink:
         "https://github.com/utkarshkrishna2004/react-portfolio/tree/main",
   },
   {
      title: "Currency Converter",
      description:
         "React currency converter with API integration, JavaScript, Tailwind CSS, and extensive conversion options.",
      tags: ["React", "JavaScript", "Tailwind"],
      imageUrl: currencyImg,
      deploymentLink: "https://react-currency-converter-six.vercel.app/",
      codeLink:
         "https://github.com/utkarshkrishna2004/Learning-React/tree/main/06currencyconverter",
   },
   {
      title: "Password Generator",
      description:
         "Password generator site built with React, JavaScript, and Tailwind CSS, offering customizable password length and special characters.",
      tags: ["React", "JavaScript", "Tailwind"],
      imageUrl: passwordImg,
      deploymentLink: "https://react-password-generator-dun.vercel.app/",
      codeLink:
         "https://github.com/utkarshkrishna2004/Learning-React/tree/main/05passwordgenerator",
   },
] as const;

export const skillsData = [
   "HTML",
   "CSS",
   "JavaScript",
   "TypeScript",
   "Tailwind",
   "React",
   "Redux",
   "Next.js",
   "Node.js",
   "Git",
   "GitHub",
   "C",
   "Java",
   "Firebase",
   "Sanity",
   "MongoDB",
   "Framer Motion",
] as const;
