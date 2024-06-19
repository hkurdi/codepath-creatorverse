import React from "react";
import { EditCreatorForm } from "../components/EditCreatorForm";
import { Hero } from "../components/Hero";

export const EditCreator = () => {


  return (
    <div id="editcreator-page" className="bg-gray-950">
      <section
        id="editcreator-hero"
        className="border-b-[1.4px] border-gray-500"
      >
        <Hero />
      </section>
      <section id="editcreator-section">
        <EditCreatorForm />
      </section>
    </div>
  );
};
