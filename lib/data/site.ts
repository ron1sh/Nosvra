import type { SocialLink } from "@/types";

/* ============================================================================
 * SAMPLE DATA — replace before launch.
 * Every value below is a realistic placeholder. Update this one file and the
 * whole site (header, footer, contact page, schema.org markup, sitemap)
 * follows.
 * ==========================================================================*/

export const site = {
  name: "Nosvra",
  legalName: "Nosvra Technologies Pvt. Ltd.", // SAMPLE
  tagline: "Business Technology Solutions",
  shortDescription:
    "Nosvra helps businesses grow through the right technology — websites, catalog software, business systems and automation.",
  longDescription:
    "Nosvra is a software development and technology consultancy. We start by understanding how a business actually runs, then recommend and build the technology that creates the most value — not the largest invoice.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nosvra.com",
  locale: "en_US",
  founded: 2026, // SAMPLE
  headcount: "Founding team", // SAMPLE
} as const;

export const contact = {
  email: "nosvra.tech@gmail.com", // SAMPLE
  salesEmail: "nosvra.tech@gmail.com", // SAMPLE
  careersEmail: "nosvra.tech@gmail.com", // SAMPLE
  phone: "+977 976-1767796", // SAMPLE
  phoneHref: "+977976-1767796", // SAMPLE
  whatsapp: "+977 976-1767796", // SAMPLE
  responseTime: "We reply to every enquiry within one business day.",
  officeHours: "Sunday – Friday, 9:30am – 6:00pm",
} as const;

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/nosvra/",
    handle: "@nosvra",
  }, // SAMPLE
];

/**
 * Small "Sample" markers are rendered next to placeholder content so nobody
 * mistakes the demo copy for approved client material. Flip this to `false`
 * (or delete the component usage) once real content is in place.
 */
export const PLACEHOLDER_MODE = true;
