import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          Start for Free Today!
        </h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
           Begin your 6-day free trial today to fully explore and experience all the features and benefits we offer.
         </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/createdemo"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-8 py-3 text-base font-medium text-black transition-colors hover:bg-[var(--primary)]/90"
          >
            Get Demo Now
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--accent)] px-8 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </section>
  );
}
