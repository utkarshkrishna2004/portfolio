import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import currencyImg from "@/public/currency.jpeg"
import passwordImg from "@/public/password.jpeg"
import reactPortfolioImg from "@/public/reactPortfolio.jpeg"
import blogged from "@/public/blogged.png"
import Todo from "@/public/Todo.png"
import Bookstore from "@/public/Bookstore.png"

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
      title: "Blogged",
      description:
         "A fullstack blogging platform with seamless navigation and powerful content creation features.",
      tags: ["React", "Appwrite", "JavaScript", "Tailwind", "TinyMCE"],
      imageUrl: blogged,
      // deploymentLink: "https://utkarsh-krishna-portfolio.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/blogged",
   },
   {
      title: "MERN Bookstore",
      description:
         "A dynamic MERN stack booklist app with intuitive management and detailed insights.",
      tags: ["React", "Node", "Express", "MongoDB", "Tailwind"],
      imageUrl: Bookstore,
      // deploymentLink: "https://react-currency-converter-six.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/MERN-Bookstore",
   },
   {
      title: "TODO",
      description:
         "A stylish and efficient TODO app with local storage integration for seamless task management experience.",
      tags: ["React", "JavaScript", "Tailwind"],
      imageUrl: Todo,
      // deploymentLink: "https://react-password-generator-dun.vercel.app/",
      codeLink:
         "https://github.com/utkarshkrishna2004/Learning-React/tree/main/10todoContextwithLocalStorage",
   },
] as const;

export const skillsData = [
   "React",
   "NodeJs",
   "ExpressJs",
   "MongoDB",
   "NextJs",
   "JavaScript",
   "TypeScript",
   "Appwrite",
   "Firebase",
   "Git",
   "GitHub",
   "Postman",
   "HTML",
   "CSS",
   "Tailwind CSS",
   "Framer Motion",
   "Redux",
   "C",
   "Java",
] as const;
