import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment cancelled — Sadiq Khan",
  description: "No charges were made. You can try again or reach out directly.",
};

export default function PayCancelledPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-zinc-800/60 border border-zinc-700 mb-8">
          <svg
            className="h-7 w-7 text-zinc-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          Checkout cancelled
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-100">
          No worries.
        </h1>

        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
          No charges were made. If you hit a snag, had a question, or just want
          to scope a custom engagement, the fastest path is a direct email.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/pay"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
          >
            Try again
          </Link>
          <a
            href="mailto:hello@sadiqkhan.dev?subject=Payment%20question"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
          >
            Email me instead
          </a>
        </div>

        <p className="mt-12 text-sm text-zinc-600">
          Or{" "}
          <Link href="/" className="text-zinc-400 hover:text-zinc-200 underline underline-offset-4">
            go back to the portfolio
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
