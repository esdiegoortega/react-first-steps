import React, { useEffect, useState } from 'react'
import { getFromStorage } from '../helpers/GetFromStorage'
import { replaceOnStorage } from '../helpers/ReplaceOnStorage';

export const MovieList = ({stateList, setStateList}) => {
  //const [movieList, setMovieList] = useState([]);

  const deleteMovie = (id) => {
    // get movies from localStorage
    // filter movies without delete
    // update state

    const movies = getFromStorage('movies')

    const moviesUpdated = movies.filter(movie => movie.id !== parseInt(id));
    setStateList(moviesUpdated);
    replaceOnStorage("movies", moviesUpdated);
  }

  useEffect(() => {
    setStateList(getFromStorage('movies'));
  }, []);  

  return (
    <> 
            {/* Movies */
            stateList != null ? 
            stateList.map((item) => {
              return (
                  <article key={ item.id } className="movie-item">
                      <h3 className="title"> { item.title }</h3>
                      <p className="description">{ item.description }</p>

                      <button className="edit">Edit</button>
                      <button className="delete" onClick={() => deleteMovie(item.id)}>Delete</button>
                  </article>
              )
            }
          )
          : <p>No movies found</p>}
    </>
  )
}
