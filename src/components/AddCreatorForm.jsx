import React, {useState} from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import { supabase } from "../client";
import { CustomButton } from "./CustomButton";

export const AddCreatorForm = () => {

  const navigate = useNavigate();  
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [desc, setDesc] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  async function addCreator() {
    try {
      const { data, error } = await supabase.from("contentcreators").insert([
        {
          name,
          image_url: imageURL,
          description: desc,
          youtube_handle: youtube,
          twitter_handle: twitter,
          instagram_handle: instagram,
        },
      ]);

      if (error) throw error;
      Swal.fire({title: 'Success!', text: 'This creator has been added!.', icon: 'success'})   
      navigate("/");   
    } catch (error) {
      console.error("Error adding creator:", error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    addCreator();
  }

  return (
    <div className="max-w-lg mx-auto p-6 text-white rounded-lg shadow-lg font-sans mt-4 md:mt-6">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 bg-gray-900 border border-gray-700 rounded-md"
            placeholder="Enter creator's name"
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
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-3">
          <CustomButton
            onClick={handleSubmit}
            className="w-[70%] h-12 button-submit"
            text="Submit"
            id="submitBtn"
          />
        </div>
      </form>
    </div>
  );
};
