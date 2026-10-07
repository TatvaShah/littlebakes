import type { Metadata } from "next";
import { OrderBuilder } from "@/components/order-builder";

export const metadata: Metadata = {
  title: "Start an order",
  description:
    "Build a starter note for LittleBakes, copy it, and paste it into the Instagram DM.",
  alternates: { canonical: "/order" },
};

export default function OrderPage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <p className="font-script text-4xl text-rose">DM to place your order</p>
      <h1 className="mt-1 max-w-2xl font-display text-5xl tracking-tight text-ink">
        A note LittleBakes can quote
      </h1>
      <div className="mt-10">
        <OrderBuilder />
      </div>
    </main>
  );
}
