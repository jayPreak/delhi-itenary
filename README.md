# Delhi Diaries

A mobile-first scrapbook site for a Delhi/Gurgaon trip countdown, day-by-day itinerary, and a
directory of every saved Google Maps place.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything content-related lives in `lib/`, no component edits needed for text changes:

- **`lib/trip.js`** title, dates, quote, category/tag labels.
- **`lib/places.js`** every saved place (name, category, rating, price, why-famous, notes).
  Add a new place by appending an object here; `id` is used to reference it from the itinerary.
- **`lib/itinerary.js`** the 5 days, each with `blocks` (Morning/Day/Evening/Night). Each block
  has `items`, which reference either `{ kind: "place", id: "..." }` (pulls from `lib/places.js`)
  or `{ kind: "ai", name, why, bestTime, duration, area }` (an inline AI suggestion). The `AI`
  object at the top of the file holds the reusable ones.

Any place in `lib/places.js` not referenced by an itinerary day automatically shows up in the
"Saved Places" directory at the bottom, grouped by category, labelled "reminder for later."

## Stack

Next.js (App Router) + Tailwind CSS v4 + Framer Motion + lucide-react. No database content is
static data in `lib/`.
