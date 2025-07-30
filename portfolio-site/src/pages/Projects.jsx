import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProjects = async () => {
    try {
      const response = await fetch("/content/proj-index.json");
      if (!response.ok) throw new Error("Failed to Load Project");

      const data = await response.json();
      const publishedProj = data.projects.filter(
        (project) => project.published
      );

      setProjects(publishedProj);
    } catch (err) {
      console.Error("Error fetching project info", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <>
      <div className="h-fit background_two bg-black w-full ">
        <div className="w-full items-center flex flex-col gap-10 text-[#9f9f9f]">
          <Link to={"/"} className="place-self-start">
            <motion.div
              initial={{ scale: 1, color: "#9f9f9f" }}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              className="text-4xl text-zinc-200 p-10 flex gap-2"
            >
              <FiArrowLeft />
              <h1 className="mt-0.5 text-2xl">Back To Home</h1>
            </motion.div>
          </Link>
          <div className="md:w-3/4 w-full px-25">
            <h1 className="text-6xl font-display font-roboto text-zinc-200">
              Projects
            </h1>
            <h2 className="md:text-3xl text-lg font-roboto text-zinc-300 mt-2 mx-5">
              A few things i've been proud to make my own...
            </h2>
          </div>
          <div className="text-white w-full flex flex-col items-center my-10">
            <div className="flex justify-center w-full mx-auto">
              <div className="md:w-3/5 w-full">
                <div className="flex-col flex space-y-10 items-center">
                  {projects.map((project, index) => (
                    <Project project={project} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Projects;
