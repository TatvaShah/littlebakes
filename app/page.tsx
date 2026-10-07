import Image from "next/image";
import Link from "next/link";
import { OrderBuilder } from "@/components/order-builder";
import { lookbook, reels } from "@/lib/cakes";
import { instagramUrl, valentineFormUrl } from "@/lib/site";

const occasionCards = [
  {
    title: "Weddings",
    copy: "Tiered cakes for the celebration, including an 8, 6, and 4 inch wedding cake.",
    image: lookbook[0],
  },
  {
    title: "Birthdays",
    copy: "From a ballerina cake to a 25th with vintage piping and soft florals.",
    image: lookbook[3],
  },
  {
    title: "Sweet treats",
    copy: "Cupcakes, chocolate covered strawberries, and smaller celebration sets.",
    image: lookbook[5],
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
        <div>
          <p className="font-script text-4xl text-rose">Mississauga, Ontario</p>
          <h1 className="mt-2 font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            Custom and celebration cakes
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            Weddings, birthdays, and sweet treats. LittleBakes serves Mississauga and the GTA, and
            takes the order in an Instagram DM.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/order" className="rounded-full bg-rose px-6 py-3 text-center font-medium text-foam hover:bg-ink">
              Start your order note
            </Link>
            <a
              href="#lookbook"
              className="rounded-full border border-sand px-6 py-3 text-center font-medium hover:border-gold"
            >
              See the cakes
            </a>
          </div>
        </div>
        <figure className="relative">
          <Image
            src={lookbook[0].src}
            alt={lookbook[0].alt}
            width={lookbook[0].width}
            height={lookbook[0].height}
            priority
            sizes="(min-width: 768px) 46vw, 100vw"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cream/92 px-4 py-3 text-sm text-ink backdrop-blur-sm">
            <span className="font-medium">Simple and classic.</span> 8 inch, 6 inch, and 4 inch tiers.
          </figcaption>
        </figure>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-3">
          <p className="text-sm leading-6 text-blush">
            Send a DM with your date, cake size or number of servings, and an inspo photo to get a quote.
          </p>
          <p className="text-sm leading-6">Heart Cakes and Round Cakes are highlights on the Instagram profile.</p>
          <p className="text-sm leading-6">The other highlights are named Customer Cam and Reviews.</p>
        </div>
      </section>

      <section id="occasions" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
        <p className="font-script text-4xl text-rose">the occasions</p>
        <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">What the bio promises</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {occasionCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[1.75rem] bg-foam ring-1 ring-sand">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                sizes="(min-width: 768px) 30vw, 100vw"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-3xl text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{card.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="styles" className="bg-foam">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <p className="font-script text-4xl text-rose">the styles</p>
          <h2 className="max-w-2xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
            Heart cakes, round cakes, and the rest of the feed
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Heart cakes", "A highlight of their own, from cherry hearts to bows."],
              ["Round cakes", "A second highlight. Many posts are a 6 inch cake in two layers."],
              ["Vintage piping", "Soft florals and piped borders, including a 25th birthday."],
              ["Wafer paper florals", "A wafer paper cake with roses."],
              ["Tiered weddings", "An 8, 6, and 4 inch wedding cake, described as simple and classic."],
              ["Themed celebrations", "Ballerina, Elmo, SpongeBob, and Spider-Man cupcakes have all appeared."],
            ].map(([title, copy]) => (
              <li key={title} className="rounded-[1.5rem] bg-cream p-5 ring-1 ring-sand">
                <h3 className="font-display text-2xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="lookbook" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-script text-4xl text-rose">the lookbook</p>
            <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">From their own posts</h2>
          </div>
          <a href={instagramUrl} className="text-sm font-medium text-rose underline decoration-sand underline-offset-4">
            Follow @littlebakes.ca
          </a>
        </div>
        <div className="mt-8 columns-2 gap-4 md:columns-3">
          {lookbook.map((cake) => (
            <figure key={cake.href} className="mb-4 break-inside-avoid">
              <a href={cake.href} className="block overflow-hidden rounded-[1.5rem]">
                <Image
                  src={cake.src}
                  alt={cake.alt}
                  width={cake.width}
                  height={cake.height}
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="px-1 pt-3">
                <p className="font-display text-xl text-ink">{cake.title}</p>
                <p className="mt-1 text-sm leading-5 text-muted">{cake.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="reels" className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <p className="font-script text-4xl text-blush">press play</p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">Reels from the feed</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blush">
            These are their Instagram reels, saved so they play here. Original audio is not included.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reels.map((reel) => (
              <figure key={reel.src}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={reel.poster}
                  aria-label={reel.title}
                  className="aspect-[9/16] w-full rounded-[1.75rem] bg-cocoa object-cover"
                >
                  <source src={reel.src} type="video/mp4" />
                </video>
                <figcaption className="px-1 pt-3">
                  <p className="font-display text-2xl">{reel.title}</p>
                  <p className="mt-1 text-sm text-blush">{reel.caption}</p>
                  <a href={reel.href} className="mt-2 inline-block text-sm underline decoration-cocoa underline-offset-4">
                    View on Instagram
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
        <p className="font-script text-4xl text-rose">what is posted</p>
        <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">Pricing that is public</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Custom celebration cakes are quoted in the DM. LittleBakes has not posted a general price
          list or a general lead time for those orders. The prices below are only for the Valentine&apos;s
          Day preorder.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["6 inch round", "$65 CAD", "Choose vanilla with vanilla buttercream, chocolate with chocolate buttercream, or red velvet with cream cheese."],
            ["6 inch heart", "$75 CAD", "A 6 inch heart cake with a photo strip of 3 photos. A custom message of 3 to 4 words is for the 6 inch cakes."],
            ["Bento and cupcakes", "$70 CAD", "A 4 inch mini cake with 5 cupcakes, in the same three flavors."],
          ].map(([title, price, copy]) => (
            <article key={title} className="rounded-[1.75rem] bg-foam p-6 ring-1 ring-sand">
              <h3 className="font-display text-3xl text-ink">{title}</h3>
              <p className="mt-2 font-display text-4xl text-rose">{price}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-muted">
          Pickup on that form is February 13 and 14 only, with time slots listed there.{" "}
          <a href={valentineFormUrl} className="font-medium text-rose underline decoration-sand underline-offset-4">
            Open the Valentine&apos;s Day cake preorder form
          </a>
          .
        </p>
      </section>

      <section id="order" className="bg-blush/40">
        <div className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <OrderBuilder />
        </div>
      </section>
    </main>
  );
}
