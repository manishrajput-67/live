import React from "react";
import Anime from "../../assets/Anime.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={Anime} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a Frontend Developer with knowledge of HTML, CSS, and JavaScript. I can design and develop user-friendly websites that look good and work well on mobile and desktop devices. I enjoy creating web pages and learning new technologies like React.js to improve my skills. I always try to make websites that are fast, responsive, and easy to use.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database 
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a Database Developer with experience in designing, developing, and managing databases. I have a strong understanding of SQL and relational databases like MySQL, PostgreSQL, and Oracle. I am skilled in optimizing queries, ensuring data integrity, and creating efficient data models for various applications. I am passionate about managing large datasets and improving database performance while ensuring security and scalability.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I am a Backend Developer with a strong focus on building scalable and high-performance APIs using Node.js. I have extensive experience in designing and developing RESTful APIs that connect front-end applications with server-side databases. I am proficient in integrating third-party services, ensuring API security, and optimizing performance to handle large traffic volumes. My expertise also includes working with Express.js to build efficient, modular, and maintainable backend systems that support seamless communication between clients and servers.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;