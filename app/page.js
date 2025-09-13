import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#FCFCFC] text-[#000000]">
      <SmoothScroll />
      <Hero />
    </main>
  );
}
