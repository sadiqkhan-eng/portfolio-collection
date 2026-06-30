import type { Metadata } from "next";
import { pricingPackages, payFaqs } from "@/lib/data";
import { formatPrice, isStripeConfigured } from "@/lib/stripe";
import { CheckoutButton } from "@/components/CheckoutButton";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Pay — Sadiq Khan",
  description:
    "Transparent pricing for senior full-stack AI engineering engagements. One-time sprints, full product builds, and embedded partnerships.",
};

export default function PayPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-zinc-800/60">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-8"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M13 8H3M7 4L3 8l4 4" />
            </svg>
            Back to portfolio
          </a>

          <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6">
            07 / Pay
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            <span className="gradient-text">Pay for a project.</span>
            <br />
            <span className="text-zinc-400">No surprises, no scope creep.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Three engagement shapes that cover most of what I take on. Pick the
            closest fit, or reach out for a custom scope. All prices are
            one-time, all engagements start with a paid discovery call.
          </p>
        </div>
      </section>

      {!isStripeConfigured ? (
        <section className="border-b border-zinc-800/60 bg-amber-400/[0.04]">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 text-amber-400 mt-0.5 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <div className="text-amber-200 font-medium text-sm">
                  Demo mode — payments not configured
                </div>
                <p className="text-amber-200/70 text-sm mt-1">
                  Set <code className="font-mono text-xs bg-amber-400/10 px-1.5 py-0.5 rounded">STRIPE_SECRET_KEY</code> and <code className="font-mono text-xs bg-amber-400/10 px-1.5 py-0.5 rounded">NEXT_PUBLIC_SITE_URL</code> in your <code className="font-mono text-xs">.env.local</code> to enable checkout. See README for setup.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {pricingPackages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl border p-8 flex flex-col animate-fade-in hover:scale-[1.02] transition-all duration-300 ${
                  pkg.popular
                    ? "border-emerald-400/40 bg-gradient-to-b from-emerald-400/[0.06] to-zinc-950 hover:border-emerald-400/60 hover:shadow-[0_0_35px_-10px_rgba(52,211,153,0.15)]"
                    : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]"
                }`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {pkg.popular ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-emerald-400 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-950 font-semibold">
                      Most popular
                    </span>
                  </div>
                ) : null}

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed min-h-[3rem]">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-zinc-100 font-mono">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-sm text-zinc-500">USD</span>
                  </div>
                  <div className="mt-2 flex items-center gap-3 text-xs text-zinc-500 font-mono">
                    <span>{pkg.billing}</span>
                    <span className="text-zinc-700">·</span>
                    <span>{pkg.delivery}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
                    What's included
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-2.5 text-sm text-zinc-300 leading-relaxed"
                      >
                        <span className="text-emerald-400 mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
                    Plus
                  </div>
                  <ul className="space-y-2">
                    {pkg.includes.map((i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="text-zinc-600 mt-0.5 shrink-0">
                          +
                        </span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <CheckoutButton
                    packageId={pkg.id}
                    packageName={pkg.name}
                    price={pkg.price}
                    cta={pkg.cta}
                    popular={pkg.popular ?? false}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-zinc-500">
            Need something custom?{" "}
            <a
              href="mailto:hello@sadiqkhan.dev"
              className="text-emerald-300 underline decoration-emerald-400/30 underline-offset-4 hover:decoration-emerald-400 transition-colors"
            >
              Email me a brief
            </a>{" "}
            and I&apos;ll send back a scoped proposal within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-t border-zinc-800/60 bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader
            eyebrow="Common questions"
            title="The things people ask before paying."
          />

          <div className="space-y-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800/60">
            {payFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-zinc-950 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer hover:bg-zinc-900/40 transition-colors">
                  <span className="text-zinc-100 font-medium">
                    {faq.q}
                  </span>
                  <svg
                    className="h-5 w-5 text-zinc-500 group-open:rotate-45 transition-transform shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 -mt-2 text-zinc-400 leading-relaxed text-[15px]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-t border-zinc-800/60">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-400 mb-4">
            Still on the fence?
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Most clients start with a paid discovery call.
          </h2>
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            60 minutes, async-friendly notes afterward, and a scoped proposal
            within 48 hours. The call fee is credited back on engagement
            signature.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sadiqkhan.dev?subject=Discovery%20call"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
            >
              Book a discovery call
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
            >
              Back to portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
