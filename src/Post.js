import React from "react";

const Post = ({ post }) => {
  return (
    <li id={"post_" + post.id}>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </li>
  );
};

export default Post;
