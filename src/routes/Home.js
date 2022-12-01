import { useState, useEffect } from "react";
import axios from 'axios';
import Slide from "../components/Slide";
import Header from "../components/Header";
import Loading from "../components/Loading";
import navList from './../navList';

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

    return (
      <div className="App">
        <Header />
        {loading ? <Loading /> : (
        <div>
          {navList.map((item, idx) => {
            return (
              <div><Slide movies={movies[idx]} title={item.title}/></div>
            )
          })}
        </div>)}
      </div>
    );
  }
  
  export default Home;