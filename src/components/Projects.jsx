import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const ProjectContainer = ({ projects }) => {
  const [selectedOption, setSelectedOption] = useState('all');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const appendProject = () => {
    if (selectedOption === 'all') {
      const allProjects = projects.map((category) => category.project_list).flat();
      return allProjects.map((project, index) => (
        <ProjectBox
          key={uuidv4()}
          imgSrc={project.img}
          caption={project.title}
          category={project.category}
          href={project.href}
        />
      ));
    } else {
      const projectList = projects.find((category) => category.title === selectedOption)?.project_list || [];
      return projectList.map((project, index) => (
        <ProjectBox
          key={uuidv4()}
          imgSrc={project.img}
          caption={project.title}
          category={project.category}
          href={project.href}
        />
      ));
    }
  };
  console.log(selectedOption);
  return (
    <div className="flex flex-col items-center mb-24">
      <div id="projects-button" className="px-6 mb-20">
        <button
          className={selectedOption === 'all' ? 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white bg-blue-500 text-white dark:text-white' : 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white text-black dark:text-white'}
          onClick={() => handleOptionChange('all')}
        >
          All
        </button>
        {projects.map((category) => (
          <button
            key={uuidv4()}
            className={selectedOption === category.title ? 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white bg-blue-500 text-white dark:text-white' : 'px-5 py-2 mx-3 my-3 rounded-lg hover:bg-blue-500 hover:text-white text-black dark:text-white'}
            onClick={() => handleOptionChange(category.title)}
          >
            {category.title}
          </button>
        ))}
      </div>
      <div id="projects-container" className="w-10/12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appendProject()}
      </div>
    </div>
  );
};

const ProjectBox = ({ imgSrc, caption, category, href }) => {
  return (
    <a className="p-4 hover:scale-105" href={href}>
      <div className="bg-gray-100 rounded-lg dark:bg-gray-500">
        <img src={imgSrc} className="w-full rounded-lg" alt={caption} />
        <div className="px-10 py-8">
          <h1 className="mb-2 font-bold text-xl dark:text-white">{caption}</h1>
          <h3 className="text-gray-700 dark:text-gray-300">{category}</h3>
        </div>
      </div>
    </a>
  );
};

export default ProjectContainer;
