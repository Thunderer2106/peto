import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-fit text-white  pt-12 px-0 md:px-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline hover:scale-105 duration-200 border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl font-extrabold  text-center">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8  sm:px-0">
          {portfolios.map(props => (
            <div key={props.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={props.src}
                alt=""
                className="rounded-md  w-96  h-48      duration-200 hover:scale-105"
              />
              <div className="flex   bg-gray-800  ">
                <p className="   hidden  hover:display-contents      mt-[-182px] hover:mt-[10px]  text-justify pb-12  hover duration-500 h-auto  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
                </p>
              </div>
            </div>
         ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
