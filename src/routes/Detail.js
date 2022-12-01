import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from './../components/MovieDetail';
import Loading from './../components/Loading';
import Header  from './../components/Header';

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovie = async () => {
            const json = await (
                await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            setMovie(json.data.movie);
            setLoading(false);
        };
        getMovie();
    }, [id]);

    return <div>
        <Header />
        {loading ? <Loading /> :
         <MovieDetail
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              description={movie.description_intro}
              genres={movie.genres}
              rating={movie.rating}
              runtime={movie.runtime}
              background={movie.background_image}
            />}
    </div>;
  }
  export default Detail;