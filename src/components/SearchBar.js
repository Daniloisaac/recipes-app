function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="busca"
      />
      <label htmlFor="input_ingredient">
        <input
          type="radio"
          id="input_ingredient"
          name="ingredient"
          data-testid="ingredient-search-radio"
        />
        ingredient
      </label>
      <label htmlFor="input_name">
        <input
          type="radio"
          id="input_name"
          name="name"
          data-testid="name-search-radio"
        />
        Name
      </label>
      <label htmlFor="input_firstLetter">
        <input
          type="radio"
          id="input_firstLetter"
          name="first_letter"
          data-testid="first-letter-search-radio"
        />
        First Letter
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
