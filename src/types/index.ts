export type AccountType = "asset" | "liability" | "equity" | "revenue" | "expense";

export type ModuleType =
  | "accounts"
  | "sales"
  | "purchase"
  | "inventory"
  | "manufacturing"
  | "pos"
  | "project"
  | "hr"
  | "reports"
  | "settings";

export type ActionType = "create" | "read" | "update" | "delete" | "export" | "approve";

export type VoucherStatus = "draft" | "pending_approval" | "approved" | "cancelled";

export type InvoiceStatus = "draft" | "confirmed" | "cancelled";

export type PaymentStatus = "unpaid" | "partial" | "paid";

export type PlanType = "free_trial" | "offline" | "cloud_monthly" | "cloud_yearly" | "cloud_5year";

export type ItemType = "product" | "service" | "raw_material" | "finished_good" | "consumable";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  avatar?: string;
  companyId: string;
  roleId: string;
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Company {
  id: string;
  name: string;
  registrationNumber?: string;
  taxNumber?: string;
  ntn?: string;
  address?: string;
  city?: string;
  country: string;
  phone?: string;
  email?: string;
  website?: string;
  logo?: string;
  currency: string;
  fiscalYearStart: string;
  dateFormat: string;
  subscriptionPlan: PlanType;
  subscriptionExpiry?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Permission {
  module: ModuleType;
  actions: ActionType[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description?: string;
  discount?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Module {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  tags: string[];
}

export interface VideoTutorial {
  id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  category: string;
  duration?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  offices: Office[];
}

export interface Office {
  city: string;
  country: string;
  phone: string;
  address: string;
}
