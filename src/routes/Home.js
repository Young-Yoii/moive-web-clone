import { useState, useEffect } from "react";
import axios from 'axios';
// import styled from "styled-components";
import Slide from "../components/Slide";
import Header from "../components/Header";
import navList from './../navList';
import { Link } from 'react-router-dom';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const request = navList.map(({ path }) => {
        return axios.get(`https://yts.mx/api/v2/list_movies.json?` + path, {
          params :{
            limit : 20,
            sort_by: 'year'
          }
        })
      })

      axios.all(request)
        .then(axios.spread((...response) => {
          const data = response.map((res => {
            return res.data.data.movies
          }))

          setMovies(data)
          setLoading(false)
        }))
    },[])

    console.log(movies)
    return (
      <div className="App">
        <Header />
        {loading ? <h1>loding</h1> : (
        <div>
          {navList.map((item, idx) => {
            return (
              <div>
                <Link to={`/page/${item.path}`}>
                  <span>{item.title}</span>
                </Link>
                <Slide movies={movies[idx]} />
              </div>
            )
          })}
        </div>)}
      </div>
    );
  }
  
  // const MovieContainer = styled.div`
  //   display: flex;
  //   flex: 1 1 auto;
  //   overflow-x:auto;
  // `

  export default Home;