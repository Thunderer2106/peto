import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Links=[
  {
    id:1,
    side: (<> Linkedin <FaLinkedin size={40}/></>),
    type: 'https://www.linkedin.com/in/akash-karamsetty-867664258',
    style: "bg-blue-800"
  
  },
  {
  
    id:2,
    side: (<> Github <FaGithub size={40}/></>),
    type: 'https://github.com/Thunderer2106',
    style:"bg-neutral-900"
  },
  {
    id:3,
    side:(<>Mail <HiOutlineMail size={40}/></>),
    type:'mailto:akashkaramsetty@gmail.com',
    style:"bg-red-800"
  },
  {
      id:4,
      side: (<>Resume<BsFillPersonLinesFill size={40}/></>),
      type: '{resume}',
      style:"bg-cyan-900"
  }
  
  ]

const SocialLinks = () => {
  return(
    <div className="">
    <ul className=" hidden lg:flex flex-col fixed  top-52  left-0">
    {Links.map(props=>(

      <li key={props.id} className={`flex justify-between items-center w-30 h-fit py-1 bg- text-white rounded-sm z-40  hover:bg-sky-500    focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-black ml-[-62px] hover:ml-[5px] hover duration-500 ${props.style}`}>
      <a href={props.type} className="flex justify-between  w-full  items-center">
          {props.side}
      </a>
            
      </li>))}
    </ul>
    </div>
  )

};

export default SocialLinks;
