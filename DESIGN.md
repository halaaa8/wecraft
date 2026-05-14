---
name: Wecraft
description: A bold, utility-first management system for artisans and craft businesses.
colors:
  primary: "#d90f0f"
  primary-hover: "#b30c0c"
  neutral-bg: "#fafafa"
  surface: "#ffffff"
  border: "#eaeaea"
  text-main: "#111111"
  text-muted: "#777777"
  text-light: "#9e9e9e"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "42px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-1.5px"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  sm: "8px"
  md: "8px"
  lg: "14px"
spacing:
  xs: "4px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "#f5f5f5"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    border: "1px solid {colors.border}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
---

# Design System: Wecraft

## 1. Overview

**Creative North Star: "The Artisan's Material Ledger"**

The Wecraft design system is built for the high-intensity environment of a physical workshop. It prioritizes data density without sacrificing readability, providing a "material compass" for artisans to navigate their inventory and orders. The interface is characterized by bold accents and a crisp, professional layout that instills confidence in its calculations.

It provides a responsive and easy management experience, ensuring that every interaction—from checking a material total on a phone to managing complex client lists on a desktop—is smooth and dependable.

**Key Characteristics:**
- **Utility-Led Hierarchy**: Critical stats and material totals are oversized and bold.
- **Breathable Density**: Generous whitespace surrounds dense tables to maintain clarity.
- **Brand Authority**: Strategic use of Wecraft Red (#d90f0f) to anchor the user's attention on key actions.
- **Workshop-Ready**: High-contrast typography and large touch targets for mobile use.

## 2. Colors

The palette is anchored by a high-energy red, balanced by soft neutrals to keep the focus on information.

### Primary
- **Wecraft Red** (#d90f0f): Used for primary calls to action, active states, and critical alerts. It represents the "bold" personality of the brand.
- **Red Hover** (#b30c0c): A deeper shade for interactive states.

### Neutral
- **Paper White** (#fafafa): The primary background color, providing a clean canvas.
- **Surface** (#ffffff): Used for cards and elevated components to create depth.
- **Ink Black** (#111111): The primary text color, chosen for maximum legibility.
- **Muted Smoke** (#777777): For secondary labels and descriptive text.
- **Mist Border** (#eaeaea): The universal separator for cards and tables.

### Named Rules
**The Red Rarity Rule.** Wecraft Red is a powerful color. It should be used for ≤10% of any given screen to ensure it remains an effective focal point for primary actions.

## 3. Typography

**Display & Body Font:** DM Sans (Google Fonts)

**Character:** Modern, geometric, and highly legible. DM Sans provides a professional yet approachable feel that scales perfectly from tiny table headers to massive status numbers.

### Hierarchy
- **Display** (800, 42px, 1): Used for high-level "At a Glance" statistics.
- **Headline** (700, 18px, normal): Used for view titles and major section headers.
- **Title** (600, 14px, normal): Used for card headings and sub-sections.
- **Body** (500, 14px, normal): The workhorse for all UI text, data points, and inputs.
- **Label** (700, 11px, 0.08em tracking, UPPERCASE): Used for navigation sections and table column headers to provide strong structural contrast.

## 4. Elevation

The system uses tonal layering and subtle shadows to create a hierarchy of information without the clutter of heavy gradients.

### Shadow Vocabulary
- **Ambient Shadow** (`0 2px 10px rgb(17 17 17 / 0.04)`): Used on cards to provide a subtle "lift" from the neutral background.

### Named Rules
**The Flat-Surface Rule.** Most UI elements (buttons, inputs, sidebar) remain flat. Depth is primarily conveyed through borders and tonal shifts (e.g., #fafafa vs #ffffff) rather than shadows.

## 5. Components

### Buttons
- **Shape:** Rounded (8px radius)
- **Primary:** Wecraft Red background, white text. High-contrast and bold.
- **Secondary:** Light grey background, muted text, 1px border. Used for dismissive or secondary actions.
- **Success/Danger:** Tonal variants (soft green/red backgrounds) used for specific status-driven actions.

### Cards
- **Corner Style:** Large radius (14px)
- **Background:** Pure surface white (#ffffff)
- **Border:** 1px Mist Border (#eaeaea)
- **Internal Padding:** Large (24px) for desktop, adjusted for mobile.

### Tables
- **Header:** Sticky, light grey background (#fbfbfb), using the uppercase Label style.
- **Row Hover:** Uses a 4% tint of Wecraft Red to highlight the active row without overwhelming the data.

### Navigation
- **Active State:** Uses a soft red background (#ffe5e5) and bold Wecraft Red text to clearly indicate the current location.
- **Mobile Toggle:** A clean icon-based toggle that collapses the sidebar for maximum content space.

## 6. Do's and Don'ts

### Do:
- **Do** use DM Sans for all UI elements to maintain a consistent geometric rhythm.
- **Do** ensure every table row has a hover state to aid tracking across columns.
- **Do** use the large 14px radius for all main content containers (cards, modals).

### Don't:
- **Don't** use information-dense "crowded" layouts. If a view feels busy, add whitespace or use a modal for details.
- **Don't** use Wecraft Red for non-interactive elements like large backgrounds or decorative borders.
- **Don't** fail the mobile test. Every table and form must be touch-friendly and responsive.
- **Don't** use over-complicated color schemes; stick to the Red + Neutral core.
