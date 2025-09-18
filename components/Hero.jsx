"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden font-SequelSans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero/4.png" // replace with actual image path
          alt="Drake Motor Inn"
          fill
          priority
          className="object-cover object-center md:object-bottom"
        />
      </div>

      {/* Header Navbar */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 lg:px-8 py-4 z-20">
        {/* Left Side */}
        <div className="flex items-center flex-wrap gap-1">
          <div className="flex">
            {["GAURAV", "TRAVELS"].map((word, idx) => (
              <span
                key={idx}
                className="px-2 md:px-4 py-1 md:py-3 border border-black bg-white font-bold text-lg lg:text-2xl tracking-tight"
              >
      {word}
    </span>
  ))}
</div>
         
          <nav className="hidden md:flex bg-white">
            {["ABOUT", "SERVICES", "PACKAGES", "TESTIMONIALS", "CONTACT US"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="px-4 py-3 border-r last:border-r-0 border-black text-sm font-bold"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center border border-black w-fit">
     
          <button className="px-2 md:px-4 py-1 md:py-3 text-sm md:text-sm bg-white font-bold flex items-center gap-2">
            CALL US <span>→</span>
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative flex flex-col justify-end h-full pb-8 md:pb-10 px-4 lg:px-12">
        <div className="flex flex-wrap">
          {["Your", "Journey", "Our", "Wheels"].map((word, idx) => (
            <span
              key={idx}
              className="bg-white text-black text-3xl sm:text-4xl lg:text-4xl font-bold px-2 md:px-4 py-1 md:py-3 border border-black"
            >
              {word}
            </span>
          ))}
        </div>

        <p className="text-white text-base leading-tight tracking-wider sm:text-base lg:text-2xl font-Neue mt-1 md:mt-2">
  Premium cars, tempo travellers, and AC buses providing comfortable, safe, reliable solutions.
</p>

{/* Subline 2 (11 words) */}
<p className="hidden md:block text-white leading-tight tracking-wider text-sm sm:text-base lg:text-2xl font-Neue mb-2">
  Group tours, 52-seater coaches, and customized pilgrimage packages for every journey.
</p>

<button className="px-2 md:px-4 py-1 md:py-3 mt-2 md:mt-1 text-md md:text-xl bg-white font-bold flex w-fit items-center gap-2">
            Get in touch
          </button>

      </div>
    </section>
  );
}
