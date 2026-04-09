# Audiophile

> A multi-page e-commerce website for premium audio products — browse, cart, and checkout in one place.

![Preview](public/Desktop.png)

**Live Demo:** [audiophile-rrn.vercel.app](https://audiophile-rrn.vercel.app)

---

## Overview

Audiophile is a feature-complete multi-page e-commerce storefront built as a Frontend Mentor challenge. Users can browse product categories, add items to a persistent cart, adjust quantities, and complete a validated checkout flow with an order summary modal.

---

## Features

- Multi-page navigation across product categories
- Add, remove, and adjust quantities in the cart
- Cart data persists across browser sessions
- Validated checkout form with real-time error feedback
- Order summary modal on successful checkout
- Computed totals — shipping ($50 flat) and VAT (20% of subtotal)
- Responsive layout across mobile, tablet, and desktop
- Hover states for all interactive elements

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Routing | React Router |
| Forms | React Hook Form + Zod |
| UI Components | Radix UI |
| State Management | Zustand |

---

## Getting Started

### Prerequisites

- Node.js `v18+`

### Installation

```bash
git clone https://github.com/nofuenterr/audiophile.git
cd audiophile
npm install
```

### Running the App

```bash
npm run preview
```

### Build

```bash
npm run build
```

---

## Screenshots

| Desktop | Tablet | Mobile |
|---|---|---|
| ![Desktop](public/Desktop.png) | ![Tablet](public/Tablet.png) | ![Mobile](public/Mobile.png) |

---

## To-do

### In Progress / Upcoming

- [ ] Convert product images from `.jpg` to `.webp` for better performance

### Completed

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Add/Remove products from the cart
- [x] Edit product quantities in the cart
- [x] Fill in all fields in the checkout
- [x] Receive form validations if fields are missed or incorrect during checkout
- [x] See correct checkout totals depending on the products in the cart
- [x] Shipping always adds $50 to the order
- [x] VAT is calculated as 20% of the product total, excluding shipping
- [x] See an order confirmation modal after checking out with an order summary
- [x] Keep track of what's in the cart, even after refreshing the browser

---

## Credits

This project is a solution to a [Frontend Mentor](https://www.frontendmentor.io) challenge. I do not own the rights to any assets used.

---

*Developed by **RR Nofuente***