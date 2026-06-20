export interface DocItem {
  id: string;
  title: string;
}

export interface DocSection {
  title: string;
  items: DocItem[];
}

export interface DocCategory {
  heading: string;
  sections: DocSection[];
}

export const docSidebar: DocCategory[] = [
  {
    heading: "Getting Started",
    sections: [
      {
        title: "Introduction",
        items: [{ id: "introduction", title: "Introduction" }],
      },
      {
        title: "Setup",
        items: [
          { id: "setup", title: "Company Setup" },
          { id: "setup-users", title: "Manage Users" },
          { id: "setup-employees", title: "Manage Employees" },
          { id: "setup-misc-payment", title: "Miscellaneous Payment" },
          { id: "setup-permissions", title: "User Permissions" },
          { id: "setup-upgradation", title: "Upgradation" },
          { id: "setup-custom-fields", title: "Custom Fields" },
          { id: "setup-template", title: "Template Setting" },
          { id: "setup-database", title: "Database Management" },
        ],
      },
      {
        title: "Support",
        items: [{ id: "support", title: "Support" }],
      },
    ],
  },
  {
    heading: "Documentation",
    sections: [
      {
        title: "Financial Module",
        items: [
          { id: "financial", title: "Financial Module" },
          { id: "financial-journal", title: "Journal Voucher" },
          { id: "financial-payment", title: "Payment Voucher" },
          { id: "financial-pdc", title: "Post Dated Cheque" },
          { id: "financial-sales", title: "Sales/Receivable" },
          { id: "financial-purchase", title: "Purchase/Payable" },
          { id: "financial-accounts", title: "Manage Accounts" },
          { id: "financial-reports", title: "Reports" },
        ],
      },
      {
        title: "Inventory Management",
        items: [
          { id: "inventory", title: "Inventory Management" },
          { id: "inventory-adjustment", title: "Inventory Adjustment" },
          { id: "inventory-material-issue", title: "Material Issue" },
          { id: "inventory-material-receive", title: "Material Receive" },
          { id: "inventory-project-issue", title: "Project Wise Material Issue" },
          { id: "inventory-transfer", title: "Inventory Transfer" },
          { id: "inventory-setup", title: "Inventory Setup" },
          { id: "inventory-reports", title: "Reports" },
        ],
      },
      {
        title: "Purchase Management",
        items: [
          { id: "purchase", title: "Purchase Management" },
          { id: "purchase-vendors", title: "Vendors" },
          { id: "purchase-vendor-category", title: "Vendor Category" },
          { id: "purchase-order", title: "Purchase Order" },
          { id: "purchase-reports", title: "Reports" },
        ],
      },
      {
        title: "Sale Management",
        items: [
          { id: "sale", title: "Sale Management" },
          { id: "sale-customers", title: "Customers" },
          { id: "sale-customer-category", title: "Customer Category" },
          { id: "sale-quotations", title: "Quotations" },
          { id: "sale-order", title: "Sale Order" },
          { id: "sale-routes", title: "Routes" },
          { id: "sale-van-loading", title: "Van Loading" },
          { id: "sale-reports", title: "Reports" },
        ],
      },
      {
        title: "HR Management",
        items: [
          { id: "hr", title: "HR Management" },
          { id: "hr-employees", title: "Employees" },
          { id: "hr-employee-category", title: "Employees Category" },
          { id: "hr-department", title: "Department" },
          { id: "hr-reports", title: "Reports" },
        ],
      },
      {
        title: "Manufacturing",
        items: [
          { id: "manufacturing", title: "Manufacturing Module" },
          { id: "manufacturing-item", title: "Item" },
          { id: "manufacturing-item-category", title: "Item Category" },
          { id: "manufacturing-work-order", title: "Work Order" },
          { id: "manufacturing-bom", title: "BOM" },
          { id: "manufacturing-assembly", title: "Assembly Build" },
          { id: "manufacturing-reports", title: "Reports" },
        ],
      },
      {
        title: "Project Management",
        items: [
          { id: "project", title: "Project Management System" },
          { id: "project-management", title: "Project Management" },
          { id: "project-team", title: "Team Management" },
        ],
      },
      {
        title: "POS",
        items: [
          { id: "pos", title: "POS Module" },
          { id: "pos-item", title: "Item" },
          { id: "pos-item-category", title: "Item Category" },
          { id: "pos-customer", title: "Customer" },
          { id: "pos-terminal", title: "POS Terminal" },
          { id: "pos-payment", title: "POS Payment" },
          { id: "pos-reports", title: "Reports" },
        ],
      },
      {
        title: "Order Booking App",
        items: [{ id: "order-booking", title: "Order Booking App" }],
      },
    ],
  },
];

export interface DocContent {
  title: string;
  content: string;
  video?: { thumbnail: string; url: string; label: string };
  subCards?: { title: string; description: string; id: string }[];
}

export const docContent: Record<string, DocContent> = {
  introduction: {
    title: "Introduction",
    content: `Welcome to the AxonERP documentation

Enterprise Resource Planning (ERP) is a software system that helps streamline core business processes, including finance, HR, production, supply chain, sales, and procurement, with a uniform view of activity.

Below are the pages available in the documentation.`,
    video: {
      thumbnail: "https://img.youtube.com/vi/BGIqQBUEm_k/maxresdefault.jpg",
      url: "https://youtu.be/BGIqQBUEm_k?si=bNlWB8X5O7YaGY6e",
      label: "Watch our AxonERP Introduction Video",
    },
    subCards: [
      { title: "Setup Guide to installing and configuring the AxonERP.", description: "View", id: "setup" },
      { title: "Financial Module A financial data management system.", description: "View", id: "financial" },
    ],
  },

setup: {
    title: "Company Setup",
    content: `This chapter describes how to start the Business process, explore the administration interface.

The Administration module allows you to control the operation of Business Process, and manage all users and groups. This chapter describes how to start the Business process, explore the administration interface. It covers the base data that is linked into the other modules for transactional purpose.

## Let's Setup the Company

Here we can see the company setup. Firstly we'll define the company profile in which the first item is company profile. Company profile is used for the company information. The purpose of this tab is how to establish or create company information to use this tab.

When you click on the company profile option you can see there are two option:

- Edit profile
- Accounts preferences

When you open the Edit profile, now you can add your company information like

- Company Name
- Address
- Email
- GST Number
- NTN Number
- Company code
- Business type
- Phone number
- Logo

Now you can simply add this information and click on saves changes.

## Accounting Refrences

When you add your all company details than you select your Accounting Refrences:

**Accounting Refrences** typically refers to the settings and options that control how financial transactions are recorded, processed, and reported.

- In AxonERP System the Accounting Refrences should be configured during initial setup by default. But you can set up accounts preferences according to your business needs.
- If you can change accounts preferences you can simply click on edit option and select your account and saves this changes.

The following accounts can be configured in Accounting Refrences:

- **Payable Account** – Tracks money your business owes to suppliers.
- **Receivable Account** – Tracks money owed to your business by customers.
- **COGS/Expense Account** – Records the cost of goods sold or business expenses.
- **Income Account** –... (line truncated to 2000 chars)`,
    video: {
      thumbnail: "https://img.youtube.com/vi/NYPLWaWf0YU/maxresdefault.jpg",
      url: "https://youtu.be/NYPLWaWf0YU?si=HW6i0GUI388Yg7Cf",
      label: "Watch: Application Setup in AxonERP | Complete Beginner Guide",
    },
  },

  support: {
    title: "Support",
    content: `AxonERP Customer Support & Onboarding Guide

## Support

Welcome to AxonERP Support. We provide structured onboarding and dedicated assistance to ensure every client gets the most out of their ERP experience.

## Onboarding Sessions

Upon purchasing AxonERP, every client is entitled to **3 dedicated onboarding sessions** with a member of the AxonERP team.

During these sessions, our expert team will:

- Walk you through the complete system setup and configuration
- Guide you through each module relevant to your business
- Answer all your questions in real time
- Help you understand workflows, reports, and best practices
- Resolve any issues or concerns on the spot

> **Note:** These sessions are designed to ensure a smooth and confident start with AxonERP. We recommend scheduling them in sequence to cover all modules systematically.

## After Your 3 Sessions

Once your **3 onboarding sessions are complete**, additional one-on-one sessions will no longer be available. However, you will continue to receive full support through our **Support Ticket System**.

## Support Ticket System

For any issues, queries, or guidance needed after your onboarding sessions, you can submit a **Support Ticket** directly through your AxonERP dashboard.

### How to Submit a Ticket

1. Log in to your AxonERP account
2. Click the **Support** button in the top navigation bar
3. Click **Create Ticket** on the Support Tickets page
4. Fill in the following details:
   - **Subject** — Brief title of your issue
   - **Module Name** — Select the relevant module
   - **Message** — Describe your issue or query in detail
   - **Attach Image** *(optional)* — Upload a screenshot if needed
5. Click **Submit**

Our support team will review your ticket and respond promptly with a resolution or guidance.

> **Tip:** You can track all your submitted tickets and their responses from the **Support Tickets** page in your dashboard.

## Support Summary... (line truncated to 2000 chars)`,
    video: {
      thumbnail: "https://img.youtube.com/vi/M4wo5rY0GKg/maxresdefault.jpg",
      url: "https://youtu.be/M4wo5rY0GKg?si=pOsSOlXXoaXEAfzG",
      label: "Watch: Generate Support Ticket in AxonERP",
    },
  },

  financial: {
    title: "Financial Module",
    content: `A financial module is a software component that manages and automates financial transactions, accounting, and reporting.\n\nThe financial module provides a centralized platform for financial data management, enabling accurate and timely financial decision-making.\n\nKey features include general ledger, accounts payable, accounts receivable, trail balance, profit and loss, and balance sheet.\n\nIn AxonERP, here are some key components and features of a financial module:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/HiUKl2i_xM8/maxresdefault.jpg",
      url: "https://youtu.be/HiUKl2i_xM8?si=-sU_NIzJaQxtI4SA",
      label: "Watch: Complete Guide to Account Management in AxonERP",
    },
    subCards: [
      { title: "Journal Voucher", description: "The Journal Voucher feature allows you to record financial transactions manually or automatically.", id: "financial-journal" },
      { title: "Payment Voucher", description: "The Payment voucher feature allows you to multiple expense vouchers to track various types of expenses.", id: "financial-payment" },
      { title: "Sales/Receivable", description: "The Sales/Receivable helps in managing sales operations, including invoices, returns, payments, and customer management.", id: "financial-sales" },
      { title: "Purchase/Payable", description: "The Purchase/Payable helps in managing purchase operations, including invoices, returns, payments, and vendor management.", id: "financial-purchase" },
      { title: "Manage Accounts", description: "The Accounts Management module is used to manage all financial accounts.", id: "financial-accounts" },
      { title: "Reports", description: "The Reports module provides a variety of financial reports to assist in decision-making.", id: "financial-reports" },
      { title: "Post Dated Cheque", description: "The Post Dated Cheque feature allows you to manage and track post-dated cheques for future payments and receipts.", id: "financial-pdc" },
    ],
  },

  financialjournal: { title: "Journal Voucher", content: "The Journal Voucher feature allows you to record financial transactions manually or automatically. You can create journal entries to record debits and credits, adjust account balances, and maintain a complete audit trail of all financial adjustments." },
  financialpayment: { title: "Payment Voucher", content: "The Payment Voucher feature allows you to create and manage payment vouchers for recording outgoing payments. You can track expenses by category, attach supporting documents, and maintain a complete record of all business expenditures." },
  financialpdc: { title: "Post Dated Cheque", content: "The Post Dated Cheque feature allows you to manage and track post-dated cheques for future payments and receipts. Record cheque details, track clearance dates, and reconcile cheques against invoices." },
  financialsales: { title: "Sales/Receivable", content: "The Sales/Receivable feature helps in managing sales operations, including invoices, returns, payments, and customer management. Generate invoices, track receivables, manage credit terms, and reconcile customer accounts." },
  financialpurchase: { title: "Purchase/Payable", content: "The Purchase/Payable feature helps in managing purchase operations, including invoices, returns, payments, and vendor management. Record purchase invoices, track payables, manage vendor accounts, and process payments efficiently." },
  financialaccounts: { title: "Manage Accounts", content: "The Accounts Management module is used to manage all financial accounts. Create and organize your chart of accounts, set up opening balances, and manage account groups for proper financial reporting." },
  financialreports: { title: "Reports", content: "The Reports module provides a variety of financial reports to assist in decision-making. Generate trial balance, profit and loss statements, balance sheets, ledger reports, and cash flow statements." },

  inventory: {
    title: "Inventory Management",
    content: `An inventory management system is a tool that allows you to track goods across your business supply chain.\n\nIt optimizes the entire spectrum spanning from order placement with your vendor to order delivery to your customer, mapping the complete journey of a product.\n\nIn AxonERP, here are some key components and features of inventory management:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/MicLXJfewao/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=MicLXJfewao",
      label: "Watch our AxonERP Inventory Module Video",
    },
    subCards: [
      { title: "Inventory Setup", description: "The Inventory Setup section allows you to configure Items, Item Categories, Warehouses, Item UOM, Item Price Types, and more.", id: "inventory-setup" },
      { title: "Material Receive", description: "The Material Receive feature allows you to record the receipt of inventory items into a warehouse.", id: "inventory-material-receive" },
      { title: "Material Issue", description: "The Material Issue feature allows you to record the issuance of inventory items from a warehouse to an employee or project.", id: "inventory-material-issue" },
      { title: "Project Wise Material Issue", description: "The Project Wise Material Issue feature allows you to issue inventory items against a specific project.", id: "inventory-project-issue" },
      { title: "Inventory Adjustment", description: "The Inventory Adjustment feature allows you to adjust inventory quantities and values at the end of the month.", id: "inventory-adjustment" },
      { title: "Inventory Transfer", description: "The Inventory Transfer feature allows you to transfer stock between warehouses within the same organization.", id: "inventory-transfer" },
      { title: "Reports", description: "The Reports section provides a variety of inventory reports to assist in decision-making.", id: "inventory-reports" },
    ],
  },

  inventoryadjustment: { title: "Inventory Adjustment", content: "The Inventory Adjustment feature allows you to adjust inventory quantities and values at the end of the month. Make corrections for damaged goods, expired items, shrinkage, or cycle count differences while maintaining accurate stock records." },
  inventorymaterialissue: { title: "Material Issue", content: "The Material Issue feature allows you to record the issuance of inventory items from a warehouse to an employee or project. Track which materials are issued, to whom, and for which purpose to maintain proper inventory accountability." },
  inventorymaterialreceive: { title: "Material Receive", content: "The Material Receive feature allows you to record the receipt of inventory items into a warehouse. Log incoming stock from vendors, production, or transfers to keep inventory levels accurate." },
  inventoryprojectissue: { title: "Project Wise Material Issue", content: "The Project Wise Material Issue feature allows you to issue inventory items against a specific project. Track material consumption by project for accurate project costing and resource management." },
  inventorytransfer: { title: "Inventory Transfer", content: "The Inventory Transfer feature allows you to transfer stock between warehouses within the same organization. Maintain proper records of inter-warehouse movements and track stock levels at each location." },
  inventorysetup: { title: "Inventory Setup", content: "The Inventory Setup section allows you to configure Items, Item Categories, Warehouses, Item UOM, Item Price Types, and more. Set up your inventory structure to match your business operations." },
  inventoryreports: { title: "Reports", content: "The Reports section provides a variety of inventory reports to assist in decision-making. View stock summaries, movement reports, valuation reports, and item-wise analysis." },

  purchase: {
    title: "Purchase Management",
    content: `This module enables organizations to manage Purchase.\n\nPurchase management is a system that is used for order placement for the timely receipt of inventory stock. It streamlines the purchasing and inventory control process of an organization for greater efficiency and lower costs.\n\nIn AxonERP, here are some key components and features of the Purchase module:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/j_5CfYwRIXs/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=j_5CfYwRIXs",
      label: "Watch our AxonERP Purchase Management Video",
    },
    subCards: [
      { title: "Vendors", description: "The Vendors section allows you to manage all vendors including their categories, contact details, and addresses.", id: "purchase-vendors" },
      { title: "Vendor Category", description: "The Vendor Category section allows you to define and manage vendor categories linked to payable accounts.", id: "purchase-vendor-category" },
      { title: "Purchase Order", description: "The Purchase Order section allows you to create and manage purchase orders for inventory procurement.", id: "purchase-order" },
      { title: "Reports", description: "The Reports section provides a variety of purchase reports to assist in decision-making.", id: "purchase-reports" },
    ],
  },

  purchasevendors: { title: "Vendors", content: "The Vendors section allows you to manage all vendors including their categories, contact details, and addresses. Add new vendors, update contact information, assign categories, and track purchase history for each vendor." },
  purchasevendorcategory: { title: "Vendor Category", content: "The Vendor Category section allows you to define and manage vendor categories linked to payable accounts. Organize vendors into groups for better management and reporting." },
  purchaseorder: { title: "Purchase Order", content: "The Purchase Order section allows you to create and manage purchase orders for inventory procurement. Generate POs, track order status, receive goods, and reconcile with vendor invoices." },
  purchasereports: { title: "Reports", content: "The Reports section provides a variety of purchase reports to assist in decision-making. View purchase summaries, vendor analysis, order tracking, and spending reports." },

  sale: {
    title: "Sale Management",
    content: `This module enables organizations to manage Sales.\n\nSale management is becoming increasingly complex as almost every business has multiple customer interaction points which keep orders flowing in from different sales channels. A high level of customer service that creates satisfied customers and keeps them intact for life requires an order management process that is perfectly planned.\n\nIn AxonERP, here are some key components and features of the Sale module:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/gO36743FF_o/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=gO36743FF_o",
      label: "Watch our AxonERP Sale Management Video",
    },
    subCards: [
      { title: "Customers", description: "The Customers section allows you to manage all customers including their categories and contact details.", id: "sale-customers" },
      { title: "Customer Category", description: "The Customer Category section allows you to define and manage customer categories.", id: "sale-customer-category" },
      { title: "Quotations", description: "The Quotations section allows you to create and manage sales quotations for customers.", id: "sale-quotations" },
      { title: "Sale Order", description: "The Sale Order section allows you to create and manage sales orders for customers.", id: "sale-order" },
      { title: "Routes", description: "The Routes section allows you to define and manage delivery routes for sales operations.", id: "sale-routes" },
      { title: "Van Loading", description: "The Van Loading section allows you to manage van loading operations for delivery routes.", id: "sale-van-loading" },
      { title: "Reports", description: "The Reports section provides a variety of sales reports to assist in decision-making.", id: "sale-reports" },
    ],
  },

  salecustomers: { title: "Customers", content: "The Customers section allows you to manage all customers including their categories and contact details. Add new customers, update profiles, assign credit terms, and track complete transaction history." },
  salecustomercategory: { title: "Customer Category", content: "The Customer Category section allows you to define and manage customer categories. Organize customers into groups for targeted pricing, promotions, and reporting." },
  salequotations: { title: "Quotations", content: "The Quotations section allows you to create and manage sales quotations for customers. Generate professional quotes, convert quotations to orders, and track quotation status." },
  saleorder: { title: "Sale Order", content: "The Sale Order section allows you to create and manage sales orders for customers. Process orders from quotation to delivery, track fulfillment, and manage order modifications." },
  saleroutes: { title: "Routes", content: "The Routes section allows you to define and manage delivery routes for sales operations. Plan efficient delivery paths, assign routes to sales reps, and optimize delivery schedules." },
  salevanloading: { title: "Van Loading", content: "The Van Loading section allows you to manage van loading operations for delivery routes. Track items loaded onto delivery vehicles, manage stock allocation, and ensure accurate deliveries." },
  salereports: { title: "Reports", content: "The Reports section provides a variety of sales reports to assist in decision-making. View sales summaries, customer analysis, order tracking, and revenue reports." },

  hr: {
    title: "HR Management",
    content: `The HR Management module centralizes employee records, classifications, and departmental structures to streamline workforce operations.\n\nThe HR Management module consolidates personnel data and HR functions into a single, efficient platform—enabling seamless integration with payroll, attendance, and departmental workflows.\n\nKey features include employee profiles, employee category, tasks, department, and workforce organization.\n\nIn AxonERP, here are some key components and features of the HR Management module:`,
    subCards: [
      { title: "Employee Detail", description: "Catalog employee records with personal and job-related information.", id: "hr-employees" },
      { title: "Employee Category", description: "Classify employees by department, role, or custom labels for structured reporting.", id: "hr-employee-category" },
      { title: "Department", description: "Define organizational units and associate employees accordingly.", id: "hr-department" },
      { title: "Reports", description: "The Reports section provides HR reports to assist in workforce decision-making.", id: "hr-reports" },
    ],
  },

  hremployees: { title: "Employees", content: "Catalog employee records with personal and job-related information. Maintain complete employee profiles including personal details, employment history, qualifications, and assigned departments." },
  hremployeecategory: { title: "Employee Category", content: "Classify employees by department, role, or custom labels for structured reporting. Create categories that align with your organizational structure for better workforce management." },
  hrdepartment: { title: "Department", content: "Define organizational units and associate employees accordingly. Set up departments, assign department heads, and organize your workforce structure for efficient management." },
  hrreports: { title: "Reports", content: "The Reports section provides HR reports to assist in workforce decision-making. View employee rosters, attendance summaries, departmental reports, and headcount analysis." },

  manufacturing: {
    title: "Manufacturing Module",
    content: `The Manufacturing module centralizes production processes such as item management, work orders, and assembly builds for streamlined operations.\n\nThe Manufacturing module consolidates production data and workflows into a single, efficient platform—enabling better control over inventory, assembly, and reporting.\n\nKey features include item management, item categories, work orders, assembly builds, and manufacturing reports.\n\nIn AxonERP, here are some key components and features of the Manufacturing module:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/oc09TmlzmMo/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=oc09TmlzmMo",
      label: "Watch our AxonERP Smart Manufacturing Module Video",
    },
    subCards: [
      { title: "Item", description: "Manage individual production items with detailed specifications.", id: "manufacturing-item" },
      { title: "Item Category", description: "Organize items into logical categories for streamlined production.", id: "manufacturing-item-category" },
      { title: "Work Order", description: "Track and manage production workflows, timelines, and responsibilities.", id: "manufacturing-work-order" },
      { title: "BOM", description: "Manage Bill of Materials for production items, defining the components and quantities required for manufacturing.", id: "manufacturing-bom" },
      { title: "Assembly Build", description: "Coordinate and oversee assembly processes with component-level tracking.", id: "manufacturing-assembly" },
      { title: "Reports", description: "Generate detailed manufacturing reports for analysis and decision-making.", id: "manufacturing-reports" },
    ],
  },

  manufacturingitem: { title: "Item", content: "Manage individual production items with detailed specifications. Define raw materials, semi-finished goods, and finished products with complete specifications, pricing, and BOM associations." },
  manufacturingitemcategory: { title: "Item Category", content: "Organize items into logical categories for streamlined production. Group manufacturing items by type, production line, or department for efficient inventory and production management." },
  manufacturingworkorder: { title: "Work Order", content: "Track and manage production workflows, timelines, and responsibilities. Create work orders, assign tasks, monitor progress, and track production costs against budgets." },
  manufacturingbom: { title: "BOM (Bill of Materials)", content: "Manage Bill of Materials for production items, defining the components and quantities required for manufacturing. Create multi-level BOMs, track raw material requirements, and calculate production costs." },
  manufacturingassembly: { title: "Assembly Build", content: "Coordinate and oversee assembly processes with component-level tracking. Record finished goods production, track component consumption, and update inventory levels automatically." },
  manufacturingreports: { title: "Reports", content: "Generate detailed manufacturing reports for analysis and decision-making. View production summaries, work order status, material usage, and cost analysis reports." },

  project: {
    title: "Project Management System",
    content: `This module enables organizations to manage projects efficiently, integrating with other ERP functions.\n\nKey features include:\n\n## 1. Project Creation\n\n- Define project scope, objectives, and timelines\n- Assign project managers and team members\n\n## 2. Task Management\n\n- Create and assign tasks to team members\n- Track task status, progress, and deadlines\n\n## 3. Reporting and Analytics\n\n- Generate project status reports and dashboards\n- Analyze project performance metrics (e.g., time, cost, quality)\n\nIn AxonERP, here are some key components and features of the Project Management System:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/CoCnx7Lk8xg/maxresdefault.jpg",
      url: "https://youtu.be/CoCnx7Lk8xg?si=M6AXNAdXS3CB9ecW",
      label: "Watch: Complete Guide to Project Management in AxonERP",
    },
    subCards: [
      { title: "Project Management", description: "Create and manage projects, assign tasks to team members, and track progress.", id: "project-management" },
      { title: "Team Management", description: "Manage team members, assign roles, configure permissions, and track task progress.", id: "project-team" },
    ],
  },

  projectmanagement: { title: "Project Management", content: "Create and manage projects, assign tasks to team members, and track progress. Define project milestones, set deadlines, allocate resources, and monitor project health through dashboards and reports." },
  projectteam: { title: "Team Management", content: "Manage team members, assign roles, configure permissions, and track task progress. Build project teams, define roles and responsibilities, and ensure efficient collaboration." },

  pos: {
    title: "POS Module",
    content: `The POS module centralizes retail functions, enabling transaction management and customer tracking for seamless operations.\n\nThe POS module consolidates retail data and workflows into a single, integrated platform—enabling better control over fulfillment, checkout, and reporting.\n\nKey features include item management, customer profiles, POS terminals, payment methods, and retail reports.\n\nIn AxonERP, here are some key components and features of the POS module:`,
    video: {
      thumbnail: "https://img.youtube.com/vi/4RAOkqN8xTE/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=4RAOkqN8xTE",
      label: "Watch our AxonERP POS Overview Video",
    },
    subCards: [
      { title: "Item", description: "Manage individual POS items with detailed specifications.", id: "pos-item" },
      { title: "Item Category", description: "Organize items into logical categories for streamlined management.", id: "pos-item-category" },
      { title: "Customer", description: "Track and maintain customer profiles and purchase history.", id: "pos-customer" },
      { title: "POS Terminal", description: "Operate POS terminals with secure, real-time checkout.", id: "pos-terminal" },
      { title: "POS Payment", description: "Customize payment options including cash, card, and digital wallets.", id: "pos-payment" },
      { title: "Reports", description: "Generate detailed POS reports for insights and optimization.", id: "pos-reports" },
    ],
  },

  positem: { title: "Item", content: "Manage individual POS items with detailed specifications. Set up retail items with barcodes, pricing, tax rules, and stock levels for quick checkout operations." },
  positemcategory: { title: "Item Category", content: "Organize items into logical categories for streamlined management. Group POS items by department, brand, or product type for easy navigation during checkout." },
  poscustomer: { title: "Customer", content: "Track and maintain customer profiles and purchase history. Record customer details, loyalty points, purchase patterns, and credit information." },
  posterminal: { title: "POS Terminal", content: "Operate POS terminals with secure, real-time checkout. Process sales transactions, handle multiple payment methods, print receipts, and manage end-of-day cash register reconciliation." },
  pospayment: { title: "POS Payment", content: "Customize payment options including cash, card, and digital wallets. Configure payment methods, set up payment gateway integrations, and track payment reconciliation." },
  posreports: { title: "Reports", content: "Generate detailed POS reports for insights and optimization. View sales summaries, cashier performance, item-wise sales, and daily/weekly/monthly reports." },

  orderbooking: {
    title: "Order Booking App",
    content: `AxonERP Order Booking Mobile Application Guide\n\n## What is the Order Booking App?\n\nThe **Axon Order Booking App** is a mobile application designed for sales representatives, distributors, and field teams. It allows them to book orders directly from their phones while on the go — and all orders automatically sync with **AxonERP** in real time, with no manual data entry required.\n\n## Key Features\n\n- **Mobile Order Booking** — Sales reps can create orders from anywhere using their mobile device\n- **Auto Sync with ERP** — All orders placed in the app are automatically received inside AxonERP\n- **Customer & Item Sync** — Customers and items from ERP are available directly in the mobile app\n- **No Double Entry** — Data flows seamlessly between the app and ERP, eliminating duplicate work\n- **Real-Time Sales Visibility** — Office teams get live updates on orders as they are placed in the field\n- **Faster Sales Operations** — Speed up your entire sales process from order placement to processing\n\n## Who Is It For?\n\nThis app is ideal for businesses that have:\n\n- Field sales representatives\n- Distributors managing orders on the go\n- Teams that need real-time order visibility between field and office\n\n## How It Works\n\n1. Sales rep opens the **Axon Order Booking App** on their mobile\n2. Customers and items are synced from AxonERP into the app\n3. Rep selects a customer, adds items, and places the order\n4. The order is **automatically received in AxonERP** — no manual entry needed\n5. Office team can view and process the order in real time\n\n> **Tip:** Make sure your AxonERP account is properly configured before linking the mobile app.`,
    video: {
      thumbnail: "https://img.youtube.com/vi/WcoUj6LmOFg/maxresdefault.jpg",
      url: "https://youtu.be/WcoUj6LmOFg?si=H6XKYV8t2fFvFWuh",
      label: "Watch: AxonERP Order Booking App Introduction | Step by Step Guide",
    },
  },

  setupusers: { title: "Manage Users", content: "The Manage Users section allows you to create, edit, and deactivate user accounts. Assign roles, set passwords, configure access levels, and manage user permissions for system access." },
  setupemployees: { title: "Manage Employees", content: "The Manage Employees section allows you to maintain comprehensive employee records. Add employee details including personal information, job titles, departments, contact information, and employment dates." },
  setupmiscpayment: { title: "Miscellaneous Payment", content: "The Miscellaneous Payment feature allows you to record and manage one-time or recurring payments that don't fit into standard categories. Track ad-hoc expenses, petty cash, and irregular payments." },
  setuppermissions: { title: "User Permissions", content: "The User Permissions section allows you to configure granular access controls for each user. Define which modules, features, and data each user can view, create, edit, or delete." },
  setupupgradation: { title: "Upgradation", content: "The Upgradation section guides you through system upgrade procedures. Learn how to update your AxonERP installation, migrate data, and ensure compatibility with new features." },
  setupcustomfields: { title: "Custom Fields", content: "The Custom Fields feature allows you to add custom data fields to forms and records throughout the system. Tailor the ERP to your specific business data requirements." },
  setuptemplate: { title: "Template Setting", content: "The Template Setting section allows you to customize document templates for invoices, purchase orders, receipts, and other business documents. Configure layouts, logos, and formatting." },
  setupdatabase: { title: "Database Management", content: "The Database Management section provides tools for managing your ERP database. Perform backups, restore data, manage database health, and ensure data integrity." },
};
