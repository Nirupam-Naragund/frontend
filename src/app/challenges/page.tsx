import { EvervaultCardDemo } from "@/components/EveraultCard";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { GridBackgroundDemo } from "@/components/Challenges";
import Image from "next/image";

  export default function Home() {
    return (
        <>
    <div style={{ display: "grid", placeItems: "center" }}>
  <h1 className="text-align py-6 " style={{ fontSize: "2rem" }}>The Challenges</h1>
</div>
        <div className="h-[50rem] w-full dark:bg-black bg-zinc-950  dark:bg-grid-white/[0.2] bg-grid-zinc-300/[0.2] relative flex items-center justify-center">
            
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="grid grid-cols-3 gap-12">
            
        <div className="bg-white "> 
      <div className="bg-zinc-950 flex  items-center justify-center min-h-screen">
        <div className="border border-zinc-500 rounded-md shadow-lg p-3 max-w-sm relative"> {/* Added relative positioning */}
          <EvervaultCard text="Challenge #1" />
          <h2 className="text-white mt-4 text-sm font-light text-center">
            Hover over this card to reveal an awesome effect. Running out of copy
            here.
          </h2>
          <div className="flex justify-center mt-4">
            <a href="/challenge1">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>View Challenge 1</span>
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
            </button>
            </a>
          </div>
        </div>
      </div>
        </div>
        <div className="bg-white "> 
      <div className="bg-zinc-950 flex  items-center justify-center min-h-screen">
        <div className="border border-zinc-500 rounded-md shadow-lg p-3 max-w-sm relative"> {/* Added relative positioning */}
          <EvervaultCard text="Challenge #1" />
          <h2 className="text-white mt-4 text-sm font-light text-center">
            Hover over this card to reveal an awesome effect. Running out of copy
            here.
          </h2>
          <div className="flex justify-center mt-4">
            <a href="/challenge2">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>View Challenge 1</span>
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
            </button>
            </a>
          </div>
        </div>
      </div>
        </div>

         <div className="bg-white "> 
      <div className="bg-zinc-950 flex  items-center justify-center min-h-screen">
        <div className="border border-zinc-500 rounded-md shadow-lg p-3 max-w-sm relative"> {/* Added relative positioning */}
          <EvervaultCard text="Challenge #1" />
          <h2 className="text-white mt-4 text-sm font-light text-center">
            Hover over this card to reveal an awesome effect. Running out of copy
            here.
          </h2>
          <div className="flex justify-center mt-4">
            <a href="/challenge3">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
                <span>View Challenge 1</span>
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
            </button>
            </a>
          </div>
        </div>
      </div>
        </div>

          </div>
      </div>
      </>
    );    
  }