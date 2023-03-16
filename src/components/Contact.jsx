import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Contact = () => {
  const Links=[
    {
      id:1,
      side: (<> Linkedin <FaLinkedin size={30}/></>),
      type: 'https://www.linkedin.com/in/akash-karamsetty-867664258',
      style: "bg-blue-800"
    
    },
    {
    
      id:2,
      side: (<> Github <FaGithub size={30}/></>),
      type: 'https://github.com/Thunderer2106',
      style:"bg-neutral-900"
    },
    {
      id:3,
      side:(<>Mail <HiOutlineMail size={30}/></>),
      type:'mailto:akashkaramsetty@gmail.com',
      style:"bg-red-800"
    },
    {
        id:4,
        side: (<>Resume<BsFillPersonLinesFill size={30}/></>),
        type: '#',
        style:"bg-cyan-900"
    }
    
    ]

  return (
    <div name="Contact" className='bg-gradient-to-b  to-gray-800 from-black pt-16  flex flex-col items-center pb-24'>
    <div className='bg-gradient-to-b  to-black  from-gray-900    '>
        <div className="text-center flex flex-col items-center pb-16 pt-12">         
            <h1 className="text-slate-200  text-[3rem] font-medium"> Let's Get In Touch</h1>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-4 mt-4">
                Lets have a talk and discuss more
                <br/>
                <span className=' font-semibold    '>Mobile no- 889515689</span>
                <br/>
                <span className=' font-semibold    '>Email-akashkaramsetty@gmail.com</span>
            </p>
        </div>
        <div className='flex flex-col'> </div>
        <ul >
        {Links.map(props=>(
    
          <li key={props.id} className={`flex justify-between items-center  py-3 bg- text-white rounded-sm z-40  hover:bg-sky-500    focus:outline-none focus:border-sky-900 focus:ring-1 focus:ring-black ${props.style}`}>
          <a href={props.type} className="flex justify-between  w-full  items-center">
              {props.side}
          </a>
             </li>   
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact