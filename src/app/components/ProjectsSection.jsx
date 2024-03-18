"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: `Greetings on my portfolio site! I've developed this platform with Next.js to exhibit my top-notch work as a creative professional. 
    Explore samples of my projects and discover more about me and my skills on the About page. 
    Don't hesitate to reach out through the Contact page if you're keen on collaborating. 
    Appreciate your visit!`,
    image: "/images/projects/PF1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sumit1617/NextJs----Portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Buy It Now",
    description: `• Developed a fully functional eCommerce website using the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
    • Designed and implemented the backend architecture using Node.js and Express.js creating RESTful APIs. 
    • Developed a scalable MongoDB database to store information. 
    • Implemented secure user authentication and authorization mechanisms. 
    • Integrated payment gateways like Stripe to enable secure and smooth payment`,
    image: "/images/projects/biy3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sumit1617/buy-it-now",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MERAA-GPT",
    description: `• Developed a CHATGPT clone using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
      • Leveraged Node.js and Express.js to create a robust backend server, handling user requests and facilitating communication with the OpenAI API for generating AI-driven responses.
      • Utilized MongoDB to store user data and chat history securely, enabling seamless retrieval and storage of conversations of a user.
      • Integrated the powerful OpenAI API for natural language processing, enabling the CHATGPT clone to generate contextually relevant and human-like responses to user queries and
      prompts.`,
    image: "/images/projects/MGPT1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sumit1617/MERAA-GPT",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Keeper App",
    description:
      "This project is a Keeper app built using ReactJS 📝. The app can be useful to keep a track of your day-to-day works to do. Notes can be created and deleted.",
    image: "/images/projects/KA1.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/sumit1617/Web-Development-Course/tree/main/Section%2033%20---%20React/keeper-app",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Cafe Delight",
    description: `• This simple coffee shopping project is built on Python using the Tkinter library. 
      • Simple online coffee shopping where users can login and register to buy coffee. 
      • Various pages like the welcome page, menu card, cart, track of the order, etc. built using the Tkinter library.`,
    image: "/images/projects/CD1.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/sumit1617/cafe_delight",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
