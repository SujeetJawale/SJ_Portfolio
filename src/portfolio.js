// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sujeet's Portfolio",
  description:
    "Creating an impact with end to end products.",
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
  nickname: "Su_Jeet",
  subTitle:
    "Give me a problem, and I'll paint you a masterpiece of unconventional solutions.",
  resumeLink: "https://drive.google.com/file/d/1TawXBGqxSgFgzqNYG_54BzmYllMWSmJg/view?usp=drive_link",
  portfolio_repository: "https://github.com/SujeetJawale/SJ_Portfolio/",
  githubProfile: "https://github.com/SujeetJawale/",
};

const socialMediaLinks = [
  /* Your Social Media Link to copy*/
  // github: "https://github.com/SujeetJawale/",
  // linkedin: "https://www.linkedin.com/in/sujeetjawale/",
  // gmail: "sjawale@usc.edu",
  // gitlab: "",
  // facebook: "https://www.facebook.com/sujeet.jawale.3",
  // twitter: "https://twitter.com/JawaleSujeet",
  // instagram: "https://www.instagram.com/sujeet_jawale/?next=%2F"

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
    name: "Twitter",
    link: "https://twitter.com/JawaleSujeet",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sujeet.jawale.3",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
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
        "⚛️ Building stable and responsive website front end using React-Redux and AngularJS",
        "⚛️ Designing extensible and easy to use APIs using Django-Rest Framework",
        "⚛️ Creating scalable and fast application backends in Django, Flask, Node and Express",
        "⚛️ Developing mobile applications using Android, Flutter and React Native",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
        /*
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angularjs",
          style: {
            color: "#d6002f",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },*/
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f05133",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚛️ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚛️ Experience of working with Computer Vision and NLP projects",
        "⚛️ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚛️ Experience working on multiple cloud platforms",
        "⚛️ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚛️ Deploying deep learning models on cloud to use on mobile devices",
        "⚛️ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
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
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "hhttps://www.hackerrank.com/jawalesujeet10?hr_r=1",
    },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/prajwal600",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/prajwalpatankar",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science in Analytics",
      logo_path: "USC_logo.png",
      alt_name: "USC",
      duration: "2023-Present",
      descriptions: [
        "⚛️ Graduating in May 2025",
        "⚛️ Courses Taken : CSCI 544: Applied Natural Language Processing ,CSCI 570: Analysis of Algorithms, CSCI 571: Web Technologies, CSCI 585: Database Systems",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Pimpri Chinchwad College of Engineering",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "pccoe_logo1.png",
      alt_name: "PCCOE",
      duration: "2018-2022",
      descriptions: [
        "⚛️ CGPA : 3.70 / 4",
        "⚛️ Third Year Engineering topper with a GPA of 4/4.",
        "⚛️ Course Work : Data Mining and Warehouse, Machine Learning, Web Technology, Artificial Intelligence and Robotics, Database Management Systems, Computer Networks, Operating Systems, Theory of Computation, Software Engineering & Project Management, Cloud Computing, Data Science and Big Data Analytics, Computer Organisation and Architecture, High Performance Computing",
      ],
      website_link: "http://www.pccoepune.com/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/897G6UVU2CAZ",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/VT63URVHX4WU",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#eeeeeeee",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/535PTCU6ESLT",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#eeeeeeee",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/WG8BQSY7TF3V",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#eeeeeeee",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/YB4SY2D828B6",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#eeeeeeee",
    // },
    // {
    //   title: "Front-End Web Development with React",
    //   subtitle: "- Jogesh Mupalla",
    //   logo_path: "thkuosat.png",
    //   certificate_link: "https://www.coursera.org/account/accomplishments/verify/EXCCLSQH7MZF",
    //   alt_name: "React",
    //   color_code: "#fff",
    // },
    // {
    //   title: "Programming Foundations with JavaScript, HTML and CSS",
    //   subtitle: "- Susan Roger",
    //   logo_path: "duke.jpg",
    //   certificate_link: "https://www.coursera.org/account/accomplishments/verify/SQ3KSY42GCTE",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#fff",
    // },
    // {
    //   title: "Java Programming: Principles of Software Design",
    //   subtitle: "- Robert Duvall",
    //   logo_path: "duke.jpg",
    //   certificate_link: "https://www.coursera.org/account/accomplishments/verify/U224JTFHTLBH",
    //   alt_name: "Java",
    //   color_code: "#fff",
    // },
    // {
    //   title: "Java Programming: Solving Problems with Software",
    //   subtitle: "- Owen Astrachan",
    //   logo_path: "duke.jpg",
    //   certificate_link: "https://www.coursera.org/account/accomplishments/verify/5AUKAZ59FUGZ",
    //   alt_name: "Java",
    //   color_code: "#fff",
    // },
    // {
    //   title: "Java Programming: Arrays, Lists, and Structured Data",
    //   subtitle: "- Andrew Hilton",
    //   logo_path: "duke.jpg",
    //   certificate_link: "https://www.coursera.org/account/accomplishments/verify/4A2MJPYD7WD5",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#fff",
    // },
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
      title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
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
      title: " Practical Web Design & Development",
      subtitle: "- Creative Online School",
      logo_path: "Udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b9491b9a-9802-46bf-845b-330e23c30330/",
      alt_name: "Udemy",
      color_code: "#D83B0199",
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
    /*{
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#eeeeeeee",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked as a Software Developer for emerging start-ups as well as established MNCs. Through these experiences, I learnt about working with diverse teams, and tight deadlines (especially at start-ups). I also enjoy volunteering for social work and organising events.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Associate Software Analyst",
          company: "PTC Software Pvt Ltd.",
          company_url: "https://www.ptc.com/en",
          logo_path: "ptc_logo.jpg",
          duration: "July 2022 - July 2023",
          location: "Pune, Maharashtra",
          description:
            "Worked as a PLM Team member, highly skilled and dedicated professional, I specialize in performing complex analysis, designing, and programming to effectively address and fulfill diverse business requirements. I take pride in my ability to develop, maintain, and manage sophisticated systems, software tools, and applications to optimize organizational processes. Was involved in the development and enhancement of the Business Administrative Change Module, a pivotal tool utilized for Import and Export purposes, along with the implementation of the Import Export Framework. With a proven track record of excellence in complex software development and a passion for driving business success, I am committed to delivering exceptional results and contributing significantly to organizational growth and innovation.",
          color: "#0879bf",
        },
        {
          title: "PCCOE Sports Head",
          company: "PCCOE ACM Student Chapter",
          company_url: "http://www.pccoepune.com/",
          logo_path: "ACM_logo.jpg",
          duration: "July 2020 - July 2021",
          location: "Pune, Maharashtra, India",
          description: "🏆 Proud to have served as the Sports Head at PCCOE ACM Student Chapter for the year 2020-21! 🎉. It was an exhilarating journey organizing and managing thrilling tournaments for our talented student community. Witnessing the passion and sportsmanship on display during these events was truly inspiring. Bringing new opportunities for exciting activities was a goal close to my heart, and seeing our peers engage and excel in these activities made it all worth it.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research and Development Intern",
          company: "PTC Software Pvt Ltd.",
          company_url: "https://www.ptc.com/en",
          logo_path: "ptc_logo.jpg",
          duration: "August 2021 - June 2022",
          location: "Pune, Maharashtra",
          description: "During my internship, I had the privilege of taking on challenging and impactful tasks that contributed to the development and enhancement of cutting-edge software solutions. One of my key responsibilities was conducting code analysis using SonarQ, where I identified critical issues and eliminated duplications, resulting in improved code quality and performance. I also delved into the realm of Unit and Integration Testing, leveraging my skills to ensure the reliability and robustness of the software. I actively contributed to resolving Software Problem Reports (SPRs), creating new Integration tests for specific features, thus addressing critical challenges and adding value to the product. This incredible journey has not only strengthened my technical prowess but also enriched my understanding of software development processes within a dynamic and innovative organization like PTC Software. I am excited to continue my journey, driving excellence and innovation in the realm of PLM software solutions.",
          color: "#D83B01",
        },
        {
          title: "Data Science and Business Analytics Intern",
          company: "Knowledge Solution India",
          company_url:
            "https://www.linkedin.com/company/knowledge-solutions-india/",
          logo_path: "KSI_logo.jpg",
          duration: "Feb 2021 - May 2021",
          location: "Pune, Mharashtra, India",
          description: "Throughout this enriching experience, I underwent comprehensive training, equipping myself with cutting-edge skills and techniques in the dynamic realm of data science. 🌟 The month-long training laid a strong foundation for my data-driven endeavors. I had the privilege of contributing to two major projects during my internship: Heart Disease Analysis and Covid-19 Analysis. 🩺🦠 These projects allowed me to apply my analytical acumen to extract valuable insights from complex datasets, ultimately contributing to informed decision-making and valuable recommendations. Collaborating with the talented team at KSI, I experienced a supportive and innovative environment that nurtured my professional growth and honed my technical skills. I am now more determined than ever to forge a career in data science and drive positive change through data-powered solutions.",
          color: "#D83B01",
        },
        {
          title: "Data Science And Business Analytics Intern",
          company: "The Spark Foundation",
          company_url:
            "https://internship.thesparksfoundation.info/",
          logo_path: "TSF_logo.jpg",
          duration: "Jan 2021 - Feb 2021",
          location: "Pune, Mharashtra, India",
          description: "Collaborated on a database-driven projects. Data Science and Business Analytics Intern in TSF, Here we got training for one month and then we worked on two major projects. From data preprocessing and feature engineering to employing advanced machine learning algorithms, I thrived in the exploration and interpretation of data to unearth meaningful patterns and trends. 💡 My passion for data-driven problem-solving was further fueled by the impact these projects had on real-world challenges.",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Training and Placement Cell (Overall Volunteer)",
          company: "PCCOE",
          company_url: "http://www.pccoepune.com/",
          logo_path: "pccoe_logo1.png",
          duration: "June 2019 - June 2021",
          location: "Pune, Maharashtra, India",
          description: "Manages and handle Recruitment Drives with the help of volunteers from meetings to aptitude test interviews and Panel handling.",
          color: "#D83B01",
        },
        {
          title: "PCCOE Sports Cell Coordinator",
          company: "PCCOE ACM Student Chapter",
          company_url: "http://www.pccoepune.com/",
          logo_path: "ACM_logo.jpg",
          duration: "June 2019 - July 2020",
          location: "Pune, Maharashtra, India",
          description: "Sports Cell Coordinator - PCCOE ACM Student Chapter for the year 2019-20.",
          color: "#D83B01",
        },
        {
          title: "Food Commity, Mentor",
          company: "KPIT",
          company_url: "https://www.kpit.com/",
          logo_path: "KPIT_logo.jpg",
          duration: "Feb 2020",
          location: "Pune, Maharashtra, India",
          description:"The Food Committee for the KPIT Sparkle event held at PCCOE. Managing the food for all the teams, staff, and students. ",
          color: "#D83B01",
        },
        {
          title: "National Service Scheme Volunteer",
          company: "NSS",
          company_url: "https://nss.gov.in/",
          logo_path: "NSS_logo.jpg",
          duration: "July 2020 - July 2021",
          location: "Pune, Maharashtra, India",
          description:"Civil Rights and Social Action. ",
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
          description: "I enjoy Gyming as a sport. I spend atleast 2 hours a day in gym 5 times a week. Do a high-intensity workout and it's a good way to relax and feel good.",
          color: "#D83B01",
        },
        {
          title: "eSports",
          company: "",
          logo_path:"BGMI_logo.jpg",
          description: "I enjoy playing competitive games like BGMI and Valorant. I have participated and Organized in multiple Valorant tournaments. Have Achieved ACE in BGMI and Gold in Valorant.",
          color: "#D83B01",
        },
        {
          title: "Photography",
          company: "",
          logo_path: "camera.png",
          description: "I'm always carrying a camera around. Even as a hobby, photography has the power to lift people's spirits and help them look at things from a different perspective.",
          color: "#D83B01",
        },
        {
          title: "Trekking",
          company: "",
          logo_path:"TREK_logo.jpg",
          description: "Always been a Nature Lover. On weekends, I love going on long Treks with my friends. We all trek for different reasons, and sometimes for all the reasons: fun, adventure, to bond with friends, to relax, meditation, to make the commute more interesting,. The reasons are infinite.",
          color: "#D83B01",
        },
      ]
    }
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
      "Open to work as a Software Engineer Intern for the summer of 2024. You can get in touch with me on my email :)",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://ashutoshhathidara.wordpress.com",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Email Address",
    subtitle:
      "sjawale@usc.edu ",
    email2:
    "jawalesujeet10@gmail.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8669058866",
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
