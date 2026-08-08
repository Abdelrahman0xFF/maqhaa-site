# ☕ Maqhaa POS Website (maqhaa-site) — Corrected Implementation Plan

## ✅ Status: Refactored from the original (wrong) plan
The previous `PLAN.md` was replaced because it got the **framework**, the **design language**, and the **package feature split** wrong (verified against the actual source of both desktop apps).

---

## 🔍 Deep-scan findings: `offline-maqhaa` vs `offline-small-maqhaa`

Both apps are Electron + React 19 + Tailwind CSS v4 + Zustand + Better-SQLite3 POS systems and they **share ~90% identical code**. One thing differs: **feature depth**. They map cleanly onto the two website packages.

### ❌ `offline-small-maqhaa` → **باقة مقهى Standard (Basic)**
Shared core present in BOTH apps:
- 🛒 Touch POS — category grid, Arabic/EN search, barcode, item modifiers, dine-in / takeaway / delivery, % & fixed discounts, VAT, cash / card / e-wallet, order notes, daily order-number reset
- 🪑 Table management (free / occupied)
- 🖨️ Thermal printing — ESC/POS (TCP/IP, Windows SMB, PDF preview)
- ⏱️ Shift open/close, cash reconciliation & Z-report
- 💸 Expenses · 🔒 Staff PIN + cashier/admin roles + audit log
- 🌍 Multi-currency (`currencies.ipc` exists in BOTH) · 💾 Auto 30-day backups
- 📊 Sales reports + Recharts analytics

### ✅ `offline-maqhaa` → **باقة مقهى Premium (Full)**
Everything in Standard **PLUS** these modules found ONLY here:
- 📦 **Inventory & Recipe Engine** — raw ingredients (g / ml / units), unit conversion, recipe linking, automatic stock deduction on sale, low-stock alerts + auto-disable menu items, stock adjustments & movements
- 🚚 **Suppliers & Purchase Orders** — supplier directory, purchase orders, supplier balances
- 🗑️ **Damages / Waste tracking**
- 🖨️ **Multi-Printer Category Routing** — route orders by department (مشروبات → بارستا، وجبات → مطبخ، فاتورة → كاشير)
- 📑 **Extra report pages**: inventory, damages, purchases

> ✅ Confirmed correction: multi-currency and expenses are in BOTH editions (the old plan wrongly listed them as Premium-only).

---

## 🛠️ Technology Stack (matches the existing scaffold)
- **Framework**: Next.js 16 (App Router) — already initialized in `D:\VS Code\maqhaa-site`
- **Styling**: Tailwind CSS v4 (PostCSS already configured)
- **Icons**: Lucide React
- **Typography**: `@fontsource/cairo` (matches the desktop app)
- **Language & Direction**: RTL Arabic site (matching the app’s `dir="rtl"`)

---

## 🎨 Design System — cloned from the real app (`assets/main.css` + components)

> The old plan claimed a *dark charcoal glassmorphic* theme. **The real app is a LIGHT theme with a warm coffee-orange primary accent.** The site mirrors the actual tokens:

| Token | Value | Notes |
| --- | --- | --- |
| `--background` | `0 0% 98%` | near-white page background |
| `--foreground` | `222 47% 11%` | dark-navy ink text |
| `--primary` | `24.6 95% 53.1%` | **signature coffee orange ≈ #f97316** |
| `--primary-foreground` | `0 0% 100%` | white on orange |
| `--card` / `--card-border` | `0 0% 100%` / `214 32% 91%` | white cards, soft light borders |
| `--secondary` | `210 40% 96.1%` | light gray buttons |
| `--muted-foreground` | `215.4 16.3% 46.9%` | secondary gray text |
| `--border` / `--ring` | `214 32% 91%` / `24.6 95% 53.1%` | |
| radius | `0.75rem` | |
| font | **Cairo** | `font-cairo`, also used on receipts |

Micro-interactions from the app: `active:scale-[0.98]`, `hover:bg-accent`, `bg-primary/10` icon chips, thin custom scrollbar, fade / slide-in animation utilities.

---

## 📐 Site Structure (all Arabic, RTL)

1. **Navbar** — sticky, logo «☕ مقهى | Maqhaa», links (ما هو مقهى / التجرُبة / المميزات / الباقات / الأسئلة), CTA «اطلب نسختك»
2. **Hero** — tagline «نظام كاشير وإدارة الكافيهات والمطاعم الأسرع — يعمل 100% أوفلاين بدون اشتراكات», badge pills, dual CTAs, floating live POS mockup
3. **What is Maqhaa** — elevator pitch + Key Selling Points (from `AD_CONTENT_CREATOR_GUIDE.md`)
4. **Interactive Real Demo** (`'use client'`) — replicates real app components:
   - **POS screen**: items, modifiers, live cart & total
   - **Table grid**: free / occupied
   - **Thermal receipt** + **Z-report** preview (Cairo font)
5. **Features Grid** — 6–8 cards from the real modules
6. **Pricing — 2 Packages + Comparison Matrix**
   - **باقة مقهى Standard** (Small) vs **باقة مقهى Premium** (Full), ✔/✖ matrix, CTA «اطلب باقتك»
7. **Hardware & Compatibility** — Windows/macOS/Linux, thermal 80/58mm, barcode scanners, cash drawers, touchscreens
8. **FAQ** — accordion (offline zero-subscription, lifetime license, printer setup, transfer)
9. **CTA / Order (WhatsApp) Modal** — pre-filled package + name/phone/city → WhatsApp
10. **Footer** — links + attribution «عبدالرحمن أشرف»

## 🗂️ File Map
```
maqhaa-site/
├── PLAN.md                     # this corrected plan
├── src/
│   ├── app/
│   │   ├── layout.js           # RTL + Cairo font + globals
│   │   ├── globals.css         # Tailwind v4 tokens cloned from app
│   │   └── page.js             # composes all sections (server shell)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── WhatIsMaqhaa.jsx
│       ├── InteractiveDemo.jsx # 'use client' POS simulator
│       ├── FeaturesGrid.jsx
│       ├── Pricing.jsx
│       ├── HardwareSection.jsx
│       ├── FAQSection.jsx
│       ├── OrderModal.jsx      # 'use client' WhatsApp form
│       └── Footer.jsx
```

## 🚀 Execution Roadmap
1. **Setup**: install `@fontsource/cairo`; write `globals.css` tokens; `layout.js` (RTl, Cairo).
2. **Core**: `Navbar`, `Hero`, `Footer`, small shared `ui` helpers (Button, Section tags, Badge).
3. **Demo**: `InteractiveDemo` (POS cart, Tables, Receipt/Z-report).
4. **Content**: `WhatIsMaqhaa`, `FeaturesGrid`.
5. **Conversion**: `Pricing`, `OrderModal` (WhatsApp), `HardwareSection`, `FAQSection`.
6. **Wire `page.js`**; verify with `npm run build` and `npm run dev`.

---

## ✅ Deliverables & Verification
- Corrected `PLAN.md`.
- Full working premium site inside `D:\VS Code\maqhaa-site`.
- Clean production build via `npm run build`.
- Local preview via `npm run dev`.

