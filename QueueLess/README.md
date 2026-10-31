# QueueLess

**Lunch, without the line.** QueueLess helps students find a short campus food queue, share what the line looks like, and place a simple preorder for pickup.

## Demo

This is a self-contained, no-build web app. Open `index.html` directly for the demo. To try the installable/offline PWA behavior, serve the folder from localhost (for example, run `python -m http.server 8000` here and open `http://localhost:8000`).

## Hackathon pitch

Students lose a surprising part of their break to guessing which dining spot is busy. QueueLess puts the campus food options and estimated waits in one place, then gives students a reason to contribute fresh observations: every quick line report makes the next person's choice a little easier. Preorders tie the discovery flow to an immediate action and a visible pickup plan.

**Demo flow:** Explore a spot → add its featured item → change the quantity → plan a pickup → see a generated pickup code → mark it picked up → see saved time in Your impact. Try Map, the wait filters, dark mode, or Share a wait update too.

## What works

- Search campus spots and filter by short wait, vegetarian options, or open status.
- Switch between an accessible venue list and a schematic campus map.
- Submit anonymous wait updates that adjust the local demo estimates.
- Add one venue's featured dish to a preorder basket, adjust quantity, and check out without payment.
- Track a pickup code and mark an order complete to update the impact dashboard.
- Keep the basket, queue reports, theme, order and impact stats in browser storage.
- Install as a small PWA and cache the app shell for offline use on localhost or HTTPS.
- Responsive desktop and mobile layouts; keyboard search shortcut `/`; reduced-motion support; dark mode.

## Product and data notes

Northstar University and its dining venues are fictional demo data. Wait estimates, ratings, popularity counts and the pickup workflow are simulated and saved only in this browser. No account, payment, live campus feed, or vendor integration is connected.

## Stack

Vanilla HTML, CSS and JavaScript. No build step or external JavaScript dependencies. Google Fonts are an optional visual enhancement; the system sans-serif fallback keeps the interface usable offline.
