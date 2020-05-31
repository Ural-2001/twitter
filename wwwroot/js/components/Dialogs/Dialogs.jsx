import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let Dialogs = () => {
  return (
      <div className={s.dialogs}>
          <div className={s.dialogs_items}>
              <div className={s.dialog + ' ' + s.active}>
                  <NavLink to='/dialogs/1'>Mike</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/2'>Thomas</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/3'>Python</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/4'>Andrew</NavLink>
              </div>
              <div className={s.dialog}>
                  <NavLink to='/dialogs/5'>Sveta</NavLink>
              </div>
          </div>
          <div className={s.messages}>
              <div className={s.message}>Hello</div>
              <div className={s.message}>How are you</div>
          </div>
      </div>
  )
};

export default Dialogs