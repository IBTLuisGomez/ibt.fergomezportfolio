---
name: Nexus Precision Engineering
colors:
  surface: '#0d141d'
  surface-dim: '#0d141d'
  surface-bright: '#333a44'
  surface-container-lowest: '#080f18'
  surface-container-low: '#151c25'
  surface-container: '#19202a'
  surface-container-high: '#242a34'
  surface-container-highest: '#2e353f'
  on-surface: '#dce3f0'
  on-surface-variant: '#bdc8cd'
  inverse-surface: '#dce3f0'
  inverse-on-surface: '#2a313b'
  outline: '#879397'
  outline-variant: '#3e484c'
  surface-tint: '#6dd4f1'
  primary: '#6dd4f1'
  on-primary: '#003641'
  primary-container: '#3baac6'
  on-primary-container: '#003a47'
  inverse-primary: '#00677c'
  secondary: '#a9c8fb'
  on-secondary: '#0b315b'
  secondary-container: '#274773'
  on-secondary-container: '#98b7e8'
  tertiary: '#84d2e6'
  on-tertiary: '#003640'
  tertiary-container: '#59a8bc'
  on-tertiary-container: '#003a45'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b0ecff'
  primary-fixed-dim: '#6dd4f1'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5e'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a9c8fb'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#274773'
  tertiary-fixed: '#abedff'
  tertiary-fixed-dim: '#84d2e6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0d141d'
  on-background: '#dce3f0'
  surface-variant: '#2e353f'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system targets enterprise CTOs, biotech founders, and venture-backed product leaders seeking bespoke software architecture and high-performance digital engineering. The emotional tone is authoritative, analytical, and distinctly sophisticated—bridging computational biology precision with bleeding-edge software delivery.

The aesthetic philosophy fuses **High-Tech Minimalism** with **Atmospheric Glassmorphism**. Structural layouts are anchored by deep oceanic slate canvases, crisp micro-borders, and high-energy cyan/teal spectral accents. Interfaces convey density without clutter, utilizing sharp spatial hierarchy, monospaced computational accents, and glowing luminescence to signal architectural integrity, scalability, and modern engineering prowess.

## Colors

The palette draws directly from the bioscience-inspired high-tech references: deep obsidian slate bases illuminated by crisp photonic cyans and aquatic teal gradations.

- **Primary (`#3BAAC6`)**: The operational luminescent cyan. Applied to interactive focal points, dynamic state indicators, active tabs, and primary action surfaces.
- **Secondary (`#0B315B`)**: Deep naval blue. Serves as high-contrast structural containers, subtle card backdrops, elevated headers, and badge backgrounds.
- **Tertiary (`#72C0D4`)**: Soft aqua highlight. Applied to interactive focus states, secondary chart series, subtle glow rims, and informational accents.
- **Neutral (`#0A111A`)**: Dark abyss slate. Forms the foundation canvas, minimizing optical strain while maximizing the luminescence of the cyan signals.
- **Supportive Greys**: Cool tech slate (`#5C6F81`) for inactive typography and subtle scaffolding; frost grey (`#B0C4D9`) for secondary labels and data metrics; pure high-contrast crisp white (`#F4F8FA`) for primary headers and readable text tiers.

## Typography

The type system balances executive authority with rigorous engineering discipline:
- **Headlines (`Plus Jakarta Sans`)**: Delivers geometric clarity and structural modernity. Tight tracking (`-0.02em` to `-0.03em`) produces an architectural, modern agency impact across large screens.
- **Body (`Inter`)**: Chosen for neutral legibility and optimal digital rendering across technical copy, architecture overviews, and capability breakdowns.
- **Technical Indicators & Monospace (`JetBrains Mono`)**: Deployed exclusively across micro-labels, system statuses, telemetry indicators, metadata tags, and code syntax snippets to reinforce laboratory engineering precision.

## Layout & Spacing

The layout is built upon an 8pt architectural rhythm within a 12-column dynamic fluid grid system:
- **Desktop (>= 1280px)**: 12-column grid, max-width `1440px`, centered with `margin-lg` outer containment and `1.5rem` gutters.
- **Tablet (768px - 1279px)**: 8-column layout, `margin` of `2rem`, and `1rem` gutters. Complex data tables and case-study panels transition into dual-column cards.
- **Mobile (< 768px)**: 4-column layout, `margin-sm` of `1rem`, and `gutter-sm` of `1rem`. Hero components and metric blocks stack vertically to prioritize single-column clarity.

Internal component rhythm strictly leverages `space-xs` through `space-md` for compact utility surfaces, whereas structural marketing blocks utilize `space-2xl` and `space-3xl` for high-impact visual separation.

## Elevation & Depth

Visual hierarchy does not rely on heavy standard drop-shadows. Instead, depth is achieved through **Tonal Surface Layering**, **Atmospheric Backdrops**, and **Subtle Photon Rims**:

- **Ground Canvas (`Surface-0`)**: Deep `#0A111A` matte base.
- **Elevated Surfaces (`Surface-1`)**: Semi-translucent `#0E1B2B` with an ultrafine 1px outline of `rgba(114, 192, 212, 0.12)`.
- **Active / Hover State Surfaces (`Surface-2`)**: Translucent `#12243A` backed by an ethereal localized glow: `box-shadow: 0 8px 32px -4px rgba(11, 49, 91, 0.5), 0 0 16px -2px rgba(59, 170, 198, 0.25)`.
- **Modals & Flyouts (`Surface-Overlay`)**: Frosted glass container using `backdrop-filter: blur(16px)` over `#071018e6`, bounded by a crisp 1px stroke of `rgba(59, 170, 198, 0.3)`.

## Shapes

The interface embraces a **Soft / Precision Engineered** shape language (`roundedness: 1`):
- **Base Components (Buttons, Inputs, Badges)**: Feature a tight `0.25rem` (4px) corner radius, conveying technical precision reminiscent of circuit board tracings and laboratory hardware.
- **Surface Panels & Content Cards**: Scale to `0.5rem` (8px), maintaining subtle curvature without sacrificing structural density.
- **Hero Containers & Feature Shells**: Cap at `0.75rem` (12px), framing complex architectural diagrams and dashboard previews cleanly.
- **Pill Shape Exception**: Reserved solely for active system status badges (`ONLINE`, `SYNCHRONIZED`) and numerical pill counters.

## Components

### Buttons
- **Primary Action**: Solid `#3BAAC6` fill with `#0A111A` bold typography. On hover: shifts toward `#72C0D4` paired with an ambient `0 0 20px rgba(59, 170, 198, 0.45)` cyan aura.
- **Secondary / Ghost Action**: Translucent navy base (`rgba(11, 49, 91, 0.35)`) with a 1px perimeter of `rgba(114, 192, 212, 0.3)`. Text renders in crisp white (`#F4F8FA`).
- **Interactive States**: Transitions occur within 150ms cubic-bezier curves; active states compress by `scale(0.98)`.

### Chips & Telemetry Badges
- Built using `JetBrains Mono` at `label-sm` uppercase.
- Contain a 6px pulsing circular dot (`#3BAAC6`) beside metric labels.
- Surrounded by an ultra-thin 1px border (`rgba(59, 170, 198, 0.2)`) over a deep slate pill.

### Cards & Service Modules
- Engineered with an ambient gradient backdrop: linear from `rgba(14, 27, 43, 0.85)` to `rgba(10, 17, 26, 0.95)`.
- Border: 1px constant perimeter in `rgba(92, 111, 129, 0.2)`. On hover, the border dynamically illuminates to `rgba(59, 170, 198, 0.5)` with an inner cyan shimmer.

### Input Fields & Controls
- **Text Inputs**: Flat background (`#070D14`) framed with a 1px border of `#1A2F45`. Text sits in crisp white; placeholders use tech slate (`#5C6F81`).
- **Focused State**: Glows with a 1px `#3BAAC6` boundary and subtle outer shadow ring `0 0 0 3px rgba(59, 170, 198, 0.15)`.
- **Checkboxes & Radios**: Custom square/round 16px widgets. In checked state, filled with `#3BAAC6` containing an oceanic dark navy `#0A111A` vector checkmark.

### Domain-Specific Components
- **Architecture Flow Diagrams**: Circuit and helix-inspired connection vectors in `#3BAAC6` with animated dash arrays depicting real-time data pipelines.
- **Code & API Sandbox**: Deep black `#05080C` panel with embedded line numbering in `#5C6F81` and syntax highlights in `#72C0D4`, `#3BAAC6`, and cool white.