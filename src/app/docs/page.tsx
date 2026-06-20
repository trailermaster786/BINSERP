"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { docSidebar, docContent } from "@/data/docs";
import { ChevronDown, ChevronRight, Play, ExternalLink } from "lucide-react";

function renderContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-[var(--foreground)]">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 mb-2 text-lg font-semibold text-[var(--foreground)]">
          {line.replace("### ", "")}
        </h3>
      );
    }
    if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[–-]\s*(.+)$/);
      if (match) {
        return (
          <li key={i} className="ml-4 list-disc py-1 text-[var(--muted-foreground)]">
            <strong className="text-[var(--foreground)]">{match[1]}</strong> – {match[2]}
          </li>
        );
      }
      return (
        <li key={i} className="ml-4 list-disc py-1 text-[var(--muted-foreground)]">
          {line.replace(/^- /, "")}
        </li>
      );
    }
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-4 list-disc py-1 text-[var(--muted-foreground)]">
          {line.replace(/^- /, "")}
        </li>
      );
    }
    if (line.match(/^\d+\./)) {
      return (
        <li key={i} className="ml-4 list-decimal py-1 text-[var(--muted-foreground)]">
          {line.replace(/^\d+\.\s*/, "")}
        </li>
      );
    }
    if (line.startsWith("> ")) {
      return (
        <blockquote key={i} className="my-4 border-l-4 border-[var(--primary)] bg-[var(--primary)]/5 py-2 pl-4 text-sm text-[var(--muted-foreground)]">
          {line.replace(/^> \*\*/, "").replace(/\*\*$/, "")}
        </blockquote>
      );
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      return (
        <p key={i} className="mt-4 font-semibold text-[var(--foreground)]">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    }
    if (line === "---") {
      return <hr key={i} className="my-6 border-[var(--border)]" />;
    }
    if (line.trim() === "") {
      return <br key={i} />;
    }
    // Handle inline bold
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="py-1 text-[var(--muted-foreground)] leading-relaxed">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j} className="font-semibold text-[var(--foreground)]">{part.replace(/\*\*/g, "")}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
    "Documentation": true,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const current = docContent[activeSection] || docContent.introduction;

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--foreground)] lg:hidden"
          >
            {mobileMenuOpen ? "Hide" : "Show"} Navigation
          </button>

          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className={`${mobileMenuOpen ? "block" : "hidden"} w-64 shrink-0 lg:block`}>
              <nav className="sticky top-24 space-y-1">
                {docSidebar.map((category) => (
                  <div key={category.heading} className="mb-4">
                    <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                      {category.heading}
                    </h4>
                    {category.sections.map((section) => {
                      const hasChildren = section.items.length > 1;
                      const isOpen = openSections[section.title];
                      return (
                        <div key={section.title}>
                          <button
                            onClick={() => {
                              if (hasChildren) {
                                toggleSection(section.title);
                              } else {
                                setActiveSection(section.items[0].id);
                                setMobileMenuOpen(false);
                              }
                            }}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                              activeSection === section.items[0].id && !hasChildren
                                ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                                : "text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                            }`}
                          >
                            <span>{section.title}</span>
                            {hasChildren && (
                              isOpen ? <ChevronDown className="h-3 w-3 shrink-0" /> : <ChevronRight className="h-3 w-3 shrink-0" />
                            )}
                          </button>
                          {hasChildren && isOpen && (
                            <div className="ml-3 border-l border-[var(--border)] pl-3 mt-1 space-y-0.5">
                              {section.items.map((item) => (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    setActiveSection(item.id);
                                    setMobileMenuOpen(false);
                                  }}
                                  className={`block w-full text-left rounded-lg px-3 py-1.5 text-sm transition-colors ${
                                    activeSection === item.id
                                      ? "bg-[var(--primary)]/10 font-medium text-[var(--primary)]"
                                      : "text-[var(--muted-foreground)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
                                  }`}
                                >
                                  {item.title}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
                {current.title}
              </h1>

              {current.video && (
                <div className="mt-6">
                  <a
                    href={current.video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={current.video.thumbnail}
                        alt={current.video.label}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                          <Play className="h-7 w-7 ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex items-center gap-2 text-sm text-[var(--primary)]">
                      <ExternalLink className="h-4 w-4" />
                      {current.video.label}
                    </div>
                  </a>
                </div>
              )}

              <div className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
                {renderContent(current.content)}
              </div>

              {current.subCards && (
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {current.subCards.map((card) => (
                    <button
                      key={card.id}
                      onClick={() => setActiveSection(card.id)}
                      className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <h3 className="font-semibold text-[var(--foreground)]">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        {card.description}
                      </p>
                    </button>
                  ))}
                </div>
              )}

              {/* Prev/Next navigation */}
              <div className="mt-12 flex items-center justify-between border-t border-[var(--border)] pt-6">
                {(() => {
                  const allItems = docSidebar.flatMap((cat) =>
                    cat.sections.flatMap((sec) => sec.items)
                  );
                  const currentIndex = allItems.findIndex((item) => item.id === activeSection);
                  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
                  const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
                  return (
                    <>
                      {prev ? (
                        <button
                          onClick={() => setActiveSection(prev.id)}
                          className="text-sm text-[var(--primary)] hover:underline"
                        >
                          ← {prev.title}
                        </button>
                      ) : <div />}
                      {next ? (
                        <button
                          onClick={() => setActiveSection(next.id)}
                          className="text-sm text-[var(--primary)] hover:underline"
                        >
                          {next.title} →
                        </button>
                      ) : <div />}
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
