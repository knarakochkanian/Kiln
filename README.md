# The Artisan Kiln

Production-ready one-page ceramic tile ordering app with a responsive checkout flow and desktop Design Tool.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Hook Form
- Zod
- Framer Motion

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Tests

```bash
npm run test
```

## Architecture

Project follows Feature-Sliced Design.

- `app` initializes layout and providers.
- `pages` composes the order page.
- `widgets` contains the cart, checkout, and design tool blocks.
- `features` contains user actions such as changing quantity, removing cart items, selecting payment method, selecting tiles, and placing tiles.
- `entities` contains business models, slices, selectors, schemas, and pure calculations.
- `shared` contains reusable UI and utilities.

## Business Logic

Subtotal = quantity * price

Shipping = free if subtotal > $500, otherwise $25

Grand Total = subtotal + shipping
