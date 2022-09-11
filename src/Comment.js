import React from "react";

function Comment(props) {
  return (
    <div
      style={{
        height: "15rem",
        width: "30rem",
        border: "2px solid black",
        marginTop: "1rem",
        padding: "1rem",
        overflowY: "scroll",
      }}
    >
      {props.comment.map((cm, idx) => {
        return (
          <div key={idx}>
            <h3>ID: {cm.postId}</h3>
            <h3>Email: {cm.email}</h3>
            <h3>Name: {cm.name}</h3>
            <h3>Body: {cm.body}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
