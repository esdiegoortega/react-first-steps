import React, { useState } from 'react'
import { getFromStorage } from '../helpers/GetFromStorage';

export const Search = ({stateList, setStateList}) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchMovies = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    console.log(search);

    const movies = getFromStorage('movies');
    setStateList(movies);
    if (search === '') {
      setStateList(movies);
    }else{
      const filteredMovies = stateList.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      });

      if (filteredMovies.length === 0) {
        setNotFound(true);
      }else{
        setNotFound(false);
      }
  
      setStateList(filteredMovies);
    }

  }
  return (
    <>
        <div className="search">
            <h3 className="title">Search: {search}</h3>
            {notFound && 
                <span className='not-found'>movie search not found matches</span>
            }
            <form>
                <input type="text" 
                       placeholder="Search..."
                       id="search_field"
                       name="search"
                       autoComplete="off"
                       value={search}
                       onChange={searchMovies}/>
                <button type="submit">Search</button>
            </form>
        </div>
    </>
  )
}
