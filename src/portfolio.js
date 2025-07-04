const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sujeet's Portfolio",
  description: "Creating an impact with end to end products.",
  og: {
    title: "Sujeet Jawale Portfolio",
    type: "website",
    url: "http://sujeetjawale.me/",
  },
};

//Home Page
const greeting = {
  title: "Hi, I’m Sujeet",
  logo_name: "Sujeet Jawale",
  nickname: "Software Engineer",
  subTitle:
    "Turning coffee into scalable solutions and bugs into features since 2022",
  resumeLink:
    "https://drive.google.com/file/d/1WhAPPewD5Z8DP6pMdm8NAFySWOdYJiH3/view?usp=drive_link",
  portfolio_repository: "https://github.com/SujeetJawale/SJ_Portfolio/",
  githubProfile: "https://github.com/SujeetJawale/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/SujeetJawale/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sujeetjawale/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCvdqYp4KAaAUIlsyqNk9HKQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:jawalesujeet10@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sujeet_jawale/?next=%2F",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🖥️ Building stable and responsive website front end using React-Redux and NextJS.",
        "🖥️ Designing extensible and easy-to-use RESTful APIs using Java Spring Framework.",
        "🖥️ Creating high-performance application backends using Node.js, Express, and Flask.",
        "🖥️ Architecting scalable and efficient systems with microservices architecture.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#a56642",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f05133",
          },
        },
        {
          skillName: "JUnit",
          fontAwesomeClassname: "simple-icons:junit5",
          style: {
            color: "#25A162",
          },
        },
      ],
    },
    {
      title: "Database & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "🖥️ Experience working on multiple Databases and multiple cloud platforms",
        "🖥️ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "🖥️ Developing CI/CD Pipelines for automated code build, test, and deploy processes",
      ],
      softwareSkills: [
        {
          skillName: "MYSQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Analytics",
      fileName: "DataScienceImg",
      skills: [
        "🖥️ Expertise in Power BI and Tableau to create dashboards and reports for data-driven decisions.",
        "🖥️ Skilled in SQL for querying and managing large datasets to extract actionable insights.",
        "🖥️ Experienced in designing databases, ETL processes, and DAX commands for analytics.",
        "🖥️ Proficient in Python for data analysis, automation, and building predictive models to drive business solutions.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#ffa117",
      },
      profileLink: "https://leetcode.com/sjawale/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "hhttps://www.hackerrank.com/jawalesujeet10?hr_r=1",
    // },
    // {
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science in Computer Science (Analytics)",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2023-2025",
      descriptions: [
        "🖥️ Graduated in May 2025",
        "🖥️ Courses: CSCI-571 Web Technologies, ISE-558 Data Management, ISE-529 Predictive Analytics, ISE-530 Optimization for Analytics, ISE-548 Enterprise Business Intelligence Systems Analytics, ISE-540 Text Analytics, ISE-534 Data Analytics and Consulting",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Pimpri Chinchwad College of Engineering",
      subtitle: "Bachelor of Engineering in Computer Science",
      logo_path: "pccoe_logo1.png",
      alt_name: "PCCOE",
      duration: "2018-2022",
      descriptions: [
        "🖥️ Graduated with Distinction",
        "🖥️ Third Year Engineering topper with a GPA of 4/4.",
        "🖥️ Courses: Data Mining and Warehouse, Machine Learning, Web Technology, Artificial Intelligence and Robotics, Database Management Systems, Computer Networks, Operating Systems, Theory of Computation, Software Engineering & Project Management, Cloud Computing, Data Science and Big Data Analytics, Computer Organization and Architecture, High Performance Computing",
      ],
      website_link: "http://www.pccoepune.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Spring Boot and Mircorservices",
      subtitle: "Telusko",
      logo_path: "telusko.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3e970fe5fcd25381d33ec19336cc2d98485e820595b9a3f08ce29b8cc12baa5c?u=76870426",
      alt_name: "Spring Boot",
      color_code: "#fff",
    },
    {
      title: "Learning Spring with Spring Boot",
      subtitle: "Frank P Moley III",
      logo_path: "LinkedinL.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3e970fe5fcd25381d33ec19336cc2d98485e820595b9a3f08ce29b8cc12baa5c?u=76870426",
      alt_name: "Spring Boot",
      color_code: "#fff",
    },
    {
      title: "Advance Java Programming",
      subtitle: "Bethan Palmer",
      logo_path: "LinkedinL.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/3a031ef5a2ce34cd5931acb6e88a6ee69d2f63f6511556a5977bd285e7c47311",
      alt_name: "Java",
      color_code: "#fff",
    },
    {
      title: " Practical Web Design & Development",
      subtitle: "- Creative Online School",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b9491b9a-9802-46bf-845b-330e23c30330/",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "Python for Everybody",
      subtitle: "- Charles Severance",
      logo_path: "MICH_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/XMD47L8YEEGL",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Using Databases with Python",
      subtitle: "- Charles Severance",
      logo_path: "MICH_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/6CH67D3L4PA4",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title:
        "Capstone: Retrieving, Processing, and Visualizing Data with Python",
      subtitle: "- Charles Severance",
      logo_path: "MICH_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BVG2MAEL98RB",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science Methodology",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/W526L3DZU5V8",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Applied Data Science Capstone",
      subtitle: "- Yan Luo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/HGCNUUEAG7Y2",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Machine Learning with Python",
      subtitle: "- Saeed Aghabozorgi",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/23BWHL8LN7YT",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/VXMBS6TVFDVB",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "The Complete SQL Course 2020",
      subtitle: "- Web Coding",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-29132c69-06bd-4b82-8bac-ce520ff8d4c1.pdf",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Developer for emerging start-ups as well as established product based American based MNCs. Through these experiences, I learnt about working with diverse teams, and tight deadlines. I also enjoy volunteering for social work and organising events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "STEALH STARTUP - Internship",
          company_url: "",
          logo_path: "stealth.jpeg",
          duration: "May 2024 - December 2024",
          location: "United States",
          description: [
            "Redesigned key front-end components in React using Google Analytics insights, improving user flow and reducing bounce rate by 15%.",
            "Implemented Redis caching for high-frequency endpoints, decreasing data fetch time by 30% and improving application responsiveness.",
            "Introduced rate limiting on checkout APIs in a cloud-native setup, mitigating automated abuse and reducing fraudulent activity by 45%.",
            "Built real-time notification system with Twilio’s WhatsApp and SMS APIs, lowering delivery-related support tickets by 25% and boosting customer satisfaction scores by 10 points.",
          ],
          color: "#0879bf",
        },
        {
          title: "Associate Software Developer",
          company: "PTC Software Pvt Ltd.",
          company_url: "https://www.ptc.com/en",
          logo_path: "ptc_logo.jpg",
          duration: "July 2022 - July 2023",
          location: "Pune, Maharashtra",
          description: [
            "Developed Spring MVC-based microservices for Windchill PLM, replacing legacy modules and reducing data transfer time by 25%.",
            "Engineered pagination in the export wizard with async data loading, cutting load time by 40% and enhancing UX during bulk operations.",
            "Led Java 11 to 17 migration of service modules, resolving compatibility issues and accelerating feature delivery by 20%.",
            "Ported critical bug fixes and features across versions, reducing recurring support tickets by 35% and saving 10 hours/week of rework.",
          ],
          color: "#0879bf",
        },
        {
          title: "Research and Development Intern",
          company: "PTC Software Pvt Ltd. - Internship",
          company_url: "https://www.ptc.com/en",
          logo_path: "ptc_logo.jpg",
          duration: "August 2021 - June 2022",
          location: "Pune, Maharashtra",
          description: [
            "Achieved 90% Java 11 test coverage through Jenkins-integrated CI/CD pipelines, deploying SonarQube via EKS and Helm to enforce coding standards and reduce vulnerabilities by 30%.",
            "Collaborated with cross-functional teams to transition to SaaS, eliminating redundancies and cutting load time from 250ms to 18ms.",
            "Automated product setup using a custom Bash script, reducing installation time by 40% and streamlining local development workflows.",
            "Implemented Log4j logging across core components, enhancing observability and reducing critical issue resolution time by 25%.",
          ],
          color: "#D83B01",
        },
        {
          title: "Data Science and Business Analytics Intern",
          company: "Knowledge Solution India",
          company_url:
            "https://www.linkedin.com/company/knowledge-solutions-india/",
          logo_path: "KSI_logo.jpg",
          duration: "February 2021 - May 2021",
          location: "Pune, Maharashtra, India",
          description: [
            "Managed product catalog development with ETL, SQL, and Tableau, boosting product quality and reducing operational costs.",
            "Analyzed key projects such as a COVID 19 study using SQL and Python to extract actionable insights.",
            "Enhanced data science workflows by 15% through the creation of advanced Tableau dashboards and visualizations.",
          ],
          color: "#D83B01",
        },
        {
          title: "Software Development Intern",
          company: "ABS Certifications India Pvt. Ltd. Partner - TUV Austria",
          company_url:
            "https://www.linkedin.com/company/abs-certifications-india-pvt-ltd-pune/",
          logo_path: "TUV_logo.jpeg",
          duration: "August 2020 - January 2021",
          location: "Pune, Maharashtra",
          description: [
            "Architected a Spring Boot application for employee management using Java and OOD principles, optimizing PostgreSQL storage.",
            "Tested application features with 50+ cases, identified critical bugs, and ensured 100% coverage for core workflows.",
            "Built scalable Python pipelines to automate data processing, eliminating 7 hours of manual effort per week.",
            "Documented code and created developer guides to streamline onboarding and improve team-wide knowledge sharing.",
          ],
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Art of Living AOL",
          company: "AOL - Social Service",
          company_url: "http://www.pccoepune.com/",
          logo_path: "AOL.png",
          duration: "August 2023 - present",
          location: "Los Angeles, California",
          description:
            " I organized various spiritual gatherings and meditation workshops, fostering community and personal growth. My role was pivotal in creating serene environments for attendees to explore mindfulness and inner peace.",
          color: "#D83B01",
        },
        {
          title: "Training and Placement Cell (Overall Volunteer)",
          company: "PCCOE",
          company_url: "http://www.pccoepune.com/",
          logo_path: "pccoe_logo1.png",
          duration: "June 2019 - June 2021",
          location: "Pune, Maharashtra, India",
          description:
            "Manages and coordinates recruitment drives by meticulously organizing and overseeing every phase of the process. This includes scheduling and conducting preliminary meetings, administering aptitude tests to assess candidates' skills, and facilitating comprehensive interviews. Works closely with a team of volunteers to ensure all logistical aspects are handled efficiently, from the initial outreach to potential candidates through to the final panel interviews. This role involves coordinating various elements such as preparing assessment materials, arranging interview schedules, and ensuring effective communication between candidates and the recruitment team. By managing these processes, the aim is to create a seamless and efficient recruitment experience, ultimately attracting and selecting the best talent for the organization.",
          color: "#D83B01",
        },
        {
          title: "PCCOE Sports Head",
          company: "ACM Student Chapter",
          company_url: "http://www.pccoepune.com/",
          logo_path: "ACM_logo.jpg",
          duration: "July 2020 - July 2021",
          location: "Pune, Maharashtra, India",
          description: [
            "As the Sports Head at PCCOE ACM Student Chapter for 2020-21, I was responsible for organizing and overseeing a range of dynamic sports tournaments and events, ensuring every detail was meticulously handled from planning to execution. My role involved coordinating with volunteers, managing logistics, and creating a platform for students to showcase their skills and sportsmanship. I focused on expanding opportunities for engaging activities, which not only enriched the student experience but also fostered a strong sense of community and enthusiasm within the chapter. Witnessing the passion and dedication of participants was immensely rewarding and underscored the success of our initiatives",
          ],
          color: "#D83B01",
        },
        {
          title: "PCCOE Sports Cell Coordinator",
          company: "PCCOE ACM Student Chapter",
          company_url: "http://www.pccoepune.com/",
          logo_path: "ACM_logo.jpg",
          duration: "June 2019 - July 2020",
          location: "Pune, Maharashtra, India",
          description:
            "Sports Cell Coordinator - PCCOE ACM Student Chapter for the year 2019-20.",
          color: "#D83B01",
        },
        {
          title: "Food Commity, Mentor",
          company: "KPIT",
          company_url: "https://www.kpit.com/",
          logo_path: "KPIT_logo.jpg",
          duration: "Feb 2020",
          location: "Pune, Maharashtra, India",
          description:
            "The Food Committee for the KPIT Sparkle event held at PCCOE. Managing the food for all the teams, staff, and students. ",
          color: "#D83B01",
        },
        {
          title: "National Service Scheme Volunteer",
          company: "NSS",
          company_url: "https://nss.gov.in/",
          logo_path: "NSS_logo.jpg",
          duration: "July 2020 - July 2021",
          location: "Pune, Maharashtra, India",
          description: "Civil Rights and Social Action. ",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Hobbies",
      experiences: [
        {
          title: "Gym",
          company: "",
          logo_path: "gym_logo.jpg",
          description:
            "I enjoy Gyming as a sport. I spend atleast 2 hours a day in gym 5 times a week. Do a high-intensity workout and it's a good way to relax and feel good.",
          color: "#D83B01",
        },
        {
          title: "eSports",
          company: "",
          logo_path: "BGMI_logo.jpg",
          description:
            "I enjoy playing competitive games like BGMI and Valorant. I have participated and Organized in multiple Valorant tournaments. Have Achieved ACE in BGMI and Gold in Valorant.",
          color: "#D83B01",
        },
        {
          title: "Photography",
          company: "",
          logo_path: "camera.png",
          description:
            "I'm always carrying a camera around. Even as a hobby, photography has the power to lift people's spirits and help them look at things from a different perspective.",
          color: "#D83B01",
        },
        {
          title: "Trekking",
          company: "",
          logo_path: "TREK_logo.jpg",
          description:
            "Always been a Nature Lover. On weekends, I love going on long Treks with my friends. We all trek for different reasons, and sometimes for all the reasons: fun, adventure, to bond with friends, to relax, meditation, to make the commute more interesting,. The reasons are infinite.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Through my projects, I aim on solving real world problems. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pp.png",
    description:
      "Open to work as a Software Developer for New Grad 2025 roles. You can get in touch with me on my email :)",
  },

  addressSection: {
    title: "Email Address",
    subtitle: "jawalesujeet10@gmail.com",
    email2: "sjawale@usc.edu",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1(213)6572374",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
