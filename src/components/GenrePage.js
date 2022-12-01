import { Link } from 'react-router-dom';
import styles from './GenrePage.module.css';

function GenrePage({id, coverImg, title, genres, summary}) {

    if (coverImg === undefined){
      return null;
    }

    return (
      <Link to ={`/movie/${id}`}>
      <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>{title}</h2>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
    </div>
    </Link>
    )

}

export default GenrePage;