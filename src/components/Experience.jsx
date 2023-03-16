import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import arduino from "../assets/arduino.png";
import pandas from "../assets/pandas.jpeg";
import java from "../assets/java.png";
import cplus from "../assets/cplus.png";
import cvanilla from "../assets/cvanilla.png";
import python from "../assets/python.png";
import numpy from "../assets/numpy.png";
import mysql from "../assets/mysql.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: arduino,
      title: "Arduino IDE",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: pandas,
      title: "Pandas",
      style: "shadow-gray-400",
    }
  ];
  const techs1 = [
    {
      id: 1,
      src: cplus,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: cvanilla,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: pandas,
      title: "Pandas",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: numpy,
      title: "Numpy",
      style: "shadow-white",
    }
  ];
  const techs2 = [
    {
      id: 1,
      src: mysql,
      title: "Mysql",
      style: "shadow-orange-500",
    }
  ]

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800  to-black pt-8 w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 hover:scale-150  duration-1000  border-gray-500 p-2 inline">
            My TechStack
          </p>
        </div>
        <p className=" pt-12 border-b-4 border-l-0 border-r-0 border-t-0 b border-gray-500 flex-auto font-semibold border inline text-2xl">Frontend Development </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(props => (
            <div
              key={props.id}
              className={`shadow-lg   hover:scale-105 duration-500 py-2 rounded-lg ${props.style}`}
            >
              <img src={props.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{props.title}</p>
            </div>
          ))}
        </div>
        <p className=" pt-12 border-b-4 border-l-0 border-r-0 border-t-0 b border-gray-500 flex-auto font-semibold border inline text-2xl">Programming languages & Frameworks</p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-8 text-center py-8 px-12 sm:px-0">
          {techs1.map(props => (
            <div
              key={props.id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${props.style}`}
            >
              <img src={props.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{props.title}</p>
            </div>
          ))}
        </div>
        <p className=" pt-12 border-b-4 border-l-0 border-r-0 border-t-0 b border-gray-500 flex-auto font-semibold border inline text-2xl">Backend Development </p>
        <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-8 text-center py-8 px-12 sm:px-0">
          {techs2.map(props => (
            <div
              key={props.id}
              className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg ${props.style}`}
            >
              <img src={props.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{props.title}</p>
              
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default Experience;
