"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail"

import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';


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
            
            const { data, error } = await sendEmail(formData);
            
            if (error) {
               toast.error(error)
               return;
            }

            toast.success('Email sent successfully!')
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
              maxLength={5000}
           />
           <SubmitBtn />
        </form>
     </motion.section>
  );
}
