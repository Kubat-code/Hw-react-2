import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { ModalUi } from "./components/UI/modal/ModalUi";
import { movies } from "./utils/constants";
import { MyButton } from "./components/UI/Button/MyButton";

function App() {
  const [movie, setMovie] = useState(movies);
  const [openModal, setOpenModal] = useState(false);
  const [movieImage, setMovieImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieStatus, setMovieStatus] = useState("");
  const [editMovie, setEditMovie] = useState(null);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const handleImageChange = (e) => {
    setMovieImage(e.target.value);
  };

  const handleTitleChange = (e) => {
    setMovieTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setMovieStatus(e.target.value);
  };

  const updateOrAddMovieHandler = () => {
    if (!movieImage || !movieTitle || !movieStatus) {
      return alert("Please fill in all fields");
    }

    if (editMovie) {
      const updatedMovies = movie.map((item) =>
        item.movieId === editMovie.movieId
          ? { ...item, movieImage, movieStatus, movieTitle }
          : item
      );
      setMovie(updatedMovies);
      setEditMovie(null);
    } else {
      const newMovie = {
        movieImage,
        movieTitle,
        movieStatus,
        movieId: Date.now(),
      };
      setMovie([...movie, newMovie]);
    }

    closeModalHandler();
    setMovieImage("");
    setMovieStatus("");
    setMovieTitle("");
  };

  const openEditMovieModal = (movie) => {
    setEditMovie(movie);
    setMovieImage(movie.movieImage);
    setMovieTitle(movie.movieTitle);
    setMovieStatus(movie.movieStatus);
    setOpenModal(true);
  };

  const deleteMovieHandler = (id) => {
    const filteredMovies = movie.filter((el) => el.movieId !== id);
    setMovie(filteredMovies);
  };

  return (
    <div>
      {openModal && (
        <ModalUi onClose={closeModalHandler}>
          <div className="wrapper-inputs">
            <input
              type="text"
              placeholder="Ссылка на фото"
              value={movieImage}
              onChange={handleImageChange}
            />
            <input
              type="text"
              placeholder="Название фильма"
              value={movieTitle}
              onChange={handleTitleChange}
            />
            <input
              type="text"
              placeholder="Статус фильма"
              value={movieStatus}
              onChange={handleStatusChange}
            />
          </div>

          <section className="container-buttons">
            <MyButton className="buyBtn" onClick={closeModalHandler}>
              отменить
            </MyButton>
            <MyButton className="buyBtn" onClick={updateOrAddMovieHandler}>
              {editMovie ? "сохранить" : "добавить"}
            </MyButton>
          </section>
        </ModalUi>
      )}

      <Header openModalHandler={openModalHandler} />
      <Main
        movie={movie}
        onDelete={deleteMovieHandler}
        openEditMovieModal={openEditMovieModal}
      />
      <Footer />
    </div>
  );
}

export default App;
