"use client";

import { useMemo, useState, type FormEvent } from "react";
import { flavors, occasions, sizes, styles } from "@/lib/cakes";
import { buildOrderMessage, type OrderDraft } from "@/lib/message";
import { instagramDmUrl, valentineFormUrl } from "@/lib/site";

const emptyDraft: OrderDraft = {
  name: "",
  occasion: "",
  style: "",
  size: "",
  date: "",
  servings: "",
  flavor: "",
  notes: "",
};

function copyWithSelection(text: string) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.focus();
  area.select();
  const ok = document.execCommand("copy");
  area.remove();
  return ok;
}

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-ink">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <label
              key={option}
              className={`cursor-pointer rounded-full border px-3 py-2 text-sm ${
                selected
                  ? "border-ink bg-ink text-cream"
                  : "border-sand bg-foam text-cocoa hover:border-gold"
              }`}
            >
              <input
                className="sr-only"
                type="radio"
                name={name}
                value={option}
                checked={selected}
                onChange={() => onChange(option)}
              />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function OrderBuilder() {
  const [draft, setDraft] = useState<OrderDraft>(emptyDraft);
  const [toast, setToast] = useState("");
  const [copied, setCopied] = useState(false);
  const message = useMemo(() => buildOrderMessage(draft), [draft]);
  const ready = Boolean(draft.name.trim() && draft.occasion && draft.style && draft.size);

  function update(partial: Partial<OrderDraft>) {
    setDraft((current) => ({ ...current, ...partial }));
    setCopied(false);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready) return;

    let copiedOk = false;
    try {
      await navigator.clipboard.writeText(message);
      copiedOk = true;
    } catch {
      copiedOk = copyWithSelection(message);
    }

    setCopied(true);
    setToast(
      copiedOk
        ? "Message copied, just paste it in the DM"
        : "Select the message, copy it, then paste it in the DM",
    );
    window.setTimeout(() => setToast(""), 4200);
    window.open(instagramDmUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <form onSubmit={submit} className="grid gap-7 rounded-[2rem] bg-foam p-5 shadow-sm ring-1 ring-sand sm:p-8">
        <div>
          <p className="font-script text-3xl text-rose">your note</p>
          <h2 className="font-display text-4xl tracking-tight text-ink">Start the DM</h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Share your date, the cake size or number of servings, and an inspo photo. This note
            gathers that, then opens the Instagram chat.
          </p>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          Your name
          <input
            required
            value={draft.name}
            onChange={(event) => update({ name: event.target.value })}
            autoComplete="name"
            className="rounded-2xl border border-sand bg-cream px-4 py-3 font-normal"
          />
        </label>

        <ChoiceGroup
          legend="Occasion"
          name="occasion"
          options={occasions}
          value={draft.occasion}
          onChange={(occasion) => update({ occasion })}
        />
        {draft.occasion === "Valentine's Day" ? (
          <p className="rounded-2xl bg-blush/70 px-4 py-3 text-sm leading-6 text-ink">
            For Valentine&apos;s Day, a 6 inch round is $65 CAD, a 6 inch heart with a photo strip of 3
            photos is $75 CAD, and a 4 inch mini cake with 5 cupcakes is $70 CAD. Pickup is February
            13 and 14 only.{" "}
            <a href={valentineFormUrl} className="underline">
              Open the preorder form
            </a>
            . You can still send this DM.
          </p>
        ) : null}

        <ChoiceGroup
          legend="Style"
          name="style"
          options={styles}
          value={draft.style}
          onChange={(style) => update({ style })}
        />
        <ChoiceGroup
          legend="Cake size"
          name="size"
          options={sizes}
          value={draft.size}
          onChange={(size) => update({ size })}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Date
            <input
              type="date"
              value={draft.date}
              onChange={(event) => update({ date: event.target.value })}
              className="rounded-2xl border border-sand bg-cream px-4 py-3 font-normal"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Servings
            <input
              value={draft.servings}
              onChange={(event) => update({ servings: event.target.value })}
              placeholder="For example, 10"
              className="rounded-2xl border border-sand bg-cream px-4 py-3 font-normal"
            />
          </label>
        </div>

        <ChoiceGroup
          legend="Flavor"
          name="flavor"
          options={flavors}
          value={draft.flavor}
          onChange={(flavor) => update({ flavor })}
        />
        <p className="-mt-4 text-xs leading-5 text-muted">
          Vanilla, chocolate, and red velvet are on the Valentine&apos;s Day preorder. Describe any other
          flavor below.
        </p>

        <label className="grid gap-2 text-sm font-medium">
          Inspiration
          <textarea
            value={draft.notes}
            onChange={(event) => update({ notes: event.target.value })}
            rows={4}
            placeholder="Colors, wording, or a cake you love"
            className="rounded-2xl border border-sand bg-cream px-4 py-3 font-normal"
          />
        </label>

        <button
          type="submit"
          disabled={!ready}
          className="rounded-full bg-rose px-6 py-4 text-base font-medium text-foam enabled:hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          Copy message and open Instagram
        </button>
        <p className="text-xs leading-5 text-muted">
          Custom cakes are quoted in the chat. Add your date, and I will tell you if that day can work.
        </p>
      </form>

      <aside className="rounded-[2rem] bg-ink p-5 text-cream sm:p-8 lg:sticky lg:top-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-blush uppercase">Ready to paste</p>
        <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-6 text-foam">{message}</pre>
        {copied ? (
          <a
            href={instagramDmUrl}
            className="mt-6 inline-flex rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink"
          >
            Open the DM again
          </a>
        ) : null}
      </aside>

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-1/2 z-50 w-[min(92vw,28rem)] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-center text-sm text-cream shadow-lg"
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}
