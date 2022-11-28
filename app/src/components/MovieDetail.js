function MovieDetail({coverImg, title, description, genres }) {
    return <div>
    <img src={coverImg} alt={`${title}poster`}/>
    <p>{title}</p>
    <p>{description}</p>
    <ul>
      {genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
    </div>
}

export default MovieDetail;