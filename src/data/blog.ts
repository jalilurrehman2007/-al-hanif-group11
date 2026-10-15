export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  coverImage?: string; // optional — path under /public, e.g. "/images/blog/my-post.jpg"
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-fcl-vs-lcl",
    title: "Full Container Load or Shared Container: How to Choose",
    date: "2026-06-02",
    category: "Sea Freight",
    excerpt:
      "The right container option depends less on total volume and more on how much flexibility your shipping schedule can absorb.",
    body: [
      "Shippers often assume the choice between a full container and a shared container comes down to volume alone. In practice, transit time, cargo sensitivity, and how firm your delivery date needs to be all weigh just as heavily.",
      "A full container gives you exclusive control over loading, sealing, and scheduling — useful when cargo can't be mixed with other shipments or when timing is fixed. A shared container costs less per unit of volume but adds consolidation and deconsolidation steps at either end, which can add days to transit.",
      "For recurring shipments below a full container's capacity, it's often worth comparing the shared-container cost against the schedule flexibility a full container buys you, rather than defaulting to whichever option looks cheaper on paper.",
    ],
  },
  {
    slug: "sourcing-agent-role-explained",
    title: "What a Sourcing Agent Actually Does Before Cargo Ships",
    date: "2026-06-28",
    category: "Sourcing",
    excerpt:
      "Sourcing sits upstream of logistics entirely, but the two are more connected than most import processes treat them.",
    body: [
      "A sourcing agent's work happens before a shipment exists: identifying suppliers, checking their production capacity and reliability, and negotiating price and terms on the buyer's behalf.",
      "Where sourcing and logistics are handled by separate, disconnected parties, the handoff between 'goods are ready' and 'goods are shipped' is often where delays creep in — waiting on paperwork, re-confirming addresses, or re-negotiating freight terms after the purchase is already locked in.",
      "Managing sourcing and freight as one continuous process removes that handoff gap, since the same team that confirmed the order can move straight into arranging inspection, packing, and transport.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
