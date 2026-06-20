"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { videoTutorials, videoCategories } from "@/data/videoTutorials";
import { Play } from "lucide-react";

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVideos =
    activeCategory === "all"
      ? videoTutorials
      : videoTutorials.filter((v) => v.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
<h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
             All Videos
           </h1>
           <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
             Discover a collection of helpful video tutorials to learn the AxonERP. Watch, explore, and level up your skills!
           </p>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {videoCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? "bg-[var(--primary)] text-white"
                    : "border border-[var(--border)] bg-[var(--accent)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-video bg-[var(--muted)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/90 text-white opacity-80 transition-opacity group-hover:opacity-100">
                      <Play className="h-5 w-5" />
                    </div>
                  </div>
                  {video.duration && (
                    <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                      {video.duration}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-[var(--foreground)]">
                    {video.title}
                  </h3>
                  <span className="mt-2 inline-block rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs text-[var(--muted-foreground)]">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
