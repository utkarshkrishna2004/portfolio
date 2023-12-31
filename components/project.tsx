import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
   title,
   description,
   tags,
   imageUrl,
   deploymentLink, // Add deploymentLink and codeLink props
   codeLink,
}: ProjectProps) {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 1", "1.33 1"],
   });
   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

   // Function to open the deployment link in a new tab
   const openDeploymentLink = () => {
      window.open(deploymentLink, "_blank");
   };

   // Function to open the codebase link in a new tab
   const openCodeLink = () => {
      window.open(codeLink, "_blank");
   };

   return (
      <motion.div
         ref={ref}
         style={{
            scale: scaleProgess,
            opacity: opacityProgess,
         }}
         className="mb-3 group sm:mb-8 last:mb-0"
      >
         <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
               <h3 className="text-2xl font-semibold">{title}</h3>
               <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                  {description}
               </p>
               <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                  {tags.map((tag, index) => (
                     <li
                        className=" bg-black/[0.7] px-3 py-1 mt-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={index}
                     >
                        {tag}
                     </li>
                  ))}
               </ul>

               {/* "Visit" and "Code" buttons */}
               <div className="mt-4 space-x-4">
                  {/* <button
                     onClick={openDeploymentLink}
                     className="px-6 py-2 text-white transition bg-gray-800 rounded-full outline-none group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white/80 dark:text-black"
                  >
                     Deployment
                  </button> */}
                  <button
                     onClick={openCodeLink}
                     // className="px-6 py-2 text-black transition bg-gray-300 rounded-full outline-none group focus:scale-110 hover:scale-110 hover:bg-gray-400 active:scale-105 border-black/10 dark:bg-white/10 dark:text-white"
                     className="px-6 py-2 text-white transition bg-gray-800 rounded-full outline-none group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white/80 dark:text-black"
                  >
                     {/* Code */}
                     Visit
                  </button>
               </div>
            </div>

            <Image
               src={imageUrl}
               alt="Project I worked on"
               quality={95}
               className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[15.5rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
            />
         </section>
      </motion.div>
   );
}
