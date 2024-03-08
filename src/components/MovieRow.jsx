import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';

const MovieRow = ({ title, url }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data);
      if (response.status === 200 && response.data.results.length > 0) {
        setMovies(response.data.results);
      } else {
        console.log("No se pudo obtener la información de la película");
      }
    }).catch((error) => console.log(error));
  }, [url])

  // console.log(movies)

  return (
    <>
      <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>{title}</h2>
      <div className='relative flex items-center'>
        <div id='slider' className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieRow