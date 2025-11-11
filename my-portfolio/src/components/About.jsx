import React from "react";
import AboutImage from "../assets/image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="A portrait representing the developer"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-6">
              I'm a dedicated and enthusiastic software engineering
              undergraduate at SLIIT, currently awaiting my final semester
              results. I have a strong interest in building creative and
              meaningful digital experiences, enjoy learning new technologies,
              solving real-world problems, and continuously improving my skills
              as a developer.
            </p>
            <p className="text-lg mb-6">
              I focus on writing clean code, creating user-friendly designs, and
              building smart solutions. I work comfortably with technologies
              like <strong>React</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, <strong>MongoDB</strong>,{" "}
              <strong>C#</strong>, and <strong>Tailwind CSS</strong>. I also
              have experience with <strong>Python</strong>,{" "}
              <strong>Flask</strong>, <strong>MySQL</strong>,{" "}
              <strong>Firebase</strong>, <strong>Docker</strong>, and{" "}
              <strong>CI/CD</strong> pipelines. Additionally, I’m familiar with
              tools such as <strong>Git</strong>, <strong>GitHub</strong>,{" "}
              <strong>VS Code</strong>, <strong>Postman</strong>,{" "}
              <strong>Figma</strong>, and <strong>Jira</strong>.
            </p>
            <p className="text-lg mb-6">
              I'm always looking to expand my skill set and stay updated with
              modern development practices. My goal is to grow as a developer
              and contribute to impactful digital solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
