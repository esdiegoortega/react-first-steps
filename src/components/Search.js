import React from 'react'

export const Search = () => {
  return (
    <>
        <div className="search">
            <h3 className="title">Search</h3>
            <form>
                <input type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </form>
        </div>
    </>
  )
}
