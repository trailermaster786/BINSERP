import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download } from "lucide-react";

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 pt-16 pb-20">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--primary)]/10">
            <Download className="h-10 w-10 text-[var(--primary)]" />
          </div>
<h1 className="mt-6 text-3xl font-bold text-[var(--foreground)]">
             Download AxonERP
           </h1>
           <p className="mx-auto mt-4 max-w-md text-[var(--muted-foreground)]">
             Get the offline version of AxonERP. One-time payment of PKR 54,999.
             Lifetime license with all modules included.
           </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary)]/90"
            >
              <Download className="h-4 w-4" />
              Download Now
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--accent)] px-8 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--accent-foreground)]/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
