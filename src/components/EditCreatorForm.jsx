import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";


import { supabase } from "../client";
import { CustomButton } from "./CustomButton";

export const EditCreatorForm = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("contentcreators")
        .select("*")
        .eq("id", id)
        .single();
      if (error || !data) {
        console.error(error);
        navigate('/404');
      } else {
        setCreator(data);
        setName(data.name);
        setImageURL(data.image_url);
        setDesc(data.description);
        setYoutube(data.youtube_handle);
        setTwitter(data.twitter_handle);
        setInstagram(data.instagram_handle);
      }
    };

    fetchCreator();
  }, [id, navigate]);

  if (!creator) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Please make sure that all the data is inputted properly.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#46ac1a",
      cancelButtonColor: "#d63030",
      confirmButtonText: "Change",
    });

    if (result.isConfirmed) {
      const { error } = await supabase
        .from("contentcreators")
        .update({
          name,
          image_url: imageURL,
          description: desc,
          youtube_handle: youtube,
          twitter_handle: twitter,
          instagram_handle: instagram,
        })
        .eq("id", id);

      if (error) {
        console.error("Error updating creator:", error);
      } else {
        Swal.fire(
          "Sucess!",
          "The creator's information has been changed.",
          "success"
        );
        navigate("/");
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 text-white rounded-lg shadow-lg font-sans mt-4 md:mt-6">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
            placeholder="Enter creator's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Image
          </label>
          <p className="text-xs text-gray-400">
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>
          <input
            type="text"
            className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Description
          </label>
          <p className="text-xs text-gray-400">
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <textarea
            className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
            placeholder="Enter description"
            rows="4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-300">
            SOCIAL MEDIA LINKS
          </label>
          <p className="text-xs text-gray-400">
            Provide at least one of the creator's social media links.
          </p>
          <div className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                YouTube
              </label>
              <p className="text-xs text-gray-400">
                The creator's YouTube handle (without the @)
              </p>
              <input
                type="text"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
                placeholder="Enter YouTube handle"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Twitter
              </label>
              <p className="text-xs text-gray-400">
                The creator's Twitter handle (without the @)
              </p>
              <input
                type="text"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
                placeholder="Enter Twitter handle"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Instagram
              </label>
              <p className="text-xs text-gray-400">
                The creator's Instagram handle (without the @)
              </p>
              <input
                type="text"
                className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
                placeholder="Enter Instagram handle"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-3">
          <CustomButton
            type="submit"
            className="w-[70%] h-12 button-submit"
            text="Submit"
            id="submitBtn"
          />
        </div>
      </form>
    </div>
  );
};
