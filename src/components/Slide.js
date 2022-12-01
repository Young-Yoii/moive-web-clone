import { useState } from "react";
import styles from "./Slide.module.css";
import Movie from "./Movie";

const Slide = ({movies, title}) => {
    const [slide, setSlide] = useState(0);

    const onClickLeft = () => {
        if(slide >= 0) {
            return;
        }
        setSlide(current => current + 400);
    }
    const onClickRight = () => {
        if(slide <= -2500) {
            return;
        }
        setSlide(current => current - 400);
    }
    return (
      <div className={styles.movieContainer}>
         <span className={styles.button_container}>
            <button onClick={onClickLeft} style={{ opacity: slide >= 0 ? "0.5" : "" }}><i class="fa-solid fa-chevron-left"></i></button>
            <button onClick={onClickRight} style={{ opacity: slide <= -2500 ? "0.5" : "" }}><i class="fa-solid fa-chevron-right"></i></button>
        </span>
        <span className={styles.slide_title}>{title}</span>
        <div className={styles.slider}>
            <div className={styles.slide} style={{
                transform: `translateX(${slide}px)`,
                transition: `all 0.5s ease-in-out`
            }}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                />
            ))}
            </div>
        </div>
      </div>
    )
} 

export default Slide;