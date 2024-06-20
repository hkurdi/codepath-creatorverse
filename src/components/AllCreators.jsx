import React from "react";
import { CreatorCard } from "./CreatorCard";
import { useEffect, useState } from "react";
import { supabase } from "../client";

export const AllCreators = () => {
  const [contentCreators, setContentCreators] = useState([]);

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {contentCreators.map((creator) => (
          <CreatorCard creator={creator} />
        ))}
      </div>
    </div>
  );
};
