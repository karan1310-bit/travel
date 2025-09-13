"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10 xl:px-12 py-8 sm:py-10 font-Neue">
        {/* ───────── Top bar ───────── */}
        <header className="mb-8 sm:mb-12 flex items-center justify-between">
          <span className="text-sm font-medium tracking-tight">Travelers.</span>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hidden md:inline">About Us</span>

            {/* search icon */}
            <button aria-label="Search" className="relative size-5">
              <span className="absolute inset-0 rounded-full border border-gray-500/70" />
              <span className="absolute -bottom-[3px] right-[1px] h-2 w-[1px] rotate-45 bg-gray-500/80" />
            </button>

            {/* hamburger */}
            <button aria-label="Menu" className="relative h-5 w-6">
              <span className="absolute left-0 top-[6px] h-[2px] w-6 bg-gray-700" />
              <span className="absolute left-0 top-[14px] h-[2px] w-6 bg-gray-700" />
            </button>
          </div>
        </header>

        {/* ───────── Main grid ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left: Copy */}
          <article className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 mb-6">
              <span className="text-[12px] font-semibold text-gray-600">Featured</span>
            </div>

            <h1 className="mb-6 font-semibold font-neue tracking-normal leading-[1.06] text-[clamp(30px,6vw,64px)]">
              Getting Cheap
              <br /> Airfare for Last
              <br /> Minute Travel
            </h1>

            <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium mb-9">
              The Awesome Tips for Your Perfect Trip.
            </p>

            <div className="w-10 h-[2px] bg-gray-300 mb-9" />

            <p className="text-[12.5px] sm:text-sm leading-6 text-gray-500 max-w-[440px] mb-12">
              Tremblant is based in Canada and has over 90 runs servicing millions of skiers
              each year. With 13 state-of-the-art ski lifts and a selection of choices for
              both snowboarders.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center px-9 py-4 bg-[#0E0E0E] text-white
                         text-[12px] sm:text-[13px] tracking-wider rounded-sm hover:opacity-90 transition"
            >
              LEARN MORE
            </button>
          </article>

          {/* Center: Big image + bottom labels */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[5/6]">
              <Image
                src="/images/1.png"
                alt="Traveler running in wheat field"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Bottom labels */}
            <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs text-gray-500 pr-2">
              <span>Facebook</span>
              <span>Instagram</span>
            </div>
          </div>

          {/* Right: small image + pagination */}
          <aside className="lg:col-span-1 flex flex-col items-end justify-center">
            <div className="relative w-[150px] sm:w-[180px] md:w-[200px] aspect-square mb-6">
              <Image
                src="/images/2.png"
                alt="Aerial tropical coast"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-right w-full pr-1 text-[11px] sm:text-xs text-gray-500">
              1 . 4
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
