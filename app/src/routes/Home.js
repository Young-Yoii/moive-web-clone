import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import axios from 'axios';
import styled from "styled-components";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovie = async() => {
      const json = await axios.get( `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
      setMovies(json.data.data.movies);
      setLoading(false);
    }

    useEffect(() => {
      getMovie();
      }, []);

  
    return (
      <div className="App">
        {loading ? <h1>loding</h1> : (
        <div>
          <Header />
          <MovieContainer>
          {movies && movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
            />
          ))}
          </MovieContainer>
        </div>)}
      </div>
    );
  }
  
  const MovieContainer = styled.div`
    display: flex;
  `

  export default Home;