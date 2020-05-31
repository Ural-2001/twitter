import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts = () => {
  return (
      <div className={c.posts}>
          <div><Post text='the first post ever' likes_count={5}/></div>
          <div><Post text='hello guys, its my second post' likes_count={3}/></div>

      </div>
  )
};

export default MyPosts