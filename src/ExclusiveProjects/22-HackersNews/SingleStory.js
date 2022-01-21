import React from "react";
import { useGlobalState } from "./Context";

const SingleStory = ({
  objectID,
  title,
  author,
  points,
  num_comments,
  url,
}) => {
  const { RemoveStories } = useGlobalState();

  return (
    <div className="single-story-container">
      {/* title starts */}
      <h4 className="title line1">{title || "No Title"}</h4>
      {/* title ends */}

      {/* line 2 starts */}
      <span className="line2">
        <span>
          {points || 0} points by {author || "anonymous"} | {num_comments || 0}{" "}
          comments
        </span>
      </span>
      {/* line 2 ends */}

      {/* action-btns-starts */}
      <div className="action-btns">
        <a href={url} className="read-more-btn">
          Read More
        </a>
        <span className="delete-btn" onClick={() => RemoveStories(objectID)}>
          Delete
        </span>
      </div>
      {/* action-btns-ends */}
    </div>
  );
};

export default SingleStory;
