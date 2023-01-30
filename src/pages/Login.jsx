import { useState } from "react";

const Login = () => {
  const [hide, setHide] = useState(false);

  function handleClick() {
    setHide(!hide);
  }

  let toggleClass = hide ? '_hide' : '';

  return (
    <div className="login">
      <div className="login__block">
        <h1 className="login__title">ЛОГОТИП</h1>
        <input type="text" className="login__input" placeholder="Логин"/>
        <input type="text" className="login__input" placeholder="Пароль"/>
        <div className="login__area">
          <input type="checkbox" className="login__checkbox" />
          <p className="login__text">Запомнить меня</p>
        </div>
        <button className="login__button">Войти</button>
        <div className={`login__cookies${toggleClass}`}>
          <p className="login__text">Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем cookies</p>
          <button onClick={handleClick} className="login__ok">Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Login;