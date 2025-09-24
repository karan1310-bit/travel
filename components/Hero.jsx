"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 font-DMregular">

      {/* HERO IMAGE */}
      <div className="relative h-screen">
        <Image
          src="/hero/1.png" // <- put your Figma hero image here
          alt="White tempo traveller parked by a sunny villa"
          fill
          priority
          className="object-cover object-[15%_90%] md:object-[10%_85%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/10" />
         <Navbar />

        {/* HEADLINE */}
        <div className="absolute inset-0 z-10">
          <div className="flex h-full flex-col items-start justify-start px-4 pt-24 text-left md:px-8 md:pt-24">
            <h1 className="max-w-3xl text-3xl font-DMbold uppercase leading-none text-white md:max-w-6xl md:text-3xl lg:text-4xl">
              Best in the travel game for year
              <br className="hidden md:block"/>
                Book our services and packages
            </h1>
            
          </div>
          
        </div>

        {/* BOTTOM SUBLINE + SCROLL HINT */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10">
          <div className="flex justify-between items-center px-4 md:px-8">
            <p className="text-left text-md font-DMsemi uppercase leading-none text-white md:text-2xl">
              Book your unforgettable trip with us 
            </p>
            <p className="text-right text-sm md:text-lg uppercase text-white">
              scroll down
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
