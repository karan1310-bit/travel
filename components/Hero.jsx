"use client";

import Image from "next/image";
import React from "react";

/**
 * Travelers — exact hero layout (no overlap)
 * - Grid uses 5fr / 6fr / 2fr on lg+ so the right rail has enough width
 * - Big image is tall-ish; small image sits in its own column, centered
 * - Add your images to /public/images
 *    /images/hero-main.jpg  (landscape-portrait ~ 5:6)
 *    /images/hero-thumb.jpg (square)
 */
export default function Hero() {
  return (
    <section className="w-full h-screen">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-12 py-8 sm:py-10 font-Neue">
        {/* Top bar */}
        <header className="mb-8 sm:mb-12 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">Gaurav Travels.</span>

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

        {/* Main grid: single column on mobile; 5/6/2 fr on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr_2fr] gap-10 lg:gap-14 items-start">
          {/* LEFT — copy */}
          <article>

            <h1 className="mb-6 mt-16 font-extrabold tracking-normal font-Neue leading-[1.06] text-[clamp(30px,6vw,64px)]">
              Getting Cheap
              <br /> Airfare for Last
              <br /> Minute Travel
            </h1>

            <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium mb-8">
              The Awesome Tips for Your Perfect Trip.
            </p>

            <div className="w-10 h-[2px] bg-gray-300 mb-8" />

            <p className="text-[12.5px] sm:text-sm leading-6 text-gray-500 max-w-[440px] mb-10">
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

          {/* CENTER — big image + labels */}
          <div className="flex flex-col">
            {/* Tall-ish hero image (fill inside a fixed aspect box) */}
            <div
    className="
      relative mx-auto w-full
      max-w-[360px] sm:max-w-[400px] lg:max-w-[360px] xl:max-w-[360px]
      aspect-[9/16]   /* phone-like frame */
      overflow-hidden rounded-md
    "
  >
    <Image
      src="/images/1.png"
      alt="Traveler running in wheat field"
      fill
      sizes="(min-width:1280px) 360px, (min-width:1024px) 360px, (min-width:640px) 400px, 360px"
      className="object-contain"  /* never exceeds the frame */
      priority
    />
  </div>


          </div>

          {/* RIGHT — small square + pager; its own (wider) column so no overlap */}
          <aside className="flex flex-col items-end justify-center">
            {/* keep image within column; cap the size for nice proportion */}
            <div className="relative w-full max-w-[220px] aspect-square ml-auto mt-28">
              <Image
                src="/images/1.png"
                alt="Aerial tropical coast"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-6 text-right w-full pr-1 text-[11px] sm:text-xs text-gray-500">
              1 . 4
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
