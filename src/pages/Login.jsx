import { useState } from "react";
import { useTranslation } from 'react-i18next';
import MyButton from '../components/UI/button/MyButton';
import "../utils/i18next";
import { Link } from 'react-router-dom';

const Login = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [hide, setHide] = useState(false);

  function handleClick() {
    setHide(!hide);
  }

  let toggleClass = hide ? '_hide' : '';

  return (
    <div className="login">
      <div className="login__area">
        <MyButton onClick={() => changeLanguage("ru")}>ru</MyButton>
        <MyButton onClick={() => changeLanguage("en")}>en</MyButton>
      </div>
      <div className="login__block">
        <h1 className="login__title">{t("login.title")}</h1>
        <input type="text" className="login__input" placeholder={t("login.placeholderLogin")}/>
        <input type="text" className="login__input" placeholder={t("login.placeholderPassword")}/>
        <div className="login__area">
          <input type="checkbox" className="login__checkbox" />
          <p className="login__text">{t("login.saveMe")}</p>
        </div>
        <Link to="/posts">
          <MyButton className="login__button">{t("login.button")}</MyButton>
        </Link>
        <div className={`login__cookies${toggleClass}`}>
          <p className="login__text">{t("login.cookies")}</p>
          <MyButton onClick={handleClick} className="login__ok">{t("login.ok")}</MyButton>
        </div>
      </div>
    </div>
  )
}

export default Login;