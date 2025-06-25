/* eslint-disable no-unused-vars */
import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiBootstrap,
  SiFlutter,
  SiKotlin,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faPhp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import LayersIcon from "@mui/icons-material/Layers";

// Motion animation for icon bouncing
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const icons = [
    { Icon: SiPython, color: "text-blue-500", name: "Python" },
    {
      Icon: (props) => <FontAwesomeIcon icon={faJava} {...props} />,
      color: "text-orange-600",
      name: "Java",
    },
    {
      Icon: (props) => <FontAwesomeIcon icon={faPhp} {...props} />,
      color: "text-blue-500",
      name: "PHP",
    },
    { Icon: SiFlutter, color: "text-blue-400", name: "Flutter" },
    { Icon: SiKotlin, color: "text-purple-500", name: "Kotlin" },
    { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
    { Icon: SiExpress, color: "text-gray-500", name: "Express.js" },
    { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
    { Icon: SiHtml5, color: "text-orange-500", name: "HTML5" },
    { Icon: SiCss3, color: "text-blue-600", name: "CSS3" },
    { Icon: SiJavascript, color: "text-yellow-500", name: "JavaScript" },
    { Icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
    { Icon: SiBootstrap, color: "text-purple-600", name: "Bootstrap" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { Icon: SiMysql, color: "text-blue-400", name: "MySQL" },
    { Icon: SiDocker, color: "text-blue-400", name: "Docker" },
    { Icon: SiKubernetes, color: "text-blue-500", name: "Kubernetes" },
    { Icon: SiTailwindcss, color: "text-teal-400", name: "Tailwind CSS" },
    {
      Icon: (props) => (
        <LayersIcon
          style={{ fontSize: "4rem" }} // same as Tailwind's text-7xl
          className={props.className}
        />
      ),
      color: "text-blue-500",
      name: "Material UI",
    },
  ];

  return (
    <div id="technology" className="bg-black text-white border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-bold text-center py-20"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {icons.map(({ Icon, color, name }, idx) => (
          <motion.div
            key={name}
            variants={iconVariants(2 + idx * 0.5)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4"
            title={name}
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
