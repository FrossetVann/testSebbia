import { NavLink } from 'react-router-dom';
import style from '../css/style.module.css';

 function LoginPage() {
  return (
    <main className={style.login_block}>
        <div className={style.logo}>
                <div className={style.logo_image}></div>
                <h2 className={style.logo_text}>Welcome to the <br/> <span className={style.logo_text_sebbia}>SÉBBIA</span></h2>
        </div>
        <form className={style.login_form}>
            <div className={style.login_inputs}>
                <input className={style.login_input} placeholder="Логин"/>
                <input className={style.login_input} type="password" placeholder="Пароль"/>
            </div>
            <NavLink to='/'> <button className={style.login_button} type="submit">Войти</button></NavLink>
        </form>
    </main>
  );
} 

export default LoginPage