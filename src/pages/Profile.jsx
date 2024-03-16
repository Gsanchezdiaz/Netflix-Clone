import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContex'
import { db } from '../services/firebase'
import { createImageUrl } from '../services/movieServices'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import MovieItem from '../components/MovieItem'


const Profile = () => {

  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const rowId = Math.floor(Math.random() * 1000);

  const slide = (offset) => {
    const slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  }

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows)
      })
    }
  }, [user?.email])

  if (!user) {
    return (
      <p>fetching shows...</p>
    )
  }
  return (
    <>
      <div>
        <div>
          <img
            className='hidden sm:block absolute w-full h-full object-cover object-top'
            src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/42011383-aaa3-42ea-9a65-55b195e8bfc4/PE-es-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='netflix found'
          />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-full' />
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'> Mi perfil</h1>
            <p className='font-nsans-light text-gray-400 text-lg'>{user.email}</p>
          </div>

          <h2 className='font-nsans-bold md:text-xl p-4 capitalize'>{movies.title}</h2>
          <div className='relative mt-[20%] flex items-center group'>
            <MdChevronLeft
              onClick={() => slide(-500)}
              className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-20 hidden group-hover:block cursor-pointer'
              size={48} />
            <div 
              id={`slider` + rowId}
              className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
              <h1 className='ml-8 text-1xl md:text-3xl font-nsans-bold my-2'> Mis favoritos</h1>
              {movies?.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </div>
            <MdChevronRight
              onClick={() => slide(500)}
              className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-20 hidden group-hover:block cursor-pointer'
              size={48} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile