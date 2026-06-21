"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Lightfall = dynamic(
  () => import("@/components/animations/Lightfall"),
  { ssr: false },
);

const trustedLogos = [
  { src: "/logos/acme.png", alt: "Acme logo" },
  { src: "/logos/quantum.png", alt: "Quantum logo" },
  { src: "/logos/echo.png", alt: "Echo logo" },
  { src: "/logos/celestial.png", alt: "Celestial logo" },
  { src: "/logos/pulse.png", alt: "Pulse logo" },
  { src: "/logos/apex.png", alt: "Apex logo" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#050a18] lg:min-h-[650px]">
      <div className="absolute inset-0 z-0">
        <Lightfall
          colors={["#BACB00", "#d4e157", "#8bc34a", "#1a1a2e", "#0f3460"]}
          backgroundColor="#050a18"
          speed={0.4}
          streakCount={6}
          streakWidth={1.2}
          streakLength={0.8}
          glow={0.9}
          density={0.5}
          twinkle={0.6}
          zoom={3}
          backgroundGlow={0.6}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={0.4}
          mouseRadius={0.8}
          mouseDampening={0.12}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(5,10,24,0.5)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:min-h-[650px] lg:px-8">
<h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
           Get A Business Solution Ever
         </h1>
         <p className="mt-4 text-xl text-white/90 drop-shadow-md sm:text-2xl">
           Automate Your Business
         </p>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 drop-shadow sm:text-lg">
          We provide Pakistan&apos;s best enterprise resource planning solution,
          featuring many easy and affordable options.
        </p>

<div className="mt-8 flex flex-col gap-4 sm:flex-row">
           <a
             href="https://www.youtube.com/watch?v=BGIqQBUEm_k"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-base font-medium text-black transition-colors hover:bg-[var(--primary)]/90"
           >
             Watch a demo
           </a>
            <Link
              href="/createdemo"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
             Try for free
           </Link>
         </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-70">
          {trustedLogos.map((logo) => (
            <div key={logo.alt} className="h-8 w-auto">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={32}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
