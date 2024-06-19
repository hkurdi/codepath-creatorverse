import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { CustomButton } from "./CustomButton";

const heroBg = "/hero-bg.jpeg";

export const Hero = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  const handleAllCreators = () => {
    const allCreators = document.getElementById("allcreators");
  
    if (pathName === "/") {
        if (allCreators) allCreators.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#allcreators");
      setTimeout(() => {
        const allCreatorsAfterNav = document.getElementById("allcreators");
        if (allCreatorsAfterNav) {
          allCreatorsAfterNav.scrollIntoView({ behavior: "smooth" });
        }
      }, 80); 
    }
  };

  useEffect(() => {
    if(pathName.includes("/view-creator")) {
      const heroClassList = document.getElementById("hero-main").classList;
      heroClassList.remove("h-screen-hero");
      heroClassList.add("h-screen-hero-view-creator");
    }
  }, [location]);

  const handleAddCreator = () => navigate("/add-creator");

  return (
    <div className="relative flex flex-col items-center justify-center h-screen-hero text-white overflow-hidden px-4 md:px-8" id="hero-main">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <h1 className="relative text-5xl md:text-7xl sm:text-[3.5rem] drop-shadow-md mb-20 max-w-screen-lg mx-auto tracking-widest font-thin">
        CREATORVERSE
      </h1>
      <div className="relative button-group flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-7 gap-14 max-w-screen-lg mx-auto">
        <CustomButton onClick={handleAllCreators} text="View All Creators" />
        <CustomButton onClick={handleAddCreator} text="Add A Creator" />
      </div>
    </div>
  );
};
