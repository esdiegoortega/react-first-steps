import React, { useState } from 'react'

import { saveOnStorage } from '../helpers/SaveOnStorage';

export const Add = ({ setStateList }) => {
  const title = "Add New Movie";
  const description = "Add a new movie to the list";

  const [movieState, setMovieState ] = useState({})

  const getFormData = e => {
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    const movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    // Save Movie
    setMovieState(movie);

    // List update of movies
    setStateList(movies => {
      return [...movies, movie]
    });

    saveOnStorage("movies", movie);
  }

  return (
    <>
      <div className="add">
        <h3 className="title">{title}</h3>
        <strong>{movieState && movieState.title ? "Movie has created:" + movieState.title : "Title is required."}</strong>
        <form onSubmit={getFormData}>
            <input type="text"
                   id="title"
                   name="title"
                   placeholder="Title"
            />
            <textarea placeholder={description}
                      id="description"
                      name="description"
            />
            <button type="submit"
                    id="save"
                    value="Save">Save</button>
        </form>
      </div>
    </>
  )
}
