import Link from "next/link";
import {
  claudauraUrl,
  emailAddress,
  facebookUrl,
  instagramUrl,
  linktreeUrl,
  tiktokUrl,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-sand bg-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-ink">LittleBakes</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            Custom and celebration cakes. Weddings, birthdays, and sweet treats. Mississauga, Ontario,
            serving the GTA.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Find them</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a href={instagramUrl} className="hover:text-rose">
                Instagram @littlebakes.ca
              </a>
            </li>
            <li>
              <a href={tiktokUrl} className="hover:text-rose">
                TikTok @littlebakes.ca
              </a>
            </li>
            <li>
              <a href={facebookUrl} className="hover:text-rose">
                Facebook
              </a>
            </li>
            <li>
              <a href={linktreeUrl} className="hover:text-rose">
                Linktree
              </a>
            </li>
            <li>
              <a href={`mailto:${emailAddress}`} className="hover:text-rose">
                {emailAddress}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">On this site</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <Link href="/#lookbook" className="hover:text-rose">
                Lookbook
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-rose">
                Public pricing
              </Link>
            </li>
            <li>
              <Link href="/order" className="hover:text-rose">
                Start an order
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Mississauga, ON. Orders by Instagram DM.</p>
          <p>
            Website by{" "}
            <a href={claudauraUrl} className="font-medium text-cocoa underline decoration-sand underline-offset-4">
              ClaudAura
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
