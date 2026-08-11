# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Cafe and restaurant owners (primarily in the Arab world) seeking an accessible, fast, and reliable point-of-sale system.

## Product Purpose
To provide a fast, offline-first POS and management system for cafes and restaurants that operates completely without recurring subscriptions. Success means clear presentation of the two available packages (Standard vs. Premium) and driving WhatsApp order conversions.

## Positioning
A 100% offline POS system with zero subscriptions and a lifetime license, offering robust offline performance compared to cloud-reliant competitors.

## Operating Context
Users evaluate the software for use on local hardware (Windows/macOS/Linux touchscreens, thermal printers, cash drawers, barcode scanners) in their cafes or restaurants. They will interact with the site to compare features, preview the interface, and place orders directly via WhatsApp.

## Capabilities and Constraints
- RTL (Right-to-Left) Arabic orientation is strictly required.
- Standard (Small) vs. Premium (Full) packages have a strict feature matrix (e.g., Premium has inventory and multi-printer routing).
- Interactive real demo components (POS cart, table grid, thermal receipt preview).
- Must include hardware compatibility information and an FAQ accordion.

## Brand Commitments
- Name: مقهى | Maqhaa
- Typography: Cairo font (`@fontsource/cairo`).
- Visual Identity: Light theme with a warm coffee-orange primary accent (~#f97316), white cards with soft light borders, and specific micro-interactions (e.g. `active:scale-[0.98]`).
- Voice: Direct, professional, and benefit-oriented Arabic marketing copy.

## Evidence on Hand
- Detailed feature matrix and KSPs available in the repository (`PLAN.md`).
- Existing real app design system tokens (cloned via `globals.css` in the existing project).

## Product Principles
1. **Show, Don't Tell**: Use interactive real demos (POS, tables, receipts) rather than static images alone.
2. **Clarity in Value**: Emphasize "offline" and "no subscriptions" as the central selling point.
3. **Frictionless Conversion**: Guide users straightforwardly to the WhatsApp order modal with pre-filled details.

## Accessibility & Inclusion
Full RTL support and legible typography suitable for Arabic readers across different devices.
