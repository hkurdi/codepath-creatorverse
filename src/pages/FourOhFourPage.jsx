import React from "react";
import { Hero } from "../components/Hero";

export const FourOhFourPage = () => {
  return (
    <div id="404" className="bg-gray-950">
      <section id="404-hero" className="border-b-[1.4px] border-gray-500">
        <Hero />
      </section>
      <section id="404">
        <div className="flex items-center justify-center h-64 text-white">
          <h1 className="text-2xl md:text-5xl lg:text-7xl sm:text-4xl font-bold uppercase">404 - Content Creator Not Found</h1>
        </div>
      </section>
    </div>
  );
};
