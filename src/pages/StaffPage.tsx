import classNames from 'classnames';
import style from '../css/style.module.css';
import Staff from '../components/Staff';
import Menu from '../components/Menu';
import { NavLink } from 'react-router-dom';

function StaffPage() {
    return (
      <>
    <Menu>
      <NavLink to='/' className={classNames(style.option, style.back)}><div className={classNames(style.options_icon, style.back_icon)}></div><span className={style.option_name}>Вернуться</span></NavLink>
    </Menu>
    <main>
    <div className={style.project_title_block}>
      <h2 className={style.project_title}>Справочник Сотрудников</h2>
    </div>
    <form className={style.staff_search_block}>
        <div className={style.search}>
          <input className={style.project_search}  type="search" placeholder="Поиск"/>
          <button className={style.search_btn} type="submit"></button>
        </div>
    </form>
    <div className={style.scroll}></div>
    <section className={style.staff_list}>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
        <Staff/>
    </section>
    </main>
    </>
    );
  }
  
  export default StaffPage