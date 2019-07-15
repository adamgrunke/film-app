import React from 'react';

const FilmPoster = (props) => {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${props.posterPath}`
    return (
        <img src={posterUrl} alt='movie poster' />
    )
}

export default FilmPoster;