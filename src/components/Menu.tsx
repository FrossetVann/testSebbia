
import classNames from 'classnames';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';
import LoginPage from '../pages/LoginPage'

const Menu = () => {
  return (
    <aside className={classNames(style.left_side,  style.side)}>
    <div className={style.my_account_info_block}>
      <div className={style.photo_profile}></div>
      <div className={style.name}>
        <div className={style.firstname}>Иван</div>
        <div className={style.lastname}>Иванович И.</div>
      </div>
    </div>
    <div className={style.options}>
      <a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.create_project_icon)}></div><span className={style.option_name}>Создать</span></a>
      <NavLink to='/loginPage' className={classNames(style.option, style.logout)}><div className={classNames(style.options_icon, style.logout_icon)}></div><span className={style.option_name}>Выйти</span></NavLink>
    </div>
  </aside>
  )
}
export default Menu