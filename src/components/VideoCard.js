import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <Link
      to={"/watch?v=" + info.id}
      className="w-[24%] block shadow-lg rounded-lg mb-4 cursor-pointer"
    >
      <img
        alt="thumbnail"
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
      />
      <div className="py-3 px-4">
        <h3 className="font-bold py-2">{title}</h3>
        <h5>{channelTitle}</h5>
        <h6>{statistics.viewCount} Views</h6>
      </div>
    </Link>
  );
};

export default VideoCard;
