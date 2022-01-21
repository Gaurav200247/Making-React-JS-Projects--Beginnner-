import React from "react";
import { useGlobalState } from "./Context";
import SingleStory from "./SingleStory";

const Stories = () => {
  const { hits } = useGlobalState();
  return (
    <div className="stories-container">
      {hits.map((item) => {
        return <SingleStory key={item.objectID} {...item} />;
      })}
    </div>
  );
};

export default Stories;
