import classNames from 'classnames';
import style from '../css/style.module.css';
import ProjectMini from '../components/ProjectMini';
import Menu from '../components/Menu';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';

function MainPage() {
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false);

  const handleLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const handleCreateProjectModal = () => {
    setShowCreateProjectModal(true);
  };

  const handleCloseModal = () => {
    setShowLogoutModal(false);
    setShowCreateProjectModal(false);
  };

  return (
    <>
      {showLogoutModal && (
        <Modal title="Выход из аккаунта">
          <div className={style.model_exit_block}>
            <div>вы точно хотите выйти?</div>
            <div className={style.modal_options_block}>
              <NavLink
                className={classNames(style.modal_option, style.modal_option_yes)}
                to='/loginPage'
                onClick={handleCloseModal}
              >
                Да
              </NavLink>

              <div
                className={classNames(style.modal_option, style.modal_option_no)}
                onClick={handleCloseModal}
              >
                Нет
              </div>
            </div>
          </div>
        </Modal>
      )}

      {showCreateProjectModal && (
        <Modal title="Создание Проекта">
          <div className={style.model_exit_block}>
            <input type='text' placeholder='Название' className={style.form_input} />
            <div className={style.modal_options_block}>
              <NavLink
                className={classNames(style.modal_option, style.modal_option_yes)}
                to='/projectPage'
                onClick={handleCloseModal}
              >
                Да
              </NavLink>

              <div
                className={classNames(style.modal_option, style.modal_option_no)}
                onClick={handleCloseModal}
              >
                Нет
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Menu>
        <div
          onClick={handleCreateProjectModal}
          className={classNames(style.option, style.create)}
        >
          <div className={classNames(style.options_icon, style.create_project_icon)}></div>
          <span className={style.option_name}>Создать</span>
        </div>
        <div onClick={handleLogoutModal} className={classNames(style.option, style.logout)}>
          <div className={classNames(style.options_icon, style.logout_icon)}></div>
          <span className={style.option_name}>Выйти</span>
        </div>
        <NavLink to='/StaffPage' className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.view_members_icon)}></div><span className={style.option_name}>Сотрудники</span></NavLink>
      </Menu>

      <main>
        <form className={style.project_search_block}>
          <div className={style.search}>
            <input className={style.project_search} type="search" placeholder="Поиск" />
            <button className={style.search_btn} type="submit"></button>
          </div>

          <div className={style.sort_by_status}>
            <div className={classNames(style.status_mini, style.done)}></div>
            <div className={classNames(style.status_mini, style.process)}></div>
            <div className={classNames(style.status_mini, style.late)}></div>
          </div>
        </form>

        <section className={style.project_list}>
          <ProjectMini />
          <ProjectMini />
          <ProjectMini />
          <ProjectMini />
          <ProjectMini />
          <ProjectMini />
          <ProjectMini />
        </section>
      </main>
    </>
  );
}

export default MainPage;