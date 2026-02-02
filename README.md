# Dr. Maya Reynolds | Private Practice Website Redesign

>A high-performance, responsive therapy practice website built with Next.js and Tailwind CSS. This project is a bespoke digital home for Dr. Maya Reynolds, PsyD, a psychologist based in Santa Monica, California, inspired by the "Lilac" Squarespace template.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Responsive & Mobile-first)
- **Images:** Next/Image (Optimized with sizes and priority props)
- **Deployment:** Vercel (Ready for deployment)

---

## 🎨 Design & Redesign Process

### 1. UI Cloning
- Replicated the grid system, spacing, and typography hierarchy of the original Lilac template.
- Ensured 100% responsiveness across mobile, tablet, and desktop views.

### 2. Dr. Maya Reynolds' Profile Integration
- **SEO Optimization:** Headings (H1, H2) crafted to target local keywords like "Trauma & Anxiety Psychologist in Santa Monica".
- **Brand Identity:** Replaced the default lilac theme with a "Sage and Stone" palette (`#7C8E7B` and `#2D391E`) to reflect the grounded, professional nature of Dr. Maya’s practice.
- **Specialties:** Featured three key services—Anxiety/Panic, Trauma (EMDR), and Burnout—derived from the therapist's profile.

### 3. Custom "Our Office" Section
- Created a new section highlighting the physical practice space.
- Used the office description: "A quiet, private space designed for safety and grounding".
- Integrated actual office imagery provided in the source documentation.

---

## 🛠️ Performance & Accessibility

- **Next/Image Optimization:** Fixed "missing sizes prop" warnings for responsive images.
- **Sticky Header:** Custom React hook to hide navigation on scroll-down and reveal on scroll-up.
- **Accessibility:** Semantic HTML tags (`<header>`, `<main>`, `<address>`) and ARIA labels for screen-reader support.

---

## 📂 Project Structure

```
├── public/              # Optimized office and profile images
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Global metadata and fonts
│   │   └── page.tsx     # Full homepage implementation
├── next.config.ts       # Remote image pattern configurations
└── tailwind.config.ts   # Custom brand color theme
```

---

## 📝 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/The-morning-star23/lilac-clone.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **View the site:**
   Open [http://localhost:3000]