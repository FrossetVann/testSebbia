
import classNames from 'classnames';
import style from '../css/style.module.css';
import { NavLink } from 'react-router-dom';

const ProjectMini = () => {
  return (
    <>
    <NavLink to='/ProjectPage'>
    <div className={style.project}>
    <div className={style.project_name_block}>
      <p className={style.project_name}>React приложение</p>
      <div className={style.project_status}></div>
    </div>
    <div className={style.project_description_block}>
      <p className={style.project_description}>React - это JavaScript фреймворк для создания интерфейсов. С его помощью можно быстро и легко создать красивый и функциональный сайт. Он предоставляет множество возможностей для упрощения и ускорения процесса разрабо это JavaScript фреймворк для создания интерфейсов.</p>
    </div>
    <div className={style.project_info}>
      <div className={style.progress_block}>
        <p className={style.progress_count}>84 часа</p>
        <div className={style.progress}></div>
      </div>
      <div className={style.start_date_block}>
        <p className={style.start_date}>12-02-34</p>
      </div>
    </div>
  </div>
  </NavLink>
  </>
  )
}
export default ProjectMini