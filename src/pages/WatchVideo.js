import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/slices/appSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu(false));
  }, []);

  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  return (
    <div className="col-span-11 py-3 px-5">
      <iframe
        width="1200"
        height="600"
        src={`https://www.youtube.com/embed/${videoId}?si=I3wAb7jX9LMzxu1_`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchVideo;
