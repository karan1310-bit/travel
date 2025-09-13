"use client";

import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text Content */}
        <article className="space-y-6">
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            Featured
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Getting Cheap Airfare for Last Minute Travel
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            The Awesome Tips for Your Perfect Trip.
          </p>
          <hr className="w-10 border-gray-300" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
            Tremblant is based in Canada and has over 60 runs servicing millions
            of skiers each year. With its state-of-the-art ski lifts and a
            selection of choices for both snowboarders.
          </p>
          <button className="mt-4 px-6 py-3 bg-black text-white font-medium text-sm sm:text-base rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </article>

        {/* Right Side: Images */}
        <div className="relative flex flex-col items-center space-y-6">
          {/* Main Image */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/600x800"
              alt="Traveler running in field"
              width={600}
              height={800}
              className="w-full h-auto object-cover rounded"
              
            />
          </div>

          {/* Small Image */}
          <div className="w-40 sm:w-48 md:w-56">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Travel destination preview"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded"
            />
          </div>

          {/* Pagination + Links */}
          <div className="flex justify-between w-full text-sm text-gray-600">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>1 . 4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
