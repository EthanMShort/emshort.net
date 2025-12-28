# Ethan Short - Personal Portfolio

![Status](https://img.shields.io/badge/Status-Live-success)
![Design](https://img.shields.io/badge/Design-Macrodata%20Retro-blue)
![Tech](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3-orange)

A static personal portfolio website designed to showcase my experience in Endpoint Support, Network Infrastructure, and IT Operations.

## 🎨 Design Philosophy: "Macrodata"

This project eschews modern, flat minimalism in favor of an **"Institutional Retro-Modern"** aesthetic. Drawing inspiration from 1980s corporate mainframes (IBM) and the set design of *Severance* (Lumon Industries), the interface prioritizes "bureaucratic warmth."

**Key Visual Elements:**
* **Palette:** Deep Cobalt Blue (`#205ca9`) and Data Cyan (`#43b1e5`) anchored by "Office Wall" Cool Gray.
* **Typography:** A functional blend of system sans-serifs (`Inter`/`Helvetica`) for readability and monospace (`Courier`/`Roboto Mono`) for metadata and technical specs.
* **Layout:** A persistent "Big Blue" sidebar mimicking a terminal command strip, paired with high-readability content cards.

## 🚀 Features

* **Semantic HTML5:** Structured for accessibility and SEO.
* **Pure CSS Architecture:** No heavy frameworks (Bootstrap/Tailwind). Uses CSS Variables (`:root`) for easy theming and Flexbox/Grid for layout.
* **Interactive Elements:**
    * **Expandable Cards:** Uses native `<details>` and `<summary>` tags for performant accordion animations on project details.
    * **Status Flags:** Visual indicators for "Current Role," "Previous Role," and "Leadership."
* **Responsive Design:** Fully adaptive layout that transforms from a sidebar-based desktop view to a centered, stacked mobile view.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Hosting:** GitHub Pages
* **Dependencies:** None (Vanilla implementation)

## 📂 Project Structure

```text
/
├── index.html      # Main content structure (Resume, Experience, Projects)
├── styles.css      # "Macrodata" theme, layout logic, and media queries
├── README.md       # Project documentation
└── assets/         # (Optional) Profile images or icons