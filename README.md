# 🪔 PUJO 2026 — আমাদের পুজোর গল্প (Our Pujo Story)

> A romantic, interactive Bengali Durga Puja digital scrapbook crafted with love, festive nostalgia, and playful interactive storytelling.

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-E8711A?style=for-the-badge&logo=github)](https://dibyajitgupta06.github.io/Scrapbook/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 🌟 Overview

**PUJO 2026** is a personalized digital scrapbook experience celebrating Durga Puja memories. Designed with warm autumnal festival colors (vermilion, mustard gold, and deep maroon), authentic Bengali typography, transparent hand-drawn illustrations, and traditional dhak beats, it takes the visitor on a chronological journey through Puja from an interactive verification game to a romantic proposal.

**Live Website:** [https://dibyajitgupta06.github.io/Scrapbook/](https://dibyajitgupta06.github.io/Scrapbook/)

---

## ✨ Features & Journey

### 1. 👑 The Goddess Verification (Fake CAPTCHA)
- An entertaining entry challenge styled as a festival verification system: **"HUMAN VERIFICATION REQUIRED — Who is the most beautiful woman in the world?"**
- Features a 3×3 photograph grid containing 8 celebrity options and 1 photo of the girlfriend (`goddess.jpg`).
- Selecting any celebrity triggers escalating humorous verification failures (*"Incorrect. Recalibrating standards..."*, *"System error: That's not even close."*).
- Clicking her photo unlocks the true verification:
  > **"YOU ARE NOT HUMAN. YOU ARE THE GODDESS. 👑"**
- Reveals the entrance button to proceed into the scrapbook.

### 2. 📖 Scrapbook Cover
- Vintage Bengali letterpress aesthetic: **"PUJO 2026"** & **"আমাদের পুজোর গল্প"**.
- Single primary CTA: *"LET'S RELIVE OUR PUJO 2026"*.

### 3. 🎨 Memory Chronicle (Durga Puja Days)
Clean, text-uncluttered pages highlighting high-resolution transparent illustrations:
- **সপ্তমী · ০১ (Shoptomi 1):** The romantic Kolkata rickshaw ride together.
- **সপ্তমী · ০২ (Shoptomi 2):** Walking hand-in-hand under the festive pandal illumination.
- **অষ্টমী (Oshtomi):** Guy in kurta on the left capturing photos of his girlfriend on the right dressed in her saree, composed with a realistic foreground perspective.
- **নবমী (Nabami):** The festive gift box and traditional payel (anklet).
- **দশমী (Dashami):** Handcrafted rose bouquet leading into Bijoya memories and a surprise prompt.

### 4. 💍 The Romantic Proposal
- Heartfelt tribute:
  > *"Thank you for making this pujo the best puja of my life."*
- The big question:
  > **"ARE YOU GOING TO SPEND THE REST OF YOUR PUJAS WITH ME?"**
- **Escaping "NO 🙃" button:** Flees, dodges, and teleports whenever the cursor or touch approaches.
- **Stationary "YES! ❤️" button:** Triggers the joyful celebration.

### 5. 🎉 Celebration & Lifelong Promise
- Golden confetti rain animation.
- Celebratory banner: **"YEEHHHHHH!!! 🎉❤️"**
- Lifelong commitment card:
  > *"I promise I'll make every Puja of your life better."*

### 6. 🥁 Immersive Festive Ambiance
- **Durga Puja Dhak Sound:** Continuous traditional dhak rhythm (`dhak.m4a` / `dhak.ogg`) playing seamlessly across all pages with an unobtrusive toggle button (`AudioPlayer`).
- **Festive Aesthetic Touches:** A 10-armed Maa Durga emoji motif gently floating at the top-left and an energetic Dhaki drummer swaying at the bottom-left on every screen.

---

## 🛠️ Tech Stack

- **Frontend:** [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling:** Modular CSS3 with clamp-based fluid typography, responsive layout scaling, CSS keyframe animations, and custom drop-shadows.
- **Audio Engine:** HTML5 Audio API with background loop and cross-browser gesture-unlock policy fallback.
- **Hosting:** [GitHub Pages](https://pages.github.com/) (deployed on `gh-pages` branch).

---

## 📁 Project Structure

```text
Scrapbook/
├── public/
│   ├── audio/
│   │   ├── dhak.m4a              # Durga Puja Dhak audio track
│   │   └── dhak.ogg              # High-compatibility OGG audio track
│   └── images/
│       ├── captcha/              # Verification grid photos (celebrities & goddess.jpg)
│       ├── durga_emoji.png       # Transparent 10-armed Maa Durga motif
│       ├── dhaki_motif.png       # Transparent Dhaki drummer motif
│       ├── shoptomi1.png         # Shoptomi Rickshaw illustration
│       ├── shoptomi2_couple.png  # Couple walking illustration
│       ├── shoptomi2_rickshaw.png
│       ├── oshtomi_boy.png       # Guy photographing (left, foreground)
│       ├── oshtomi_girl.png      # Girl posing in saree (right)
│       ├── nabami_gift.png       # Gift box illustration
│       ├── nabami_anklet.png     # Payel illustration
│       └── dashami.png           # Rose bouquet illustration
├── src/
│   ├── components/
│   │   ├── AudioPlayer.jsx       # Global floating dhak sound toggle
│   │   ├── Captcha.jsx           # 3×3 verification game & Goddess reveal
│   │   ├── Celebration.jsx       # Confetti & final promise screen
│   │   ├── Cover.jsx             # Scrapbook entrance cover
│   │   ├── Dashami.jsx           # Dashami memory page
│   │   ├── FestiveElements.jsx   # Top-left Durga & bottom-left Dhaki motifs
│   │   ├── Nabami.jsx            # Nabami memory page
│   │   ├── Oshtomi.jsx           # Oshtomi memory page
│   │   ├── Proposal.jsx          # Proposal with runaway NO button
│   │   ├── Shoptomi1.jsx         # Shoptomi Part 1 page
│   │   └── Shoptomi2.jsx         # Shoptomi Part 2 page
│   ├── App.jsx                   # Page router & state controller
│   ├── main.jsx                  # React application entry point
│   └── index.css                 # Global design system & theme variables
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/dibyajitgupta06/Scrapbook.git
   cd Scrapbook
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/Scrapbook/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

---

## 🚀 Deployment to GitHub Pages

The application is hosted on GitHub Pages from the `gh-pages` branch.

To build and deploy changes to GitHub Pages:
```bash
# 1. Build the production application
npm run build

# 2. Add .nojekyll and 404 fallback in dist/
touch dist/.nojekyll
cp dist/index.html dist/404.html

# 3. Deploy dist to gh-pages branch
cd dist
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy to GitHub Pages"
git remote add origin https://github.com/dibyajitgupta06/Scrapbook.git
git push -f origin gh-pages
```

---

## ❤️ Credits & Dedication

Crafted especially for Durga Puja 2026. Dedicated to the Goddess of my life.
