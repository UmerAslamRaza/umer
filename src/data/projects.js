import projectGalleries from "@/data/projectGalleries";

/*
 * Project fields of note:
 *   id            -> page URL /portfolio/<id>/
 *   thumbnail     -> card image; shown filling the card, anchored to the top
 *   thumbnailFit  -> "contain" to show the whole image instead (use for phone-app screenshots)
 *   featured      -> true to show the project on the home page
 */

const projects = [{
    id: "1",
    slug: "Chillup-KidConnect-Admin-Dashboard",
    title: "Chillup KidConnect Admin Dashboard",
    sections: [
        {
            heading: "Overview",
            description: `
The **KidConnect Admin Dashboard** is a robust backend platform built with **Laravel** and **FilamentPHP**, designed to empower administrators with full control over:

- Users  
- Vendors  
- Schools  
- Dynamic content  

This dashboard plays a pivotal role in maintaining **data integrity**, managing **user access levels**, and enabling seamless system operations for a **multi-user ecosystem** involving parents, vendors, and school administrators.
            `.trim(),
            images: [
                "/images/chilllupbackend/vendors-3.png",
                "/images/chilllupbackend/vendors-4.png"
            ]
        },
        {
            heading: "My Role & Contributions",
            description: `
I was solely responsible for developing the entire admin panel, including:

- **Database schema design**  
- **API development**  
- **UI/UX implementation** using FilamentPHP  

I built a scalable architecture to handle large datasets such as:

- School events  
- Vendor packages  
- Email campaigns  
- Dynamic content modules  

Additionally, I implemented **JWT-based authentication**, secure login workflows, and **user permission logic** for super admins vs content moderators.
            `.trim(),
            images: [
                "/images/chilllupbackend/vendor-ads-2.png",
                "/images/chilllupbackend/vendor-ads-1.png",
            ]
        },
        {
            heading: "Features Developed",
            description: `
- **Vendor Management**: Approve vendors, auto-send emails, manage trials and paid plans.  
- **School Management**: Add/edit schools, upload logos, and integrate Google Calendar feeds.  
- **User Management**: Full CRUD on parents and children with role-based permissions.  
- **Email Marketing Engine**: Send targeted newsletters by user type, vendor tier, and engagement.  
- **Analytics Dashboard**: Auto-generated reports showing bookings, activity trends, and location-based stats.  
- **Vendor Packages**: Assign tiered benefits like *Top Search Listing*, *Email Promotion*, and *Push Notifications*.  
- **Smart Calendar Sync**: Map Google Calendar templates to school and vendor events.  
- **Security & Auth**: Secure login using JWT, access control, and form validation.  
- **Activity Templates**: Let vendors reuse events with default fields to save setup time.
            `.trim(),
            images: [
                "/images/chilllupbackend/trends-2.png",
                "/images/chilllupbackend/trends-3.png"
            ]
        }
    ],
    techStack: ["Laravel", "MySQL", "FilamentPHP", "JWT Authentication"],
    thumbnail: "/images/chilllupbackend/notifications-1.png",
    galleryImages: projectGalleries.ChillupBackend,
    type: "web",
    domain: "Backend",
    featured: true,
    projectSummary: "I developed a powerful admin dashboard using Laravel and FilamentPHP for managing the entire KidConnect ecosystem, which spans across vendors, parents, and schools. This platform provides full CRUD capabilities, advanced user roles, event and content management, and a built-in email marketing engine. I also implemented secure JWT authentication, dynamic analytics dashboards, and seamless integration with Google Calendar to automate scheduling and improve admin efficiency. The system offers granular permission levels and serves as the central hub for managing Chillup’s operational and engagement flows.",
    role: "Full Stack Developer"
}
    ,

    {
        id: "2",
        slug: "Chillup-Web-dashboard-for-parents",
        title: "Chillup Web Dashboard For Parents",
        sections: [
            {
                heading: "Overview",
                description: `
The **Vendor Dashboard** is a web-based platform where activity providers (vendors) manage their business operations. I developed the frontend using **Vue 3 with TypeScript** and integrated it with **Laravel-based REST APIs**.

The dashboard allows vendors to:

- Register and verify their profiles  
- Create and manage events  
- Handle bookings and availability  
- Target audience segments  
- Monitor performance through analytics
      `.trim(),
                images: [
                    "/images/chillupwebdashboard/products-1.png",
                    "/images/Chillupwebdashboard/Transactions.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Profile Management**: Registration, verification, and updates  
- **Event Creation**: Add activities with fields like date, time, location, age group, and more  
- **Availability Management**: Define time slots, session durations, and cut-off deadlines  
- **Smart Tagging**: Add custom tags/keywords to improve discoverability  
- **Performance Analytics**: Track views and bookings for each listing  
- **Vendor Package Integration**: Configure tiered packages (e.g., newsletter placement, highlighted listings)  
- **Real-time Notifications**: Integrated **Firebase** to send instant updates to vendors
      `.trim(),
                images: [
                    "/images/chillupwebdashboard/create_-new-class-7.png",
                    "/images/chillupwebdashboard/dashboard-2.png"
                ]
            }
        ],
        techStack: ["Vue.js", "TypeScript", "REST APIs (Laravel)", "Firebase"],
        thumbnail: "/images/chillupwebdashboard/dashboard-2.png",
        galleryImages: projectGalleries.Chillupwebdashboard,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "I developed a comprehensive vendor dashboard using Vue 3 and TypeScript, integrated with Laravel REST APIs, to help activity providers manage their offerings on the Chillup platform. Vendors can create and publish events, manage availability, set filters such as age or interest, and monitor bookings with real-time performance analytics. The system supports tiered vendor packages for enhanced visibility, such as newsletter placement and featured listings. I also implemented Firebase notifications to deliver instant updates and ensure seamless user communication. This dashboard provides a powerful and intuitive interface for vendors to run their operations efficiently and grow user engagement.",
        role: "Full Stack Developer"
    }
    ,

    {
        id: "3",
        slug: "KidConnect-Vendor-Dashboard", // consider renaming to "kidconnect-public-website" if this is the public-facing site
        title: "KidConnect Public Website",
        sections: [
            {
                heading: "Overview",
                description: `
The public-facing website for **KidConnect** serves as the primary **marketing channel** and **information portal**. I built it using **React.js** with a strong emphasis on:

- **Performance**
- **SEO**
- **Mobile responsiveness**
            `.trim(),
                images: [
                    "/images/chilluppublicwebsiteProject/vendor.png",
                    "/images/chilluppublicwebsiteProject/parent.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Marketing homepage** with dynamic banners  
- **Informational pages** tailored for parents and vendors  
- **Contact form** with validation and backend integration  
- **Login redirects** for vendors and admin roles  
- Fully **responsive layout** for desktop and mobile  
- **SEO-optimized** structure and fast page loads  
- Integrated **newsletter signup**  
- **Google Analytics** setup for performance tracking
            `.trim(),
                images: [
                    "/images/chilluppublicwebsiteProject/about.png",
                    "/images/chilluppublicwebsiteProject/legal-info.png"
                ]
            }
        ],
        techStack: ["React.js", "React Router", "Redux"],
        thumbnail: "/images/chilluppublicwebsiteProject/vendor.png",
        galleryImages: projectGalleries.chillupPublicWebsite,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary: "I developed a high-performance, SEO-optimized marketing website using React.js to support the KidConnect platform for parents, vendors, and schools. The site includes dynamic banners, vendor CTAs, login routing, and a responsive design for all devices. I integrated contact forms with validation, newsletter signup, and Google Analytics to enhance lead generation and user tracking. The public portal ensures brand presence while streamlining access to the platform for all stakeholders.",
        role: "Full Stack Developer"
    },

    {
        id: "18",
        slug: "St-Chris-Directory",
        title: "St Chris Directory: Comprehensive Contact Management Platform",
        sections: [
            {
                heading: "Overview",
                description: `
The **St Chris Directory** is a comprehensive contact management platform designed to streamline internal communication within the **St Chris educational community**. It is tightly integrated with **Google Contacts** and **iSAMS**, ensuring accurate, real-time synchronization of contact details and staff photographs.
            `.trim(),
                images: [
                    "/images/Directory/Login.png",
                    "/images/directory/groups-details---user-profile.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Three Core Sections**  
Staff: Detailed profiles including Name, Title, School, Site, and Extension  
Groups: Distribution lists with group emails and member details  
Site Contacts: External site-specific contacts for quick reference  

**Powerful Search and Filtering**  
Search by name or filter by School (Infant, Junior, Senior) and Site (Saar, Isa Town) for fast access  

**Detailed Staff Profiles**  
Shows name, photo (from iSAMS), email, site, title, and group memberships. Users can email or manage links  

**Group Management**  
View group names, counts, emails, and full member lists. Email groups or copy multiple addresses  

**Bulk Email Operations**  
Multi-select users or groups, then click “Copy Emails” to compile lists for communication  

**Real-Time Data Sync**  
Syncs with Google Contacts and pulls dynamic photos from iSAMS  

**Security & Admin Updates**  
All contact changes are routed via a support email for controlled updates
`.trim(),
                images: [
                    "/images/directory/groups-details.png",
                    "/images/Directory/Staff.png"
                ]
            }

        ],
        techStack: ["Vue.js", "Vuex", "iSAMS Integration"],
        thumbnail: "/images/directory/groups-details---user-profile.png",
        galleryImages: projectGalleries.Directory,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "I developed the St Chris Directory, a robust contact and staff management platform for the St Chris educational community. Integrated with Google Contacts and iSAMS, it offers advanced search, school/site-based filtering, detailed profiles, email integration, and bulk outreach functionality. Users can manage staff and groups efficiently, with real-time data synchronization ensuring up-to-date information and seamless communication workflows. This tool significantly enhances organizational communication while maintaining professional presentation and accuracy.",
        role: "Full Stack Developer"
    }
    ,

    {
        id: "4",
        slug: "Awal-Private-Terminal-Elite-and-General-Aviation-Services-Platform",
        title: "Awal Private Terminal: Elite and General Aviation Services Platform",
        sections: [
            {
                heading: "Overview",
                description: `
**Awal Private Terminal** is a high-end digital booking platform developed for **Bahrain International Airport's** exclusive terminal. It streamlines both **B2C (Elite Services)** and **B2B (General Aviation)** workflows, while providing a robust **admin dashboard** for operational oversight and content management.
            `.trim(),
                images: [
                    "/images/awalterminal/payment-2@1x.svg",
                    "/images/awalterminal/general-aviation-form_5@1x.svg"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Public Website**  
Custom-built frontend where travelers can request bookings for Elite Lounges or General Aviation services  

**Elite Services Booking (B2C)**  
Includes pricing logic based on number of passengers, service type (Common or Private Lounge), and applies 10% VAT  

**General Aviation Form (B2B)**  
Aimed at aviation operators to request landing/takeoff services, subject to admin approval  

**Contact Form**  
Captures general inquiries for follow-up
`.trim(),
                images: [
                    "/images/awalterminal/general-aviation-form_1@1x.svg",
                    "/images/awalterminal/elite-form_2@1x.svg"
                ]
            },
            {
                heading: "Admin Dashboard",
                description: `
**Admin Dashboard**  
Built for usability, the backend system allows the airport's administrative team to:  
View and manage all form submissions  
Manually create new bookings  
Edit static content of the public website  

**Role-Based Access Control**  
User roles with defined permissions:  
- Hala Admin (Full Access)  
- Elite Services Admin  
- General Aviation Admin  
- Content Moderator  

**Operational Tools**  
Filter and search bookings by status, reservation, or service date  
View passenger and flight details  
Update statuses and track transactions  
Delete or reject B2B requests with reasons
`.trim(),

                images: [
                    "/images/awalterminal/elite-form_5@1x.svg",
                    "/images/awalterminal/elite-form_7@1x.svg"
                ]
            },
            {
                heading: "My Contribution",
                description: `
As the **Full Stack Developer**, I led the design and development of the entire system.

**Frontend**  
Built using **Vue.js**, featuring dynamic forms, responsive design, and real-time validation.

**Backend**  
Developed with **Laravel**, supporting REST APIs for bookings, pricing logic, validation, and status tracking.

**Admin Panel**  
Implemented role-based permission controls, modular content editing, and full booking workflow support.

**Security**  
Integrated robust authentication, secure form handling, and granular access control for different user roles.
`.trim(),

                images: [
                    "/images/awalterminal/general-aviation-form_6@1x.svg",
                    "/images/awalterminal/payment-1@1x.svg"
                ]
            }
        ],
        techStack: ["Laravel", "Vue.js", "REST APIs"],
        thumbnail: "/images/awalterminal/elite-form_1@1x.svg",
        galleryImages: projectGalleries.AwalTerminal,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary: "I developed a digital booking platform for Bahrain International Airport's elite terminal, enabling travelers and aviation operators to request services online through B2C and B2B forms. The platform includes a public-facing site, dynamic pricing, a permission-based admin dashboard, and a content management system. This system significantly reduced manual workflows, improved customer experience, and gave administrators granular control over operations.",
        role: "Full Stack Developer"
    }
    ,

    {
        id: "5",
        slug: "Chillup-KidConnect-React-Native-Mobile-App-for-Parents",
        title: "Chillup KidConnect React Native Mobile App for Parents",
        sections: [
            {
                heading: "Overview",
                description: `
The **KidConnect mobile app** is a cross-platform solution built with **React Native**, designed specifically for parents to discover, organize, and book activities for their children. The app connects to a **Laravel backend** via secure APIs and provides a seamless experience across Android and iOS devices.
            `.trim(),
                images: [
                    "/images/ChillupMobile/Booked.png",
                    "/images/chillupmobile/school-info-1.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Social Login:** Google, Facebook, Instagram, Apple  
- **Personalized Onboarding:** Collects data like child’s age, school, and interests  
- **Vendor Suggestions:** Based on trends, age group, and interest categories  
- **Event Management:** Create, book, and manage child activities and sessions  
- **Calendar Integration:** Full calendar view for scheduled and upcoming activities  
- **School Events:** Syncs with school calendars to list and notify about events  
- **Renewal Reminders:** Alerts parents when packages or subscriptions expire  
- **Spouse Account:** Secondary view-only login for shared access  
- **Push Notifications:** Smart alerts powered by **Firebase**
            `.trim(),
                images: [
                    "/images/chillupmobile/home---settings.png",
                    "/images/chillupmobile/complate-your-profile.png"
                ]
            }
        ],
        techStack: ["React Native", "Redux", "Firebase"],
        thumbnail: "/images/chillupmobile/home---school.png",
        thumbnailFit: "contain",
        galleryImages: projectGalleries.ChillupMobile,
        type: "mobile",
        domain: "frontend",
        featured: false,
        projectSummary: "I developed a cross-platform mobile app for parents using React Native, enabling them to discover, book, and manage child-friendly activities. The app features social login, personalized onboarding, suggested vendors, calendar integration, and reminders for renewals. I integrated school events via Google Calendar and added real-time push notifications using Firebase. The platform also supports view-only spouse accounts to streamline parental coordination.",
        role: "Full Stack Developer"
    }
    ,

    {
        id: "6",
        slug: "cazasouq",
        title: "Cazasouq Designed For Electronic Enthusiasts And Gamers",
        sections: [
            {
                heading: "Overview",
                description: `CazaSouq is a sleek and feature-rich React Native e-commerce mobile application designed for electronic enthusiasts and gamers. Tailored for both Android and iOS, the app provides a seamless shopping experience where users can explore and purchase a wide range of gadgets—from gaming accessories to PlayStations, headphones, computer components, and even ergonomic gaming chairs.`,
                images: [
                    "/images/cazasouq/checkout---finished.png",
                    "/images/cazasouq/onboarding-1.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Product Listings:** Browse and search a wide selection of electronics with high-quality images and categorized filters (e.g., Headphones, PlayStation, PC Accessories, Chairs).

**Product Details:** View descriptions, specs, pricing, and discount availability in a mobile-optimized format.

**Cart & Checkout:** Easily add items to the cart, adjust quantities, and complete purchases through a smooth checkout flow.

**Discount Coupons:** Enter promotional codes to redeem limited-time offers before checkout.

**User Authentication:** Secure login, registration, and profile management.

**Order Tracking:** Review order history, track shipment status, and view estimated delivery times.

**Wishlist:** Save products for future purchases.

**Push Notifications:** Get real-time alerts for sales, restocks, and coupon availability.
    `.trim(),
                images: [
                    "/images/cazasouq/login-or-create-account.png",
                    "/images/cazasouq/checkout---preview.png"
                ]
            },
            {
                heading: "Contribution",
                description: `
As a **React Native Developer**, I led the mobile development and integration:

**Frontend:** Built intuitive UI using React Native with responsive layout and clean design. Implemented screen transitions via React Navigation and managed state with Redux.

**Backend Integration:** Connected secure APIs to handle product listings, user accounts, coupon management, and order processing. Integrated payment solutions (Stripe, PayPal, or custom).

**Testing & Optimization:** Conducted unit and UI testing across Android and iOS devices. Focused on performance optimization for fast load times and smooth interactions.
    `.trim(),
                images: [
                    "/images/Cazasouq/Categories.png",
                    "/images/cazasouq/order-details-4.png"
                ]
            }
        ]
        ,
        techStack: ["React Native", "Redux", "React Navigation"],
        thumbnail: "/images/cazasouq/search-results.png",
        thumbnailFit: "contain",
        galleryImages: projectGalleries.Cazasouq,
        type: "mobile",
        domain: "frontend",
        featured: false,
        projectSummary: "CazaSouq is a React Native mobile e-commerce app offering electronics and gaming\n" + "accessories like headphones, gaming chairs, PlayStations, and computer peripherals. It\n" + "features a smooth UI, secure payments, user accounts, and discount coupons to enhance\n" + "shopping. Designed for both Android and iOS, the app ensures fast performance and\n" + "seamless navigation, delivering a great user experience for tech enthusiasts and gamers.",
        role: "Full Stack Developer"
    },

    {
        id: "7",
        slug: "mystartcloud",
        title: "MyStartCloud: Organize Your Cloud Workspace Efficiently",
        sections: [
            {
                heading: "Overview",
                description: `
In today’s digital landscape, schools and businesses rely on multiple cloud applications, communication platforms, and online tools. Managing these resources separately can lead to scattered data, inefficient workflows, and lost productivity. To solve this challenge, **My Start Cloud** offers an innovative, fully customizable, icon-driven homepage that centralizes all cloud resources in one easy-to-use interface.
    `.trim(),
                images: [
                    "/images/Mystartcloud/Users.png",
                    "/images/mystartcloud/school-settings.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**One Central Workspace:** Access all cloud applications, platforms, and documents from one location—reducing time wasted switching between multiple tabs or apps.

**Single Sign-On (SSO):** Seamlessly log in using a school or business domain account. This enhances security while simplifying the authentication process.

**Custom Bookmarks:** Organize important websites, shared documents, or cloud services into easily accessible bookmarks—improving efficiency and access speed.

**Quick Notes & Notepad:** Built-in notepad allows users to jot down tasks, reminders, or ideas within the workspace, accessible from any device.

**Social Media Integration:** Connect Twitter and Instagram accounts to share announcements and updates. A real-time scrolling banner keeps users informed.

**Personalized Themes:** Customize the user interface with organizational brand colors and themes to promote familiarity and user engagement.

**Customizable Search:** Select a preferred search engine directly from the homepage to streamline search workflows.
    `.trim(),
                images: [
                    "/images/Mystartcloud/Announcement.png",
                    "/images/mystartcloud/new-collection---cloud-apps-2.png"
                ]
            },
            {
                heading: "Use Cases",
                description: `
**For Schools:** Provide students and staff with a centralized portal for accessing educational tools, cloud learning platforms, and communication channels—enhancing collaboration and engagement.

**For Businesses:** Offer employees a unified dashboard to manage internal tools, documents, cloud applications, and company updates—improving productivity and communication.
    `.trim(),
                images: [
                    "/images/Mystartcloud/Billing.png",
                    "/images/mystartcloud/sp---private---login.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Vue.js", "Vuex"],
        thumbnail: "/images/mystartcloud/1440px---home.png",
        galleryImages: projectGalleries.MyStartCloud,
        type: "web",
        domain: "backend",
        featured: true,
        projectSummary: "My Start Cloud is a customizable, icon-driven cloud workspace designed to organize\n" + "multiple cloud apps, platforms, and communication tools in one place. It offers single\n" + "sign-on (SSO), easy bookmarks, quick notes, and social media integration for schools and\n" + "businesses. This innovative solution boosts productivity, streamlines access to\n" + "documents and apps, and improves communication through alerts and personalized\n" + "themes, making cloud management simple and efficient.",
        role: "Full Stack Developer"
    },

    {
        id: "12",
        slug: "Springring-Web-Admin-Dashboard",
        title: "Springring Web Admin Dashboard",
        sections: [
            {
                heading: "Overview",
                description: `
The **Springring Web Admin Dashboard** is a centralized communication management platform designed for school administrators. It enables them to efficiently manage users, content, and settings within their institution. From user permissions and communication boards to events and school-wide configurations, everything is accessible through a single web interface—streamlining operations and improving institutional communication.
    `.trim(),
                images: [
                    "/images/springringadminwebproject/dashboard.jpg",
                    "/images/springringadminwebproject/school-calendar---month.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Dashboard Overview:** Manage account details, users, roles, and perform file imports from a unified control panel.

**School Profile & Settings:** Edit school data such as name, domain, timezone, and size. Admins can enable or disable app access and manage their personal profiles.

**User Management:** Add, update, invite, or remove users across roles (Admins, Teachers, Contributors, Students), and monitor invite statuses such as pending or accepted.

**Group Management:** Organize classrooms, grades, and departments into structured groups used for permission and communication assignments—each with associated staff and students.

**Board Management:** Create and maintain announcement boards for both school-wide and group-specific use, with role-based access such as Editor or Viewer.

**Calendar Integration:** Add events manually or integrate external calendars via URL. Events display contextually to relevant user groups.

**School Contacts:** Include support contacts visible to students and parents for easy access to academic help.

**CSV Import Utility:** Import large batches of users using CSV files, with detailed logs and historical tracking.

**Roll-over Feature:** Archive previous year’s data and prepare for the upcoming academic cycle with simple tools to reset and initialize user and group structures.

This admin-only web tool prioritizes security, clarity, and streamlined communication across the school ecosystem.
    `.trim(),
                images: [
                    "/images/springringadminwebproject/manage-groups.png",
                    "/images/springringadminwebproject/dashboard-2.png"
                ]
            }
        ]
        ,
        techStack: ["React", "Redux"],
        thumbnail: "/images/springringadminwebproject/dashboard.jpg",
        galleryImages: projectGalleries.SpringringAdminWeb,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "The Springring Web Admin Dashboard enables school administrators to manage users,\n" + "groups, boards, and school-wide settings from a centralized platform. Admins can invite\n" + "and manage staff, teachers, students, and set permissions. Features include school\n" + "profile setup, calendar management, CSV import, and school contacts. Admins can also\n" + "archive content annually using the Roll-over tool. The dashboard supports role-based\n" + "access to streamline communication and organization",

        role: "Full Stack Developer"
    },

    {
        id: "8",
        slug: "Bahrain-com-Official-Tourism-Portal-for-the-Kingdom-of-Bahrain",
        title: "Bahrain.com: Official Tourism Portal for the Kingdom of Bahrain",
        sections: [
            {
                heading: "Overview",
                description: `
**Bahrain.com** serves as the official tourism website for the Kingdom of Bahrain, developed under the Bahrain Tourism & Exhibitions Authority (BTEA). The platform highlights Bahrain’s rich cultural heritage, modern attractions, and essential travel information for global tourists. Built using **Laravel** and **Blade templating**, the site delivers a smooth, dynamic, and responsive experience that caters to a diverse, multilingual audience.
    `.trim(),
                images: [
                    "/images/bahrain/desktop-journey-(culture)-1.png",
                    "/images/bahrain/desktop-where-to-stay.png"
                ]
            },
            {
                heading: "Role and Contributions",
                description: `
As the **Lead Laravel Developer**, I was responsible for building the platform from the ground up with a focus on performance, scalability, and content flexibility.

**Backend Development:** Designed and implemented a modular backend architecture using Laravel, ensuring long-term scalability and maintainability.

**Blade Templating:** Used Blade to create dynamic and reusable frontend components, speeding up development and maintaining consistency across pages.

**Multilingual Support:** Integrated full bilingual capabilities to support both English and Arabic audiences seamlessly.

**Custom CMS:** Built a tailored content management system allowing administrators to manage pages, events, and media assets with ease.

**API Integrations:** Integrated third-party APIs to power dynamic features like events, weather updates, and social media feeds.

**Performance Optimization:** Applied caching strategies and optimized database queries to ensure fast load times and a seamless user experience across devices.
    `.trim(),
                images: [
                    "/images/bahrain/desktop-media---press-releases.png",
                    "/images/bahrain/explore-more-article-2.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Dynamic Content Sections:** Areas such as *What’s On*, *Top Attractions*, and *Travel Guide* are dynamically updated through the CMS, enabling real-time content delivery.

**Responsive Design:** The website is fully responsive and optimized for desktops, tablets, and mobile devices to ensure a consistent browsing experience.

**Search Functionality:** A powerful and intuitive search feature helps users quickly find relevant travel information.

**Interactive Maps:** Integrated location-based maps that showcase nearby attractions, accommodations, and cultural landmarks.

**Event Calendar:** A comprehensive calendar system displays upcoming festivals, exhibitions, and other events with filtering options.

**User Engagement Tools:** Features such as newsletter sign-ups and contact forms enhance visitor engagement and feedback collection.
    `.trim(),
                images: [
                    "/images/bahrain/desktop-homepage.png",
                    "/images/bahrain/desktop-my-itinerary.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Blade", "MySQL"],
        thumbnail: "/images/bahrain/desktop-media---images.png",
        galleryImages: projectGalleries.Bahrain,
        type: "web",
        domain: "backend",
        featured: false,
        projectSummary: "I developed Bahrain.com, the official tourism portal of Bahrain, using Laravel and Blade.\n" + "The website showcases attractions, events, and travel guides for global visitors. I built a custom CMS, integrated multilingual support (Arabic & English), and implemented\n" + "dynamic content modules, interactive maps, and responsive layouts. I also optimized\n" + "backend performance and ensured secure, scalable deployment. The site helps promote\n" + "Bahrain as a premier tourist destination with an engaging user experience.",
        role: "Full Stack Developer"
    },

    {
        id: "9",
        slug: "Calender-bh-Bahrain-Tourism-Official-Event-Festival-Listing-Platform",
        title: "Calender.bh: Bahrain Tourism's Official Event & Festival Listing Platform",
        sections: [
            {
                heading: "Overview",
                description: `
**Calender.bh** is a dedicated event-driven platform developed for the Bahrain Tourism Authority as a sister site to **Bahrain.com**. While Bahrain.com acts as a broad cultural and tourism portal, Calender.bh focuses specifically on highlighting upcoming events, national festivals, and public gatherings in Bahrain. The goal was to build a standalone website with a distinct user interface, streamlined navigation, and optimized performance, catering to both local residents and international tourists looking for engaging experiences during their stay.
    `.trim(),
                images: [
                    "/images/calenderproject/event.png",
                    "/images/calenderproject/event-2.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Dynamic Event Management:**  
A custom CMS was developed to allow administrators to seamlessly create, edit, publish, and archive events. Each event entry supports detailed metadata including event categories (cultural, educational, sports, national), timing, location (with map integration), images, registration or ticketing links, and more.

**Multi-Language Support (i18n):**  
Using Laravel's built-in localization, the platform provides full support for both English and Arabic languages, delivering a smooth experience for local users and international visitors alike.

**SEO Optimization:**  
Every event page is structured with SEO-friendly meta tags, Open Graph (OG) social preview cards, clean URLs, and automatic sitemap generation. Schema.org structured data markup enhances visibility across platforms like Google Events and search engines.

**Interactive Calendar + Filters:**  
An intuitive, interactive calendar view enables users to browse events by date. In addition, users can filter events based on type, audience, and location or search using date ranges and keywords, providing a tailored discovery experience.

**Mobile Responsiveness:**  
The UI was designed mobile-first to ensure optimal performance across all devices. Enhancements like lazy-loading images and asset minification ensure fast load times and a seamless mobile browsing experience.

**Admin Dashboard & Role Management:**  
The backend includes a role-based dashboard allowing admins to manage events, homepage banners, newsletters, and contact form responses. Multiple admin levels—such as event manager, content editor, and super admin—help delegate control efficiently across teams.
    `.trim(),
                images: [
                    "/images/calenderproject/homepage.png",
                    "/images/calenderproject/event.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Blade", "MySQL"],
        thumbnail: "/images/calenderproject/homepage.png",
        galleryImages: projectGalleries.Calender,
        type: "web",
        domain: "backend",
        featured: true,
        projectSummary: "I developed Calender.bh, a Bahrain Tourism-affiliated platform, using Laravel and Blade.\n" + "This project highlights national events, festivals, and activities with a clean, modern UI\n" + "distinct from Bahrain.com. I built a fully dynamic backend, integrated multi-language\n" + "capabilities, and enabled admin-controlled event scheduling. Users can easily explore\n" + "what's happening across the kingdom. The system ensures high performance, mobile\n" + "responsiveness, and real-time content updates via a custom CMS.",
        role: "Full Stack Developer"
    },

    {
        id: "10",
        slug: "Lokal-Custom-Shopify-Integration-Product-Management-Dashboard",
        title: "Lokal: Custom Shopify Integration + Product Management Dashboard",
        sections: [
            {
                heading: "Overview",
                description: `
**Lokal** is a custom-built, Shopify-integrated e-commerce solution designed to streamline complex product creation and management processes for a multi-category retail business. 

The core goal was to empower non-technical staff to manage products, variations, and inventory without needing to rely entirely on Shopify's native backend, which can be overwhelming for such use cases. Instead, a bespoke Laravel + Vue.js admin dashboard was developed, offering an intuitive, business-specific interface that communicates directly with Shopify’s Storefront and Admin APIs. This allowed the client’s team to create, modify, and organize product data efficiently—all from a single tailored environment.
    `.trim(),
                images: [
                    "/images/lokal/admin---pending-approval.png",
                    "/images/lokal/designer---products.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Advanced Shopify Integration:**  
The platform leverages Shopify's Admin API to manage products, variants, collections, pricing, inventory, and images. OAuth authentication ensures secure access to the Shopify ecosystem, while Laravel Jobs and Queues enable real-time asynchronous data syncing.

**Custom Product Creation Tool:**  
A dynamic interface was built to simplify product creation. Users can define multiple product variants (e.g., size, material, color), upload multiple images, set SKUs, apply price rules and discounts, and configure fulfillment and inventory logic—all in one flow.

**Tailored Admin Dashboard:**  
The Laravel + Vue.js dashboard mimics the simplicity of Shopify but is fully customized to the business needs. Admins can manage product visibility, create or edit tags and collections, and perform bulk updates. Batch image uploading and product filtering by category or collection enhance efficiency.

**Bidirectional Sync:**  
Changes made within Shopify—such as pricing adjustments or out-of-stock status—are automatically reflected in the Laravel admin. Webhooks are used to detect and sync these updates in real time, ensuring consistency across platforms.

**Order Management:**  
A minimal order monitoring page provides visibility into order ID, customer details, payment status, and fulfillment progress. This data is pulled via the Shopify Orders API to keep admin users informed and responsive to customer needs.
    `.trim(),
                images: [
                    "/images/lokal/designer---add-product-(clothing).png",
                    "/images/lokal/super-admin---orders-5.png"
                ]
            }
        ]
        ,
        techStack: ["Vue.js", "Vuex"],
        thumbnail: "/images/lokal/super-admin---orders-1.png",
        galleryImages: projectGalleries.Lokal,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary: "Built a custom Laravel + Vue.js admin dashboard integrated with Shopify Admin API for the\n" + "Lokal store. Enabled complex product creation with variants, pricing, and inventory\n" + "syncing. Two-way real-time updates ensured any changes in Shopify or our panel reflected\n" + "instantly. Simplified operations for non-tech staff and significantly reduced product creation time.",

        role: "Full Stack Developer"
    },

    {
        id: "11",
        slug: "Spea-Map-based-School-Search-Investment-Analysis-Platform",
        title: "Spea Map-based School Search & Investment Analysis Platform",
        sections: [
            {
                heading: "Overview",
                description: `
This project is a hybrid interactive map and data visualization platform tailored to two key audiences:

- **Parents** looking for suitable schools based on personalized criteria and geographic proximity.  
- **Investors** seeking region-based insights and educational data to evaluate opportunities for investment in the schooling sector.

By combining geospatial intelligence with dynamic filters and demographic overlays, the platform bridges accessibility for both end users and decision-makers.
    `.trim(),
                images: [
                    "/images/spea/parent-03.png",
                    "/images/Spea/Forecast.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Interactive Map Integration:**  
Built using Google Maps API (or Leaflet.js), the platform visualizes school data geographically with interactive markers, hoverable tooltips, and modal popups showing tuition, ratings, contact info, and more.

**Advanced Filtering for Parents:**  
Parents can search and filter schools based on multiple criteria including:
- School name
- Curriculum type (British, IB, etc.)
- Education level (Primary, Secondary)
- Gender (Co-ed, Boys, Girls)
- Proximity (radius-based location filter)

Each school marker links to a detailed profile page featuring rich content, image galleries, and a contact form for direct inquiries.

**Investor-Focused Analytics Interface:**  
A separate view provides investors with data-rich insights like:
- School density and capacity analysis
- Regional performance trends
- Color-coded heatmaps indicating underserved or high-growth educational zones
- Demographic overlays (e.g., concentration of school-aged children)

**Dynamic Data Upload & Visualization:**  
Admins can upload regional datasets (CSV/Excel) which are parsed and rendered directly on the map in real time. Each region is interactive, offering overlays with metrics such as:
- School-to-student ratio
- Average tuition fees
- Academic performance indicators
- Land availability for future school development

The platform thus provides an all-in-one tool for both school discovery and education-sector investment strategy.
    `.trim(),
                images: [
                    "/images/spea/parent-01.png",
                    "/images/spea/parent-06.png"
                ]
            }
        ]
        ,
        techStack: ["Vue.js", "Vuex"],
        thumbnail: "/images/spea/parent-03.png",
        galleryImages: projectGalleries.SPEA,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "Built a map-based school discovery and investment platform using Laravel, Vue.js, and\n" + "Google Maps API. Parents can search schools with filters, while investors analyze\n" + "educational statistics and heatmaps by region. Admin panel allows managing schools,\n" + "stats, and roles. Helped streamline school search and boost investment decision-making.",
        role: "Full Stack Developer"
    },

    {
        id: "13",
        slug: "Springring-Teacher-Portal",
        title: "Springring Teacher Portal: Digital Platform Tailored For Educators",
        sections: [
            {
                heading: "Overview",
                description: `
Springring Teacher Portal is a communication and content-sharing platform designed specifically for educators. Available as both a web and mobile application, it empowers teachers to manage announcements, class boards, posts, and event calendars—all while maintaining seamless engagement with students and parents in real time.
    `.trim(),
                images: [
                    "/images/springringteacherportalproject/posts_-event.png",
                    "/images/springringteacherportalproject/whole-school-details.jpg"
                ]
            },
            {
                heading: "Key Features",
                description: `
**Personal Dashboard:**  
View recent updates, direct posts from administrators, and inter-teacher communications in one unified interface.

**Classroom Boards:**  
Create and manage class boards linked to specific student/parent groups with role-based access (Editor/Viewer). Teachers can invite students or parents and control board visibility.

**Flexible Content Posting:**  
Teachers can publish a variety of post types including:
- Text, media, and file uploads
- Events with role-based visibility (Parents, Students, or Both)
- External links to resources or articles
- Merged posts for bulk student diary updates
- Individual diary entries tracking student progress

**Event Calendar:**  
Create, edit, and assign classroom events to select audiences.

**Archived Boards:**  
Access archived content from past academic terms or class cycles.

**Profile & Settings Management:**  
Teachers can update their profiles, set office hours, configure notification preferences, and manage security settings.

**Chat Feature Control:**  
Enable or disable private chat functionality for parent-teacher interactions.

The platform also supports onboarding via invitations or a “try-it-first” experience—allowing teachers to explore features before fully inviting others. It fosters an environment focused on transparency, real-time communication, and educational organization.
    `.trim(),
                images: [
                    "/images/springringteacherportalproject/student-diary_view-post_attachment.jpg",
                    "/images/springringteacherportalproject/class-registry---students-1.jpg"
                ]
            },
            {
                heading: "Solutions",
                description: `
Developed using **Laravel** for the backend and **React Native** for the mobile app, the portal features scalable APIs, robust authentication, and a responsive, modern UI that ensures a consistent experience across devices.
    `.trim(),
                images: [
                    "/images/springringteacherportalproject/class-registry---students-profile.jpg",
                    "/images/springringteacherportalproject/create-new-post---appointment-(video)---step-2.png",
                ]
            }
        ]
        ,
        techStack: ["React", "React Native", "Redux"],
        thumbnail: "/images/springringteacherportalproject/archived-boards---classes.jpg",
        galleryImages: projectGalleries.springringTeacherPortal,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "The Springring Teacher Portal provides an intuitive interface for teachers to manage class\n" + "boards, create posts, and communicate with parents and students. Teachers can create\n" + "text, media, event, or diary posts, manage class details, and schedule events. They can set\n" + "office hours, control chat settings, and view all updates. Available on both web and\n" + "mobile, it empowers teachers to engage with their classrooms and parents efficiently while\n" + "keeping all communication organized in one place.",

        role: "Full Stack Developer"
    }, {
        id: "14",
        slug: "St-Chris-ECA-Portal",
        title: "St Chris ECA Portal: Offers Free and Paid Extra-Curricular Activities (ECAs)",
        sections: [
            {
                heading: "Overview",
                description: `
St. Christopher’s School’s Extra-Curricular Activities (ECA) platform supports a holistic approach to education by encouraging students to grow academically, socially, physically, and creatively. The ECA program includes a diverse range of activities designed to inspire passion, build skills, and promote teamwork and leadership among students.
    `.trim(),
                images: [
                    "/images/eca/homepage-login.png",
                    "/images/ECA/Confirmation.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
The platform categorizes ECAs into **Free** and **Paid** programs, each offering a tailored enrollment experience for parents via the **Parent Portal**.

### Free ECAs
- No additional cost, available to all interested students.
- Enrollment is done via the Parent Portal by submitting student interest.
- Due to high demand, spots are allocated either:
  - On a first-come, first-served basis.
  - Or by ECA coordinators based on capacity.
- Parents receive email confirmation if selected; otherwise, students are added to a waiting list.

### Paid ECAs
- Premium activities requiring payment at the time of registration.
- Payment and enrollment managed directly through the Parent Portal.
- Email confirmation sent upon successful payment.
- These ECAs often include:
  - Specialized coaching
  - Advanced skills development
  - Access to external events and competitions

### Parent Portal Workflow
1. **Login:** Use existing credentials (new parents can get assistance from the school office).
2. **Browse Activities:** Filter ECAs by age group and interest.
3. **Enroll:** Submit interest (Free ECAs) or pay and confirm (Paid ECAs).
4. **Confirmation:** Receive email confirmation or waitlist status.

This user-friendly system centralizes all extracurricular registrations, helping parents easily manage their child’s enrichment journey.
    `.trim(),
                images: [
                    "/images/eca/checkout-free.png",
                    "/images/ECA/Profile.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Vue.js", "Tailwind CSS", "REST APIs", "MySQL"],
        thumbnail: "/images/eca/homepage-login.png",
        galleryImages: projectGalleries.ECA,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary: "St. Christopher's School offers Free and Paid Extra-Curricular Activities (ECAs). Free ECAs\n" + "require interest submission and are subject to approval; confirmation is sent via email.\n" + "Paid ECAs require selection and payment through the portal, followed by confirmation and\n" + "final schedule. Access the portal using your Parent Portal credentials. For help, contact\n" + "the IT Helpdesk at helpdesk@school.st-chris.net or the Digital Systems Team at\n" + "parent.portal@school.st-chris.net.",

        role: "Full Stack Developer"
    }, {
        id: "15",
        slug: "Admissions",
        title: "Admissions: Offer A Comprehensive And Transparent Admissions",
        sections: [
            {
                heading: "Overview",
                description: `
St. Christopher’s School offers a comprehensive and transparent admissions process aimed at supporting families from their first inquiry through to successful enrollment. The goal is to provide a seamless and user-friendly experience, ensuring that all prospective students and parents have the guidance and tools they need throughout the journey.
    `.trim(),
                images: [
                    "/images/admissions/application-3.png",
                    "/images/admissions/offer-1.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
The admissions process is fully managed through a secure and centralized **Parent App**, designed for ease of use and clarity.

### For Existing Parents:
- Log in using existing **iSAMS credentials**.
- Submit applications for siblings or additional children directly from the dashboard.

### For New Parents:
- Select the “**New to St. Christopher’s School**” option on the login screen.
- Create a new account and begin the admissions journey from scratch.

### Core Functionalities:
- Digital application form submission
- Secure document uploads (e.g., passports, academic records)
- Real-time application status tracking
- Notifications and email updates throughout the process

This digital admissions platform helps streamline the intake process while maintaining a high standard of communication and transparency for all users.
    `.trim(),
                images: [
                    "/images/admissions/eoi-form-5.png",
                    "/images/admissions/eoi-form-6.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "MySQL"],
        thumbnail: "/images/admissions/application-1.png",
        galleryImages: projectGalleries.Admissions,
        type: "web",
        domain: "frontend",
        featured: false,
        projectSummary: "Admissions at St. Christopher’s School are managed via the Parent App. Existing parents\n" + "log in with ISAMS; new parents create an account under \"New to St Christopher’s School.\"\n" + "Apply by submitting an Expression of Interest, followed by a detailed application if\n" + "approved. For Year 10/12, additional subject selections are required. Forgot your\n" + "password? Use the reset link provided. For help, contact the school’s admissions office for\n" + "support.",

        role: "Full Stack Developer"
    }, {
        id: "16",
        slug: "FRC-System-Comprehensive-Lesson-Planning-Competencies-Dashboard",
        title: "FRC System: Comprehensive Lesson Planning & Competencies Dashboard",
        sections: [
            {
                heading: "Overview",
                description: `
The FRC system is a two-part educational platform designed to empower teachers with structured lesson planning and professional competency tracking.

1. **Competencies Dashboard**  
A read-only tool that allows educators to browse a comprehensive competency framework. Each competency includes tags, detailed descriptions, and resource links. This module features an expandable interface for quick access and reference, helping users stay aligned with pedagogical standards.

2. **Planning System**  
An interactive lesson planning module that enables teachers to collaboratively design and manage academic plans across subjects and year groups. It supports Google login, role-based permissions, and is controlled through a Super Admin backend for plan creation, sharing, and administration.
    `.trim(),
                images: [
                    "/images/pdpfrcproject/login.png",
                    "/images/pdpfrcproject/parent-view.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Plan Management**: Teachers can access personal, shared, and pinned plans organized by year group and subject.
- **Units & Scheduling**: Each plan contains detailed lesson units tied to specific terms and weeks, including learning objectives, topics, assessments, and resources.
- **Google Calendar Integration**: Events tied to lesson plans are displayed directly within the calendar view.
- **Collaborative Planning**: Plans can be shared with collaborators, while ownership and control remain with the creator.
- **Resource Management**: Resources (private or public) can be uploaded or linked from Google Drive.
- **Advanced Cloning**: Clone units into future plans for seamless year-to-year curriculum continuity. Future units roll up into the active academic year automatically.
- **User Experience Enhancements**:
  - Auto-scroll to the current academic week.
  - Toggle between compact and expanded views.
- **Archive & Roll-Up**: End-of-year plans are archived and replaced by future plans, keeping the platform clean and updated.
- **Powerful Filtering**: Search by year group, subject, term, or week. Inactive subjects are flagged for easy visibility.
    `.trim(),
                images: [
                    "/images/pdpfrcproject/analytics.png",
                    "/images/pdpfrcproject/create-unit---topic.png"
                ]
            },
            {
                heading: "Role & Contributions",
                description: `
I led the architecture and full-stack development of the FRC system, with a focus on:

- Designing a **role-based access control system** using Google Authentication.
- Building the interactive lesson planning interface with real-time collaborative features.
- Creating scalable data models for plans, units, and academic calendars.
- Integrating **Google Calendar** and **Google Drive APIs** for enhanced scheduling and resource handling.
- Implementing advanced functionality such as **unit cloning**, **academic roll-ups**, and **archiving workflows**.
- Optimizing the user experience with dynamic views, smart filtering, and contextual navigation.
- Collaborating directly with educators and school administrators to ensure the platform met real-world teaching needs.

The FRC system significantly streamlines lesson planning and competency tracking, fostering improved collaboration, transparency, and instructional quality across the institution.
    `.trim(),
                images: [
                    "/images/pdpfrcproject/parent-view---subject-music.png",
                    "/images/pdpfrcproject/parent-view---assessment-modes.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "React", "Redux", "MySQL"],
        thumbnail: "/images/pdpfrcproject/analytics.png",
        galleryImages: projectGalleries.FRC,
        type: "web",
        domain: "frontend",
        featured: true,
        projectSummary: "Developed the FRC system, a comprehensive lesson planning and competency tracking\n" + "platform for educators. The system features a Competencies Dashboard for viewing\n" + "standards and a collaborative Planning System where teachers create, share, and manage\n" + "lesson plans by year group and subject. Integrated Google login, calendar syncing,\n" + "resource management, and role-based permissions for seamless collaboration.\n" + "Implemented advanced cloning, future planning, and archiving to streamline academic year transitions and improve teaching efficiency.",

        role: "Full Stack Developer"
    }, {
        id: "17",
        slug: "PDP-Portal-User-Management-and-Functional-Overview",
        title: "PDP Portal: User Management and Functional Overview",
        sections: [
            {
                heading: "Overview",
                description: `
I led the development of the PDP & FRC Portal — a comprehensive web-based staff development and performance management platform built for educational institutions.

This portal centralizes user roles, growth plans, and professional learning activities for teachers, leadership, and support staff. It supports two primary user roles:

- **Super Admins**: Full backend access to manage users, permissions, documents, and system-wide settings.
- **Normal Users**: Sign in via institutional Google accounts to access features specific to their role.

The platform is structured around interactive tabs and role-based categories such as:
- Support Staff / Leaders
- Teachers / Teacher Assistants
- Leadership Roles

Each category addresses critical development areas:
- Pedagogical Focus
- Leadership Development
- Personal & Professional Growth
- Climate & Culture
- Lesson Observations
- Action Research

Users can track progress, upload resources, share with collaborators, comment, and move tasks through statuses — from draft to submission — supporting accountability and collaboration.
    `.trim(),
                images: [
                    "/images/pdp/teacher-leader_pedagogical-focus.png",
                    "/images/pdp/teacher-leader_strategic-priorities---future-ready-curriculum.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Lesson Observations**: Supports self-reflection, peer reviews, and line manager evaluations using customizable templates and rubrics. Observations can be saved as drafts or formally submitted with feedback and comment control.
- **Professional Development & Strategic Priorities**: Structured templates help align personal goals with institutional strategy — tracking learning outcomes, next steps, and growth metrics.
- **Lesson Observation Dashboard**: Interactive charts provide a visual overview of observation trends, helping leadership track performance across departments.
- **Team Management View**: Managers can see a live view of the hierarchy and staff progress, review submissions, and offer feedback.
- **Leadership-Only Features**: Senior Leadership Team (SLT) members have access to privileged features such as initiating new observations, scheduling “Pop-In” visits, and using an overview calendar.
- **Google Drive Integration**: Users access role-specific documents and resources via embedded Google Drive folders. Visibility and permissions are managed by Super Admins.
  
This system required:
- Deep implementation of **Role-Based Access Control (RBAC)**
- Complex UI/UX workflows for multi-role functionality
- Seamless integration with **Google Authentication** and **Google Drive**
- High-performance data handling

Close collaboration with educators ensured the portal addressed real-world needs, ultimately improving professional growth, transparency, and communication within the institution.
    `.trim(),
                images: [
                    "/images/pdp/teacher-leader_home.png",
                    "/images/pdp/teacher-leader_self-evaluation.png"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "React", "Redux", "MySQL"],
        thumbnail: "/images/pdp/teacher-leader_leadership-focus.png",
        galleryImages: projectGalleries.PDP,
        type: "web",
        domain: "backend    ",
        featured: true,

        projectSummary: "I built the PDP & FRC portal — an advanced staff development and performance\n" + "management system for schools. The system features role-based access, Google\n" + "authentication, dynamic dashboards, lesson observation tools, and progress tracking. It\n" + "integrates with Google Drive for document management and offers admin controls for user\n" + "roles and permissions. Skilled in designing intuitive interfaces for complex workflows, I\n" + "ensure secure and efficient user experiences tailored to organizational needs.",

        role: "Full Stack Developer"
    },

    {
        id: "19",
        slug: "Naseebi-Comprehensive-Matchmaking-Mobile-Application",
        title: "Naseebi: Comprehensive Matchmaking Mobile Application",
        sections: [
            {
                heading: "Overview",
                description: `
Naseebi is a feature-rich matchmaking mobile application designed to help users find meaningful connections through advanced algorithms and seamless user experiences.

Built with a modern tech stack — React Native for the frontend and Laravel for the backend — the app prioritizes performance, scalability, and data security. Real-time chat, intuitive UI, and personalized matching are central to the experience.

The platform supports thousands of users with a robust infrastructure that ensures secure profile handling, subscription management, and engaging user interactions.
    `.trim(),
                images: [
                    "/images/naseebimobile/your-connections-3.png",
                    "/images/naseebimobile/match-profile---paid,-connected.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Tech Stack**: React Native frontend for cross-platform performance, Laravel backend with MongoDB for scalability and flexible data management.
- **Screen Coverage (~100 total)**:
  - Splash & Onboarding: 6 screens
  - Sign-in & OTP Verification: 4 screens
  - Profile Creation & Settings: 21 screens
  - Chat Interface: 9 screens
  - Partner Discovery & Activity Tracking: 17 screens
  - Subscription & Pricing: 5 screens
- **Real-Time Messaging**: WebSocket-powered chat with support for instant messaging, group chats, and chat history.
- **Matching Algorithm**: Smart algorithm that analyzes user preferences, profiles, and interaction history to recommend compatible matches.
- **Freemium Model**:
  - Free access to core features
  - Premium unlocks via secure in-app purchases (Apple/Google)
  - Subscription management built into the app
- **Comprehensive API Suite**:
  - Secure authentication with OTP
  - Profile & avatar management
  - Matching & preference logic
  - Localization & internationalization support
- **UI/UX**:
  - Modern, intuitive navigation
  - Responsive layouts for different screen sizes
  - Optimized for engagement and retention
- **Global-Ready**: Multi-language support to reach international markets.
    `.trim(),
                images: [
                    "/images/naseebimobile/preferences-6.png",
                    "/images/naseebimobile/home-1.png"
                ]
            }
        ]
        ,
        techStack: ["React Native", "Redux"],
        thumbnail: "/images/naseebimobile/home-1.png",
        thumbnailFit: "contain",
        galleryImages: projectGalleries.NaseebiMobile,
        type: "mobile",
        domain: "frontend",
        featured: false,
        projectSummary: "Naseebi is a React Native matchmaking app with a Laravel backend and MongoDB\n" + "database. It features 100+ screens for onboarding, profiles, real-time chat via\n" + "WebSockets, and subscription management. The app uses an advanced matching\n" + "algorithm to connect users based on detailed preferences. Key features include secure\n" + "authentication with OTP, avatar management, multi-language support, and in-app\n" + "purchases for premium services. Developed with scalability, security, and optimized\n" + "performance in mind, Naseebi delivers a seamless user experience.",

        role: "Full Stack Developer"
    }, {
        id: "20",
        slug: "Safr-Care-Healthcare-Transportation-Reimagined",
        title: "Safr Care: Healthcare Transportation, Reimagined",
        sections: [
            {
                heading: "Overview",
                description: `
Safr Care is a robust Non-Emergency Medical Transportation (NEMT) platform designed to connect patients, transportation providers, insurance payors, and healthcare facilities.

By modernizing the healthcare transportation ecosystem, Safr Care reduces patient no-shows and improves discharge workflows through automation, real-time tracking, and intelligent dispatching. The platform offers seamless integration of backend services and frontend components, optimizing the experience for all stakeholders involved.
    `.trim(),
                images: [
                    "/images/safercare/image_original-1.jpg",
                    "/images/safercare/image_original.jpg"
                ]
            },
            {
                heading: "Responsibilities",
                description: `
- **Frontend Development**:
  - Built and maintained Vue.js components for scheduling, patient dashboards, trip summaries, and real-time driver tracking.
  - Translated Figma designs into responsive, pixel-perfect UI across devices.

- **Backend Engineering (Laravel)**:
  - Developed RESTful APIs for trip scheduling, user authentication, fare calculation, and analytics.
  - Set up role-based access control for Admins, Brokers, Drivers, and Patients.

- **Real-Time Systems**:
  - Integrated Firebase and Socket.IO for live trip updates, push notifications, and driver location broadcasting.
  - Implemented Google Maps API for real-time vehicle tracking and patient pickup visualization.

- **Automation & Optimization**:
  - Engineered auto-assignment logic to match trips with the nearest available driver based on location and urgency.
  - Developed route optimization and trip clustering algorithms to maximize efficiency and reduce costs.

- **Compliance & Credentials**:
  - Built real-time credential management for drivers and vehicles, allowing only certified providers to be dispatched.
  - Secured document uploads and integrated compliance workflows using encrypted endpoints.

- **Analytics & DevOps**:
  - Created interactive dashboards displaying key metrics such as trip completion rates, no-show statistics, and discharge times.
  - Led QA using Postman and Laravel test suites.
  - Managed CI/CD pipelines and deployments across AWS EC2 staging and production environments.
    `.trim(),
                images: [
                    "/images/safercare/image_original_4.jpg",
                    "/images/safercare/image_original_6.jpg"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Vue.js", "Vuetify"],
        thumbnail: "/images/safercare/image_original-1.jpg",
        galleryImages: projectGalleries.safercare,
        type: "web",
        domain: "Backend",
        featured: false,
        projectSummary: "Safr Care is a cutting-edge healthcare transportation platform built to connect patients,\n" + "healthcare providers, insurance payors, and NEMT providers. It streamlines ride\n" + "scheduling, route optimization, and real-time credentialing to reduce patient no-shows\n" + "and improve on-time discharges. With mobile apps and web portals, Safr Care\n" + "minimizes manual tasks, supports preventive care, and enhances operational efficiency—\n" + "transforming medical transportation through smart, automated solutions.",

        role: "Full Stack Developer"
    },

    {
        id: "21",
        slug: "naturallockbox",
        title: "Natural Lock Box: CPG Deduction & Sales Reporting Platform",
        sections: [
            {
                heading: "Overview",
                description: `
Natural Lock Box is a powerful SaaS platform designed to help Consumer Packaged Goods (CPG) brands manage and optimize their deduction, payment, and trade spend data—specifically from major distributors like UNFI and KEHE.

Using a proprietary cash-based data model, the system provides real-time visibility into deductions, checks, claims, and collections. It empowers cross-functional teams across sales, finance, and operations to make informed decisions and recover lost revenue efficiently.
    `.trim(),
                images: [
                    "/images/naturallockboxproject/image_original_5.jpg",
                    "/images/naturallockboxproject/image_original_4.jpg"
                ]
            },
            {
                heading: "Responsibilities",
                description: `
- **Architecture & Infrastructure**:
  - Designed a scalable, multi-tenant Laravel backend ensuring data isolation and security across CPG clients.
  - Implemented job batching and delayed queues for high-volume ingestion of financial data.

- **Document Parsing & Automation**:
  - Built custom OCR and file parsing logic for distributor remittances and PDF statements, speeding up remittance ingestion.
  - Developed a flexible templating system to support new distributors and remittance formats.
  - Launched the “Set It and Forget It” automation pipeline combining OCR and data validation to greatly reduce manual data entry.

- **Feature Development**:
  - Claims Tracking: Created an audit-ready claims module using customizable templates and internal validation.
  - Bolt-On Tools: Enabled features like audit logs, sales-by-location breakdowns, and customer-specific reporting tools.
  - Live Search: Integrated real-time filters for product-level and account-level deduction lookups.

- **UI/UX & Dashboards**:
  - Delivered modular Vue.js interfaces for remittance overviews, drill-downs, and financial reporting.
  - Integrated interactive dashboards for aging, spend summaries, trade spend, and collection performance.
  - Aligned all frontend designs with Figma specs to ensure a clean and intuitive experience for both finance and sales users.

- **Payments & Subscriptions**:
  - Integrated Stripe for freemium and premium tiers, enabling secure in-app purchases, recurring billing, and usage-based credits.

- **APIs & Partner Integrations**:
  - Built REST APIs powering customer tools like a Store Locator (in partnership with Nearest You) with real-time product and geographic filtering.
  - Used lightweight caching and indexed queries to maintain high performance and low latency.

- **Cloud & Security**:
  - Integrated AWS S3 and CloudFront for secure document storage and scalable media delivery.
    `.trim(),
                images: [
                    "/images/naturallockboxproject/image_original_3.jpg",
                    "/images/naturallockboxproject/image_original_1.jpg"
                ]
            }
        ]
        ,
        techStack: ["Laravel", "Vue.js"],
        thumbnail: "/images/naturallockboxproject/image_original_4.jpg",
        galleryImages: projectGalleries.naturallockbox,
        type: "web",
        domain: "Backend",
        featured: false,
        projectSummary: "Built a full-stack deduction and trade spend system for CPG brands using Laravel and\n" + "Vue.js. Developed custom OCR tools to parse remittances, automated data entry, and\n" + "integrated Stripe for freemium plans. Created real-time dashboards and audit tools for\n" + "claims, collections, and sales. Enabled detailed analytics without syndicated data.\n" + "Powered store locator via APIs. Greatly reduced manual workload and helped brands\n" + "recover millions in deductions efficiently.",

        role: "Full Stack Developer"
    },

    {
        id: "22",
        slug: "Danat-Experience-Gamified-Rewards-Platform-for-Al-Salam-Bank",
        title: "Danat Experience: Gamified Rewards Platform for Al Salam Bank",
        sections: [
            {
                heading: "Overview",
                description: `
The **Danat Experience** is a gamified engagement platform built for **Al Salam Bank's Danat** programme in Bahrain. It powers the bank's on-ground activations during **Danat Season**, a series of events hosted at major venues such as:

- Jewelry Arabia
- City Center Bahrain
- The Avenues
- Liwan
- Marassi Galleria

Visitors sign in with their mobile number, play interactive games at activation stations, collect points, and win prizes, while the bank captures engagement and participation data across every event.
                `.trim(),
                images: [
                    "/images/danat/dashboard.png",
                    "/images/danat/danaat-season.png"
                ]
            },
            {
                heading: "My Role & Contributions",
                description: `
I developed the platform end to end using **Laravel** for the backend and **React** for the web app, including:

- **OTP-based mobile sign-in** with separate flows for new and registered users
- **Points engine** that records station visits and awards points per game played
- **Prize and inventory logic** for instant wins such as iPhones, with win and lose outcomes
- **Digital vouchers** that assign each winner a locker number to collect their prize at the stand
- **Customer-aware profiles** that distinguish existing Danat customers from non-customers
                `.trim(),
                images: [
                    "/images/danat/sign-in.png",
                    "/images/danat/voucher.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Event Calendar**: Danat Season view listing upcoming events, venues, and dates.
- **Interactive Mini-Games**: Tap-to-play experiences such as the *Windfall* and *Danat Safe* games at each POD station.
- **Rewards & Points**: Live points balance with "Feeling Lucky?" prize draws after each play.
- **Recent Stations**: Dashboard history of visited stations with the points or prize won at each.
- **AR Photos**: Gallery of augmented-reality photos captured at the event for users to view and keep.
- **Prize Vouchers**: Branded vouchers with voucher ID, mobile number, and locker assignment for prize collection.
                `.trim(),
                images: [
                    "/images/danat/windfall-game.png",
                    "/images/danat/points-earned-danat-customer.png"
                ]
            }
        ],
        techStack: ["Laravel", "React"],
        thumbnail: "/images/danat/dashboard.png",
        thumbnailFit: "contain",
        galleryImages: projectGalleries.Danat,
        type: "web",
        domain: "Full Stack",
        featured: false,
        projectSummary: "Built a gamified rewards platform for Al Salam Bank's Danat programme using Laravel and React. Visitors at Danat Season events across Bahrain sign in with a mobile OTP, play interactive mini-games at activation stations, earn points, and win prizes through instant draws. Winners receive digital vouchers with locker assignments to collect their prizes, while the platform tracks station visits, AR photos, and customer engagement across every event.",
        role: "Full Stack Developer"
    },

    {
        id: "23",
        slug: "Project-Dream-Football-Rewards-and-Leaderboard-Platform-for-Kids",
        title: "Project Dream: Football Rewards & Leaderboard Platform for Kids",
        sections: [
            {
                heading: "Overview",
                description: `
**Project Dream** is a football-themed rewards platform for families, run by **Al Salam Bank** in partnership with **Visa**. Parents register once, add their children, and each child earns points by playing the **Points Football Game** at campaign venues.

Points feed into a live **leaderboard**, and top-ranked players win prizes in scheduled draws, including:

- iPhone 17
- iPad Air M4
- Meta Quest 3S
- LEGO Soccer Ball
- PS5 Digital Console
                `.trim(),
                images: [
                    "/images/project-dream/home-page-4-prizes.png",
                    "/images/project-dream/leaderboard.png"
                ]
            },
            {
                heading: "My Role & Contributions",
                description: `
I built the platform using **Laravel** for the backend and **React** for the web app, covering:

- **Mobile OTP login** and parent registration
- **Family accounts** where parents add, edit, and remove kids, each with their own unique ID
- **Points and rewards tracking** per visit, including physical rewards such as jerseys and caps
- **Ranking engine** that calculates each player's position on the leaderboard
- **Prize draw flow** with a live winner-announcement overlay
                `.trim(),
                images: [
                    "/images/project-dream/kids.png",
                    "/images/project-dream/manage-kids.png"
                ]
            },
            {
                heading: "Key Features",
                description: `
- **Personal Dashboard**: Total points, current rank, and progress toward the next prize threshold.
- **Leaderboard**: Ranked players with number of plays and points, plus an overlay state for draw time.
- **Leaderboard Prizes**: Prize tiers for the top four players with the next draw date.
- **Point History**: Visit-by-visit record of games played and rewards earned.
- **Manage Kids**: Per-child ID, points, and rank, with a warning that removing a child also removes their points.
- **Winner Announcements**: Full-screen reveal overlays for prize winners such as the PS5 draw.
                `.trim(),
                images: [
                    "/images/project-dream/point-history.png",
                    "/images/project-dream/overlay-winner-announcement.png"
                ]
            }
        ],
        techStack: ["Laravel", "React"],
        thumbnail: "/images/project-dream/home-page-4-prizes.png",
        thumbnailFit: "contain",
        galleryImages: projectGalleries.ProjectDream,
        type: "web",
        domain: "Full Stack",
        featured: false,
        projectSummary: "Developed a football-themed rewards platform for families for Al Salam Bank and Visa using Laravel and React. Parents register with a mobile OTP and add their kids, each with a unique ID. Kids earn points and rewards by playing the Points Football Game, climb a live leaderboard, and compete in scheduled prize draws for an iPhone 17, iPad Air, Meta Quest 3S, and PS5, with full point history and winner-announcement screens.",
        role: "Full Stack Developer"
    },

];
export default projects;

export const getFeaturedProjects = () => projects.filter((project) => project.featured);

export const getProjectHref = (project) => `/portfolio/${project.id}`;

export const getProjectById = (id) => projects.find((project) => project.id === String(id)) ?? null;
