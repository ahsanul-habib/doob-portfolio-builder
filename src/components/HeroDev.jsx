import React from 'react';

const Hero = (props) => {
  return (
    <div
      className="bg-center bg-cover group"
      id="hero"
      style={{ backgroundImage: `url("${props.hero_img}")` }}
    >
        <div>
            <div className="group relative">
            <div className="bg-opacity-50 backdrop-blur-lg hidden w-screen h-full z-20 group-hover:absolute group-hover:inline-block">
            <div className="flex flex-col justify-center items-center h-full">
              <button onClick={()=>props.toggleModalChange('hero-change-modal')} className="flex flex-row justify-evenly items-center p-2 rounded-md h-10 w-36 bg-green-500 text-white">
              <span>Edit Item</span>
              <span
              className="material-symbols-outlined text-xl"
              id="sideBarButton"
              >
              edit_square
              </span>
              </button>
            </div>
          </div>
      <div>
        <div className="m-24 flex flex-col justify-center items-center text-white font-black my-52">
          <h1 className="w-6/12 text-7xl md:text-8xl">
            Hey! I'm{" "}
            <span className="text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {props.name}
            </span>
          </h1>
          <a
            href="#"
            className="mt-20 h-16 flex justify-center items-center border-2 border-solid p-7 rounded-full border-gray-500 hover:bg-orange-600 hover:ring-4 hover:ring-white-900 transition duration-300"
          >
            <span className="font-normal">Contact Us</span>
          </a>
        </div>
      </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
