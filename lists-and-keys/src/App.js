import React from 'react';
import MoviesList from './MoviesList';
import './App.css';

const moviesData = [
  { 'hasOscars': false, 'title': 'The Shawshank Redemption', 'director': 'Frank Darabont', 'rate': '9.3', 'id': 0 },
  { 'hasOscars': true, 'title': 'The Godfather', 'director': 'Francis Ford Coppola', 'rate': '9.2', 'id': 1 },
  { 'hasOscars': true, 'title': 'The Godfather: Part II', 'director': 'Francis Ford Coppola', 'rate': '9.0', 'id': 2 },
  { 'hasOscars': true, 'title': 'The Dark Knight', 'director': 'Christopher Nolan', 'rate': '9.0', 'id': 3 },
  { 'hasOscars': false, 'title': '12 Angry Men', 'director': 'Sidney Lumet', 'rate': '8.9', 'id': 4 }
];

class App extends React.Component {

  state = {
    movies: []
  }

  addMovie = () => {
    const newMovie = { 'hasOscars': true, 'title': 'Interstellar', 'director': 'Christopher Nolan', 'rate': '8.6', 'id': 31 };
    // add this movie to the movies array in state - we have to make sure though that we don't mutate the
    // movies array in state
    // const moviesCopy = this.state.movies.slice();
    // moviesCopy.push(newMovie)
    this.setState((state, props) => ({
      movies: [newMovie, ...state.movies]
      // movies: moviesCopy
    }))
  }

  render() {
    // const moviesList = this.state.movies.map(movie => (<li key={movie.id}>{movie.title}</li>))
    // console.log(moviesList);
    return (
      <div className="App" >
        <h1>Movies List</h1>
        <button onClick={this.addMovie}>Add the movie Interstellar</button>
        {/* <ul>
          {moviesList}
        </ul> */}
        {/* if there are no movies in the state then display a message*/}
        {this.state.movies.length === 0 && <h2>No movies to display</h2>}
        {/* the movies from the state are passed as a prop to the MoviesList component */}
        <MoviesList movies={this.state.movies} />
      </div >
    );
  }
}

export default App;
