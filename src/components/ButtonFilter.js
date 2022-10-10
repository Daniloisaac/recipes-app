import React from 'react';

export default function ButtonFilter() {
  return (
    <>
      <button
        type="button"
        name="All"
        // onClick={ handleFilter }
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        name="Meals"
        // onClick={ handleFilter }
        data-testid="filter-by-meal-btn"
      >
        Mealss
      </button>
      <button
        type="button"
        name="Drink"
        // onClick={ handleFilter }
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>
    </>
  );
}
