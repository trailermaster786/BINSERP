"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";

const categories = [
  { value: "all", label: "Home" },
  { value: "all-posts", label: "All Posts" },
  { value: "announcements", label: "Announcements" },
];

export default function CommunityPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all" || activeCategory === "all-posts"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Community
          </h1>

          {/* Category Tabs */}
          <div className="mt-6 flex gap-2 border-b border-[var(--border)]">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? "border-[var(--primary)] text-[var(--primary)]"
                    : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Posts List */}
          <div className="mt-8 space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 text-xs text-[var(--muted-foreground)]">
                  <span>{post.author}</span>
                  <span>&middot;</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
