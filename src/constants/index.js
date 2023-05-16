import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jslogo,
  infosys,
  pulogo,
  lambton,
  bootstrap,
  travelApp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: jslogo,
  },
  {
    title: "Mobile App Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "BootStrap 5",
    icon: bootstrap,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "System Engineer",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#ffffff",
    date: "September 2020 - December 2021",
    points: [
      "Programmed end-to-end Web application development using React and NodeJ for an insurance company in Canada in 5 months.",
      "Developed front-end code using ReactJS, Sass, and BootStrap for designs provided in Figma and AdobeXD.",
      "Standardized WCAG level AA accessibility for applications. ",
      "Using Jest and Enzyme, worked on test cases for application units. Integrated CMS using GraphQL.",
      "Used JIRA, Panaya, Git, and GitLab tools while working on projects.",
      "Upgraded UI components of Canada Buys application in drupal and supported in frontend site.",
    ],
  },
  {
    title: "Intern",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#ffffff",
    date: "Jan 2020 - April 2020",
    points: [
      "Got training for 3 months from industry experts in the latest technologies: Java Spring boot, SQL, HTML5, CSS, Bootstrap, and ReactJS.",
      "Successfully cleared their training examinations.",
    ],
  },
];

const educations = [
  {
    title: "Post-Graduate Diploma",
    company_name: "Lambton College",
    branch: "Mobile Application Design and Development",
    icon: lambton,
    iconBg: "#ffffff",
    date: "2022 - 2023",
    cgpa: "3.5/4",
  },
  {
    title: "Bachelor of Engineering",
    company_name: "Panjab University, Chandigarh",
    branch: "Computer Science",
    icon: pulogo,
    iconBg: "#ffffff",
    date: "2016-2020",
    cgpa: "7.54/10",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel App",
    description:
      "Mobile Travel application that helps users look for hotels, restaurants, and places of attraction anywhere on Earth",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travelApp,
    source_code_link: "https://github.com/prashantlakha/travel-app.git",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
};
