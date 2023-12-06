import React from 'react'

function Filter({ categoryChange, selectedCategory, setSelectedCategory }) {

    return (
        <select name="filter" onChange={categoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}

export default Filter