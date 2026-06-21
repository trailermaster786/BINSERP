"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(
  () => import("@/components/animations/FloatingLines"),
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
    <section className="relative min-h-[600px] overflow-hidden bg-[var(--background)] lg:min-h-[650px]">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://motionbgs.com/i/c/960x540/media/8038/cloud-towers-above-tokyo.3840x2160.jpg')" }}
      />

      <div className="absolute inset-0 z-[1] bg-black/60 dark:bg-black/70" />

      <div className="absolute inset-0 z-[2] bg-grid-yellow/[0.08]" />

      <div className="absolute inset-0 z-[3]">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          mouseDamping={0.05}
          mixBlendMode="screen"
          linesGradient={["#BACB00", "#000000"]}
        />
      </div>

      <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.4)_70%)]" />

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
