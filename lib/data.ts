import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'abdullah.saber.mustafa@gmail.com',
    phone1: '+20 1126054336',
    phone2: '+20 1159779981',
    address: 'Nasr City, Cairo, Egypt',
    portfolio: 'https://portfolio-f69ae.web.app/',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Abdullah, I am reaching out to you because...',

    upworkProfile: 'https://www.upwork.com/freelancers/~01de0d9b9f85c2a8a3',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/EngAbdullahSaber' },
    { name: 'linkedin', url: 'https://linkedin.com/in/abdallahsaber/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Vue.js',
            icon: '/logo/vue.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Pinia',
            icon: '/logo/pinia.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Material-UI',
            icon: '/logo/material-ui.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'jQuery',
            icon: '/logo/jquery.png',
        },
    ],
    backend: [
        {
            name: 'NestJS',
            icon: '/logo/nestjs.png',
        },
    ],

    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.png',
        },
        {
            name: 'Adobe XD',
            icon: '/logo/adobe-xd.png',
        },
        {
            name: 'Photoshop',
            icon: '/logo/photoshop.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Alaalami Website & CMS Platform',
        slug: 'alaalami-website',
        year: 2025,
        techStack: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'Node.js',
            'Headless CMS',
            'MongoDB',
        ],
        thumbnail: '/projects/thumbnail/alaalami.png',
        longThumbnail: '/projects/long/alaalami-dashboard.png',
        images: [
            '/projects/images/al aalmia.png',
            '/projects/images/al aalmiaDashboard.png',
        ],
        description: `
    A professional multi-language corporate website with a complete admin dashboard for content, users, and SEO management. Built for Alaalami Company to handle all site sections with full bilingual (EN/AR) support.
    <br/><br/>
    <strong>Key Features:</strong>
    <ul>
      <li>🌐 Multi-language Support (English & Arabic)</li>
      <li>🧩 Admin Dashboard for full content & user control</li>
      <li>📱 Responsive design for all screen sizes</li>
      <li>⚙️ Dynamic content management for pages & blogs</li>
      <li>📈 Integrated SEO & analytics settings</li>
    </ul><br/>

    <strong>Dashboard Modules:</strong>
    <ul>
      <li>✅ Content Management: Pages, Blogs, Media, Menus</li>
      <li>✅ User & Role Management: Admins, Permissions</li>
      <li>✅ System Settings: Localization, SEO, Analytics, Forms</li>
    </ul>
    `,
        role: `
    Frontend Developer<br/>
    <ul>
      <li>🚀 Developed bilingual frontend using Next.js and Tailwind CSS</li>
      <li>🎨 Built dynamic admin dashboard components</li>
      <li>🔐 Integrated role-based access & authentication</li>
      <li>🧠 Implemented content editing and localization system</li>
      <li>📊 Connected frontend to headless CMS API</li>
    </ul>
    `,
    },
    {
        title: 'Soomha - Saudi Digital Platform',
        slug: 'soomha-digital-platform',
        year: 2025,
        techStack: [
            'React.js',
            'Next.js',
            'Tailwind CSS',
            'REST API',
            'Node.js / Laravel',
            'Animation',
        ],
        thumbnail: '/projects/thumbnail/soomha-platform.jpg',
        longThumbnail: '/projects/long/soomha-dashboard.jpg',
        images: ['/projects/images/soomha.png'],
        description: `
    🚀 <strong>Soomha - Saudi Digital Platform with Admin Dashboard</strong><br/><br/>
    A Saudi-based bilingual (English/Arabic) platform offering a modern, fully localized experience for businesses and users. Built with a focus on flexibility, scalability, and Saudi-market compliance.
    <br/><br/>
    <strong>Key Features:</strong>
    <ul>
      <li>🌐 Bilingual Interface (English/Arabic toggle)</li>
      <li>🔑 Role-Based Dashboard (Admin, Vendors, Clients)</li>
      <li>📱 Responsive Design for all devices</li>
      <li>💳 Integrated Saudi payment gateways (Mada, STC Pay)</li>
      <li>📊 Analytics & Reporting for platform insights</li>
      <li>🗂️ Localized content and compliance (Hijri calendar, VAT, National Address)</li>
    </ul><br/>

    <strong>Dashboard Control System:</strong><br/>
    <ul>
      <li>✅ <b>User Management:</b> Approve vendors, manage clients, assign roles</li>
      <li>✅ <b>Content Control:</b> Manage listings, categories, and moderate posts</li>
      <li>✅ <b>Analytics:</b> Track user engagement, traffic, and conversions</li>
      <li>✅ <b>Payment Gateway:</b> Configure commissions and vendor payouts</li>
      <li>✅ <b>Localization:</b> Edit bilingual content (EN/AR)</li>
    </ul>
    `,
        role: `
    <strong>Frontend Developer</strong><br/>
    <ul>
      <li>🚀 Developed responsive, bilingual UI using Next.js and Tailwind CSS</li>
      <li>🎨 Implemented Saudi-localized design and animations</li>
      <li>🔧 Integrated REST APIs for dynamic content and data management</li>
      <li>💳 Connected frontend with Saudi payment gateways</li>
      <li>📊 Built reusable dashboard components for Admin, Vendor, and Client roles</li>
      <li>🌍 Ensured performance and accessibility across all devices</li>
    </ul>
    `,
    },
    {
        title: 'Venuat - Multi-Vendor Venue Booking Platform',
        slug: 'venuat-booking-platform',
        year: 2025,
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'MongoDB',
            'REST API',
            'Animation',
        ],
        thumbnail: '/projects/thumbnail/venuat-platform.jpg',
        longThumbnail: '/projects/long/venuat-platform.jpg',
        images: [
            '/projects/images/venuat.png',
            '/projects/images/venuatDashboard.png',
        ],
        description: `
    🚀 <strong>Venuat - Multi-Vendor Venue Booking Platform</strong><br/><br/>
    A complete venue management system that connects venue owners and customers through an interactive platform. The system supports multi-language (EN/AR), role-based dashboards, and real-time booking capabilities.
    <br/><br/>
    <strong>Key Features:</strong>
    <ul>
      <li>🌐 Multi-language Support (English & Arabic)</li>
      <li>🏢 Admin Dashboard for managing users, venues, and bookings</li>
      <li>💼 Vendor Dashboard for venue owners to manage listings, bookings & payouts</li>
      <li>📅 Real-time Booking System with payment gateway integration</li>
      <li>📰 Blog & Content Management for SEO and marketing</li>
      <li>📊 Reports & Analytics for performance insights</li>
      <li>📱 Responsive design optimized for desktop and mobile</li>
    </ul><br/>

    <strong>Dashboard Structure:</strong><br/>
    <b>1. Admin Dashboard</b>
    <ul>
      <li>✅ User Management – Add/edit users, assign roles</li>
      <li>✅ Venue Management – Approve/reject listings, edit venue data</li>
      <li>✅ Booking Management – Track, cancel, or modify bookings</li>
      <li>✅ Reports & Analytics – Monitor revenue and activity logs</li>
      <li>✅ System Settings – Configure payments, commission, and localization</li>
    </ul>

    <b>2. Vendor Dashboard</b>
    <ul>
      <li>✅ Venue Listings – Add/edit venues, upload media, manage availability</li>
      <li>✅ Booking Management – Accept/reject bookings, sync calendar</li>
      <li>✅ Earnings & Payouts – Track income and withdrawals</li>
      <li>✅ Reviews & Ratings – Manage feedback and performance</li>
      <li>✅ Blog Access – Share venue-related articles (optional)</li>
    </ul><br/>

    <strong>Visit:</strong> <a href="https://venuat-frontend.vercel.app/en/sign-in" target="_blank">venuat-frontend.vercel.app</a>
    `,
        role: `
    <strong>Frontend Developer</strong><br/>
    <ul>
      <li>🚀 Developed the full frontend architecture using Next.js and TypeScript</li>
      <li>🎨 Implemented responsive and bilingual (EN/AR) design using Tailwind CSS</li>
      <li>⚙️ Integrated REST APIs for booking, user, and venue management</li>
      <li>💳 Connected payment gateways for booking transactions</li>
      <li>📈 Created reusable dashboard components for Admin and Vendor roles</li>
      <li>🌍 Ensured high performance, accessibility, and SEO optimization</li>
    </ul>
    `,
    },
    {
        title: 'Joe13th - Modern Portfolio & CMS Platform',
        slug: 'joe13th-portfolio-cms',
        year: 2025,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'REST API',
            'GSAP',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/joe13th-portfolio.jpg',
        longThumbnail: '/projects/long/joe13th-dashboard.jpg',
        images: [
            '/projects/images/joe13.png',
            '/projects/images/joe13Dashboard.png',
        ],
        description: `
    🚀 <strong>Joe13th - Modern Portfolio & CMS Platform</strong><br/><br/>
    A sleek, multilingual (English/Japanese) portfolio website built for creatives to showcase their work and manage content effortlessly. It includes a full-featured CMS dashboard for managing pages, case studies, and blog posts, all built with performance and elegance in mind.
    <br/><br/>
    <strong>Key Features:</strong>
    <ul>
      <li>🌐 Multilingual Support (English/Japanese with localized URLs)</li>
      <li>🧩 Admin Dashboard – Manage blogs, pages, and portfolio case studies</li>
      <li>⚙️ Dynamic CMS – Add content dynamically via REST APIs</li>
      <li>🎞️ Smooth Animations with GSAP & Framer Motion</li>
      <li>📱 Responsive minimalist design with bold typography</li>
      <li>⚡ Optimized SEO via Next.js SSR</li>
    </ul><br/>

    <strong>Dashboard Control System:</strong><br/>
    <ul>
      <li>✅ <b>Pages Editor:</b> Manage homepage, service, and about sections with meta tags</li>
      <li>✅ <b>Portfolio Manager:</b> Add projects, upload media, and handle case studies</li>
      <li>✅ <b>Blog Engine:</b> Draft, schedule, and publish posts with tags & categories</li>
    </ul><br/>

    <strong>Visit:</strong> <a href="https://www.joe13th.com/en" target="_blank">joe13th.com</a>
    `,
        role: `
    <strong>Frontend Developer</strong><br/>
    <ul>
      <li>🚀 Developed multilingual frontend using Next.js and TypeScript</li>
      <li>🎨 Built CMS dashboard with dynamic content modules</li>
      <li>⚙️ Integrated REST APIs for blog, page, and portfolio data management</li>
      <li>🌀 Implemented GSAP & Framer Motion animations for smooth transitions</li>
      <li>📱 Ensured responsive and SEO-optimized performance</li>
      <li>💡 Deployed and optimized on Vercel for global delivery</li>
    </ul>
    `,
    },
    {
        title: 'Advanced Legal Practice Management System',
        slug: 'legal-practice-management',
        year: 2025,
        techStack: [
            'React',
            'Next.js',
            'Tailwind CSS',
            'PHP',
            'MySQL',
            'REST API',
        ],
        thumbnail: '/projects/thumbnail/legal-platform.jpg',
        longThumbnail: '/projects/long/legal-dashboard.jpg',
        images: ['/projects/images/lawyer.png'],
        description: `
🚀 <strong>Advanced Legal Practice Management System</strong><br/><br/>
A secure, bilingual (Arabic/English) legal platform built for law firms to manage clients, cases, and documents efficiently. Includes robust access control, court deadline tracking, and Sharia-compliance tools tailored for Saudi legal practice.<br/><br/>

<strong>Key Features:</strong>
<ul>
  <li>⚖️ Multi-role Access Control (Super Admin, Lawyers, Clients + dynamic roles)</li>
  <li>🌐 Full Bilingual Interface with RTL Arabic support</li>
  <li>📂 Case Management System – Document drafting, court tracking, and deadlines</li>
  <li>🔒 Enterprise Security – 2FA, watermarking, session controls</li>
  <li>🕌 Sharia-Compliance Tools & Saudi Court Integrations</li>
  <li>💼 Dynamic Role Permissions – Create and customize internal roles (e.g. Paralegal, Junior Associate)</li>
</ul><br/>

<strong>Core User Roles:</strong><br/>
<b>1. Static Roles</b>
<ul>
  <li><b>Super Admin:</b> Full system control, user creation, billing, audit logs</li>
  <li><b>Lawyer:</b> Manage assigned cases, documents, and client communications</li>
  <li><b>Client:</b> View case status, upload documents, and pay invoices</li>
</ul>

<b>2. Dynamic Roles</b>
<ul>
  <li>Senior Partner – Approve case budgets</li>
  <li>Junior Associate – Read-only case access</li>
  <li>Paralegal – Document management only</li>
</ul><br/>

<strong>Technical Architecture:</strong>
<ul>
  <li>🧠 Frontend: React + Next.js (bilingual UI, RTL Arabic path /ar/)</li>
  <li>⚙️ Backend: PHP (preferred for enterprise law apps)</li>
  <li>🗄️ Database: MySQL</li>
  <li>🔐 Security: 2FA, document watermarking, session timeouts</li>
</ul><br/>

<strong>Unique Differentiators:</strong>
<ul>
  <li>📘 Arabic/English Legal Terminology</li>
  <li>🏛️ Saudi Court Integration for automatic filing deadlines</li>
  <li>🕌 Sharia-Compliance Templates and automation tools</li>
</ul>
    `,
        role: `
<strong>Frontend Developer</strong><br/>
<ul>
  <li>🚀 Developed bilingual and RTL-friendly UI using React, Next.js, and Tailwind CSS</li>
  <li>🔧 Integrated dynamic role-based access and permissions in the frontend</li>
  <li>⚙️ Built reusable dashboard components for lawyers, clients, and admins</li>
  <li>🔐 Implemented 2FA and session management UI flows</li>
  <li>📁 Connected REST APIs for case, user, and document management</li>
  <li>🎨 Delivered high-performance, enterprise-grade responsive design</li>
</ul>
    `,
    },
    {
        title: 'Logistics & Supply Chain Management Platform',
        slug: 'logistics-supply-chain-platform',
        year: 2024,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'REST API',
            'Framer Motion',
            'Multi-language Support',
        ],
        thumbnail: '/projects/thumbnail/logistics-platform.jpg',
        longThumbnail: '/projects/long/logistics-dashboard.jpg',
        images: [
            '/projects/images/logistics-home.png',
            '/projects/images/logistics-services.png',
        ],
        description: `
🚀 <strong>Logistics & Supply Chain Management Platform</strong><br/><br/>
A modern, multilingual logistics website designed to showcase comprehensive supply chain solutions and services. Built with a focus on performance and user experience, it effectively communicates complex logistics services through an intuitive interface.
<br/><br/>
<strong>Key Features:</strong>
<ul>
  <li>🌐 Multi-language Support with seamless language switching</li>
  <li>🚚 Comprehensive Service Showcase - Air, Sea, Land freight solutions</li>
  <li>📊 Service Process Visualization - Clear workflow demonstrations</li>
  <li>🎞️ Smooth Animations with Framer Motion for enhanced engagement</li>
  <li>📱 Fully Responsive Design optimized for all devices</li>
  <li>⚡ High Performance with Next.js SSR and optimized loading</li>
  <li>🎯 Clear Call-to-Actions for lead generation and inquiries</li>
</ul><br/>

<strong>Service Coverage:</strong><br/>
<ul>
  <li>✅ <b>Air Freight:</b> Global air cargo solutions with real-time tracking</li>
  <li>✅ <b>Sea Freight:</b> Container shipping and maritime logistics</li>
  <li>✅ <b>Land Transport:</b> Trucking and rail freight services</li>
  <li>✅ <b>Warehousing:</b> Storage and inventory management solutions</li>
  <li>✅ <b>Supply Chain:</b> End-to-end logistics management</li>
</ul><br/>

<strong>Visit:</strong> <a href="https://logistics-website-woad.vercel.app/en/home" target="_blank">Logistics Platform</a>
`,
        role: `
<strong>Frontend Developer</strong><br/>
<ul>
  <li>🚀 Developed multi-language frontend using Next.js and TypeScript</li>
  <li>🎨 Implemented modern UI with Tailwind CSS for consistent styling</li>
  <li>🌐 Built internationalization system with localized routing</li>
  <li>🌀 Integrated smooth animations using Framer Motion</li>
  <li>📱 Created fully responsive layouts for all device types</li>
  <li>⚡ Optimized performance and SEO with Next.js best practices</li>
  <li>🔧 Deployed and maintained on Vercel platform</li>
</ul>
`,
    },
    {
        title: 'School Bus Tracking & Safety Management System',
        slug: 'school-bus-tracking-system',
        year: 2024,
        techStack: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
            'REST API',
            'Real-time Tracking',
        ],
        thumbnail: '/projects/thumbnail/bus-tracking-system.jpg',
        longThumbnail: '/projects/long/bus-tracking-dashboard.jpg',
        images: [
            '/projects/images/bus-tracking-login.png',
            '/projects/images/bus-tracking-dashboard.png',
        ],
        description: `
🚀 <strong>School Bus Tracking & Safety Management System</strong><br/><br/>
A comprehensive child transportation safety platform that enables real-time bus tracking, parent notifications, and school administration management. The system ensures secure student transportation from home to school with full visibility for parents and administrators.
<br/><br/>
<strong>Key Features:</strong>
<ul>
  <li>🚌 Real-time Bus Location Tracking with live GPS updates</li>
  <li>👨‍👩‍👧‍👦 Parent Portal - Track child's bus location and arrival times</li>
  <li>🏫 School Admin Dashboard - Manage buses, routes, and students</li>
  <li>📱 Mobile-Friendly Interface for parents on the go</li>
  <li>🔔 Automated Notifications for bus arrivals and departures</li>
  <li>👥 Multi-role Access System (Admin, Driver, Parent)</li>
  <li>📊 Attendance Tracking & Reporting</li>
</ul><br/>

<strong>User Roles & Capabilities:</strong><br/>
<b>1. School Administrator</b>
<ul>
  <li>✅ Manage bus fleet and driver assignments</li>
  <li>✅ Create and optimize bus routes</li>
  <li>✅ Monitor real-time bus locations</li>
  <li>✅ Generate attendance and safety reports</li>
  <li>✅ Handle parent communications</li>
</ul>

<b>2. Bus Driver</b>
<ul>
  <li>✅ Check-in/check-out students</li>
  <li>✅ Update route status in real-time</li>
  <li>✅ Report incidents or delays</li>
  <li>✅ View assigned student roster</li>
</ul>

<b>3. Parent/Guardian</b>
<ul>
  <li>✅ Track child's bus in real-time</li>
  <li>✅ Receive arrival/departure notifications</li>
  <li>✅ View bus schedule and route information</li>
  <li>✅ Report absences or changes</li>
</ul><br/>

<strong>Safety Features:</strong>
<ul>
  <li>🔐 Secure authentication and role-based access</li>
  <li>📍 Geofencing for bus stop notifications</li>
  <li>⏰ Automated delay alerts</li>
  <li>📝 Digital attendance records</li>
  <li>🚨 Emergency incident reporting</li>
</ul><br/>

<strong>Visit:</strong> <a href="https://admin-panal-mahfouz.vercel.app/login" target="_blank">Bus Tracking Admin Panel</a>
`,
        role: `
<strong>Frontend Developer</strong><br/>
<ul>
  <li>🚀 Developed complete frontend architecture using Next.js and TypeScript</li>
  <li>🎨 Built responsive admin dashboard and parent portal with Tailwind CSS</li>
  <li>📍 Integrated real-time GPS tracking and map visualization</li>
  <li>🔐 Implemented secure authentication and multi-role access system</li>
  <li>📱 Created mobile-optimized interfaces for all user types</li>
  <li>🔔 Developed notification system for bus status updates</li>
  <li>⚡ Connected REST APIs for bus, student, and route management</li>
  <li>📊 Built reporting and analytics components for attendance tracking</li>
</ul>
`,
    },
    {
        title: 'Telecom Sales Management & Control System',
        slug: 'telecom-sales-management',
        year: 2024,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
            'REST API',
            'Chart.js',
        ],
        thumbnail: '/projects/thumbnail/telecom-sales.jpg',
        longThumbnail: '/projects/long/telecom-dashboard.jpg',
        images: [
            '/projects/images/telecom-home.png',
            '/projects/images/telecom-dashboard.png',
        ],
        description: `
🚀 <strong>Telecom Sales Management & Control System</strong><br/><br/>
A comprehensive sales control platform designed for telecom companies to manage sales operations, track performance metrics, and optimize team productivity. The system provides real-time insights into sales activities, commission tracking, and team management.
<br/><br/>
<strong>Key Features:</strong>
<ul>
  <li>📊 Real-time Sales Dashboard with performance analytics</li>
  <li>👥 Team Management & Sales Representative tracking</li>
  <li>💰 Commission & Incentive Calculation System</li>
  <li>📈 Performance Metrics & KPI Monitoring</li>
  <li>📱 Responsive Design for field sales teams</li>
  <li>🔔 Automated Notifications for targets & achievements</li>
  <li>🌐 Multi-language Support for international teams</li>
</ul><br/>

<strong>Sales Control Modules:</strong><br/>
<b>1. Sales Performance Tracking</b>
<ul>
  <li>✅ Real-time sales metrics and conversion rates</li>
  <li>✅ Individual and team performance dashboards</li>
  <li>✅ Target vs Achievement analysis</li>
  <li>✅ Commission calculations and payout tracking</li>
</ul>

<b>2. Team Management</b>
<ul>
  <li>✅ Sales representative performance monitoring</li>
  <li>✅ Territory and region assignment</li>
  <li>✅ Lead distribution and management</li>
  <li>✅ Training and certification tracking</li>
</ul>

<b>3. Analytics & Reporting</b>
<ul>
  <li>✅ Customizable sales reports</li>
  <li>✅ Trend analysis and forecasting</li>
  <li>✅ Commission statements and payout reports</li>
  <li>✅ Performance benchmarking</li>
</ul><br/>

<strong>Business Benefits:</strong>
<ul>
  <li>📈 Increased sales visibility and accountability</li>
  <li>💸 Optimized commission structures and payouts</li>
  <li>👨‍💼 Enhanced team performance monitoring</li>
  <li>🎯 Data-driven decision making</li>
  <li>⚡ Reduced administrative overhead</li>
</ul><br/>

<strong>Visit:</strong> <a href="https://telecom.joe-mi.com/en" target="_blank">Telecom Sales Management System</a>
`,
        role: `
<strong>Frontend Developer</strong><br/>
<ul>
  <li>🚀 Developed complete sales dashboard using Next.js and TypeScript</li>
  <li>📊 Implemented data visualization with Chart.js for sales metrics</li>
  <li>🎨 Built responsive UI components with Tailwind CSS</li>
  <li>👥 Created team management and performance tracking interfaces</li>
  <li>💰 Developed commission calculation and reporting modules</li>
  <li>📱 Designed mobile-friendly layouts for field sales teams</li>
  <li>⚡ Integrated REST APIs for real-time data synchronization</li>
  <li>🌐 Implemented multi-language support for global teams</li>
</ul>
`,
    },
    {
        title: 'Elite Gate - Real Estate Marketplace Platform',
        slug: 'elite-gate-real-estate',
        year: 2024,
        techStack: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
            'REST API',
            'Map Integration',
        ],
        thumbnail: '/projects/thumbnail/elite-gate.jpg',
        longThumbnail: '/projects/long/elite-gate-dashboard.jpg',
        images: [
            '/projects/images/elite-gate-home.png',
            '/projects/images/elite-gate-properties.png',
        ],
        description: `
🚀 <strong>Elite Gate - Real Estate Marketplace Platform</strong><br/><br/>
A comprehensive real estate marketplace that connects property buyers with sellers through a transparent and user-friendly platform. Elite Gate offers diverse property listings while providing property owners with smart management tools to effectively showcase and sell their units, supported by a dedicated team ensuring quality experiences for both parties.
<br/><br/>
<strong>Key Features:</strong>
<ul>
  <li>🏠 Property Discovery - Browse diverse real estate units with advanced filtering</li>
  <li>🤝 Dual Platform - For both property seekers and owners</li>
  <li>📱 Responsive Design - Optimized for all devices</li>
  <li>🔍 Smart Search - Location-based property discovery</li>
  <li>💼 Property Management - Owners can list and manage their units</li>
  <li>👥 Dedicated Support - Professional team for buyer-seller assistance</li>
  <li>🌐 Multi-language Support - Arabic and English interface</li>
</ul><br/>

<strong>For Property Buyers:</strong><br/>
<ul>
  <li>✅ Explore diverse property listings with transparent information</li>
  <li>✅ Advanced search and filtering by location, price, and features</li>
  <li>✅ Save favorite properties and compare options</li>
  <li>✅ Direct communication with property owners</li>
  <li>✅ Professional guidance throughout the purchase process</li>
</ul>

<strong>For Property Owners:</strong><br/>
<ul>
  <li>✅ List properties with detailed descriptions and high-quality media</li>
  <li>✅ Smart management system for property listings</li>
  <li>✅ Reach interested buyers through targeted exposure</li>
  <li>✅ Track listing performance and buyer inquiries</li>
  <li>✅ Dedicated support for optimal selling experience</li>
</ul><br/>

<strong>Platform Benefits:</strong>
<ul>
  <li>🔒 Transparent and secure property transactions</li>
  <li>📈 Wide variety of property options to suit different needs</li>
  <li>⚡ Streamlined buying and selling process</li>
  <li>🎯 Targeted property matching based on preferences</li>
  <li>💼 Professional support ensuring quality experiences</li>
</ul><br/>

<strong>Visit:</strong> <a href="https://elite-gate.vercel.app/" target="_blank">Elite Gate Real Estate Platform</a>
`,
        role: `
<strong>Frontend Developer</strong><br/>
<ul>
  <li>🚀 Developed complete real estate marketplace using Next.js and TypeScript</li>
  <li>🎨 Built responsive property listing and detail pages with Tailwind CSS</li>
  <li>🏠 Implemented property search and filtering functionality</li>
  <li>📱 Created user-friendly interfaces for both buyers and property owners</li>
  <li>🔍 Integrated map services for location-based property discovery</li>
  <li>👥 Developed user dashboard for property management</li>
  <li>🌐 Implemented bilingual support (Arabic/English) with RTL layout</li>
  <li>⚡ Connected REST APIs for property data and user management</li>
</ul>
`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer',
        company: 'JOE13 Company',
        duration: 'July 2024 – Present',
        description:
            'Developing React/Vue applications with optimized data flow architecture. Reduced API response times by 50% through Redux middleware optimization. Implemented lazy loading, reducing initial load time by 35%.',
    },
    {
        title: 'Frontend Engineer (Part-Time)',
        company: 'AMC Company',
        duration: 'Jan 2025 – Present',
        description:
            'Building an interactive dashboard UI using React and Material-UI with real-time data visualization and analytics features.',
    },
    {
        title: 'Frontend Developer (Part-Time)',
        company: 'Custex Company',
        duration: 'May 2024 – Jan 2025',
        description:
            'Developed a TikTok-like video platform with infinite scrolling, gesture controls, and real-time engagement features.',
    },
    {
        title: 'Frontend Software Engineer',
        company: 'UTD Company',
        duration: 'May 2024 – July 2024',
        description:
            'Developed React application with scalable Redux architecture. Improved app responsiveness and reduced API response times by 50%, enhancing user experience.',
    },
    {
        title: 'Frontend Developer',
        company: 'ADFAZ',
        duration: 'Jan 2024 – Apr 2024',
        description:
            'Customized themes and integrated features on the Salla e-commerce platform, enhancing user experience and platform functionality.',
    },
    {
        title: 'Frontend Engineer (Part-Time)',
        company: 'Freelancer',
        duration: 'Oct 2021 – Nov 2022',
        description:
            'Built and maintained React applications. Implemented scalable Redux architectures to improve performance and data flow for various clients.',
    },
    {
        title: 'Frontend Engineer (Part-Time)',
        company: 'Soft Challengers',
        duration: 'Oct 2021 – Nov 2022',
        description:
            'Developed and optimized React applications. Streamlined data flow with Redux, improving app performance and scalability.',
    },
];

export const EDUCATION = [
    {
        degree: 'Self-Learning & Professional Courses',
        institution: 'Various Platforms',
        duration: '2019 - 2023',
        details: [
            'Front End Developer - Mag Camp',
            'Route - Udacity',
            'Mahara Tech - Front end Track',
            'One Million Arab Coders | Front end Track',
            'Web Development Challenger Track',
        ],
    },
    {
        degree: "Bachelor's Degree in Computer Science",
        institution: 'Faculty of Computers and Information, Luxor University',
        duration: '2016 - 2020',
        details: [
            'Graduation Project: HealthCare System (Grade: Very Good)',
            'Android App receives vital data from Arduino connected with sensors',
        ],
    },
];

export const SKILLS = {
    technical: [
        'React & Vue.js Development',
        'Redux & State Management',
        'Performance Optimization',
        'Responsive Web Design',
        'REST API Integration',
        'Cross-browser Compatibility',
        'Version Control (Git)',
    ],
    soft: [
        'Problem Solving',
        'Team Collaboration',
        'Time Management',
        'Attention to Detail',
        'Effective Communication',
        'Adaptability',
    ],
    languages: ['Arabic (Native)', 'English (Good)'],
};

export const PERSONAL_INFO = {
    militaryStatus: 'Completed',
    dateOfBirth: '3/11/1998',
    nationality: 'Egyptian',
};
