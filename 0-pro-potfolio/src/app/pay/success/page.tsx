import Link from "next/link";
import type { Metadata } from "next";
import { stripe, isStripeConfigured } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Payment received — Sadiq Khan",
  description: "Your payment is confirmed. Here's what happens next.",
};

type SearchParams = Promise<{ session_id?: string }>;

export default async function PaySuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { session_id } = await searchParams;
  let amount: string | null = null;
  let customerEmail: string | null = null;

  if (session_id && isStripeConfigured && stripe) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id);
      if (session.amount_total) {
        amount = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: session.currency?.toUpperCase() ?? "USD",
        }).format(session.amount_total / 100);
      }
      customerEmail = session.customer_details?.email ?? null;
    } catch {
      // Silent — show generic success
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 mb-8">
          <svg
            className="h-8 w-8 text-emerald-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>

        <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-4">
          Payment confirmed
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-100">
          You&apos;re in.
        </h1>

        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
          {amount
            ? `${amount} received. A receipt is on its way to your inbox.`
            : "Your payment is confirmed. A receipt is on its way to your inbox."}
        </p>

        {customerEmail ? (
          <p className="mt-2 text-sm text-zinc-500">
            Confirmation sent to{" "}
            <span className="text-zinc-300 font-mono">{customerEmail}</span>
          </p>
        ) : null}

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 text-left">
          <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-4">
            What happens next
          </div>
          <ol className="space-y-3 text-zinc-300 text-[15px] leading-relaxed">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">01</span>
              <span>
                I&apos;ll email you within 24 hours to schedule a kickoff call.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">02</span>
              <span>
                We&apos;ll align on scope, milestones, and a Statement of Work.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono shrink-0">03</span>
              <span>
                Work begins. You&apos;ll get weekly updates, not surprises.
              </span>
            </li>
          </ol>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
          >
            Back to portfolio
          </Link>
          <a
            href="mailto:hello@sadiqkhan.dev?subject=Post-payment%20question"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
          >
            Email me directly
          </a>
        </div>
      </div>
    </main>
  );
}
