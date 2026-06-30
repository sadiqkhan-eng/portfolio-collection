"use client";

import { useState } from "react";

type CheckoutButtonProps = {
  packageId: string;
  packageName: string;
  price: number;
  cta: string;
  popular: boolean;
};

export function CheckoutButton({
  packageId,
  packageName,
  price,
  cta,
  popular,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId, packageName, price }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Checkout failed. Please try again.");
      }

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("No checkout URL returned.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
          popular
            ? "bg-emerald-400 text-zinc-950 hover:bg-emerald-300"
            : "border border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="2"
              />
              <path
                d="M14 8a6 6 0 00-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Redirecting to Stripe…
          </>
        ) : (
          <>
            {cta}
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </>
        )}
      </button>
      {error ? (
        <p className="mt-3 text-xs text-red-400 text-center">{error}</p>
      ) : null}
    </div>
  );
}
