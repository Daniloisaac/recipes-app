import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import fetchRecipes from '../services';

function DoneRecipes() {
  // requisito 43
  // requisito 44 ao 46
  // enviar dados a patir do click do botao finish
  // caso seja comida foto, nome, categoria,nacionalidade,
  // data que a pessoa fez a receita, 2 primeiras tags,
  // botao de compartilhar
  // um estado para as comidas
  const [food, setFood] = useState([]);
  // um estado para bebidas
  const [drinks, setDrinks] = useState([]);
  // um estado para todos
  const [alimentos, setAlimentos] = useState([]);
  // um estado para o filltro utilizado
  const [filter, setFilter] = useState({});
  // um estado para renderizar
  const [render, setRender] = useState(alimentos);

  const { pathname } = useContext(AppContext);

  const idRecipes = pathname.replace(/[^0-9]/g, ''); // regex

  useEffect(() => {
    const getRecipes = async () => {
      if (pathname.includes('meals')) {
        const
          meals = await fetchRecipes(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipes}`);
        setFood(...food, meals);
        setAlimentos(...alimentos, food);
        setRender(alimentos);
      } {
        const
          bebida = await fetchRecipes(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipes}`);
        setDrinks(bebida);
        setAlimentos(...alimentos, drinks);
        setRender(alimentos);
      }
    };
    getRecipes();
  }, [id]);

  console.log(render);
  // requisito 48 3 botoes um para filtrar bebidas ,
  // o outro para filtrar comidas e o outro para remover todos

  const comida = () => {
    setFilter({ filtro: 'comida' });
    console.log(filter);
    setRender(food);
  };

  const bebida = () => {
    setFilter({ filtro: 'bebida' });
    console.log(filter);
    setRender(drinks);
  };

  const removeFilter = () => {
    setFilter({});
    console.log(filter);
    setRender(alimentos);
  };

  handleFilter = (e) => {
    const buttonClicked = e.target.value;
    if (buttonClicked === Meals) {
      comida();
    } else if (buttonClicked === Drink) {
      bebida();
    }
    removeFilter();
  };

  // requisito 49 redirecionar para a página de detalhes caso seja clickado na foto ou nome
  /*  const redirect = () => {
    history.push('/meals/:id');
   history.push('/drinks/:id');
  };  */

  return (
    <div>
      <Header
        title="Done Recipes"
        search={ false }
      />
      <section>
        <button
          type="button"
          onClick={ handleFilter }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          onClick={ handleFilter }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          onClick={ handleFilter }
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
      </section>
      <div>
        {/* render.map((receita, index) => (
          <div key={ index }>
            <img
              src={receita.image }
              alt={descricaoimage}
              onClick={redirect}
              data-testid={ `${index}-horizontal-image` }
            />
            <span
              data-testid={`${index}-horizontal-name`}
              onClick={redirect}
            >
              nome da receita
            </span>
            <span
              data-testid={ `${index}-horizontal-top-text` }
            >categoria ou se é alcoolica</span>
            <span data-testid={ `${index}-horizontal-done-date` }>data</span>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
            >
              share
            </button>
            <span data-testid={ `${index}-${tagName}-horizontal-tag` }>tags</span>
          </div>
        )) */}
      </div>
    </div>
  );
}

export default DoneRecipes;
