
import classNames from 'classnames';
import style from '../css/style.module.css';
import Menu from '../components/Menu';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../components/Modal';
import Member from '../components/Member';

function ProjectPage() {
    const [showMembersModal, setShowMembersModal] = useState(false);

    const handleMembersClick = () => {
      setShowMembersModal(true);
    };

    const handleCloseModal = () => {
      setShowMembersModal(false);

    };

    
  return (
    <>
    {showMembersModal && (
  <Modal
    title="Список участников"
    onClose={() => setShowMembersModal(false)}>
            <div className={style.model_exit_block}>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <div
                className={classNames(style.modal_option, style.modal_option_no)}
                onClick={handleCloseModal}
              >
                Закрыть
              </div>
          </div>

  </Modal>
  )}
  <Menu>
    <NavLink to='/' className={classNames(style.option, style.back)}><div className={classNames(style.options_icon, style.back_icon)}></div><span className={style.option_name}>Вернуться</span></NavLink>
    <div onClick={handleMembersClick} className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.view_members_icon)}></div><span className={style.option_name}>Участники</span></div>
    <a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.create_task_icon)}></div><span className={style.option_name}>Задача</span></a>
    <a className={classNames(style.option, style.create)}><div className={classNames(style.options_icon, style.delete_project_icon)}></div><span className={style.option_name}>Удалить</span></a>
  </Menu>
  <main>
    <div className={style.project_title_block}>
      <h2 className={style.project_title}>React приложение</h2>
    </div>
    <div className={style.project_info_main}>
    <h2 className={style.project_description_title}>Описание</h2>
    <div  className={style.project_description_full_block}>
      <p className={style.project_description_full}>
      React - это JavaScript фреймворк для создания интерфейсов.
      С его помощью можно быстро и легко создать красивый и функциональный сайт.
      Он предоставляет множество возможностей для упрощения и ускорения процесса разработки,
      а также облегчает понимание кода и управление им.Кроме того,
      важным аспектом при создании сайта является дизайн.
      Дизайн - это то, что первым зацепит взгляд посетителя и
      создаст первое впечатление о сайте. Это может быть цветовая схема,
      типографика, интерактивность элементов или любые другие детали.
      Для того, чтобы создать качественный дизайн,
      необходимо не только быть талантливым дизайнером,
      но и использовать современные технологии.
      </p>
    </div>
    <h2 className={style.project_task_title}>Задачи</h2>

    <div className={style.tasks_block}>
    <div className={classNames(style.task ,style.close_task)}>
        <div className={style.task_info}>
          <div className={style.task_num_name}>
            <p className={style.task_numeration}>1</p>
            <p className={style.task_title}>Название</p>
          </div>
          <div className={style.task_time_block}>
            <p className={style.task_time}>84 часа</p>
          </div>

          {/* <div className={style.task_activities}>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Frontend</p>
            </div>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Backend</p>
            </div>
          </div> */}
          <div className={style.task_options_switch}>
          <div className={style.task_options_block}>
            <div className={classNames(style.task_option, style.edit_btn)}></div>
            <div className={classNames(style.task_option, style.add_task_btn)}></div>
            <div className={classNames(style.task_option, style.delete_task_btn)}></div>
          </div>
          <div className={style.task_switch}></div>
          </div>
        </div>
        <div className={style.task_content}>
        <p className={style.task_description_title}>Описание</p>
        <div  className={style.task_description_block}>
        <p className={style.task_description}>
        React - это JavaScript фреймворк для создания интерфейсов.
        С его помощью можно быстро и легко создать красивый и функциональный сайт.
        Он предоставляет множество возможностей для упрощения и
        ускорения процесса разработки, а также облегчает понимание кода и
        управление им.Кроме того, важным аспектом
        при создании сайта является дизайн.
        </p>
        </div>

        </div>
        <div className={style.sub_tasks_block}>
            
        </div>

      </div>
      <div className={style.task}>
        <div className={style.task_info}>
          <div className={style.task_num_name}>
            <p className={style.task_numeration}>1</p>
            <p className={style.task_title}>Название</p>
          </div>
          <div className={style.task_time_block}>
            <p className={style.task_time}>84 часа</p>
          </div>

          {/* <div className={style.task_activities}>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Frontend</p>
            </div>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Backend</p>
            </div>
          </div> */}
          <div className={style.task_options_switch}>
          <div className={style.task_options_block}>
            <div className={classNames(style.task_option, style.edit_btn)}></div>
            <div className={classNames(style.task_option, style.add_task_btn)}></div>
            <div className={classNames(style.task_option, style.delete_task_btn)}></div>
          </div>
          <div className={style.task_switch}></div>
          </div>
        </div>
        <div className={style.task_content}>
        <p className={style.task_description_title}>Описание</p>
        <div  className={style.task_description_block}>
        <p className={style.task_description}>
        React - это JavaScript фреймворк для создания интерфейсов.
        С его помощью можно быстро и легко создать красивый и функциональный сайт.
        Он предоставляет множество возможностей для упрощения и
        ускорения процесса разработки, а также облегчает понимание кода и
        управление им.Кроме того, важным аспектом
        при создании сайта является дизайн.
        </p>
        </div>

        </div>
        <div className={style.sub_tasks_block}>
            
        </div>
        <div className={style.task}>
        <div className={style.task_info}>
          <div className={style.task_num_name}>
            <p className={style.task_numeration}>1</p>
            <p className={style.task_title}>Название</p>
          </div>
          <div className={style.task_time_block}>
            <p className={style.task_time}>84 часа</p>
          </div>

          {/* <div className={style.task_activities}>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Frontend</p>
            </div>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Backend</p>
            </div>
          </div> */}
          <div className={style.task_options_switch}>
          <div className={style.task_options_block}>
            <div className={classNames(style.task_option, style.edit_btn)}></div>
            <div className={classNames(style.task_option, style.add_task_btn)}></div>
            <div className={classNames(style.task_option, style.delete_task_btn)}></div>
          </div>
          <div className={style.task_switch}></div>
          </div>
        </div>
        <div className={style.task_content}>
        <p className={style.task_description_title}>Описание</p>
        <div  className={style.task_description_block}>
        <p className={style.task_description}>
        React - это JavaScript фреймворк для создания интерфейсов.
        С его помощью можно быстро и легко создать красивый и функциональный сайт.
        Он предоставляет множество возможностей для упрощения и
        ускорения процесса разработки, а также облегчает понимание кода и
        управление им.Кроме того, важным аспектом
        при создании сайта является дизайн.
        </p>
        </div>

        </div>
        <div className={style.sub_tasks_block}>
        <div className={style.task}>
        <div className={style.task_info}>
          <div className={style.task_num_name}>
            <p className={style.task_numeration}>1</p>
            <p className={style.task_title}>Название</p>
          </div>
          <div className={style.task_time_block}>
            <p className={style.task_time}>84 часа</p>
          </div>

          {/* <div className={style.task_activities}>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Frontend</p>
            </div>
            <div className={style.task_activity_block}>
              <p className={style.task_activity}>Backend</p>
            </div>
          </div> */}
          <div className={style.task_options_switch}>
          <div className={style.task_options_block}>
            <div className={classNames(style.task_option, style.edit_btn)}></div>
            <div className={classNames(style.task_option, style.add_task_btn)}></div>
            <div className={classNames(style.task_option, style.delete_task_btn)}></div>
          </div>
          <div className={style.task_switch}></div>
          </div>
        </div>
        <div className={style.task_content}>
        <p className={style.task_description_title}>Описание</p>
        <div  className={style.task_description_block}>
        <p className={style.task_description}>
        React - это JavaScript фреймворк для создания интерфейсов.
        С его помощью можно быстро и легко создать красивый и функциональный сайт.
        Он предоставляет множество возможностей для упрощения и
        ускорения процесса разработки, а также облегчает понимание кода и
        управление им.Кроме того, важным аспектом
        при создании сайта является дизайн.
        </p>
        </div>

        </div>
        <div className={style.sub_tasks_block}>
            
        </div>

      </div>
        </div>

      </div>
      </div>

    </div>

    </div>

  </main>
  </>
  );
}

export default ProjectPage