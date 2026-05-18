const services = [
  ["Hoardings", "Large-format billboards at premium locations across Pondicherry", "Outdoor", "Static | Illuminated | Flex Print", "FMCG launches, retail openings, institutional visibility"],
  ["Medians", "Road median branding for maximum commuter eyeballs", "Outdoor", "Road Median | Reflective | High-Frequency", "Local awareness, repeated recall, route dominance"],
  ["Bus Shelters", "Captive audience advertising at transit points", "Transit", "Transit | Static | Shelter Panels", "Retail, education, healthcare, public campaigns"],
  ["Bus Panels", "Side and rear panel ads on city buses", "Transit", "Mobile Transit | Side | Rear", "Mass reach, city-wide reminders, consumer offers"],
  ["E-Rickshaw Branding", "Mobile micro-advertising through the city's lanes", "Transit", "Mobile | Neighborhood Reach", "Hyperlocal launches, food, retail, events"],
  ["Mobile Vans", "Moving billboards for area-specific campaign blitzes", "Events", "Mobile | Audio Optional | Route Planned", "Launch days, political campaigns, roadshows"],
  ["Mobile Billboards & Balloons", "High-visibility events and launches", "Events", "Event | Inflatable | Mobile Display", "Grand openings, exhibitions, brand activations"],
  ["Barricades", "Construction site and road barrier branding", "Outdoor", "Street Furniture | Barrier Panels", "Urban visibility, civic sites, long-duration recall"],
  ["Print Media", "Newspapers, flyers, inserts, and local publications", "Print", "Newspaper | Flyers | Inserts", "Announcements, offers, local market education"],
  ["Cinema (On-Screen & Off-Screen)", "Pre-roll ads plus lobby and foyer branding", "Events", "Screen | Foyer | Lobby", "Youth reach, launches, premium local audiences"],
  ["In-Shop & Out-Shop Branding", "Retail and storefront identity", "Outdoor", "Retail | Signage | POSM", "Retail chains, franchises, store launches"],
  ["Corporate & Gift Solutions", "Branded merchandise and gifting", "Print", "Merchandise | Gifts | Corporate Kits", "Events, employee gifting, client retention"],
  ["Digital Marketing", "Social media, SEO, and online ad management", "Digital", "Social | Search | Online Ads", "OOH amplification, lead generation, campaign continuity"]
];

const clientLabels = [
  "FMCG", "Pharma", "Retail", "Real Estate", "Education", "Government", "Healthcare", "Hospitality",
  "Automotive", "Finance", "Jewellery", "Textiles", "Food & Beverage", "Consumer Goods", "Institutions", "Events",
  "Local Retail", "Clinics", "Schools", "Colleges", "Restaurants", "Developers", "Public Sector", "Startups",
  "Lifestyle", "Electronics", "Tourism", "Wellness", "Supermarkets", "Showrooms", "Service Brands", "Regional Brands"
];

function initPreloader() {
  const loader = document.getElementById("preloader");
  if (!loader) {
    document.body.classList.add("loaded");
    return;
  }

  const isHomePage =
    location.pathname === "/" ||
    location.pathname.endsWith("index.html") ||
    location.pathname.endsWith("/");

  // Skip preloader if not the home page
  if (!isHomePage) {
    loader.style.display = "none";
    document.body.classList.add("loaded");
    return;
  }

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("hidden");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.add("loaded");
      }, 400);
    }, 2800);
  });
}

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  const current = location.pathname.split("/").pop() || "index.html";
  const focusableSelector = "a[href], button:not([disabled])";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("is-active");
  });

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 10);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    links?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) links.querySelector(focusableSelector)?.focus();
  });

  links?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (!links?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeMenu();
      toggle?.focus();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...links.querySelectorAll(focusableSelector)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const stats = document.querySelectorAll("[data-count]");
  if (!stats.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "+";
      const start = performance.now();
      const duration = 1200;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach((stat) => observer.observe(stat));
}

function initFloatingButtons() {
  const top = document.querySelector(".back-top");
  const update = () => top?.classList.toggle("is-visible", window.scrollY > 400);
  update();
  window.addEventListener("scroll", update, { passive: true });
  top?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initServiceFilters() {
  const grid = document.querySelector("[data-service-grid]");
  const filters = document.querySelectorAll("[data-filter]");
  if (!grid || !filters.length) return;

  const cards = [...grid.querySelectorAll("[data-category]")];
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filter;
      filters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      cards.forEach((card) => {
        card.classList.toggle("hidden", value !== "All" && card.dataset.category !== value);
      });
    });
  });
}

function initClientTabs() {
  const tabs = document.querySelectorAll("[data-industry]");
  const logos = document.querySelectorAll("[data-client-type]");
  if (!tabs.length) return;
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const industry = tab.dataset.industry;
      tabs.forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      logos.forEach((logo) => {
        logo.classList.toggle("hidden", industry !== "All" && logo.dataset.clientType !== industry);
      });
    });
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });
}

function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const phonePattern = /^[6-9][0-9]{9}$/;
  const status = form.querySelector("[data-form-status]");
  if (new URLSearchParams(window.location.search).get("sent") === "1" && status) {
    status.textContent = "Thank you. Your enquiry has been sent to Jayam Publicity.";
    status.classList.add("is-visible");
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      const error = form.querySelector(`[data-error-for="${field.name}"]`);
      const isEmail = field.type === "email";
      const isPhone = field.name === "phone";
      const hasError = !field.value.trim()
        || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))
        || (isPhone && !phonePattern.test(field.value.trim()));
      if (error) error.textContent = hasError ? "Please enter a valid value." : "";
      field.setAttribute("aria-invalid", String(hasError));
      if (hasError) valid = false;
    });
    if (valid && status) {
      status.textContent = "Thank you. Sending your enquiry to Jayam Publicity...";
      status.classList.add("is-visible");
      HTMLFormElement.prototype.submit.call(form);
    }
  });
}

function initCopyrightYear() {
  document.querySelectorAll("[data-current-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });
}

function fillDynamicContent() {
  document.querySelectorAll("[data-logo-row]").forEach((row) => {
    const repeated = [...clientLabels, ...clientLabels];
    row.innerHTML = repeated.map((label) => `<div class="logo-box">${label}</div>`).join("");
  });
}

initPreloader();
initNavigation();
initReveal();
initCounters();
initFloatingButtons();
initServiceFilters();
initClientTabs();
initFaq();
initContactForm();
fillDynamicContent();
initCopyrightYear();
