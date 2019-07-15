import React from 'react';
import './index.css';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      current: {}
    }
    this.handleDetailsClick = this.handleDetailsClick.bind(this);
  }

  handleDetailsClick(film) {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url).then(result => {
      this.setState({
        current: result.data
      })
    })
  }

  render() {
    return(
      <div className="film-library">
          <FilmListing films={this.state.films} handleDetailsClick={this.handleDetailsClick}/>
          <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;