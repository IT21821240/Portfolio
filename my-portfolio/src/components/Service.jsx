import React from "react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Intervest Software Technologies",
    period: "July 2024 – June 2025",
    description: [
      "Developed responsive UI components for the PTM travel insurance web application using Nextjs and Tailwind CSS.",
      "Collaborated with cross-functional teams (frontend, backend, QA) following agile methodologies.",
      "Integrated user input forms and supported call center features for a seamless customer experience.",
      "Gained practical experience in real-world frontend development and team-based project workflows."
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Jira", "Bitbucket", "Agile"],
  },
];

const Experience = () => {
  return (
    <div className="bg-black text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="text-lg text-white font-medium">{exp.company}</p>
              <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
