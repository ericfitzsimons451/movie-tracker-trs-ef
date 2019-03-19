import React from 'react' 
import Movie from './Movie'

const AllMovies = ( {movies} ) => {

    const allMovies = movies.map((movie) => {
        return (
            <Movie key={movie.id} movie={movie} />
        )
    })

    // const renderMovies = () => {
    //     return movies.map((movie) => {
    //         return <Movie key={movie.id} movie={movie} />
    //     })
    // }

    return (
        <div className='movie-display-container'>
            { allMovies }
        </div>
    )
}

export default AllMovies