import React from "react";
import { useEffect, useState } from "react";
import { CreatorCard } from "./CreatorCard";
import { supabase } from "../client";

export const AllCreators = () => {
  const [contentCreators, setContentCreators] = useState([]);

  /* This is just to demonstrate knowledge with fetching data using axios (for requirement),
   although it would make the client supabase redundant if data is fetched through fetch() or axios 

  import axios from "axios";

  async function getCreators() {
    try {
      const response = await axios.get(import.meta.env.VITE_SUPABASE_URL, {
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_API_KEY,
          Authorization: import.meta.env.VITE_SUPABASE_JWT,
        },
      });
      const data = response.data;
      setContentCreators(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  */

  async function getCreators() {
    try {
    const { data, error } = await supabase
    .from("creators")
    .select("*");
    if (error) throw error;
    if (data != null) {
    setContentCreators(data);
    }
    } catch (error) {
    console.error(error.message);
    }
    }
    
    

  useEffect(() => {
    getCreators();
  }, []);

  return (
    <div className="mt-12 bg-cover bg-center flex flex-1 items-center justify-center h-full min-h-screen gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-20 md:gap-40 lg:gap-5 gap-y-5 sm:gap-y-12 md:gap-y-5 lg:gap-y-5">
        {contentCreators.map((creator) => (
          <CreatorCard creator={creator} />
        ))}
      </div>
    </div>
  );
};
