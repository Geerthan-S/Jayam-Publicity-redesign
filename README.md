# Jayam Publicity Website Redesign

Modern, mobile-responsive static website redesign for **Jayam Publicity**, an outdoor and integrated advertising agency based in Pondicherry, India.

The site is built as a clean HTML, CSS, and vanilla JavaScript project. It does not require a build step, framework, database, tracking script, or package installation.

## Project Overview

This redesign positions Jayam Publicity as a premium OOH advertising agency with a bold, dark, editorial visual system. The website includes seven main pages, a branded 404 page, SEO metadata, LocalBusiness schema, sitemap, robots file, responsive layouts, and reusable interactive components.

## Pages Included

- `index.html`  
  Homepage with hero section, animated counters, services overview, marquee ticker, why-Jayam section, process strip, client logo ticker, testimonials, CTA banner, and footer.

- `services.html`  
  Detailed service page covering all 13 advertising formats with sticky format filters.

- `about.html`  
  Company positioning, mission-style copy, team/professional background, leverage, media advisory, multi-constituent solutions, space advocacy, and values.

- `clients.html`  
  Client logo placeholder masonry grid, industry filters, and campaign spotlight cards.

- `process.html`  
  Campaign workflow timeline and FAQ accordion.

- `media-advisory.html`  
  Standalone consulting/advisory page for media monitoring, media clips, dossiers, and impact reports.

- `contact.html`  
  Contact form with client-side validation, contact details, map embed, Google review CTA, and quick contact cards.

- `404.html`  
  Branded error page with navigation back to the homepage and contact page.

## Supporting Files

- `styles.css`  
  Global design system, responsive layouts, typography, cards, navigation, hero sections, forms, timelines, marquee animations, and page components.

- `script.js`  
  Vanilla JavaScript for:
  - Preloader
  - Sticky nav scroll state
  - Mobile hamburger menu
  - Active nav link highlighting
  - Scroll reveal animations
  - Animated counters
  - Service filters
  - Client industry filters
  - FAQ accordion
  - Contact form validation
  - Back-to-top button
  - Dynamic logo ticker placeholders

- `og-cover.jpg`  
  Branded Open Graph image used by social previews.

- `sitemap.xml`  
  XML sitemap for search engines.

- `robots.txt`  
  Search engine crawling instructions.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts:
  - Syne for headings
  - DM Sans for body text
- No jQuery
- No frontend framework
- No tracking scripts
- No cookies

## Design System

### Colors

```css
--bg: #0a0a08;
--cream: #f5f0e8;
--red: #e8431a;
--amber: #f5a623;
--card: #141410;
--muted: #888880;
```

### Typography

- Headings: `Syne`
- Body text: `DM Sans`

### Visual Direction

The site uses a premium agency-style direction:

- Dark editorial background
- Large, high-impact typography
- Red and amber accent system
- Grid/glow hero treatment
- Sharp 8px cards
- Scroll reveal animations
- Ticker and logo movement
- Responsive, mobile-first layouts

## Services Covered

The website includes all 13 requested Jayam Publicity services:

1. Hoardings
2. Medians
3. Bus Shelters
4. Bus Panels
5. E-Rickshaw Branding
6. Mobile Vans
7. Mobile Billboards & Balloons
8. Barricades
9. Print Media
10. Cinema Ads
11. In-Shop & Out-Shop Branding
12. Corporate & Gift Solutions
13. Digital Marketing

## Contact Details Used

The site uses publicly available Jayam Publicity contact information:

- Address: No. 6, Rue De Chermont, Puducherry 605001
- Phone: 0413 2348080
- Email: teamjayam@jayampublicity.com
- Google Business link: https://share.google/vFJjMuUkjEhcriZox

WhatsApp links currently use:

```text
https://wa.me/919791938052
```

Update this number if the business prefers a different WhatsApp contact.

## How to Preview Locally

Because this is a static website, you can open `index.html` directly in a browser.

For the most accurate preview, run a local static server from the project folder:

```bash
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/index.html
```

On Windows, if `python` opens the Microsoft Store or does not run, use:

```bash
py -m http.server 4173
```

## Deployment

This website can be deployed to any static hosting platform.

Recommended options:

- Existing cPanel or shared hosting
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

For traditional hosting, upload all files in this folder to the web root, usually `public_html`.

Make sure these files are included:

```text
index.html
services.html
about.html
clients.html
process.html
media-advisory.html
contact.html
404.html
styles.css
script.js
og-cover.jpg
sitemap.xml
robots.txt
```

## SEO Notes

Each page includes:

- Meta description
- Open Graph title
- Open Graph description
- Open Graph image
- Open Graph URL
- Canonical URL

The homepage also includes `LocalBusiness` schema markup with:

- Business name
- Address locality
- Country
- Telephone
- Email
- Website URL
- Google Business link

After deployment, submit the sitemap to Google Search Console:

```text
https://jayampublicity.com/sitemap.xml
```

## Placeholder Assets to Replace

The current site intentionally uses placeholders where real assets were not available.

Replace these when final assets are ready:

- Client logo gray boxes in `clients.html`
- Client logo ticker placeholders on `index.html`
- Social links in the footer
- Any campaign image placeholders if campaign photography is added later
- `og-cover.jpg` if a professionally designed social preview image is supplied

## Updating Client Logos

Client logos are currently represented as placeholder boxes.

On the homepage, logo ticker items are generated in `script.js`:

```js
const clientLabels = Array.from({ length: 32 }, (_, index) => `Client Logo ${index + 1}`);
```

On `clients.html`, placeholders are written directly in the masonry grid with industry categories:

```html
<div class="logo-box" data-client-type="FMCG">Client Logo 1</div>
```

To replace placeholders with real logos, use image tags inside each logo box:

```html
<div class="logo-box" data-client-type="FMCG">
  <img src="assets/clients/client-name.png" alt="Client Name">
</div>
```

## Updating Services

Service cards are written directly in:

- `index.html`
- `services.html`

If adding or removing a service, update:

1. Homepage services grid
2. Services page detail grid
3. Contact form service dropdown in `contact.html`
4. Footer top services list if needed

## Contact Form Behavior

The contact form currently performs client-side validation only. It does not submit to a backend.

To make the form send enquiries, connect it to one of these:

- A PHP mail script
- Netlify Forms
- Formspree
- Google Apps Script
- Custom API endpoint
- CRM webhook

The form is located in `contact.html` and validation logic is in `script.js`.

## Browser Compatibility

The site uses modern browser features:

- CSS Grid
- Flexbox
- Intersection Observer
- CSS custom properties
- Native form controls

It is intended for modern versions of:

- Chrome
- Edge
- Firefox
- Safari
- Mobile browsers on Android and iOS

## Responsive Breakpoints

The CSS includes responsive handling around:

- `768px`
- `1024px`
- `1280px` max content width

Mobile behavior includes:

- Hamburger navigation drawer
- Single-column card grids
- Collapsed timelines
- Full-width CTA buttons on small screens
- Responsive typography using `clamp()`

## Maintenance Checklist

Before publishing, confirm:

- Real client logos have been added, if available
- Social media links are updated
- WhatsApp number is correct
- Google Maps link is correct
- Contact form submission endpoint is connected, if required
- `og-cover.jpg` is final
- Sitemap uses the correct live domain
- Search Console sitemap submission is complete

## Verification Performed

The site was checked locally for:

- All main pages returning HTTP 200
- Sitemap and robots file availability
- Required SEO tags on all HTML pages
- Homepage includes all 13 service cards
- Services page includes all 13 detailed service cards
- Browser loading of all seven main pages
- Correct page titles and H1s
- No browser console errors during page load
- Service filter behavior
- Contact form inline validation

## Project Status

The website is ready as a static frontend build. Final production readiness depends on replacing placeholder logos/assets and connecting the contact form to the business's preferred enquiry system.
