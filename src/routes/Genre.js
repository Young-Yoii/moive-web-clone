import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import GenrePage from '../components/GenrePage';
import styles from './Genre.module.css';

const Genre = () => {
    const { num, detail } = useParams();

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch( `https://yts.mx/api/v2/list_movies.json?page=${num}&${detail}&sort_by=year`)
            ).json();
            setMovie(json.data.movies);
            setLoading(false);
        };
        getMovie();
    }, [detail, num]);

    return (<div>
        <Header />
        <div className={styles.container}>
        {loading ? <Loading /> : 
            <div className={styles.movies}>
                {movie && movie.map((item) => (
                    <GenrePage
                        key={item.id}
                        id={item.id}
                        coverImg={item.medium_cover_image}
                        title={item.title}
                        genres={item.genres}
                        summary={item.summary}
                    />
                    ))
                }
            </div>
        }
        </div>
    </div>
    )
}

export default Genre;