import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Offline Plan",
    price: "PKR 55,000",
    period: "lifetime",
    description: "Unlimited Users Lifetime License Access For Offline Users",
    features: [
      "Accounts Module",
      "Sales Module",
      "Purchase Module",
      "Inventory Module",
      "Manufacturing Module",
      "POS Module",
      "Project Management",
      "Backups Download",
      "FBR Integration",
      "Multi-User Support",
    ],
    cta: "Download Now",
  },
  {
    name: "Cloud Yearly",
    price: "Rs 17,399",
    period: "/user/year",
    discount: "45% OFF",
    features: [
      "Full Cloud Access",
      "All Modules",
      "Automatic Updates",
      "Backups",
      "FBR Integration",
      "Multi-User Support",
      "Sales Manager App",
      "Priority Support",
    ],
    highlighted: true,
    cta: "Get Started Now",
  },
  {
    name: "5-Year Cloud",
    price: "Rs 79,999",
    period: "/1 user",
    features: [
      "5 Years Cloud Access",
      "All Modules",
      "Updates & Support",
      "FBR Integration",
      "Multi-User Support",
      "Sales Manager App",
    ],
    cta: "Get 5-Year Plan",
  },
];

export const cloudMonthlyPrice = 2000;
export const cloudYearlyPrice = 17399;
export const originalMonthlyPrice = 2600;
export const originalYearlyPrice = 31200;

export const userPresets = [
  { label: "Solo Entrepreneur", users: 1 },
  { label: "Small Team", users: 5 },
  { label: "Growing Business", users: 10 },
  { label: "Enterprise", users: 20 },
];
