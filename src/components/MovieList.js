import React, { useEffect, useState } from 'react'
import { deleteOnStorage } from '../helpers/DeleteOnStorage';
import { getFromStorage } from '../helpers/GetFromStorage'
import { replaceOnStorage } from '../helpers/ReplaceOnStorage';
import { Edit } from './Edit';

export const MovieList = ({stateList, setStateList}) => {
  //const [movieList, setMovieList] = useState([]);

  const [edit, setEdit] = useState(0);

  const deleteMovie = (id) => {
    // get movies from localStorage
    // filter movies without delete
    // update state

    const movies = getFromStorage('movies')

    const moviesUpdated = movies.filter(movie => movie.id !== parseInt(id));
    setStateList(moviesUpdated);
    if (moviesUpdated.length <= 0) {
      deleteOnStorage('movies', moviesUpdated);
    }else{
      replaceOnStorage("movies", moviesUpdated);
    }
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

                      <button className="edit" onClick={ () => setEdit(item.id) }>Edit</button>
                      <button className="delete" onClick={ () => deleteMovie(item.id) }>Delete</button>
                  
                  { /* edit the item */ 
                    edit===item.id && (

                    <Edit item={item}
                          getFromStorage={getFromStorage} 
                          setStateList={setStateList}
                          setEdit={setEdit}/>
                  
                  )}
                  
                  </article>
              )
            }
          )
          : <p>No movies found</p>}
    </>
  )
}
