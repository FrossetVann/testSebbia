
import classNames from 'classnames';
import style from '../css/style.module.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Modal from "./Modal";
import React, { PropsWithChildren } from 'react';

interface Content {
}


const Menu = ({children}: PropsWithChildren<Content>) => {
  return (
    
    <aside className={classNames(style.left_side, style.side)}>
    <div className={style.my_account_info_block}>
      <div className={style.photo_profile}></div>
      <div className={style.name}>
        <div className={style.firstname}>Иван</div>
        <div className={style.lastname}>Иванович И.</div>
      </div>
    </div>
    <div className={style.options}>
    {children}
    </div>
  </aside>
  )
}
export default Menu


{/* <NavLink to='/' className={classNames(style.option, style.back)}><div className={classNames(style.options_icon, style.back_icon)}></div><span className={style.option_name}>Вернуться</span></NavLink>
<a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.view_members_icon)}></div><span className={style.option_name}>Участники</span></a>
<a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.create_task_icon)}></div><span className={style.option_name}>Задача</span></a>
<a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.create_project_icon)}></div><span className={style.option_name}>Создать</span></a>
<a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.delete_project_icon)}></div><span className={style.option_name}>Создать</span></a> */}