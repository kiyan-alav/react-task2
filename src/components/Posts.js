import React, { useEffect, useReducer, useState } from "react";
import PostDetails from "../PostDetails";
import axios from "axios";

const initialState = {
  isLoading: true,
  message: "Loading..",
  posts: [],
};
const reducer = function (curState, action) {
  if (action.type === "success") {
    return {
      isLoading: false,
      message: "",
      posts: action.payload,
    };
  }
  if (action.type === "faild") {
    return {
      isLoading: false,
      message: "Something went wrong",
      posts: [],
    };
  }
  return curState;
};

function Posts(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: "success", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "faild" });
      });

    return () => {};
  }, [state]);

  const postHandler = function (body, id) {
    setPost({ body: body, id: id });
  };

  return (
    <React.Fragment>
      <div
        style={{
          padding: "1rem",
          height: "50rem",
          width: "40rem",
          border: "2px solid black",
          overflowY: "scroll",
        }}
      >
        <h2>Post</h2>
        <ul>
          {state.posts.map((post, idx) => {
            return (
              <li key={idx}>
                <p>{post.title}</p>
                <button onClick={postHandler.bind(this, post.body, post.id)}>
                  More Information
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <PostDetails data={post} style={{ padding: "1rem" }} />
    </React.Fragment>
  );
}

export default Posts;
