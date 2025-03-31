import { MyButton } from "../UI/Button/MyButton";
import { createGlobalStyle } from "styled-components";

export function Main({ movie, onDelete, openEditMovieModal }) {
  return (
    <>
      <StyleMain />
      <main className="main">
        <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
        <section className="movies_container">
          {movie.map((item) => (
            <div className="movie-block" key={item.movieId}>
              <img
                className="movie-images"
                src={item.movieImage}
                alt="Чон кыз"
              />
              <article className="wrapper_info">
                <div>
                  <h4 className="movie-title">{item.movieTitle}</h4>
                  <p className="movie-status">{item.movieStatus}</p>
                </div>
                <div className="wrapper-buttons">
                  <MyButton
                    className="buyBtn"
                    onClick={() => openEditMovieModal(item)}
                  >
                    Изменить
                  </MyButton>
                  <MyButton
                    className="buyBtn"
                    onClick={() => onDelete(item.movieId)}
                  >
                    Удалить
                  </MyButton>
                </div>
              </article>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
const StyleMain = createGlobalStyle`
  .main {
  padding: 30px;
}
.movies_container {
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}
.wrapper_info {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.buyBtn {
  width: 80px;
  height: 25px;
  background-color: blueviolet;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  font-size: 14px;
  font-weight: 600;
}
.wrapper-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.movie-block:hover {
  scale: 1.01;
  cursor: pointer;
}
.movie-block {
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;
}
.movie-images {
  width: 250px;
}
.movie-title {
  font-size: larger;
}
.movie-status {
  color: green;
  font-weight: 500;
}
.wrapper-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.wrapper-inputs > input {
  width: 100%;
  height: 40px;
  background-color: white;
  color: black;
  padding: 10px;
  font-size: large;
  border-radius: 10px;
}

.container-buttons {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

`;
