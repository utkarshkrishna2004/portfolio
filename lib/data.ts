import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import blogged from "@/public/blogged.png"
import Todo from "@/public/Todo.png"
import Saas from "@/public/Saas.png"
import Bot from "@/public/Bot.png"


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
      title: "Media Optimization SaaS",
      description: "AI-powered platform for image transformation and CDN delivery.",
      tags: ["Next.js", "Cloudinary", "Prisma", "PostgreSQL", "Clerk"],
      imageUrl: Saas,
      deploymentLink: "https://media-optimization-saas.vercel.app/",
      codeLink: "https://media-optimization-saas.vercel.app/",
   },
   {
      title: "ReviewBot",
      description: "AI tool that reviews code snippets with real-time Gemini-powered feedback.",
      tags: ["React", "Node.js", "Express", "Gemini API", "Tailwind CSS"],
      imageUrl: Bot,
      deploymentLink: "https://github.com/utkarshkrishna2004/ReviewBot",
      codeLink: "https://github.com/utkarshkrishna2004/ReviewBot",
   },
   {
      title: "Blogged",
      description: "A fullstack blogging platform with powerful content creation features.",
      tags: ["React", "Appwrite", "JavaScript", "Tailwind", "TinyMCE"],
      imageUrl: blogged,
      deploymentLink: "https://utkarsh-krishna-portfolio.vercel.app/",
      codeLink: "https://github.com/utkarshkrishna2004/blogged",
   },
] as const;

export const skillsData = [
   "JavaScript",
   "C++",
   "React.js",
   "Next.js",
   "Node.js",
   "Express.js",
   "Tailwind CSS",
   "PostgreSQL",
   "MongoDB",
   "MySQL",
   "Git",
   "GitHub",
   "Postman",
   "Prisma",
   "Cloudinary",
   "Clerk",
   "REST APIs",
   // "OOP",
   // "DBMS",
] as const;