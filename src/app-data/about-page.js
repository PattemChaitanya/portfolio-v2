const selfIntro = {
  para1:
    "I am passionate about creating exceptional user experiences. After a period focused on travel, family, and continuous learning, I'm eager to bring my refreshed perspective to a product-focused company.",
  para2:
    "My goal is to contribute as a valuable member of a product team, applying my expertise in React, Node.js, and UI design while learning from colleagues. Together, we can create meaningful products that enrich lives.",
  para3:
    "Professionally, I specialize in HTML, CSS, and JavaScript, developing dynamic single-page applications. I excel at translating UI/UX designs into functional web interfaces, building reusable React components, and crafting responsive layouts optimized for mobile devices. My track record demonstrates effective team collaboration and consistently delivering high-quality products within deadlines.",
};

const professionallySkills = {
  pointsToShow: [
    "Developed comprehensive form validation, enhancing user experience with client-side JavaScript error handling and preventing invalid data submissions.",
    "Designed a modular architecture that streamlined development, ensuring seamless integration with other products while optimizing scalability and maintainability.",
    "Improved load times and user interface responsiveness, delivering a faster and more intuitive experience for features like recipe management and IoT integration.",
    "Optimized complex data structures to boost performance, ensuring efficient data processing and display in frontend layers.",
    "Ensured accurate data transformations and migrations, maintaining reliable data handling within frontend components.",
    "Built a scalable and maintainable UI platform, reducing technical debt and accelerating feature delivery.",
    "Led and mentored junior developers, ensuring high coding standards and timely delivery of high-quality UI components.",
    "Actively collaborated with product owners during sprint planning, prioritizing tasks and optimizing team efficiency for project delivery on platforms like Klynk.recipes and Riku.",
  ],
  skills: {
    Frontend: ["React", "Electron.js", "Material UI"],
    Backend: ["Node.js", "Express.js", "Python"],
    Databases: ["MongoDB", "Firebase", "Redis"],
    DevOps: ["Webpack", "Git", "Google Cloud"],
    Other: [
      "Data Modulation",
      "Data Structures",
      "Algorithms",
      "Redux Toolkit",
      "Sprint Planning",
    ],
  },
};

const toShowInModel = {
  1: {
    role: "Software Developer",
    company: "Futuristic labs",
    location: "Hyderabad, TS.",
    projects: [
      {
        name: "Klynk recipes",
        pointsToShow: [
          "Implemented input validation and error handling using React and Node.js, significantly reducing data quality issues and ensuring reliable data submission.",
          "Designed and developed a modular web architecture with React, Express.js, and Webpack, enabling seamless integration with other products and accelerating feature development.",
          "Ensured data integrity during migration and transformation processes using Firebase, maintaining reliable data handling throughout the system.",
          "Built a scalable platform from the ground up using Node.js and Redux Toolkit, significantly reducing technical debt and adhering to industry best practices.",
          "Led and mentored junior developers, facilitating task delegation and ensuring timely delivery of project objectives through Agile methodologies and sprint planning.",
        ],
      },
      {
        name: "Riku",
        pointsToShow: [
          "Worked on automating cooking processes to enhance user convenience, allowing for a hands-free cooking experience. This innovation reduces the need for constant monitoring, enabling users to multitask effectively.",
          "Enhanced responsiveness and reduced processing times for IoT applications by building core functionalities for recipe management and instruction generation with Node.js and Electron.js.",
          "Collaborated with cross-functional teams to create backend services that optimize AI-driven content for the appliance, enhancing the personalization and adaptability of cooking experiences.",
          "Contributed to the design and implementation of an intuitive touchscreen interface that simplifies recipe navigation and cooking controls, enhancing overall user engagement and satisfaction.",
        ],
      },
    ],
  },
};

const personalSkills = {
  personalPara: "Campara",
  skills: [
    "Data structure",
    "Algorithms",
    "SQL",
    "Redis",
    "API Creation",
    "NextJs",
  ],
};

export { selfIntro, professionallySkills, personalSkills, toShowInModel };
