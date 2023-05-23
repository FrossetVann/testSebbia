
import classNames from 'classnames';
import style from '../css/style.module.css';
import ProjectMini from '../components/ProjectMini';
import Menu from '../components/Menu';

function MainPage() {
  return (
    <>
  
  <main>
     <form className={style.project_search_block}>
      <div className={style.search}>
        <input className={style.project_search}  type="search" placeholder="Поиск"/>
        <button className={style.search_btn} type="submit"></button>
      </div>
      
      <div className={style.sort_by_status}>
        <div className={classNames(style.status_mini,  style.done)}></div>
        <div className={classNames(style.status_mini, style.process)}></div>
        <div className={classNames(style.status_mini, style.late)}></div>
      </div>
     </form>
     <section className={style.project_list}>
      <ProjectMini />
      <ProjectMini/>
      <ProjectMini/>
      <ProjectMini/>
      <ProjectMini/>
      <ProjectMini/>
      <ProjectMini/>


     </section>
  </main>
  </>
  );
}

export default MainPage