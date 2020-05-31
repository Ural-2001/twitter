import React from "react";
import c from './Post.module.css'

let Post = (props) => {
  return (
      <div className={c.post}>
          <div>{props.text}</div>
          <div>
              <span className={c.likes}>likes: {props.likes_count}</span>
          </div>
      </div>
  )
};

export default Post