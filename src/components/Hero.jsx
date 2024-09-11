import React from 'react';

const Hero = (props) => {
  return (
    <div
      className="bg-center bg-cover"
      id="hero"
      style={{ backgroundImage: `url("${props.hero_img}")` }}
    >
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
  );
}

export default Hero;
