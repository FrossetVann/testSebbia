
import classNames from 'classnames';
import style from '../css/style.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Modal from "./Modal";
import React, { PropsWithChildren } from 'react';



const Member = () => {
  return (
    <div className={style.member_block}>
      <div className={style.member_photo}></div>
      <div className={style.member_info_mini}>
        <div className={style.member_name}>Иван Иванович И.</div>
        <div className={style.member_activity}>Frontend</div>
      </div>
    </div>
  )
}

export default Member