import React from 'react';
import FilmRow from './FilmRow';

class FilmListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
            faves: []
        }
        this.handleFaveToggle = this.handleFaveToggle.bind(this);
    }

    handleFilterClick(filter) {
        this.setState({
            filter
        })
    }

    handleFaveToggle(film) {
        console.log('toggling film',film);
        const newFaves = this.state.faves.slice() // creates a copy of the faves array
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex > -1) {
            //we need to deselect this as a fave
            newFaves.splice(filmIndex, 1)
        } else {
            // We need to add the film to faves
            newFaves.push(film)
        }
        this.setState({
            faves: newFaves
        })
    }

    render() {
        let fave;
        const filmsToDisplay = this.state.filter === 'all' ? this.props.films : this.state.faves;
        const allFilms = filmsToDisplay.map( (film, index) => {
            if (this.state.faves.includes(film)) {
                fave = true
            } else {
                fave = false
            }
            return(
                <FilmRow film={film} 
                            isFave={fave}
                            key={index} 
                            handleDetailsClick={this.props.handleDetailsClick}
                            handleFaveToggle={this.handleFaveToggle} />
            );
        });
        return(
            <div className='film-list'>
                <h1 className='section-title'>FILMS</h1>
                <div className='film-list-filters'>
                    <div onClick={() => this.handleFilterClick('all')} 
                        className={this.state.filter === 'all' ? 'film-list-filter is-active' : 'film-list-filter'}>
                        ALL
                        <span className='section-count'>{this.props.films.length}</span>
                    </div>
                    <div onClick={() => this.handleFilterClick('faves')} 
                        className={this.state.filter === 'faves' ? 'film-list-filter is-active' : 'film-list-filter'}>
                        FAVES
                        <span className='section-count'>{this.state.faves.length}</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;