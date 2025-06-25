import React from "react";
import Image1 from "../assets/project1.webp";
import Image2 from "../assets/project2.webp";
import Image3 from "../assets/project3.webp";
import Image4 from "../assets/project4.webp";
import Image5 from "../assets/project5.webp";
import Image6 from "../assets/project6.webp";
import Image7 from "../assets/project7.webp";
import Image8 from "../assets/project8.webp";
import Image9 from "../assets/project9.webp";

const projects = [
  {
    id: 1,
    name: "Mern Web Application for LMS",
    technologies: "This is an online educational platform developed Using MERN and Tailwind CSS for styling. Used Microservice architecture and docker compose for orchestration.",
    image: Image1,
    github: "https://github.com/IT21821240/DS-Project-Frontend",
  },
  {
    id: 2,
    name: "React web application using NASA APIs",
    technologies: "In this project, I integrated NASA’s APIs to retrieve images, enhancing the app's content. Deployment was seamless, with the frontend on Vercel and the backend on Render.",
    image: Image4,
    github: "https://github.com/IT21821240/AF-Frontend",
  },
  {
    id: 3,
    name: "Online Eye-Wear Management System",
    technologies: "A complete web application using MERN stack This project is an eCommerce website developed for Lanka Opticals, consisting of both client and admin sides. Server-side system has eight categories",
    image: Image3,
    github: "https://github.com/IT21821240/Final",
  },
  {
    id: 4,
    name: "Waste tracker web application",
    technologies: "A web application using MERN stack, It allows residents and businesses to register their bins, monitor their fill levels, and request additional collection dates when necessery.",
    image: Image5,
    github: "https://github.com/IT21821240/csse-waste-tracker",
  },
  {
    id: 5,
    name: "Craft Connect - Mobile Application",
    technologies: "Mobile app using react native. It allows users to browse artifacts and purchase them directly from manufacturers, and features where manufacturers can collaborate with peers.",
    image: Image6,
    github: "https://github.com/IT21821240/uee-craft-connect",
  },
  {
    id: 6,
    name: "Plant Disease Detection web application",
    technologies: "A web app using MERN stack integrated with a machine learning model for plant disease detection. Model processes leaf images to identify diseases, results are served via RESTful API.",
    image: Image7,
    github: "https://github.com/IT21821240/SPM-Project",
  },
  {
    id: 7,
    name: "Secure Cloud Deployment of a Node.js Microservice",
    technologies: "Secure, containerized microservice with Node.js, Express, MongoDB, JWT, Docker, CI/CD, and Snyk security. Deployed on AWS EC2 following DevOps and DevSecOps best practices.",
    image: Image8,
    github: "https://github.com/SLIIT-Projects-Y4/CTSE-Assignment-01",
  },
  {
    id: 8,
    name: "Web app for online event management system",
    technologies: "Application for managing online event bookings with features like admin/user data handling and event scheduling. Built using Java, Apache Tomcat, MySQL, HTML, CSS, and JavaScript.",
    image: Image2,
    github: "https://github.com/IT21821240/Web-Application-Online-Event-Management",
  },
  {
    id: 9,
    name: "Web application for online vaccination portal",
    technologies: "An online vaccination booking platform enabling user authentication, appointment scheduling, and vaccination card delivery. Built using HTML, CSS, JavaScript, PHP, and MySQL.",
    image: Image9,
    github: "https://github.com/IT21821240/IWT-Project-Online-Vaccination-Portal",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;