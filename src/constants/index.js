import project1 from '../assets/projects/Projects-1.png'
import project2 from '../assets/projects/Projects-2.png'
import project3 from '../assets/projects/Project-3.png'
import project4 from '../assets/projects/Project-4.jpg'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over 1 years of hands-on experience, I am trying to hone my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Manager",
    company: "VanSuya",
    description: `Developed and implemented a customer feedback program, leading to an 8% increase in positive customer
reviews and a 10% improvement in overall customer satisfaction. Implemented a new inventory management system using Microsoft Excel to track perishable goods, reducing
waste by 15%.`,
    technologies: ["Microsoft Office", "Interpersonal Skill", "Communications"],
  },
  {
    year: "2020 - 2021",
    role: "Teaching Assistance",
    company: "CompuDemic",
    description: `Leading office teaching hours for over 30 students in the introduction to Python and Computer System
course. Delivering instruction on topics involving Linux (Commands), R, Python (fundamentals, structures, memory,
diagrams, projects, assessments), WordPress (fundamentals, knowledge on HTML and CSS, process control)`,
    technologies: ["Javascript", "Python", "R", "WordPress"],
  }
];

export const PROJECTS = [
  {
    title: "Bitcoin Tracker",
    image: project1,
    description:
        "Implementing a few languages like Typescript, Aircode.io and MySQL, I created a cross-functional local web \n" +
        "application to show users in real time the value of which ever currency they intend to change into bitcoin, the \n" +
        "application is intended to serve over 100 users.",
    technologies: ["React", "Tailwind CSS", "Aircode", "Javascript, Vercel"],
  },
    {
    title: "Aim Trainer",
    image: project2,
    description:
      "Implemented intuitive mouse controls for aiming and shooting mechanics, providing users with an engaging and \n" +
        "responsive gaming experience using languages like Python and its libraries like Pygame and Tkinter",
    technologies: ["Python", "PyGame"],
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion", "Vercel"],
  },
  {
    title: "Real Estate Website",
    image: project4,
    description:
      "Ensured a design of developed a local-based web application using HTML, CSS, Visual Studio, IntelliJ, Node.js, and \n" +
        "JavaScript, resulting in a user-friendly platform that offers properties to customers and allows them to book \n" +
        "appointments. We improved the integration of the MySQL database with the HTML and CSS files to establish connectivity \n" +
        "between front-end and back-end systems. Overcame challenges by breaking down tasks into manageable functions \n" +
        "for each team member. Successfully bridged the gap between design and functionality with 100% data accuracy.",
    technologies: ["HTML", "CSS", "mySQL", "JavaScript"],
  },
];

export const CONTACT = {
  address: "10138 Whalley Blvd, Surrey, V3T 4G2 ",
  phoneNo: "+1 600-700-2496 ",
  email: "zansanni@gmail.com",
};
