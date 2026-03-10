# JAZZA CENTRE WEBSITE

A full React + Tailwind CSS website for Jazza Centre — Kenya's premier managed household solutions provider.

## TECH STACK
- React 18
- React Router v6
- Tailwind CSS v3
- Vite (build tool)
- Lucide React (icons)

## INSTALLATION & RUNNING

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```

Visit: http://localhost:5173

## PAGES
- `/` — Homepage (Hero, tiers, Jazza Foodies, How it works)
- `/about` — About Jazza Centre
- `/services` — Managed Household Solutions (tiers, SOPs, Jazza Foodies)
- `/training` — Training & Certification (Bronze/Silver/Platinum/RPL)
- `/hire` — Client Onboarding / Hire a DM Form
- `/enroll` — DM Enrollment / Application Form
- `/gallery` — Photo Gallery
- `/contact` — Contact Us

## KEY FEATURES
- ✅ WhatsApp floating button (bottom-right, links to +254711781306)
- ✅ All CTA buttons link to WhatsApp with pre-filled messages
- ✅ Bronze / Silver / Platinum tier system with revised salary structure
- ✅ On-Site Skill Gap Assessment @ KES 5,000
- ✅ DM Enrollment form with Bronze/Silver/Platinum/RPL options
- ✅ Client Hire form with Last/Middle/First names, Location, County, Sub-county
- ✅ Household size, family size, client type, preferred DM age
- ✅ Jazza Foodies section throughout
- ✅ Social media links in footer
- ✅ Fully mobile responsive

## CUSTOMISATION
- Update phone number in `src/components/WhatsAppButton.jsx` and `src/components/Footer.jsx`
- Update email in `src/components/Footer.jsx`
- Replace gallery images in `src/pages/Gallery.jsx`
- Update social media links in `src/components/Footer.jsx`

## SALARY STRUCTURE (as approved)
| Tier | Client Rate | DM Earns | Jazza Margin |
|------|-------------|----------|--------------|
| Bronze | KES 30k–35k | KES 20k–25k | KES 10,000 |
| Silver | KES 45k–50k | KES 30k–35k | KES 10k–15k |
| Platinum | KES 60k–70k | KES 45k–55k | KES 10k–15k |
