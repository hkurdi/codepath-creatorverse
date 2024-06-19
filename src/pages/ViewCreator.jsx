import React from "react";
import { Hero } from "../components/Hero";
import { CreatorDetails } from "../components/CreatorDetails";

export const ViewCreator = () => {
  

  return (
    <div id="viewcreator-page" className="bg-gray-950">
      <section
        id="viewcreator-hero"
        className="border-b-[1.4px] border-gray-500"
      >
        <Hero />
      </section>
      <section id="viewcreator-details">
        <CreatorDetails />
      </section>
    </div>
  );
};
