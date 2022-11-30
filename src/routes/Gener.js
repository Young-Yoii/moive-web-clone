import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

const Genre = () => {
    const { detail } = useParams;

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/list_movies.json?${detail}&sort_by=year`)
            ).json();
            setMovie(json.data.movies);
            setLoading(false);
        };
        getMovie();
    }, [detail]);

    console.log(movie)
    return (<div>
        {loading ? "로딩중" : <div>
            {movie.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                />
                ))
            }
            </div>
        }
    </div>
    )
}

export default Genre;