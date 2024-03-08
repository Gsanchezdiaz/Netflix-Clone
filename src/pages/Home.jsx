import React from 'react'
import Banner from '../components/Banner'
import MovieRow from '../components/MovieRow'
import endpoints from '../services/movieServices'

const Home = () => {
  return (
    <>
      <Banner />
      <MovieRow title={'próximamente'} url={endpoints.upcoming} />
      <MovieRow title={'tendencia'} url={endpoints.trending} />
      <MovieRow title={'lo mas visto'} url={endpoints.topRated} />
      <MovieRow title={'comedia'} url={endpoints.comedy} />
      <MovieRow title={'popular'} url={endpoints.popular} />
    </>
  )
}

export default Home