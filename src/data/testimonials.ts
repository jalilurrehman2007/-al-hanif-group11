export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

// Placeholder testimonials — replace with real client quotes before launch.
export const testimonials: Testimonial[] = [
  {
    name: "Layla Haddad", // [PLACEHOLDER]
    role: "Procurement Manager, Regional Retail Group", // [PLACEHOLDER]
    quote:
      "Alhanif Group's sourcing and freight teams work as one unit — we get a vetted supplier and a landed shipment without switching partners in between.",
  },
  {
    name: "Omar Rasheed", // [PLACEHOLDER]
    role: "Supply Chain Lead, Industrial Equipment Importer", // [PLACEHOLDER]
    quote:
      "Their customs desk catches documentation issues before they become port delays. That alone has saved us weeks over the past year.",
  },
  {
    name: "Priya Nair", // [PLACEHOLDER]
    role: "Operations Director, E-commerce Fulfilment Company", // [PLACEHOLDER]
    quote:
      "Warehousing, transloading, and last-mile courier all sit under one contact. It's the first logistics setup we haven't had to micromanage.",
  },
];
