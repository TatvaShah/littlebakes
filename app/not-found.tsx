import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-script text-4xl text-rose">off the menu</p>
      <h1 className="mt-2 font-display text-5xl text-ink">This page is not here</h1>
      <p className="mt-4 text-muted">The cakes are still on the home page.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-rose px-5 py-3 text-foam">
        Back to LittleBakes
      </Link>
    </main>
  );
}
