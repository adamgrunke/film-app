import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => (
    <div className='film-row'onClick={() => props.handleDetailsClick(props.film)}>
        <FilmPoster posterPath={props.film.poster_path}/>
        <div className='film-summary'>
            <h1>{props.film.title}</h1>
            <p>{props.film.release_date}</p>
        </div>
        <Fave handleFaveToggle={() => props.handleFaveToggle(props.film)}/>
    </div>
);

export default FilmRow;