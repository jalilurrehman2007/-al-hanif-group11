export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroLine: string;
  icon: string; // key used by ServiceIcon component
  overview: string;
  capabilities: string[];
  process: { title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "air-freight",
    name: "Air Freight Services",
    shortDescription:
      "Time-critical air cargo routed through major Gulf hubs, built for shipments that can't wait.",
    heroLine: "When the clock is the client's biggest constraint.",
    icon: "plane",
    overview:
      "Our air freight desk handles urgent, high-value, and temperature-sensitive cargo through direct carrier relationships at the region's principal airports. Every booking is tracked from tarmac to final mile, with priority handling arranged before the shipment ever leaves the ground.",
    capabilities: [
      "Consolidated and dedicated charter options",
      "Priority and next-flight-out booking",
      "Temperature-controlled and fragile cargo handling",
      "Real-time milestone tracking from origin to destination",
    ],
    process: [
      { title: "Booking & Routing", detail: "We confirm carrier capacity and the fastest viable routing within hours of your request." },
      { title: "Airport Handling", detail: "Cargo is screened, palletized, and documented to IATA standard at origin." },
      { title: "In-Transit Visibility", detail: "Milestone updates are shared as the shipment clears each leg of its journey." },
      { title: "Last-Mile Delivery", detail: "On arrival, we coordinate customs release and onward delivery to the final address." },
    ],
  },
  {
    slug: "sea-freight",
    name: "Sea Freight Services",
    shortDescription:
      "Full and shared container shipping connecting the UAE to global trade lanes at predictable cost.",
    heroLine: "Volume moves best by water — we make sure it moves on schedule.",
    icon: "ship",
    overview:
      "From single pallets to full container loads, our sea freight team manages booking, documentation, and port coordination across major shipping lines, giving importers and exporters a dependable, budget-friendly route to and from the UAE.",
    capabilities: [
      "Full Container Load (FCL) and Less than Container Load (LCL)",
      "Port-to-port and door-to-door routings",
      "Break-bulk and out-of-gauge cargo coordination",
      "Bill of lading and shipping-line liaison",
    ],
    process: [
      { title: "Space Allocation", detail: "We reserve container space with carriers matched to your transit-time and budget needs." },
      { title: "Port Coordination", detail: "Loading, stuffing, and vessel documentation are managed at origin port." },
      { title: "Ocean Transit", detail: "Shipment status is monitored across each transhipment leg." },
      { title: "Destination Handling", detail: "We arrange discharge, clearance, and onward transport at the receiving port." },
    ],
  },
  {
    slug: "land-transportation",
    name: "Land Transportation Services",
    shortDescription:
      "Scheduled and on-demand road freight linking the UAE with GCC markets by truck.",
    heroLine: "The GCC's roads, worked like a routine, not a gamble.",
    icon: "truck",
    overview:
      "Our road freight fleet moves palletized and bulk cargo between the UAE, Saudi Arabia, Oman, and neighbouring markets on fixed schedules, with flexible options for urgent or oversized loads.",
    capabilities: [
      "Full Truckload (FTL) and groupage services",
      "Cross-border GCC corridor scheduling",
      "Flatbed, refrigerated, and box-trailer options",
      "Live route tracking for every dispatch",
    ],
    process: [
      { title: "Route Planning", detail: "We match cargo type and destination to the right truck configuration and border route." },
      { title: "Loading & Documentation", detail: "Cargo is loaded and cross-border paperwork prepared in advance to avoid delays at checkpoints." },
      { title: "Road Transit", detail: "Drivers report checkpoint and milestone progress throughout the journey." },
      { title: "Delivery & Sign-off", detail: "Cargo is delivered with proof-of-delivery confirmation returned to the client." },
    ],
  },
  {
    slug: "door-to-door-logistics",
    name: "Door-to-Door Logistics Solutions",
    shortDescription:
      "One point of contact managing pickup, transit, clearance, and final delivery end to end.",
    heroLine: "One handover, one team, one shipment tracked start to finish.",
    icon: "route",
    overview:
      "For clients who want a single accountable partner, our door-to-door service combines air, sea, or land transport with customs clearance and last-mile delivery under one coordinated plan — removing the need to manage multiple vendors across a shipment's journey.",
    capabilities: [
      "Single point of contact across the full route",
      "Mode selection based on cost, speed, and cargo type",
      "Customs clearance bundled into the delivery plan",
      "Consolidated invoicing for the entire shipment",
    ],
    process: [
      { title: "Needs Assessment", detail: "We map your pickup and delivery points against the best combination of transport modes." },
      { title: "Coordinated Pickup", detail: "Cargo is collected and consolidated for onward movement." },
      { title: "Transit & Clearance", detail: "We manage transport and customs formalities without handing the shipment to a third party." },
      { title: "Final Delivery", detail: "The shipment reaches its destination address with a single delivery confirmation." },
    ],
  },
  {
    slug: "warehousing-storage",
    name: "Warehousing & Storage Services",
    shortDescription:
      "Short and long-term storage with inventory visibility across UAE facilities.",
    heroLine: "Storage that fits the shipment schedule, not the other way round.",
    icon: "warehouse",
    overview:
      "Our storage network offers flexible short-term and contracted long-term space, with inventory handling suited to palletized goods, bonded cargo, and time-sensitive stock awaiting onward distribution.",
    capabilities: [
      "Short-term and long-term contracted storage",
      "Bonded storage for goods pending customs clearance",
      "Inventory receipt, put-away, and pick-pack support",
      "Flexible scaling for seasonal stock volumes",
    ],
    process: [
      { title: "Intake", detail: "Goods are received, inspected, and logged against your inventory reference." },
      { title: "Storage", detail: "Stock is held under the agreed terms, with bonded handling available where required." },
      { title: "Order Management", detail: "Pick, pack, and dispatch instructions are actioned against your release schedule." },
      { title: "Onward Dispatch", detail: "Goods are handed to the next leg of transport or final delivery." },
    ],
  },
  {
    slug: "customs-clearance",
    name: "Customs Clearance Services",
    shortDescription:
      "Import and export clearance handled by brokers who know UAE and GCC customs procedure.",
    heroLine: "The paperwork that decides whether cargo moves — or waits.",
    icon: "stamp",
    overview:
      "Our brokerage desk prepares and lodges the declarations, permits, and duty assessments required to move cargo through UAE and GCC customs points, reducing the delays that come from incomplete or mismatched documentation.",
    capabilities: [
      "Import and export customs declarations",
      "HS code classification and duty assessment",
      "Permit and licensing coordination for restricted goods",
      "Bonded and free-zone clearance handling",
    ],
    process: [
      { title: "Pre-Clearance Review", detail: "Documentation is checked against destination customs requirements before the shipment arrives." },
      { title: "Declaration Filing", detail: "We lodge the customs declaration and coordinate any required permits." },
      { title: "Inspection Support", detail: "If cargo is selected for inspection, our team liaises directly with the customs point." },
      { title: "Release & Handover", detail: "Cleared cargo is released and handed to onward transport without delay." },
    ],
  },
  {
    slug: "sourcing-agent",
    name: "Sourcing Agent Services",
    shortDescription:
      "On-the-ground sourcing, supplier vetting, and purchase coordination before cargo ever ships.",
    heroLine: "The work that happens before there's anything to ship.",
    icon: "search",
    overview:
      "Before a shipment exists, someone has to find the right supplier, negotiate terms, and confirm quality. Our sourcing agents work directly with manufacturers and traders to identify suppliers, verify products, and manage purchase orders on the client's behalf, then hand the confirmed cargo straight into our freight network.",
    capabilities: [
      "Supplier identification and vetting",
      "Price negotiation and purchase order management",
      "Pre-shipment quality and quantity inspection",
      "Direct handoff into freight, customs, and delivery services",
    ],
    process: [
      { title: "Requirement Briefing", detail: "We confirm the product spec, target price range, and supplier criteria." },
      { title: "Supplier Sourcing", detail: "Candidate suppliers are identified and screened against the brief." },
      { title: "Negotiation & Ordering", detail: "Terms are negotiated and the purchase order placed on the client's behalf." },
      { title: "Inspection & Handoff", detail: "Goods are inspected before shipment and passed into our freight and clearance services." },
    ],
  },
  {
    slug: "documentation-compliance",
    name: "Documentation & Compliance Services",
    shortDescription:
      "Accurate trade documentation prepared to match destination-country requirements.",
    heroLine: "A shipment is only as good as the paper that travels with it.",
    icon: "file",
    overview:
      "We prepare, verify, and manage the full set of documents a shipment needs — commercial invoices, packing lists, certificates of origin, and mode-specific transport documents — checked against the regulatory requirements of the destination market before the cargo departs.",
    capabilities: [
      "Commercial invoice and packing list preparation",
      "Certificate of origin and legalisation support",
      "Bill of lading and airway bill documentation",
      "Compliance checks against destination-market regulations",
    ],
    process: [
      { title: "Document Collection", detail: "We gather the commercial and shipping details needed for the destination market." },
      { title: "Compliance Check", detail: "Documents are reviewed against the regulatory requirements of the receiving country." },
      { title: "Preparation & Legalisation", detail: "Certificates and transport documents are finalised and legalised where required." },
      { title: "Dispatch With Cargo", detail: "Completed documentation travels with the shipment or is sent ahead as needed." },
    ],
  },
  {
    slug: "transloading",
    name: "Transloading Services",
    shortDescription:
      "Cargo transferred between transport modes at strategically located transfer points.",
    heroLine: "Where one mode of transport hands off to the next.",
    icon: "transfer",
    overview:
      "Some routes only work by combining transport modes — a container discharged at port and reloaded onto trucks, or air cargo consolidated for onward road delivery. Our transloading service manages that transfer at secure facilities, keeping cargo integrity intact across the handoff.",
    capabilities: [
      "Container-to-truck and truck-to-container transfers",
      "Cross-docking for consolidated onward shipments",
      "Cargo inspection at each transfer point",
      "Coordination across multiple carriers and modes",
    ],
    process: [
      { title: "Arrival & Inspection", detail: "Incoming cargo is checked against manifest before transfer begins." },
      { title: "Transfer Handling", detail: "Goods are moved between transport modes at our transfer facility." },
      { title: "Re-Documentation", detail: "Transport documents are updated to reflect the new carrier and route." },
      { title: "Onward Movement", detail: "Cargo continues to its destination under the next transport leg." },
    ],
  },
  {
    slug: "professional-packing",
    name: "Professional Packing Services",
    shortDescription:
      "Export-grade packing built around the cargo's shape, weight, and fragility.",
    heroLine: "Damage is a packing problem long before it's a claims problem.",
    icon: "box",
    overview:
      "Our packing teams build crating, palletizing, and protective packaging suited to each shipment's material and route — from household relocations to fragile industrial equipment — reducing handling damage across every leg of transit.",
    capabilities: [
      "Custom crating for irregular or heavy items",
      "Export-standard palletizing and shrink-wrapping",
      "Fragile and high-value item protective packing",
      "Household and relocation packing services",
    ],
    process: [
      { title: "Assessment", detail: "We evaluate the item's dimensions, weight, and fragility to determine the right packing method." },
      { title: "Materials & Build", detail: "Crating or palletizing is built to export specification." },
      { title: "Labelling", detail: "Packages are labelled with handling instructions and shipment references." },
      { title: "Handover to Freight", detail: "Packed cargo moves directly into the selected transport service." },
    ],
  },
  {
    slug: "document-forwarding",
    name: "Document Forwarding Services",
    shortDescription:
      "Accurate preparation and secure handling of trade documents, coordinated directly with banks and trade partners.",
    heroLine: "Where trade finance and paperwork have to line up exactly.",
    icon: "file",
    overview:
      "We provide comprehensive trade documentation services, ensuring the accurate preparation, verification, and secure handling of import and export documents. Our team coordinates with banks and trade partners to facilitate the smooth processing of Letters of Credit (L/C), documentary collections, and other international trade documentation with efficiency and confidentiality.",
    capabilities: [
      "Letter of Credit (L/C) document preparation and verification",
      "Documentary collection handling",
      "Bank and trade partner coordination",
      "Secure, confidential handling of original trade documents",
    ],
    process: [
      { title: "Document Intake", detail: "We collect and review the trade documents against the underlying sale and shipping terms." },
      { title: "Verification", detail: "Documents are checked for compliance with L/C terms or collection instructions before submission." },
      { title: "Bank Coordination", detail: "We liaise directly with the relevant banks to process and forward documentation." },
      { title: "Secure Handover", detail: "Original documents are securely handled and delivered to the receiving party." },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
