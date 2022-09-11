import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";

function PostDetails(props) {
  const { body, id } = props.data;
  const [comment, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => {
        setComment(response.data);
        setIsLoading(false);
      });
  }, [id]);

  const content = (
    <div>
      <h2>id: {id}</h2>
      <p>body: {body}</p>
    </div>
  );

  return (
    <React.Fragment>
      <div
        style={{
          height: "15rem",
          width: "30rem",
          border: "2px solid black",
          marginTop: "1rem",
          padding: "1rem",
        }}
      >
        {isLoading ? "Loading..." : content}
      </div>
      <Comment comment={comment} />
    </React.Fragment>
  );
}

export default PostDetails;
