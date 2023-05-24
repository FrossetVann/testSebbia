import style from '../css/style.module.css';
import ProjectRole from '../components/ProjectRole';
import Menu from '../components/Menu';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

function ProjectRolesPage() {
    return (
      <>
    <Menu>
    <NavLink to='/ProjectPage' className={classNames(style.option, style.back)}><div className={classNames(style.options_icon, style.back_icon)}></div><span className={style.option_name}>Вернуться</span></NavLink>
    </Menu>
    <main>
    <div className={style.project_title_block}>
      <h2 className={style.project_title}>Роли Проекта</h2>
    </div>
    <form className={style.staff_search_block}>
        <div className={style.search}>
          <input className={style.project_search}  type="search" placeholder="Поиск"/>
          <button className={style.search_btn} type="submit"></button>
        </div>
    </form>
    <div className={style.scroll}></div>
    <section className={style.roles_list}>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
        <ProjectRole/>
    </section>
    </main>
    </>
    );
  }
  
  export default ProjectRolesPage