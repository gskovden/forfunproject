import avatar from '../images/header/avatar.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="header__block">
        <p className="header__logo">ЛОГОТИП</p>
        <div className="header__area">
          <button className="header__button">Создать</button>
          <div className="header__part">
            <p className="header__name">Пользователь</p>
            <div className="header__list">
              <p className="header__item">Профиль</p>
              <p className="header__item">Мои посты</p>
              <p className="header__item">Выйти</p>
            </div>
            <img src={avatar} alt="аватар" className="header__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;