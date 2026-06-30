import { NextResponse } from "next/server";
import { stripe, isStripeConfigured } from "@/lib/stripe";

type CheckoutRequest = {
  packageId: string;
  packageName: string;
  price: number;
};

export async function POST(request: Request) {
  if (!isStripeConfigured || !stripe) {
    return NextResponse.json(
      {
        error:
          "Payments are not configured. Set STRIPE_SECRET_KEY and NEXT_PUBLIC_SITE_URL in your environment.",
      },
      { status: 503 },
    );
  }

  let body: CheckoutRequest;
  try {
    body = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { packageId, packageName, price } = body;

  if (!packageId || !packageName || typeof price !== "number" || price < 100) {
    return NextResponse.json(
      { error: "Missing or invalid package details." },
      { status: 400 },
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: packageName,
              description: `Engagement: ${packageName} — discovery and scoping will follow.`,
              metadata: {
                packageId,
              },
            },
          },
        },
      ],
      success_url: `${siteUrl}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pay/cancelled`,
      metadata: {
        packageId,
        packageName,
      },
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Stripe checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
