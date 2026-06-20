import type { Module } from "@/types";

export const modules: Module[] = [
  {
    title: "Account Management",
    description:
      "Chart of accounts, journal vouchers, payment vouchers, trial balance, profit & loss, balance sheets, and multi-currency support.",
    icon: "accounts",
  },
  {
    title: "Purchase Management",
    description:
      "Purchase orders, vendor management, purchase returns, debit notes, reports, and Excel upload for vendors.",
    icon: "purchase",
  },
  {
    title: "Sales Management",
    description:
      "Sales orders, customer management, sales returns, credit notes, FBR submission, and bulk invoice upload.",
    icon: "sales",
  },
  {
    title: "Inventory Management",
    description:
      "Item management with multi-UOM, warehouse management, stock transfers, barcode creation, and minimum stock alerts.",
    icon: "inventory",
  },
  {
    title: "Project Management",
    description:
      "Project creation, Bill of Quantity (BoQ), project-wise P&L, material issue tracking, and budget control.",
    icon: "project",
  },
  {
    title: "HR Management",
    description:
      "Employee records, payroll processing, attendance tracking, leave management, and performance evaluation.",
    icon: "hr",
  },
  {
    title: "Manufacturing",
    description:
      "Production planning, Bill of Materials (BOM), work order management, raw material tracking, and cost analysis.",
    icon: "manufacturing",
  },
  {
    title: "POS (Point of Sale)",
    description:
      "Retail billing, receipt printing, cash/card processing, sales returns, and offline POS capability.",
    icon: "pos",
  },
];
