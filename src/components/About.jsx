import React from "react";
import book from "../assets/book.gif"
import computer from "../assets/computer.gif"
import experiencedorig from "../assets/experienceorig3.gif"
import container from "../assets/container.gif"
import data from "../assets/data.gif"
const About = () => {
  return (
    <div
      name="about"
      className="w-auto  bg-gradient-to-b p-10 from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full ">
        <div className="pb-4">
          <p className="text-4xl mx-4 font-bold inline  hover:scale-110 duration-200  border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="grid  mx-auto sm:grid-cols-1 md:grid-cols-2 gap-11  sm:px-0">
        <div  className="mx-auto pt-5">
         <h2 className="text-3xl font-bold inline hover:scale-200 duration-200 border-b-4  border-gray-500">
         <img src={book} alt="gif" className=" w-12 h-12 inline"></img>
         Education</h2>
         <div className="pt-10">
         <ul className=" ">
         <li className="w-auto  border-b-4 border-gray-500 text-2xl font-semibold">
         <div className=" flex justify-between ">
         <div>
        
           <h3 className="hover:scale-110 duration-200 ">Shiv Nadar University Chennai</h3>
           </div>
           <div><h3 >(2021-2025)</h3></div></div>
          </li>
          
          <li className=" text-xl text-emerald-50 pt-3 font-bold  ">
          <img src={computer} alt="gif" className=" w-12 h-12 inline pr-2"></img>
          B.Tech in Computer Science & Engineering (Internet of Things)
          </li>
          <li className=" text-xl text-red-50 pt-3 font-bold"> CGPA-9.1</li>
          <div className="pt-5">
          <li className="w-auto  border-b-4 border-gray-500 text-2xl font-semibold">
         <div className=" flex justify-between ">
        <div></div>
         <div>

           <h3 className="   hover:scale-110 duration-200 pr-20 ">Velammal Bodhi Ponneri</h3>
           </div>
           <div><h3 >(2019-2021)</h3></div></div>
          </li>
          <li className=" text-xl text-emerald-50 pt-3 font-bold  ">
          <img src={container} alt="gif" className=" w-12 h-12 inline"></img>
           Passed out 11th and 12th taking MPC as specialization
          </li>
          <li className=" text-xl text-red-50 pt-3 hover:scale-110 duration-200 font-bold">Marks Obtained-488/500</li>
          </div>

         </ul>
         </div>
         </div>
         <div  className="mx-auto pt-5">
         <h2 className="text-3xl font-bold inline hover:scale-200 duration-200 border-b-4  border-gray-500">
         <img src={experiencedorig} alt="gif" className=" w-12 h-12 inline"></img>
         Experience</h2>
         <ul className="pt-9">
         <li className="w-auto  border-b-4 border-gray-500 text-2xl font-semibold">
         <div className=" flex justify-between ">
         <div>

           <h3 className=" hover:scale-110 duration-200  ">Gramener Technologies  </h3>
           </div>
           <div><h3 className=" ml-1  " >( Nov 20- Dec 20)</h3></div></div>
          </li>
          <li className=" text-xl text-justify text-emerald-50 pt-3 font-bold  ">
          <img src={data} alt="gif" className=" w-12 h-12 inline"></img>
          Learned the basic concepts of data science and analyzed the steps ,
important roles in a data science project, ended the internship with a mini project which recommends movies based on imdb formula and
standards
          </li>
         </ul>
         
         </div>
        </div>
      </div>
    </div>
  );
};

export default About;

