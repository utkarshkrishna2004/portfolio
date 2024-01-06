"use client";

import Image from "next/image";
import React from "react";
import utkarshImage from "../public/utkarsh.jpeg"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";



export default function Intro() {

   const { ref } = useSectionInView('Home', 0.5);
   const{
      setActiveSection, setTimeOfLastClick
   } = useActiveSectionContext()

   return (
      <section
         ref={ref}
         id="home"
         className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
         <div className="flex items-center justify-center">
            <div className="relative">
               <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "tween",
                     duration: 0.2,
                  }}
               >
                  <Image
                     src={utkarshImage}
                     alt="Utkarsh"
                     width="192"
                     height="192"
                     quality="95"
                     priority={true}
                     className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  />
               </motion.div>

               <motion.span
                  className="absolute bottom-0 right-0 text-4xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     type: "spring",
                     stiffness: 125,
                     delay: 0.1,
                     duration: 0.7,
                  }}
               >
                  👋
               </motion.span>
            </div>
         </div>

         <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
         >
            <p className="mb-3">
               Hey, I'm <span className="font-medium">Utkarsh</span>, a{" "}
               <span className="font-bold">MERN </span>
               Stack Developer. <br /> I bring ideas to life using my
               superpowers in <span className="font-bold">web development</span>
               .
            </p>
         </motion.h1>

         <motion.div
            className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
               delay: 0.1,
            }}
         >
            <Link
               href="#contact"
               className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
               onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
               }}
            >
               Contact Me Here
               <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
            </Link>

            <a
               className="flex items-center gap-2 py-3 transition bg-white border rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 border-black/10 dark:bg-white/10"
               href="/CV.pdf"
               download
            >
               Download CV{" "}
               <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
            </a>

            <a
               className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60"
               href="https://www.linkedin.com/in/utkarsh-krishna-3bab41240/"
               target="_blank"
            >
               <BsLinkedin />
            </a>

            <a
               className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60"
               href="https://github.com/utkarshkrishna2004"
               target="_blank"
            >
               <FaGithubSquare />
            </a>

            <a
               className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60"
               href="https://twitter.com/utkarshktweets"
               target="_blank"
            >
               <FaTwitter />
            </a>
         </motion.div>
      </section>
   );
}
