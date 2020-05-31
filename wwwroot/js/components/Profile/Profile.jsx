import React from "react";
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

let Profile = (props) => {
  return (
      <div className={c.profile}>
          <div className={c.photo}>
              <img src="https://wallpapershome.com/images/pages/pic_h/6758.jpg" alt=""/>
          </div>
          <div className={c.identity}>
              <div className={c.desc__logo}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""/>
              </div>
              <div className={c.desc__name}>
                  <div><h3>Ural Ozbayan</h3></div>
              </div>
          </div>
          <div className={c.status}>
              <p>Some description text here. For example: Lorem ipsum dolor sit amet</p>
          </div>
          <div>
              <h1>My posts:</h1>
              <MyPosts/>
          </div>
      </div>
  )
};

export default Profile