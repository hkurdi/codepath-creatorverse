import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreatorCard } from "./CreatorCard";

export const AllCreators = () => {
  const [contentCreators, setContentCreators] = useState([]);

  async function getCreators() {
    try {
      const response = await axios.get(import.meta.env.VITE_SUPABASE_URL, {
        headers: {
          apikey: import.meta.env.VITE_SUPABASE_API_KEY,
          Authorization: import.meta.env.VITE_SUPABASE_API_KEY,
        },
      });
      const data = response.data;
      setContentCreators(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getCreators();
  }, []);

  return (
    <div className="mt-12 bg-cover bg-center flex flex-1 items-center justify-center h-full min-h-screen gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-20 md:gap-40 lg:gap-5 gap-y-5 sm:gap-y-0 md:gap-y-0 lg:gap-y-0">
        {contentCreators.map((creator) => (
          <CreatorCard creator={creator} />
        ))}
      </div>
    </div>
  );
};
