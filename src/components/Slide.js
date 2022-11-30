import { useState } from "react";
import styles from "./Slide.module.css";
import Movie from "./Movie";

const Slide = ({movies}) => {
    const [slide, setSlide] = useState(0);

    const onClickLeft = () => {
        if(slide >= 0) {
            return;
        }
        setSlide(current => current + 350);
    }
    const onClickRight = () => {
        if(slide <= -2450) {
            return;
        }
        setSlide(current => current - 350);
    }

    return (
      <div className={styles.movieContainer}>
        <div className={styles.slider}>
            <div className={styles.slide} style={{
                transform: `translateX(${slide}px)`
            }}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                />
            ))}
            </div>
        </div>
        <div>
            <button onClick={onClickLeft}></button>
            <button onClick={onClickRight}></button>
        </div>
      </div>
    )
} 

export default Slide