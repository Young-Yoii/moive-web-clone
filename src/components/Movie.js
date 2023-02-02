import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
import { useRef } from 'react';

function Movie({ id, coverImg, title, genres }) {
  const divRef = useRef();
  const wrapRef = useRef();
  let genre = genres.slice(0, 3);

  const mouseOverHandler = () => {
    divRef.current.style = 'opacity : 1; transition: all 0.5s;';
  };

  const mouseOutHandler = () => {
    divRef.current.style = 'opacity : 0';
  };

  const handleError = () => {
    wrapRef.current.style.display = 'none';
  };

  return (
    <div className={styles.movie} ref={wrapRef}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={`${title}poster`} onError={handleError} />
        <div className={styles.movie_info_container} ref={divRef} onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler}>
          <div className={styles.movie_info}>
            <p className={styles.movie_title}>{title}</p>
            <ul>
              {genre.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
          <div className={styles.img_background}></div>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
