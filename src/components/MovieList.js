import React from 'react'

export const MovieList = () => {
  return (
    <> 
            {/* Movies */}
            <article className="movie-item">
                <h3 className="title"> Title of the movie</h3>
                <p className="description">Description of the movie</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Title of the movie</h3>
                <p className="description">Description of the movie</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Title of the movie</h3>
                <p className="description">Description of the movie</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
            <article className="movie-item">
                <h3 className="title"> Title of the movie</h3>
                <p className="description">Description of the movie</p>

                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </article>
    </>
  )
}
