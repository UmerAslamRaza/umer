import {PROFILE} from '@/data/site';

export const HERO_INTRO = [
    'I help businesses and teams transform ideas into scalable, high-performance web applications and intelligent digital platforms. My work focuses on building modern systems that combine robust backend architecture with interactive frontends and emerging AI capabilities. From business dashboards and SaaS platforms to automation systems and data-driven tools, I develop solutions that are reliable, user-focused, and designed to scale.',
    'With strong experience across the full stack using technologies such as Laravel, React, and modern JavaScript frameworks, I build applications that deliver smooth performance and seamless user experiences. I also work on integrating AI technologies, automation workflows, and data analysis systems that help organizations streamline operations, gain insights, and make more informed decisions.',
    'Alongside enterprise platforms and internal business tools, I also experiment with interactive web technologies such as Three.js to create engaging browser-based experiences and lightweight 3D applications.',
    'My work spans full-stack development, AI integrations, automation systems, and scalable platform architecture, with a focus on building practical solutions that support real business needs. Explore my project portfolio and online resume to learn more about the systems and platforms I have developed.',
];

export const HERO_QUESTIONS = [
    'Need a quick MVP?',
    'Looking to revamp your current site?',
    'Want a developer who communicates well and meets deadlines?',
];

/** Hero counters. `className` adds extra classes to the number heading. */
export const STATS = [
    {value: PROFILE.yearsOfExperience, label: 'Years of Experience'},
    {value: 80, label: 'More than Projects Completed'},
    {value: 60, label: 'More than Clients worked worldwide', className: 'd-flex gap-1'},
];

/** "What I do" cards. Icons are paths under /public. */
export const SERVICES = [
    {
        title: 'HTML & CSS',
        description: 'Experienced in creating responsive, Converting figma mockups to pixel-perfect UIs using HTML5, CSS3, Sass, and Bootstrap.',
        icons: [
            {alt: 'html', src: '/images/html.png'},
            {alt: 'css', src: '/images/css.png'},
        ],
    },
    {
        title: 'Tailwind css, Bootstrap & Vuetify',
        description: 'Skilled in modern UI frameworks like Tailwind CSS, Bootstrap 5, and Vuetify for sleek, scalable designs.',
        icons: [
            {alt: 'tailwind', src: '/images/tailwind-css.svg'},
            {alt: 'bootstrap', src: '/images/bootstrap.svg'},
            {alt: 'vuetify', src: '/images/vuetify.svg'},
        ],
    },
    {
        title: 'Jquery, Javascript & Typescript',
        description: 'Proficient in interactive web development using JavaScript, TypeScript, and legacy support with jQuery.',
        icons: [
            {alt: 'jquery', src: '/images/jquery-plain-wordmark.svg'},
            {alt: 'javascript', src: '/images/javascript-js.svg'},
            {alt: 'typescript', src: '/images/typescript.svg'},
        ],
    },
    {
        title: 'Vue, React & React Native',
        description: 'Developed dynamic web and mobile apps using Vue.js, React.js, and React Native with reusable component design and clean structure.',
        icons: [
            {alt: 'vue', src: '/images/vue.png'},
            {alt: 'react', src: '/images/react.png'},
        ],
    },
    {
        title: 'Redux, Context API & Vuex',
        description: 'Proficient in managing complex application states using Redux for React and Vuex for Vue.js. Experienced with Context API for lightweight state management, ensuring scalability, optimized component performance and stability.',
        icons: [
            {alt: 'redux', src: '/images/redux-original.svg'},
            {alt: 'vuex', src: '/images/vue-dot-js.svg'},
        ],
    },
    {
        title: 'PHP & Laravel',
        description: 'Expert in backend development with PHP and Laravel, focusing on building RESTful APIs, authentication systems, and scalable web applications. Familiar with Eloquent ORM, queues, event broadcasting, and Laravel Reverb for real-time features.',
        icons: [
            {alt: 'Laravel', src: '/images/laravel.svg'},
            {alt: 'php', src: '/images/php.png'},
        ],
    },
    {
        title: 'Git, Postman & Firebase',
        description: 'Experienced in version control using Git for collaborative development. Skilled in API testing and documentation with Postman. Hands-on with Firebase for authentication, Firestore, push notifications, and real-time data handling in mobile apps.',
        icons: [
            {alt: 'git', src: '/images/github.svg'},
            {alt: 'postman', src: '/images/postman.svg'},
            {alt: 'firebase', src: '/images/file-type-firebase.svg'},
        ],
    },
    {
        title: 'Miro,Basecamp & Jira',
        description: 'Familiar with agile tools like Miro for brainstorming and product design, Basecamp for team collaboration, and Jira for sprint planning, task tracking, and effective project management in cross-functional teams and google meet for team meetings.',
        icons: [
            {alt: 'miro', src: '/images/miro.svg'},
            {alt: 'basecamp', src: '/images/basecamp.svg'},
            {alt: 'jira', src: '/images/jira.svg'},
        ],
    },
];
