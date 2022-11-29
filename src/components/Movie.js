import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Movie({id, coverImg, title, summary, genres}) {
    return <MovieContainer>
    <img src={coverImg} alt={`${title}poster`}/>
    <p><Link to ={`/movie/${id}`}>{title}</Link></p>
    {/* <p>{summary}</p>
    <ul>
      {genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul> */}
  </MovieContainer>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const MovieContainer = styled.div`
  a{
    text-decoration:none;
    color: #000;
    font-weight: 700;
  }
  p{
    text-align: center;
  }

  padding: 20px
`

export default Movie;