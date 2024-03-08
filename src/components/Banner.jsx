import React, { useEffect, useState } from 'react'
import axios from 'axios'
import endpoints, { createImageUrl } from '../services/movieServices';

const Banner = () => {

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(endpoints.popular).then((response) => {
            console.log(response.data);
            if (response.status === 200 && response.data.results.length > 0) {
                const movies = response.data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
                console.log(randomMovie);
            } else {
                console.log("No se pudo obtener la información de la película");
            }
        }).catch((error) => console.log(error));
    }, [])

    const truncate = (str, length) => {
        if (!str) return '...';
        return str.length > length ? str.slice(0, length) + '...' : str;
    }

    if (!movie) {
        return (
            <><p>fetching movie...</p></>
        )
    }
    const { title, backdrop_path, release_date, overview } = movie;
    return (
        <div className='w-full h-[550px] lg:h-[850px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover object-top'
                    src={createImageUrl(backdrop_path, "original")}
                    alt={title}
                />

                <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-6xl font-nsans-bold'>{title}</h1>
                    <div className='mt-8 mb-4'>
                        <button className='capitalize rounded border bg-gray-300 text-black py-2 px-5'>
                            Ver
                        </button>
                        <button className='capitalize rounded border border-gray-300 py-2 px-5 ml-4'>
                            Ver después
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm'>{release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 font-nsans-regular mt-4'>{truncate(overview, 200)}</p>
                </div>

            </div>
        </div>
    )
}

export default Banner