// Website related settings
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
  title: "Sujeet Jawale",
  logo_name: "Sujeet Jawale",
  nickname: "Software Developer",
  subTitle:
    "Give me a problem, and I'll paint you a masterpiece of unconventional solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1hV9DEivlRqRGOys9xE9eR6Mo4SSgrrIh/view?usp=sharing",
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
    link: "mailto:sjawale@usc.edu",
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
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "🖥️ Building robust backend systems using Java, Spring Boot & MVC, and Spring Security 6 to ensure secure and efficient applications",
        "🖥️ Implementing RESTful APIs with a focus on maintainability and performance, and utilizing JUnit and Mockito for high code quality",
        "🖥️ Architecting Microservices with Spring Boot, integrating Admin Server, Config Server, Zipkin, Redis, and Kafka for tracing, caching, and event-driven architecture",
        "🖥️ Enhancing API discoverability using HATEOAS and Actuators to ensure scalability, fault tolerance, and effective monitoring.",
      ],
      softwareSkills: [
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
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
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
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
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
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
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
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
      title: "Frontend & DA",
      fileName: "DataScienceImg",
      skills: [
        "🖥️ Expert in using HTML, CSS, and JavaScript to create dynamic, responsive websites for engaging user experiences.",
        "🖥️ Proficient in leveraging React to build interactive, high-performance web applications",
        "🖥️ Skilled in crafting and understanding intricate data models to guide strategic decisions in diverse business areas.",
        "🖥️ Experienced in using data visualization tools like Tableau, Power BI, and Looker to create clear dashboards and reports for all stakeholders.",
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
      subtitle: "Master of Science in Computer Technology (Analytics)",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2023-Present",
      descriptions: [
        "🖥️ Graduating in May 2025",
        "🖥️ Courses: ISE-558 Data Management for Analytics, ISE-529 Predictive Analytics, ISE-530 Optimization for Analytics, ISE-548 Enterprise Business Intelligence Systems Analytics",
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
          company: "STEALH STARTUP",
          company_url: "",
          logo_path: "stealth.jpeg",
          duration: "May 2024 - August 2024",
          location: "United States",
          description: [
            "Enhanced notification effectiveness by 25% with WhatsApp API integration, improved cloud-native security with Java Spring rate limiting reducing attack risk by 45% and costs by 23%, refined login API rate-limiting with JPA composite keys.",
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
            "Successfully led key enhancements in Windchill's Import Export Framework, optimized data export efficiency by 25%, ensured seamless Java 11 to 17 migration, improved user satisfaction by 40%, and mentored interns to achieve a 30% reduction in deployment time with zero downtime during releases.",
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
            "Refined code to meet client specifications, led JUnit and integration testing with 90% coverage in CI/CD, reduced post-deployment issues by 25%, improved code quality using SonarQube, streamlined logging with Log4j for a 20% faster issue resolution, and enhanced API documentation with Swagger, boosting integration efficiency by 15%.",
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
          location: "Pune, Mharashtra, India",
          description: [
            "Managed product catalog development with ETL, SQL, and Tableau, boosting product quality and saving costs, analyzed key projects like a Covid-19 study with SQL and Python, and improved data science workflows by 15% with enhanced Tableau visualizations.",
          ],
          color: "#D83B01",
        },
        {
          title: "Data Science And Business Analytics Intern",
          company: "The Spark Foundation",
          company_url: "https://internship.thesparksfoundation.info/",
          logo_path: "TSF_logo.jpg",
          duration: "January 2021 - February 2021",
          location: "Pune, Mharashtra, India",
          description:
            "Collaborated on a database-driven projects. Data Science and Business Analytics Intern in TSF, Here we got training for one month and then we worked on two major projects. From data preprocessing and feature engineering to employing advanced machine learning algorithms, I thrived in the exploration and interpretation of data to unearth meaningful patterns and trends. 💡 My passion for data-driven problem-solving was further fueled by the impact these projects had on real-world challenges.",
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
            "Developed a Spring Boot application with PostgreSQL for employee management, enhancing user management and audit data, while strengthening JWT authentication and integrating OAuth with the latest Spring Security updates, leading to a 30% increase in user access.",
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
          company: "PCCOE ACM Student Chapter",
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
    subtitle: "sjawale@usc.edu ",
    email2: "jawalesujeet10@gmail.com",
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
