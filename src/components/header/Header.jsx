
import { MyButton } from "../UI/Button/MyButton";
import { createGlobalStyle } from "styled-components";

function Header({ openModalHandler }) {
  return (
    <>
      <StyleHeader />
      <header>
        <img className="logo" src="https://etnomedia.tv/assets/images/logo-white.png" alt="logo" />
        <nav className="nav">
          <a href="#">Фильмы</a>
          <a href="#">Сериалы</a>
          <a href="#">Мультфильмы</a>
          <a href="#">Windows</a>
          <a href="#">Календарь</a>
        </nav>
        <div>
          <MyButton className="watch_movie">Смотреть 30 дней за 1с</MyButton>
        </div>
        <div>
          <MyButton className="logoBtn" onClick={openModalHandler}>
            Добавить
          </MyButton>
        </div>
      </header>
    </>
  );
}

export default Header;
const StyleHeader = createGlobalStyle`
  .logo {
  width: 130px;
}
header {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}

.logoBtn {
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: black;
  color: white;
  font-size: large;
  border: 1px solid white;
}
.nav > a {
  color: white;
  font-weight: 900;
}

.nav {
  display: flex;
  gap: 20px;
}
.watch_movie {
  width: 300px;
  background-color: orange;
  height: 40px;
  color: white;
  font-size: large;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid red;
}

`;
