import React from 'react'

import { replaceOnStorage } from '../helpers/ReplaceOnStorage';

export const Edit = ({item, getFromStorage, setStateList, setEdit}) => {
  const title = item.title;
  const description = item.description;

  const saveFormData = (e, id) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const newDescription = e.target.description.value;

    const data = getFromStorage('movies');

    const movieIndex = data.findIndex(movie => movie.id === id);

    // If found, update the movie.
    if (movieIndex >= 0) {
      // Replace with new information.
      data[movieIndex].title = newTitle;
      data[movieIndex].description = newDescription;
      item.title = newTitle;
      item.description = newDescription;
      replaceOnStorage('movies', data);
      setStateList(data);
    }

    setEdit(0);
  }

  const cancelEditing = () => {
    setEdit(0);
  }

  return (
    <div className="edit_form">
        <h3 className="title">Editing: {title}</h3>
        <form onSubmit={e => saveFormData(e, item.id)}>
            <input type="text" 
                   name="title"
                   className="description"
                   placeholder="Title"
                   defaultValue={ title } />
            <textarea 
                    name="description" 
                    placeholder="Description"
                    className="description" 
                    defaultValue={ description }/>
            <button className="save" type="submit">Save</button>
            <button className="delete" onClick={cancelEditing}>Cancel</button>
        </form>
    </div>
  )
}
