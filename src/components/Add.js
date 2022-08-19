import React from 'react'

export const Add = () => {
  return (
    <>
      <div className="add">
        <h3 className="title">Add Movie</h3>
        <form>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="description"></textarea>
            <button type="submit">Save</button>
        </form>
      </div>
    </>
  )
}
