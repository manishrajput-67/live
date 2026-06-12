import React from "react";
import { FaCss3, FaJava, FaHtml5, FaJs, FaReact, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiRedis, SiMongodb, SiNodedotjs, SiGithub } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Experience</h1>

      {/* Flex container to align icon and learning sections side-by-side on md screens */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Icon Section */}
        <div className="flex flex-wrap gap-6 md:w-1/2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub color="#FF4438" size={50} />
          </span>
         
        </div>

        {/* Learning Section */}
        <div className="text-white md:w-1/2 bg-slate-950 bg-opacity-45 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">I'm currently learning:</h2>
          <ul className="list-disc list-inside text-sm leading-relaxed">
            <li>HTML5, CSS3, JavaScript fundamentals</li>
            <li>React JS for building modern UI</li>
            <li>MongoDB and basic database concepts</li>
            <li>Version control with Git & GitHub</li>
            <li>UI/UX designing basics with Figma</li>
            <li>Java Programming (OOPs, JDBC, basic backend concepts)</li>
            <li>Node.js for backend development</li>
          </ul>
          <p className="mt-4 text-sm">
            As a fresher, I'm actively building my portfolio and will soon start creating projects to showcase my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
