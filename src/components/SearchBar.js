function SearchBar() {
  return (
    <div>
      <input
        type="radio"
        id="input_ingredient"
        name="ingredient"
        data-testid="ingredient-search-radio"
      />
      <input
        type="radio"
        id="input_name"
        name="name"
        data-testid="name-search-radio"
      />
      <input
        type="radio"
        id="input_firstLetter"
        name="first_letter"
        data-testid="first-letter-search-radio"
      />
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
