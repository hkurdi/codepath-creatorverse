import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";
import { CustomButton } from "./CustomButton";

export const CreatorDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { error } = await supabase
          .from("contentcreators")
          .delete()
          .eq("id", creator.id);
        if (error) {
          console.error("Error deleting creator:", error);
          return;
        }
        Swal.fire("Deleted!", "The creator has been deleted.", "success");
        navigate("/");
      } catch (error) {
        console.error("Error deleting creator:", error.message);
      }
    }
  };

  const handleEdit = () => {
    navigate(`/edit-creator/${creator.id}`);
  };

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
      }
    };

    fetchCreator();
  }, [id, navigate]);

  if (!creator) return null;
  
  return (
    <div className="flex flex-col items-center w-full text-white py-10 px-10 rounded-lg select-none">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl bg-gray-950 p-8 rounded-lg shadow-2xl border border-gray-700 creator-details-bg">
        {creator.image_url ? (
          <img
            src={creator.image_url}
            alt={creator.name}
            className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-8 transform transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <img
            src={import.meta.env.VITE_NO_PROFILE_PIC}
            alt="Image Not Found"
            className="w-64 h-64 object-cover rounded-lg mb-4 md:mb-0 md:mr-8 transform transition-transform duration-300 hover:scale-105"
          />
        )}
        <div className="flex flex-col justify-center text-center md:text-left">
          {creator.name ? (
            <h1 className="text-4xl font-extrabold mb-2 hover:text-gray-400 transition-colors duration-300">
              {creator.name.toUpperCase()}
            </h1>
          ) : (
            <h1 className="text-4xl font-extrabold mb-2 hover:text-gray-400 transition-colors duration-300 uppercase">
              No Name
            </h1>
          )}
          {creator.description ? (
            <p className="text-lg font-light mb-4 text-gray-400">
              {creator.description}
            </p>
          ) : (
            <p className="text-lg font-light mb-4 text-gray-400">
              This content creator has no description.
            </p>
          )}
          <div className="flex flex-row gap-20 items-center justify-center">
            {creator.youtube_handle ? (
              <a
                href={`https://www.youtube.com/@${creator.youtube_handle}`}
                className="flex items-center text-red-500 hover:animate-pulse"
                aria-label="YouTube"
                title="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                <span className="text-gray-500 font-light ml-2">
                  {creator.youtube_handle}
                </span>
              </a>
            ) : null}
            {creator.twitter_handle ? (
              <a
                href={`https://www.twitter.com/${creator.twitter_handle}`}
                className="flex items-center text-blue-400 hover:animate-pulse"
                aria-label="Twitter"
                title="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <span className="text-gray-500 font-light ml-2">
                  @{creator.twitter_handle}
                </span>
              </a>
            ) : null}
            {creator.instagram_handle ? (
              <a
                href={`https://www.instagram.com/${creator.instagram_handle}`}
                className="flex items-center text-pink-500 hover:animate-pulse"
                aria-label="Instagram"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span className="text-gray-500 font-light ml-2">
                  @{creator.instagram_handle}
                </span>
              </a>
            ) : null}
            {!creator.twitter_handle &&
              !creator.instagram_handle &&
              !creator.youtube_handle && (
                <p className="text-sm font-light text-gray-500">
                  This content creator has no social media.
                </p>
              )}
          </div>
          <div className="flex flex-row flex-1 gap-16 md:gap-20 justify-center items-center pt-12">
            <CustomButton
              id="deleteBtn"
              className="button-same-size button-delete w-[60%] h-10"
              text="delete"
              textClassName="text-center text-sm"
              onClick={handleDelete}
            />
            <CustomButton
              id="editBtn"
              className="button-same-size button-edit w-[60%] h-10"
              text="edit"
              textClassName="text-center text-sm"
              onClick={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
