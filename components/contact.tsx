"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail"


export default function Contact() {
    const { ref } = useSectionInView("Contact");

    

  return (
     <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
           opacity: 0,
        }}
        whileInView={{
           opacity: 1,
        }}
        transition={{
           duration: 1,
        }}
        viewport={{
           once: true,
        }}
     >
        <SectionHeading>contact me</SectionHeading>

        <p className="-mt-6 text-gray-700 ">
           Please contact me directly at{" "}
           <a className="underline" href="mailto:utkarshmark14@gmail.com">
              utkarshmark14@gmail.com
           </a>{" "}
           or through this form.
        </p>

        <form
           className="flex flex-col mt-10 dark:text-black"
           action={async (formData) => {
            console.log("Running on client");
              
            console.log(formData.get("senderEmail"));
            console.log(formData.get("message"));
            
            await sendEmail(formData);
            
           }}
        >
           <input
              className="px-4 rounded-lg h-14 borderBlack"
              type="email"
              name='senderEmail'
              required
              maxLength={500}
              placeholder="Your email"
           />
           <textarea
              className="p-4 my-3 rounded-lg h-52 borderBlack"
              name='message'
              placeholder="Your message"
              required
              maxLength={500}
           />
           <button
              type="submit"
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
           >
              Submit{" "}
              <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 " />
              {""}
           </button>
        </form>
     </motion.section>
  );
}
