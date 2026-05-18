# Jayam Publicity Website Redesign

Modern, mobile-responsive redesign for **Jayam Publicity**, an outdoor and integrated advertising agency based in Pondicherry, India.

The site is built as a clean static website using HTML, CSS, vanilla JavaScript, and a small PHP mail handler for enquiries. It is fast, cookie-free, and ready for normal shared hosting.

## Project Overview

This redesign positions Jayam Publicity as a premium OOH advertising agency with a bold, dark, editorial visual system. The site includes seven main pages, a branded 404 page, SEO metadata, LocalBusiness schema, breadcrumb schema, sitemap, robots file, favicons, a web manifest, responsive layouts, and reusable interactive components.

## Pages Included

- `index.html`  
  Homepage with hero section, campaign visual, animated counters, services overview, marquee ticker, why-Jayam section, process strip, client sector ticker, testimonials, CTA banner, and footer.

- `services.html`  
  Detailed service page covering all 13 advertising formats with sticky format filters.

- `about.html`  
  Company positioning, legacy-site copy expansion, team/professional background, leverage, media advisory, multi-constituent solutions, space advocacy, leadership/team section, and values.

- `clients.html`  
  Sector-labeled client wall, industry filters, and campaign spotlight cards.

- `process.html`  
  Campaign workflow timeline and FAQ accordion.

- `media-advisory.html`  
  Standalone consulting page for print/web monitoring, clips, dossiers, impact reports, competitor activity, and marketing environment evaluation.

- `contact.html`  
  Contact form with validation and PHP mail submission, contact details, map embed, Google review CTA, and quick contact cards.

- `404.html`  
  Branded error page with the same preloader/nav behavior as the rest of the site.

## Supporting Files

- `styles.css`  
  Global design system, responsive layouts, typography, cards, navigation, hero sections, forms, timelines, marquee animations, accessibility states, reduced-motion handling, and page components.

- `script.js`  
  Handles preloader, sticky nav state, mobile menu focus trap, active nav links, scroll reveals, animated counters, service filters, client filters, FAQ accordion, form validation, dynamic copyright year, back-to-top, and logo ticker content.

- `send-enquiry.php`  
  Basic PHP `mail()` endpoint for the contact form. The production host must support PHP mail or SMTP routing.

- `assets/logo.svg`  
  Text-based Jayam Publicity SVG wordmark.

- `assets/icons/`  
  Favicon and Apple touch icon assets.

- `site.webmanifest`  
  Web app manifest with app name, theme color, and icons.

- `og-cover.jpg`  
  Branded Open Graph image. Verified at exactly `1200x630px` and compressed to about 74 KB.

- `sitemap.xml` and `robots.txt`  
  Search engine discovery files.

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- PHP `mail()` for contact enquiries
- Google Fonts:
  - Space Grotesk for headings
  - Inter for body text
- No jQuery
- No tracking scripts
- No cookies

## Services Covered

The site includes all 13 requested Jayam Publicity services:

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

Pulled from the existing Jayam Publicity site and business references:

- Address: No. 6, Rue De Chermont, Puducherry 605001
- Phone: 0413 2348080
- Email: teamjayam@jayampublicity.com
- Google Business link: https://share.google/vFJjMuUkjEhcriZox
- WhatsApp link currently used: https://wa.me/919791938052

Confirm the WhatsApp number before launch.

## Preview Locally

Open `index.html` directly, or run a local server:

```bash
py -m http.server 4173
```

Then open:

```text
http://localhost:4173/index.html
```

## Deployment

Upload the complete folder contents to the live web root, usually `public_html`.

Include:

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
send-enquiry.php
og-cover.jpg
sitemap.xml
robots.txt
site.webmanifest
assets/
```

If the host does not support PHP `mail()`, replace `send-enquiry.php` with Formspree, EmailJS, SMTP, or a CRM webhook.

## SEO Included

Each page includes:

- Meta description
- Canonical URL
- Open Graph title, description, image, URL, type, and site name
- Twitter Card title, description, image, and summary-large-image card type
- Theme color
- Favicons and manifest
- Noscript fallback

The homepage includes `LocalBusiness` schema. Inner pages include visible breadcrumbs and `BreadcrumbList` schema.

## Launch Fixes Applied

- Contact form connected to `send-enquiry.php`
- Dead `#` social links removed
- WhatsApp float changed to SVG icon
- Back-to-top changed to SVG arrow
- Favicons, Apple icon, and web manifest added
- Twitter Card metadata added
- Open Graph type and site name added
- `og-cover.jpg` verified and compressed
- Media Advisory added to top navigation
- 404 preloader added
- Heading line heights and text wrapping improved
- Testimonial stars changed to `★★★★★`
- Visitor-facing placeholder wording removed
- Phone field changed to `type="tel"` with Indian mobile validation
- Noscript fallback added
- External links use `rel="noopener noreferrer"`
- Copyright year generated with JavaScript
- Form success message styled
- Section heading alignment corrected
- Process mobile border issue fixed
- Breadcrumb navigation and schema added
- Map filter removed
- Reduced-motion preference respected
- SVG logo/wordmark added
- Hero visual added
- Button hover glow added
- Mobile menu keyboard focus trap added

## Items Requiring Business Input

- Replace sector-labeled client boxes with official client logos.
- Replace placeholder-style testimonials with real approved client names and companies.
- Provide official Facebook, Instagram, and LinkedIn URLs if those should appear.
- Replace the map iframe with the exact Google Maps `maps/embed?pb=...` code from Google Maps Share > Embed a map, if preferred.
- Confirm whether PHP `mail()` works on the production host.

## Verification Performed

Checked locally:

- All HTML pages return HTTP 200
- Sitemap, robots, manifest, logo, favicons, and OG image return HTTP 200
- `og-cover.jpg` is `1200x630px`
- All pages load in browser with correct title and H1
- No console errors during page load
- Media Advisory appears in navigation
- Contact form inline validation appears
- Form posts to `send-enquiry.php`

## Project Status

The redesign is ready as a static/PHP frontend build. Final live polish depends on business-approved social profiles, real client logos, real testimonial attribution, and production mail configuration.
