import React, { useEffect, useState } from "react";
import { fetchYouTubeVideo } from "../utils/fetchYouTube";

const YouTubeVideo = ({ recipeName }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      const url = await fetchYouTubeVideo(recipeName);
      if(!url) return setVideoUrl(null);
      setVideoUrl(url);
    };

    if (recipeName) getVideo();
  }, [recipeName]);

  return (
    <div className="mt-4">
      {videoUrl ? (
        <iframe
          width="100%"
          height="315"
          src={videoUrl.replace("watch?v=", "embed/")}
          title={`YouTube video for ${recipeName}`}
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-md"
        ></iframe>
      ) : (
        <p>No video found for this recipe.</p>
      )}
    </div>
  );
};

export default YouTubeVideo;
