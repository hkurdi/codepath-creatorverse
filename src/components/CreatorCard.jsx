import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function CreatorCard({ creator }) {
  const navigate = useNavigate();

  const handleInfo = () => {
    navigate(`/view-creator/${creator.id}`);
  };

  return (
    <Card className="w-96 h-[500px] bg-gray-900 text-white relative">
      <div>
        <Tooltip content="Info" placement="top">
          <button
            onClick={handleInfo}
            className="z-10 absolute top-2 right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </button>
        </Tooltip>
        <CardHeader floated={false} className="h-48 relative">
          {creator.image_url ? (
            <img src={creator.image_url} alt="profile-picture" className="w-full h-full object-cover" />
          ) : (
            <img src={import.meta.env.VITE_NO_PROFILE_PIC} alt="profile-picture" className="w-full h-full object-cover" />
          )}
        </CardHeader>
      </div>

      <CardBody className="text-center overflow-hidden">
        {creator.name && (
          <Typography variant="h4" className="mb-2">
            {creator.name}
          </Typography>
        )}
        {creator.description && (
          <Typography color="gray" className="font-light" textGradient>
            {creator.description}
          </Typography>
        )}
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <div className="flex flex-row bg-white bg-opacity-[0.02] border border-gray-200 border-opacity-20 rounded-full w-full items-center gap-12 justify-center">
          {creator.youtube_handle && (
            <Tooltip content="Youtube">
              <Typography
                as="a"
                href={`https://www.youtube.com/@${creator.youtube_handle}`}
                variant="lead"
                color="red"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Typography>
            </Tooltip>
          )}
          {creator.twitter_handle && (
            <Tooltip content="Twitter">
              <Typography
                as="a"
                href={`https://www.twitter.com/${creator.twitter_handle}`}
                variant="lead"
                color="light-blue"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Typography>
            </Tooltip>
          )}
          {creator.instagram_handle && (
            <Tooltip content="Instagram">
              <Typography
                as="a"
                href={`https://www.instagram.com/${creator.instagram_handle}`}
                variant="lead"
                color="pink"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Typography>
            </Tooltip>
          )}
          {!creator.youtube_handle && !creator.twitter_handle && !creator.instagram_handle && (
            <Typography
              color="gray"
              className="text-sm font-light text-nowrap text-gray-500"
              textGradient
            >
              This content creator has no social media.
            </Typography>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
