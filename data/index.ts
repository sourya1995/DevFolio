import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize open communication, and continuous cadence with stakeholders.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/Designer.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm highly flexible with varying time zone communications.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I am a learner with a passion to build products from the ground up.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "How to build a Distributed Database from scratch",
    description: "I'm currently learning",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/carbon2.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Banking System Microservices",
    des: "A suite of event-driven microservices written in Quarkus, using Kafka for messaging and Kubernetes for deployment.",
    img: "/quarkus.svg",
    iconLists: [
      "/Quk.svg",
      "/PostgresSQL.svg",
      "/kafka.svg",
      "/java.svg",
      "/JUnit.svg",
      "/Kubernetes.svg",
    ],
    link: "https://t.ly/ByeWw",
  },
  {
    id: 2,
    title: "Kafka From Scratch",
    des: "An Apache Kafka like messaging system, built from scratch using Java.",
    img: "/MQ.svg",
    iconLists: ["/java.svg"],
    link: "https://t.ly/VOWp4",
  },
  {
    id: 3,
    title: "ScratchChain",
    des: "A blockchain implementation from scratch in Go, including wallets and signature verification.",
    img: "/th4.svg",
    iconLists: ["/golang-1.svg"],
    link: "https://t.ly/SI2VM",
  },
  {
    id: 4,
    title: "URL Shortener",
    des: "An app to shorten URLs, written in Go.",
    img: "/th3.svg",
    iconLists: ["/golang-1.svg"],
    link: "https://t.ly/Ztfa1",
  },
];

export const testimonials = [
  {
    quote:
      "Sourya is a diligent and adaptable individual with a remarkable ability to grasp and apply complex concepts. His extensive tech stack proficiency and proactive approach to understanding systems from the ground up make him an invaluable asset to any team.",
    name: "Anusha Sridharan",
    title: "Lead - Software Engineering, Fidelity Investments",
  },
  {
    quote:
      "Sourya is a dedicated and passionate engineer. He is my go-to person for all questions regarding my personal projects due to his extensive knowledge of various technologies and frameworks. His expertise in Java is particularly remarkable.",
    name: "Trishul S. Gowda",
    title: "Principal - Software Engineering, Fidelity Investments",
  },
  {
    quote:
      "Sourya would be a fantastic addition to any team. His exceptional work ethic, dedication and positive attitude can be of value to other team members. His contribution can highly likely lead to positive results.",
    name: "Vijay Chandra",
    title: "Principal - Software Engineering, Fidelity Investments",
  },
  {
    quote:
      "I have known Sourya since our days at school. He has always been a hard-working, detail-oriented person. Having him in a team ensures that the stakeholders benefit from his meticulous work ethics, and eagerness to get better at his skillset every day. I would recommend him for any scale of operations involved.",
    name: "Ajay Baliga",
    title: "Founding Team, PrivateCircle",
  },
  {
    quote:
      "I've known Sourya since the LEAP program and have been consistently impressed by his engineering expertise and enthusiasm for building great products. He actively engages in technical discussions and assists with challenging tasks. His insights during our breaks reveal a deep understanding of problems. Any team would benefit greatly from having him.",
    name: "Shikhar Trivedi",
    title: "Lead - Software Engineering, Fidelity Investments",
  },
];

export const companies = [
  {
    id: 1,
    name: "Fidelity Investments",
    img: "/cloud.svg",
    nameImg: "/fidelity-investment-1.svg",
  },
  {
    id: 2,
    name: "NKSquared",
    img: "/NK.svg",
    nameImg: "/NKSQR.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "DevOps Engineer",
    desc: "Implemented and maintained scalable CI/CD pipelines, automated infrastructure using IaC tools, and optimized cloud deployments to ensure high availability and security.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer",
    desc: "Designed and developed robust, scalable RESTful APIs, optimized database performance, and ensured seamless integration with front-end applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    desc: "Developed end-to-end web applications, including responsive front-end interfaces and efficient back-end services, ensuring consistent user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cross Platform Engineer",
    desc: "Developed and optimized cross-platform mobile applications, ensuring consistent functionality and performance across iOS and Android devices.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/sourya1995",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/SouryaBhattac10",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/sourya-bhattacharya/",
  },
];
