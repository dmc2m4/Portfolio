import { Project } from "../types/project";

export const projects: Project[] = [
    {
        id: "1",
        headline:
            "AI-powered lead generation and business partner discovery platform.",
        title: "AI-Powered Partner Finder & Lead Generation",
        category: "Artificial Intelligence",
        description:
            "Built an AI-powered platform that discovers qualified business partners using Google Places, Hunter.io, OpenAI, and Vapi. Automated lead enrichment, personalized outreach, AI voice calls, SMS, and email workflows, significantly reducing manual prospecting while increasing lead generation efficiency.",
        media: [
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/pf-dashboard.png",
                alt: "Partner Finder dashboard",
                caption:
                    "Partner Finder dashboard for managing lead generation and outreach activity.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/partner-finder-first-view.png",
                alt: "Partner Finder initial screen",
                caption:
                    "Initial Partner Finder experience where users can start discovering potential business partners.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/step-1.png",
                alt: "Partner Finder step 1",
                caption:
                    "Step 1: Configure the search criteria to identify relevant business partners and leads.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/step-2.png",
                alt: "Partner Finder step 2",
                caption:
                    "Step 2: Review and refine the search criteria before generating potential leads.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/step-3.png",
                alt: "Partner Finder step 3",
                caption:
                    "Step 3: Review the generated results and continue with the lead discovery workflow.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/partner-finder/detail-sidebar.png",
                alt: "Partner details sidebar",
                caption:
                    "Detailed sidebar displaying information about a selected lead or potential business partner.",
            },
        ],
        thumbnail: "/images/Thumbnail1.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "OpenAI",
            "Vapi",
            "Twilio",
            "Google Places API",
            "Hunter.io",
            "PostgreSQL",
        ],
        url: "https://app.comarketing.com/dashboard/partner-finder",
    },

    {
        id: "2",
        headline:
            "AI-powered document analysis and repair cost estimation platform.",
        title: "AI Property Inspection & Repair Cost Estimator",
        category: "Artificial Intelligence",
        description:
            "Developed an AI-powered estimator that analyzes home inspection reports and property photos to identify repair items, estimate costs, and generate actionable reports. Integrated AI workflows that transform inspection data into qualified business opportunities through automated partner matching and lead generation.",
        media: [
            {
                type: "image",
                src: "/images/projects/comarketing/estimator/estimator-dashboard.png",
                alt: "AI Property Inspection Estimator dashboard",
                caption:
                    "Estimator dashboard where users can manage property repair estimates and access the AI-powered analysis workflow.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/estimator/upload-page.png",
                alt: "Property inspection report upload page",
                caption:
                    "Upload a property inspection report to start the AI-powered analysis and repair cost estimation process.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/estimator/step-2.png",
                alt: "AI-powered inspection analysis step",
                caption:
                    "Review and process the inspection data extracted from the uploaded report to identify potential repair items.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/estimator/step-3.png",
                alt: "Repair cost estimation results",
                caption:
                    "Review AI-generated repair items, estimated costs, and recommendations based on the property inspection analysis.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/estimator/request-service-modal.png",
                alt: "Request service modal for repair items",
                caption:
                    "Connect with relevant service providers directly from the estimate by requesting assistance for selected repair items.",
            },
        ],
        thumbnail: "/images/Thumbnail2.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "OpenAI",
            "PostgreSQL",
            "REST API",
        ],
        url: "https://app.comarketing.com/estimator",
    },

    {
        id: "3",
        headline:
            "Flexible subscription, billing, and credit-based payment infrastructure.",
        title: "Subscription & Billing System for SaaS Platform",
        category: "FinTech",
        description:
            "Designed and implemented a complete billing infrastructure for a B2B SaaS platform using Stripe. Built subscription management, webhook processing, recurring payments, invoices, and a flexible credit-based system that allows customers to purchase and consume platform credits based on feature usage.",
        media: [
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/Billing.png",
                alt: "SaaS billing management dashboard",
                caption:
                    "Centralized billing interface for managing subscriptions, payment information, invoices, and account billing settings.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/Stripe-dashboard.png",
                alt: "Stripe billing integration dashboard",
                caption:
                    "Stripe-powered billing infrastructure used to manage subscriptions, recurring payments, invoices, and payment processing.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/Pricing.png",
                alt: "SaaS pricing and subscription plans",
                caption:
                    "Pricing page with flexible subscription plans designed to support different customer needs and platform usage levels.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/Payouts.png",
                alt: "Partner payouts management dashboard",
                caption:
                    "Payout management interface for tracking earnings, commissions, and payment activity across the platform.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/credit usage.png",
                alt: "Credit usage and consumption tracking",
                caption:
                    "Credit-based usage system that tracks how customers consume platform credits across different features and services.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Billing/update subscription modal.png",
                alt: "Update subscription modal",
                caption:
                    "Subscription management flow that allows customers to update their plan and adjust their billing configuration.",
            },
        ],
        thumbnail: "/images/Thumbnail3.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Stripe",
            "PostgreSQL",
            "REST API",
        ],
        url: "https://app.comarketing.com/pricing",
    },

    {
        id: "4",
        headline:
            "Core web application for a multi-tenant B2B referral marketing platform.",
        title: "B2B SaaS Dashboard for Partnership & Lead Management",
        category: "SaaS Platform",
        description:
            "Developed the core application of a B2B SaaS platform that helps businesses build strategic partnerships and generate qualified referrals. Designed dashboards for both Comarketing and Earn Mode, enabling users to manage leads, partnerships, invitations, agreements, analytics, and account settings through a responsive and scalable interface.",
        media: [
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Earn mode dashboard.png",
                alt: "Earn Mode dashboard",
                caption:
                    "Dashboard designed for users to track earnings, manage partnerships, and monitor referral activity within the platform.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Comarketing mode dashboard.png",
                alt: "Comarketing Mode dashboard",
                caption:
                    "Central dashboard for managing business partnerships, referrals, leads, and collaboration opportunities in Comarketing Mode.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Sign-in.png",
                alt: "Comarketing platform sign-in page",
                caption:
                    "Responsive authentication experience providing secure access to the Comarketing platform.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Branding section.png",
                alt: "Company branding settings",
                caption:
                    "Branding and profile management section that allows businesses to customize their presence and account information within the platform.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Leads panel.png",
                alt: "Lead management dashboard",
                caption:
                    "Centralized lead management interface for tracking, organizing, and managing qualified referral opportunities.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Leads view for mobile.png",
                alt: "Responsive mobile lead management interface",
                caption:
                    "Mobile-optimized lead management experience designed to provide access to referral and lead information across different devices.",
            },
            {
                type: "image",
                src: "/images/projects/comarketing/Dashboard/Agreements panel.png",
                alt: "Partnership agreements management panel",
                caption:
                    "Agreement management interface for creating, reviewing, and tracking partnership agreements between businesses.",
            },
        ],
        thumbnail: "/images/Thumbnail4.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "REST API",
        ],
        url: "https://app.comarketing.com/login",
    },

    {
        id: "5",
        headline:
            "Centralized administration platform for managing thousands of SaaS users.",
        title: "Admin Portal for SaaS Operations Management",
        category: "Admin Dashboard",
        description:
            "Built a comprehensive administration portal to manage users, organizations, leads, agreements, invitations, referrals, and platform operations. Implemented advanced filtering, interactive maps, analytics dashboards, CSV exports, and internal management tools that streamline daily operations for administrators.",
        media: [],
        thumbnail: "/images/Thumbnail5.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "React",
            "PostgreSQL",
            "REST API",
        ],
        url: "https://app.comarketing.com/admin",
    },

    {
        id: "6",
        headline:
            "Unified platform for creating and optimizing digital advertising campaigns.",
        title: "Digital Advertising Management Platform",
        category: "Marketing Technology",
        description:
            "Developed a centralized platform that enables businesses to create, manage, and optimize Google Ads and Meta Ads campaigns from a single dashboard. Implemented campaign automation, audience management, lead tracking, analytics, and advertising workflows to simplify campaign creation and improve marketing performance.",
        media: [],
        thumbnail: "/images/Thumbnail6.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Google Ads API",
            "Meta Ads API",
            "Zapier",
        ],
        url: "https://usewitly.com",
    },

    {
        id: "7",
        headline:
            "High-converting marketing website for a modern B2B SaaS platform.",
        title: "Comarketing Landing Page",
        category: "Marketing Website",
        description:
            "Built and maintained the public-facing website for Comarketing, including responsive landing pages, pricing sections, lead generation forms, SEO optimization, case studies, and interactive components. Focused on performance, accessibility, and conversion optimization to maximize customer acquisition.",
        media: [],
        thumbnail: "/images/Thumbnail7.png",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
        ],
        url: "https://comarketing.com",
    },

    {
        id: "8",
        headline:
            "Online learning platform with enrollment and secure payment processing.",
        title: "Training & Course Enrollment Platform",
        category: "Education",
        description:
            "Developed a course enrollment platform for the Cámara de Comercio de Barranquilla. Built the frontend with React and developed REST APIs using NestJS, enabling users to browse training programs, enroll in courses, complete secure online payments through PayU, and manage their learning experience.",
        media: [],
        thumbnail: "/images/Thumbnail8.png",
        technologies: [
            "React",
            "NestJS",
            "TypeScript",
            "PayU",
            "REST API",
            "PostgreSQL",
        ],
        url: "https://www.camarabaq.org.co/portafolio-camarabaq",
    },
];