

import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import akash from "../assets/akash1.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
  const [text] = useTypewriter({
    words: [" Coder.", "Full Stack Developer.", "UI Designer.","Tech Enthuisast."],
    loop: false,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });
  return (
    <div
      name="home"
      className="h-auto  w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg pt-28  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center w-2/3 h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a 
           
          </h2>
          <p className="text-white font-semibold text-6xl"><span >{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="white"
          /></p>
          <p className="text-gray-500 text-xl pt-5 pb-5  w-auto justify-centerpy-4 max-w-md">
          As an intermediate level coder with a passion for technology, I have honed my skills in various programming languages including Python and Java. Alongside my technical abilities,

I am experienced in creating responsive and user-friendly web applications using frameworks like React and Angular. Additionally, I have proficiency in utilizing version control systems such as Git for effective project management and teamwork.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-1/3 ">
          <img
            src={akash}
            alt="my profile"
            className="rounded-xl mx-auto  md:w-full"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
