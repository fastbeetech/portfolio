import Container from "./Container";
import React from "react";
import projects from "./data/projects"

const Project = (props) => {
  return (
    <div className="w-full bg-zinc-100">
      <Container className="container mx-auto sm:px-5 lg:py-[2rem] lg:px-[3.5rem] py-3">
        <h2>Projects</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            {
                projects.map(project => {
                    return (
                        <div className="">
                            <div className="flex flex-col items-center justify-center">
                                <img src={project.image} alt={project.title} className="w-full h-auto" />
                                <div className="bg-gray-300 p-2 rounded-b-md">
                                <h3 className="text-center">{project.title}</h3>
                                <p className="text-center">{project.description}</p>
                                <div className="flex  items-center space-x-8 my-2 justify-center">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                                    className="bg-orange-500 hover:bg-orange-600 rounded py-2 px-5">Visit</a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                                    className="bg-zinc-500 hover:bg-zinc-600 text-dark rounded py-2 px-5">Github</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
              }
        </div>
      </Container>
    </div>
  )
};

export default Project;
