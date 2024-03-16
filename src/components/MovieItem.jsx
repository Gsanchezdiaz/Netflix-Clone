import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { createImageUrl } from '../services/movieServices';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { arrayUnion, arrayRemove, doc, updateDoc } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContex'
import { db } from '../services/firebase'

const MovieItem = ({ movie }) => {

  const [like, setLike] = useState(false)
  const { title, backdrop_path, poster_path } = movie;
  const { user } = UserAuth();

  // Function to handle the like functionality of a movie.
  const handlelikeShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc = doc(db, "users", userEmail);
      setLike(!like);
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie })
      })
    } else {
      alert('Inicia sesion para guardar la pelicula!')
    }
  }

  const handleUnlikeShow = async (movie) => {
    const userEmail = user?.email;
    if (userEmail) {
      const userDoc = doc(db, "users", userEmail)
      setLike(!like);
      await updateDoc(userDoc, {
        favShows: arrayRemove(movie)
      })
    }
  }

  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img
        className='w-full h-40 block object-cover object-top'
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title} />

      <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
        <p
          className='cursor-pointer'

        >{like ? (
          <FaHeart
            onClick={() => handleUnlikeShow(movie)}
            size={20}
            className='absolute top-3 left-3 text-gray-300'
          />) : (
          <FaRegHeart
            onClick={handlelikeShow}
            size={20}
            className='absolute top-3 left-3 text-gray-300'
          />)}
        </p>
      </div>
    </div>
  )
}

export default MovieItem