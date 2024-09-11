import React from 'react';

const AboutSection = (props) => {
  return (
    <div className="w-full flex items-center flex-col relative">
    <div className="backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg w-8/12 border-2 border-solid border-black bg-slate-300 flex flex-col md:flex-row justify-center relative -top-40">
      <div className="w-full md:w-1/2 px-4 flex flex-col items-center justify-center">
        <img className="rounded-lg w-full my-16" id="about-img" src={props.about_img} alt="About" />
      </div>
      <div className="w-full md:w-1/2 px-8 py-16">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <span className="text-4xl text-gray-500 dark:text-gray-100">I am a <span id="short-profession">{props.short_profession}</span></span>
          <span className="text-xl text-center w-full md:w-6/12 md:self-center text-gray-500 dark:text-gray-300">{props.intro}</span>
          <div className="flex flex-col w-full gap-2 dark:text-white">
            <div className="flex flex-row items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">description</span>
              <span id="profession">{props.profession}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">call</span>
              <span id="phone">{props.phone}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="material-symbols-outlined text-blue-500">location_on</span>
              <span id="location">{props.location}</span>
            </div>
          </div>
          <a href={props.cv_link} className="mt-10">
            <span className="text-gray dark:text-white hover:text-blue-500 hover:border-blue-500 hover:border-b-2">Download My CV</span>
          </a>
        </div>
      </div>
    </div>

        </div>
  );
}

export default AboutSection;
