/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arman Ali",
  title: "Hi all, I'm Arman Ali",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with PHP / Laravel / JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zCDTJZhAbzGAgnYBuTmjohOcAJAyEI-T/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/imArmanAli",
  linkedin: "https://www.linkedin.com/in/armanalidev/",
  gmail: "ch.armanali99@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO BUILDS END-TO-END SOLUTIONS ACROSS ANY STACK",
  skills: [
    emoji(
      "⚡ Build robust and scalable full-stack applications using Laravel, Node.js, and modern JavaScript frameworks"
    ),
    emoji(
      "⚡ Develop and maintain clean, efficient backend APIs and database structures"
    ),
    emoji(
      "⚡ Integrate third-party services and APIs like Stripe, Firebase, AWS, and SCIM with ease"
    ),
    emoji(
      "⚡ Transform complex business logic into intuitive, responsive user interfaces"
    ),
    emoji(
      "⚡ Adapt to any tech stack with speed thanks to a deep understanding of system architecture and AI-assisted workflows"
    )
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel" // Custom icon, not in FA by default. Use `fas fa-code` as fallback
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf" // Not standard FA; can use "fas fa-database" as a fallback
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Superior University",
      logo: require("./assets/images/superior2.png"), // Replace with actual logo if you have it
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2017 - 2023",
      desc: "Graduated with a 3.3 CGPA and demonstrated strong aptitude in programming and software development.",
      descBullets: [
        "Excelled in practical programming, database design, and web development courses",
        "Actively contributed to academic projects that simulated real-world full stack development environments"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "95%" // Laravel, Node.js, APIs, MySQL, etc.
    },
    {
      Stack: "Programming & Problem Solving",
      progressPercentage: "85%" // PHP, JavaScript, database design, architecture
    },
    {
      Stack: "Frontend Development / UI",
      progressPercentage: "65%" // Vue.js, React, HTML/CSS, Bootstrap
    },
    {
      Stack: "DevOps & Integration",
      progressPercentage: "50%" // AWS, Docker, Firebase, Stripe, SCIM, etc.
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Onyxtec",
      companylogo: require("./assets/images/onyxtec.jpeg"), // Replace with the actual logo
      date: "June 2024 – Present",
      desc: "Working across multiple Laravel-based projects and stacks. Contributing to scalable backend systems, implementing unit tests, and enhancing application performance.",
      descBullets: [
        "Worked on Laravel projects like EliteWorker, Laali, Mecca Digital, and ThePeerNetwork",
        "Developed a Laravel 11 boilerplate for standardizing future projects",
        "Maintained PHP Unit testing for Form Assembly module"
      ]
    },
    {
      role: "PHP Developer",
      company: "Tekrevol",
      companylogo: require("./assets/images/tekrevol.jpg"), // Replace with the actual logo
      date: "Jan 2023 – April 2024",
      desc: "Built full-stack applications using Laravel, React, and Node.js while integrating modern AI practices like prompt engineering into the workflow.",
      descBullets: [
        "Developed and maintained apps such as HotSeats, SpotFinder (Laravel), Page Perks and Body Solutions (ReactJS)",
        "Built a Price Comparison Web Scraper using Node.js and ElasticSearch",
        "Explored and implemented AI features through prompt engineering"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Asian Solutions Pvt Ltd",
      companylogo: require("./assets/images/asiansol.jpeg"), // Replace with the actual logo
      date: "June 2021 – Dec 2022",
      desc: "Started as an intern and rose to Full Stack Developer. Took charge of multiple projects including frontend, backend, and integrations with third-party services.",
      descBullets: [
        "Built Excel and Word Add-ins with custom functions using Firebase, ReactJS, and StripeJS",
        "Lead development on EstateAds (Laravel 8)",
        "Worked on SCIM, SSO, and API integrations across multiple platforms"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Major Products and Platforms I've Helped Build at Companies",
  projects: [
    {
      image: require("./assets/images/laali-logo.png"),
      projectName: "Laali",
      projectDesc:
        "Laali is a wedding planning platform for South Asian couples, connecting them with culturally experienced vendors. I lead the project team, improving and expanding features regularly.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://laali.co/"
        }
      ]
    },
    {
      image: require("./assets/images/md.png"),
      projectName: "Mecca Digital",
      projectDesc:
        "Mecca Digital is a social platform empowering Muslim communities worldwide. I contributed significantly by developing a major module focused on user profile matching.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tmc.meccadigital.io/login"
        }
      ]
    },
    {
      image: require("./assets/images/ew.png"),
      projectName: "EliteWorker",
      projectDesc:
        "EliteWorker simplifies smart home construction by managing worker assignments and schedules. I contributed to its backend and collaborated with the team to enhance its features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://neweliteworker.com/login#/"
        }
      ]
    },
    {
      image: require("./assets/images/worksurelogo.jpeg"),
      projectName: "WorkSure",
      projectDesc:
        "WorkSure optimizes hiring and workforce management, focusing on recruitment, engagement, and employment verification. I led its development and built it from scratch with my team.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://worksure.io/"
        }
      ]
    },
    {
      image: require("./assets/images/tpnlogo.png"),
      projectName: "The Peer Network",
      projectDesc:
        "TPN supports individuals and families facing mental health or substance use challenges by connecting them with Certified Peer specialists. I contributed to its development as part of the team.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://thepeernetwork.com/"
        }
      ]
    },
    {
      image: require("./assets/images/hotseatlogo.jpeg"),
      projectName: "HotSeats",
      projectDesc:
        "HotSeats redefines fan experiences by offering real-time micro-experiences and personalized itineraries. I developed the backend architecture from scratch using Laravel 8.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://api.uniquexp.io/login"
        }
      ]
    },
    {
      image: require("./assets/images/spotfinder.ico"),
      projectName: "SpotFinder",
      projectDesc:
        "SpotFinder helps users discover restaurants nearby and make reservations easily. I built its backend completely from scratch using Laravel 8.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spotfinder.vn/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3349732212",
  email_address: "ch.armanali99@gmail.com",
  location: "Pakistan",
  bio: "Innovative, task-driven professional full stack developer with over 3 years of experience in developing websites and providing full customer satisfaction. Equipped with a record of success in consistently identifying and providing the technological needs through ingenious innovation. Proficient in developing databases, creating user interfaces, writing & testing codes & implementing new features based on user feedback."
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
