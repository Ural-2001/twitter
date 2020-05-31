import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
  return (
      <div className={s.navbar}>
          <div className={s.content}>
              <div><NavLink to='/feed' activeClassName={s.active}>Feed</NavLink></div>
              <div><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
              <div><NavLink to='dialogs' activeClassName={s.active}>Dialogs</NavLink></div>
              <div><NavLink to='settings' activeClassName={s.active}>Settings</NavLink></div>
              <div><NavLink to='music' activeClassName={s.active}>Music</NavLink></div>
          </div>
      </div>
  )
};

export default Navbar