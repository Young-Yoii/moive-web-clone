import styles from './MovieDetail.module.css'

function MovieDetail({ coverImg, title, description, genres, rating, runtime, background }) {

  return (
    <div className={styles.detail_container} style={{backgroundImage: `url(${background})`}}>
    <div className={styles.detail_inner}>
      <img src={coverImg} alt={`${title}poster`}/>
      <div className={styles.detail_info}>
        <p className={styles.title}>{title}</p>
        <p>
          <span>⭐{rating} |</span>
          <span> {runtime}min</span>
        </p>
        <ul>
          {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
        <p>{description.slice(0,300)}</p>
      </div>
    </div>
    </div>
    )
}


export default MovieDetail;