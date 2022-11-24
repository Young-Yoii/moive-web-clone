import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
        };
        getMovie();
    }, [id]);

    return <div>
        {movie.title}
    </div>;
  }
  export default Detail;