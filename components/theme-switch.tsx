"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";



export default function ThemeSwitch() {
   const { theme, toggleTheme } = useTheme()
   

   return (
      <button
         className="fixed bg-gray-950 text-white bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40  shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-white dark:text-gray-950"

        //  swapped bg-colorsv and text colors
         onClick={toggleTheme}
      >
         {theme === "light" ? <BsMoon /> : <BsSun />}
         {/* did some swapping here */}
      </button>
   );
}
