import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function DoneRecipes() {
  // requisito 43
  // requisito 44 ao 46
  // enviar dados a patir do click do botao finish
  // caso seja comida foto, nome, categoria,nacionalidade,
  // data que a pessoa fez a receita, 2 primeiras tags,
  // botao de compartilhar
  // um estado para as comidas
  const [alimentos, setAlimentos] = useState([]);
  // um estado para o filltro utilizado
  // const [filter, setFilter] = useState({});
  // const idRecipes = pathname.replace(/[^0-9]/g, ''); // regex
   useEffect(() => {
    const recipe = JSON.parse(localStorage.getItem('doneRecipes'));
    setAlimentos(recipe);
    console.log(recipe);

  }, []);
  
  console.log(alimentos);

  // requisito 48 3 botoes um para filtrar bebidas ,
  // o outro para filtrar comidas e o outro para remover todos

  /*const comida = () => {
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
  };*/

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
          // onClick={ handleFilter }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          // onClick={ handleFilter }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          // onClick={ handleFilter }
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
      </section>
      <div>
        {alimentos.map((receita, index) => (
          <div key={ index }>
            
          </div>
        )) }
      </div>
    </div>
  );
}

export default DoneRecipes;
