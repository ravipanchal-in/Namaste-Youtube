import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return !videos ? (
    <h1>Loading</h1>
  ) : (
    <div className="flex flex-wrap gap-[1.3%]">
      {videos.map((item) => (
        <VideoCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default VideoContainer;
