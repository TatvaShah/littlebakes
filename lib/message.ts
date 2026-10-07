export type OrderDraft = {
  name: string;
  occasion: string;
  style: string;
  size: string;
  date: string;
  servings: string;
  flavor: string;
  notes: string;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function cleanText(value: string) {
  return value.replace(/-{2}/g, " ").replace(/\s+/g, " ").trim();
}

export function formatOrderDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return cleanText(iso);
  const month = months[Number(match[2]) - 1];
  const day = Number(match[3]);
  if (!month || !day) return cleanText(iso);
  return `${month} ${day}, ${match[1]}`;
}

export function buildOrderMessage(draft: OrderDraft) {
  const lines = ["Hi LittleBakes, I would love to place an order.", ""];
  const name = cleanText(draft.name);
  if (name) lines.push(`Name: ${name}`);
  if (draft.occasion) lines.push(`Occasion: ${draft.occasion}`);
  if (draft.style) lines.push(`Style: ${draft.style}`);
  if (draft.size) lines.push(`Size: ${draft.size}`);
  if (draft.date) lines.push(`Date: ${formatOrderDate(draft.date)}`);
  const servings = cleanText(draft.servings);
  if (servings) lines.push(`Servings: ${servings}`);
  if (draft.flavor && draft.flavor !== "I will describe the flavor") {
    lines.push(`Flavor: ${draft.flavor}`);
  }
  const notes = cleanText(draft.notes);
  if (notes) {
    lines.push("", `Inspiration: ${notes}`);
  }
  lines.push(
    "",
    "I can send an inspo photo next. Please let me know if this date works and what the quote would be.",
  );
  return lines.join("\n");
}
