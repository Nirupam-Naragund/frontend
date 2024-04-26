
"use client";
import Navbar from "@/components/Navbar/page";
import React from "react";

export default function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {/* <div className="h-screen w-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"> */}
     
      <div className="max-w-2xl mx-auto p-8"> {/* Increased padding */}
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-12"> {/* Increased margin-bottom */}
          CodeSprint2.0 Capture The Flag
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-6 text-baseline text-center relative z-10"> {/* Increased margin */}
          CTF- Capture the Flag is an exciting website that serves as the second round of the highly anticipated event, GDSC Code Sprint. 
          This engaging platform challenges participants to showcase their skills by cracking a password in order to progress to the next track of the competition.
          With an adrenaline-pumping atmosphere.
        </p>
        <a href="/signup" className="flex justify-center mb-12"> {/* Increased margin-bottom */}
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <span>
                Sign In To get Started!
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="fixed bottom-0 left-0 w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-gray-500 text-center mb-0">Built with ☕️ by:</h1>
       
        <h1 className="text-gray-500 text-center mb-2">@GDSC, NMIT</h1>
      </div>
          </button>
        </a>
        
      </div>
   
    </div>
    // </div>
  );
}
