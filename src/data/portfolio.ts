export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  links: PortfolioLink[];
};

export type MiniProject = {
  title: string;
  date: string;
  description: string;
  category: "Frontend Mentor" | "Vanilla JS" | "React" | "CLI";
  links: PortfolioLink[];
};

export type Article = {
  title: string;
  date: string;
  description: string;
  links: PortfolioLink[];
};

export const socials = [
  { label: "GitHub", href: "https://github.com/supminn" },
  { label: "Twitter", href: "https://twitter.com/supminn" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/supminn" },
  { label: "Hashnode", href: "https://supminn.hashnode.dev" },
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "NodeJS",
  "MongoDB",
];

export const featuredProjects: Project[] = [
  {
    title: "StyleSUP - CSS component library",
    date: "14th March 2021",
    description:
      "A CSS component library created with HTML and CSS during neoG camp, inspired by Bootstrap's component patterns.",
    image: "/assets/portfolio/StyleSUP.png",
    tags: ["HTML", "CSS", "Design system"],
    links: [
      { label: "Live", href: "https://stylesup.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_styleSUP" },
    ],
  },
  {
    title: "NoteSUP - Personal notes application",
    date: "28th April 2021",
    description:
      "A React notes application built with StyleSUP, taking interaction cues from Google Keep.",
    image: "/assets/portfolio/NoteSUP.png",
    tags: ["React", "Notes", "StyleSUP"],
    links: [
      { label: "Live", href: "https://notesup.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_noteSUP" },
    ],
  },
  {
    title: "SupMart - eCommerce application",
    date: "26th March 2021",
    description:
      "A MERN stack eCommerce experience with StyleSUP components and product-flow inspiration from Myntra.",
    image: "/assets/portfolio/SupMart.png",
    tags: ["MERN", "Commerce", "StyleSUP"],
    links: [
      { label: "Live", href: "https://supmart.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_eCommerce" },
    ],
  },
  {
    title: "SupVision - Video library application",
    date: "10th April 2021",
    description:
      "A MERN stack video library application built with StyleSUP and inspired by YouTube's content model.",
    image: "/assets/portfolio/SupVision.png",
    tags: ["MERN", "Video", "StyleSUP"],
    links: [
      { label: "Live", href: "https://supvision.netlify.app/" },
      {
        label: "Source",
        href: "https://github.com/supminn/neoG_videoLibrary",
      },
    ],
  },
  {
    title: "SupQuiz - Jump rope quiz application",
    date: "5th May 2021",
    description:
      "A jump rope quiz app developed with MERN stack, TailwindCSS, and Hasura GraphQL.",
    image: "/assets/portfolio/SupQuiz.png",
    tags: ["MERN", "GraphQL", "Tailwind"],
    links: [
      { label: "Live", href: "https://supquiz.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_Quiz" },
    ],
  },
  {
    title: "SupSocial - Social media app",
    date: "14th June 2021",
    description:
      "A MERN stack social app for a jump rope community, developed with Redux Toolkit and TailwindCSS.",
    image: "/assets/portfolio/SupSocial.png",
    tags: ["MERN", "Redux", "Tailwind"],
    links: [
      { label: "Live", href: "https://supsocial.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_socialMedia" },
    ],
  },
  {
    title: "Create JavaScript App - Starter Kit",
    date: "8th June 2021",
    description:
      "A VanillaJS starter kit with Webpack configuration and README guidance for spinning up small JavaScript apps.",
    image: "/assets/portfolio/starterJS.png",
    tags: ["Vanilla JS", "Webpack", "Starter kit"],
    links: [
      {
        label: "Source",
        href: "https://github.com/supminn/create_javascript_app/tree/development",
      },
    ],
  },
];

export const miniProjects: MiniProject[] = [
  {
    title: "Coding bootcamp testimonials slider",
    date: "24th February 2021",
    description:
      "Frontend Mentor challenge replicating a testimonials slider across desktop and mobile screens.",
    category: "Frontend Mentor",
    links: [
      {
        label: "Live",
        href: "https://coding-bootcamp-testimonials-slider-master-supminn.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/coding-bootcamp-testimonials-slider-master",
      },
    ],
  },
  {
    title: "Article preview component",
    date: "13th February 2021",
    description:
      "Frontend Mentor challenge recreating an article preview component for responsive layouts.",
    category: "Frontend Mentor",
    links: [
      {
        label: "Live",
        href: "https://article-preview-component-master-supminn.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/article-preview-component-master",
      },
    ],
  },
  {
    title: "Four card feature section",
    date: "4th February 2021",
    description:
      "Frontend Mentor challenge for a four-card feature section with desktop and mobile states.",
    category: "Frontend Mentor",
    links: [
      {
        label: "Live",
        href: "https://four-card-feature-section-master-supminn.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/four-card-feature-section-master",
      },
    ],
  },
  {
    title: "Social proof section",
    date: "1st February 2021",
    description:
      "Frontend Mentor challenge recreating a social proof section for desktop and mobile screens.",
    category: "Frontend Mentor",
    links: [
      { label: "Live", href: "https://social-proof-section-supminn.vercel.app/" },
      {
        label: "Source",
        href: "https://github.com/supminn/social-proof-section-master",
      },
    ],
  },
  {
    title: "Profit/Loss of Stock",
    date: "31st January 2021",
    description:
      "VanillaJS app that compares purchase price and current stock price to show profit or loss.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-stockpnl.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_stockPnL/" },
    ],
  },
  {
    title: "FAQ Accordian card",
    date: "18th January 2021",
    description:
      "Frontend Mentor challenge replicating an FAQ accordion for desktop and mobile screens.",
    category: "Frontend Mentor",
    links: [
      {
        label: "Live",
        href: "https://faq-accordion-card-main-supminn.vercel.app/",
      },
      {
        label: "Source",
        href: "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
      },
    ],
  },
  {
    title: "Profile Card Component",
    date: "16th January 2021",
    description:
      "Frontend Mentor challenge recreating a responsive profile card component.",
    category: "Frontend Mentor",
    links: [
      {
        label: "Live",
        href: "https://profile-card-component-main-supminn.vercel.app/",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/profile-card-component-main",
      },
    ],
  },
  {
    title: "Palindrome Birthday",
    date: "13th January 2021",
    description:
      "VanillaJS app checking whether a birthday forms a palindrome across four date combinations.",
    category: "Vanilla JS",
    links: [
      {
        label: "Live",
        href: "https://supminn-neog-palindromebday.netlify.app/",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/neoG_palindromeDate",
      },
    ],
  },
  {
    title: "Triangles Quiz",
    date: "6th January 2021",
    description: "A VanillaJS app for learning and playing around with triangles.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-triangles.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_TriangleQuiz" },
    ],
  },
  {
    title: "Tweet Progress",
    date: "4th January 2021",
    description:
      "React app for automating tweet progress while tracking the #151daysofcode challenge.",
    category: "React",
    links: [
      { label: "Live", href: "https://supminn-tweetprogress.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neog-151daysofcode" },
    ],
  },
  {
    title: "Lucky Birthday",
    date: "28th December 2020",
    description: "VanillaJS app to check whether your birthday is lucky.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-lucky-bday.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_LuckyBirthday" },
    ],
  },
  {
    title: "Cash Manager",
    date: "24th December 2020",
    description:
      "Cash register manager that helps return the correct change for a bill amount.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-cashmgr.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_CashRegManager" },
    ],
  },
  {
    title: "Bollywood Buff",
    date: "6th December 2020",
    description: "React recommendation app for Bollywood movies worth watching.",
    category: "React",
    links: [
      { label: "Live", href: "https://supminn-neog-movrcmnd.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neog_l4_movirec" },
    ],
  },
  {
    title: "Hand Gestures",
    date: "6th December 2020",
    description:
      "React app that interprets hand gesture meanings from user input or a predefined list.",
    category: "React",
    links: [
      { label: "Live", href: "https://supminn-neog-gesture.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neog_l4_gesture" },
    ],
  },
  {
    title: "EmoGenious",
    date: "6th December 2020",
    description: "React app developed on CodeSandbox to interpret emoji meanings.",
    category: "React",
    links: [
      { label: "Live", href: "https://230hq.csb.app/" },
      {
        label: "Source",
        href: "https://codesandbox.io/s/neogcamp-mark8-230hq?file=/src/App.js",
      },
    ],
  },
  {
    title: "Fetch Bank Details",
    date: "3rd December 2020",
    description:
      "Given a valid IFSC code, this app returns the corresponding bank details.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-bank-ifsc.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_L3_BanksIFSC" },
    ],
  },
  {
    title: "Swedish Chef Talks",
    date: "2nd December 2020",
    description:
      "Interactive web app translating English to Swedish chef accent using a free translation API.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-chefspeaks.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_L3_ChefSpeaks" },
    ],
  },
  {
    title: "Speak Banana",
    date: "1st December 2020",
    description:
      "Interactive web app translating English to Minion Banana language using a free translation API.",
    category: "Vanilla JS",
    links: [
      { label: "Live", href: "https://supminn-neog-bananaspeak.netlify.app/" },
      { label: "Source", href: "https://github.com/supminn/neoG_L3_VanillaJS" },
    ],
  },
  {
    title: "Is your DoB a prime number.",
    date: "24th November 2020",
    description: "A short CLI quiz checking if a date of birth is a prime number.",
    category: "CLI",
    links: [
      {
        label: "Quiz",
        href: "https://repl.it/@supriyaminn/DoB-isPrime?embed=1&output=1",
      },
      {
        label: "Source",
        href: "https://repl.it/@supriyaminn/DoB-isPrime#index.js",
      },
    ],
  },
  {
    title: "Are you born on a leap year?",
    date: "23rd November 2020",
    description:
      "A small CLI quiz that tells you if you were born on a leap year.",
    category: "CLI",
    links: [
      {
        label: "Quiz",
        href: "https://repl.it/@supriyaminn/Born-in-prime-year?embed=1&output=1",
      },
      {
        label: "Source",
        href: "https://repl.it/@supriyaminn/Born-in-prime-year#index.js",
      },
    ],
  },
  {
    title: "Multi-level Quiz",
    date: "18th November 2020",
    description:
      "A three-level CLI quiz where the user chooses between two available quizzes.",
    category: "CLI",
    links: [
      {
        label: "Quiz",
        href: "https://repl.it/@supriyaminn/multiLevel-multiple-quiz?embed=1&output=1",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/neoG-L1-Multi-level-quiz",
      },
    ],
  },
  {
    title: "Do you know Supriya?",
    date: "16th November 2020",
    description: "A short CLI quiz testing how well someone knows Supriya.",
    category: "CLI",
    links: [
      {
        label: "Quiz",
        href: "https://repl.it/@supriyaminn/Do-you-know-me?embed=1&output=1",
      },
      {
        label: "Source",
        href: "https://github.com/supminn/neoG-L1-Do-you-know-me",
      },
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Decoding StyleX: Meta's Cutting-Edge Styling System",
    date: "10th November 2024",
    description:
      "An introduction to Meta's styling system and what makes it interesting for frontend teams.",
    links: [
      { label: "Hashnode", href: "https://supminn.hashnode.dev/decoding-stylex" },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/decoding-stylex-metas-cutting-edge-styling-system-1d8l",
      },
    ],
  },
  {
    title: "Module Federation using ViteJS",
    date: "5th January 2024",
    description:
      "A walkthrough for stepping into micro-frontend architecture with ViteJS.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/module-federation-using-vitejs",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/module-federation-using-vitejs-step-into-the-micro-frontend-architecture-2peb",
      },
    ],
  },
  {
    title: "An Introduction to Monorepos: Simplifying Code Management",
    date: "13th December 2023",
    description:
      "Notes from lerna upgrades and Nx workspaces while working with monorepos.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/an-introduction-to-monorepos",
      },
    ],
  },
  {
    title: "Introduction to React Server Components",
    date: "29th July 2023",
    description:
      "A practical overview of how React Server Components work and where they fit.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/introduction-to-react-server-components",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/introduction-to-react-server-components-394",
      },
    ],
  },
  {
    title: "Simplify your lists using CSS Counters",
    date: "14th June 2023",
    description:
      "Using counter-increment and counter-reset to style lists with less ceremony.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/introduction-to-css-counters",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/simplify-your-lists-using-css-counters-9m8",
      },
    ],
  },
  {
    title: "My learnings from the Hashnode Bootcamp",
    date: "3rd May 2023",
    description: "Takeaways from Hashnode's technical bootcamp.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/my-learnings-from-hashnode-bootcamp",
      },
    ],
  },
  {
    title: "Setting up React Native development environment",
    date: "22nd April 2023",
    description:
      "A write-up on the challenges and fixes found while setting up React Native locally.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/setting-up-react-native-development-environment",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/setting-up-react-native-development-environment-3mjl",
      },
    ],
  },
  {
    title: "Pointer Events in JavaScript",
    date: "4th March 2023",
    description: "Understanding pointer capture events in JavaScript.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/pointer-events-in-javascript",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/pointer-events-in-javascript-1lol",
      },
    ],
  },
  {
    title: "What are Progressive Web Applications? Get started with creating PWA",
    date: "25th June 2022",
    description:
      "Learning notes from converting a web app module into a progressive web app.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/what-are-progressive-web-applications-get-started-with-creating-pwa",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/what-are-progressive-web-applications-get-started-with-creating-pwa-184b",
      },
    ],
  },
  {
    title: "Introduction to Web Performance",
    date: "17th June 2022",
    description: "A primer on web performance and its core metrics.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/introduction-to-web-performance",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/introduction-to-web-performance-bk6",
      },
    ],
  },
  {
    title: "Combining multiple reducers in React",
    date: "18th March 2022",
    description: "Keeping useReducer code clean by composing multiple reducers.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/combining-multiple-reducers-in-react",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/combining-multiple-reducers-in-react-3ple",
      },
    ],
  },
  {
    title: "My journey on building a full-stack application",
    date: "20th February 2022",
    description:
      "A Netlify x Hashnode hackathon article about building one of the full-stack apps in this portfolio.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/my-journey-on-building-a-full-stack-application",
      },
    ],
  },
  {
    title: "Add this key feature to your eCommerce application in 3 simple steps",
    date: "25th December 2021",
    description:
      "Implementing an eCommerce checkout section with Stripe payment gateway integration.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/add-this-key-feature-to-your-ecommerce-application-in-3-simple-steps",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/add-this-key-feature-to-your-ecommerce-application-in-3-simple-steps-4cok",
      },
    ],
  },
  {
    title: "Promisification",
    date: "17th June 2021",
    description: "Writing an implementation of util.promisify().",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/polyfill-for-promisify",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/polyfill-for-promisify-g9b",
      },
    ],
  },
  {
    title: "UseState - React Hook",
    date: "17th May 2021",
    description:
      "An introduction to the useState hook for stateful React function components.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/usestate-react-hook",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/usestate-react-hook-pd",
      },
    ],
  },
  {
    title: "Garbage Collection in JavaScript",
    date: "6th February 2021",
    description: "Understanding how memory management happens in JavaScript.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/garbage-collection-in-javascript",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/garbage-collection-in-javascript-56e0",
      },
    ],
  },
  {
    title: "Get started with functions in JavaScript",
    date: "7th January 2021",
    description: "The basics of defining and calling functions in JavaScript.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/functions-in-javascript",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/get-started-with-functions-in-javascript-479h",
      },
    ],
  },
  {
    title: "Minion translation webapp",
    date: "15th December 2020",
    description: "Creating a Minion translation app with JavaScript.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/develop-the-minion-translation-web-app",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/develop-the-minion-translation-web-app-14n3",
      },
    ],
  },
  {
    title: "Introduction to Qlik Sense",
    date: "7th December 2020",
    description: "Creating dashboards in Qlik Sense, a BI software platform.",
    links: [
      {
        label: "Hashnode",
        href: "https://supminn.hashnode.dev/qlik-sense-dashboard-development",
      },
      {
        label: "Dev.to",
        href: "https://dev.to/supminn/qlik-sense-dashboard-development-5556",
      },
    ],
  },
  {
    title: "Beautify with CSS",
    date: "4th December 2020",
    description: "Enhancing the appearance of a web app with CSS.",
    links: [{ label: "Read", href: "/blog-on-css.html" }],
  },
  {
    title: "Beginning with HTML",
    date: "3rd December 2020",
    description: "Learning to create a first webpage with HTML.",
    links: [{ label: "Read", href: "/blog-on-html.html" }],
  },
];

export const talks = [
  "https://www.youtube.com/embed/RmFzY6XfgDs",
  "https://www.youtube.com/embed/1_XUsk2cQ5Y",
  "https://youtube.com/embed/GSXLXuDviWQ?t=815",
  "https://www.youtube.com/embed/ypKBS5w6X7s",
  "https://www.youtube.com/embed/d36eeq0w1ug",
];
