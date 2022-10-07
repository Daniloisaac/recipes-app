import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Share from '../images/shareIcon.svg';

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
  const [filter, setFilter] = useState({});
  // const idRecipes = pathname.replace(/[^0-9]/g, ''); // regex
  const [render, setRender] = useState(alimentos);
  useEffect(() => {
    const recipe = JSON.parse(localStorage.getItem('doneRecipes'));
    setAlimentos(recipe);
    setRender(recipe);
  }, []);
  console.log(alimentos);

  const rendery = (param) => {
    param.map((tag, indice) => (
      <span key={ indice } data-testid={ `${index}-${tag}-horizontal-tag` }>
        {tag}
      </span>
    ));
  };

  // requisito 47 clipboard

  // requisito 48 3 botoes um para filtrar bebidas ,
  // o outro para filtrar comidas e o outro para remover todos
  const handleFilter = (e) => {
    const filtro = e.target.name;
    console.log(filtro);
    if (filtro === 'Meals') {
      const novoArray = alimentos.filter((comida) => comida.type === 'meal');
      setRender(novoArray);
      console.log(novoArray);
      setFilter({ filtro: 'comida' });
      console.log(filter);
    } else if (filtro === 'Drink') {
      const array = alimentos.filter((comida) => comida.type === 'drink');
      setRender(array);
      setFilter({ filtro: 'bebida' });
      console.log(filter);
    } else {
      setRender(alimentos);
      setFilter({});
      console.log(filter);
    }
  };

  // requisito 49 redirecionar para a página de detalhes caso seja clickado na foto ou nome

  return (
    <div>
      <Header
        title="Done Recipes"
        search={ false }
      />
      <section>
        <button
          type="button"
          name="All"
          onClick={ handleFilter }
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          name="Meals"
          onClick={ handleFilter }
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          name="Drink"
          onClick={ handleFilter }
          data-testid="filter-by-drink-btn"
        >
          Drink
        </button>
      </section>
      <div>
        {render && render.map((receita, index) => (receita.type === 'meal' ? (
          <div key={ index } className="divDone">
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { `${receita.nationality} - ${receita.category}` }
            </p>
            <Link to={ `/meals/${receita.id}` }>
              <h1 data-testid={ `${index}-horizontal-name` }>
                {receita.name}
              </h1>
              <img
                className="doneImage"
                src={ receita.image }
                alt={ receita.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            <button type="button">
              <img
                src={ Share }
                alt="share button"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              {receita.doneDate}
            </p>
            { receita.tags
            && receita.tags.map((tag, indice) => (
              <span
                key={ indice }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              >
                {tag}
              </span>
            )) }
          </div>
        ) : (
          <div key={ index } className="divDone">
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {`${receita.nationality} - ${receita.alcoholicOrNot}`}
            </p>
            <Link to={ `/drinks/${receita.id}` }>
              <h1 data-testid={ `${index}-horizontal-name` }>
                {receita.name}
              </h1>
              <img
                className="doneImage"
                src={ receita.image }
                alt={ receita.name }
                data-testid={ `${index}-horizontal-image` }
              />
            </Link>
            <button type="button">
              <img
                src={ Share }
                alt="share button"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>
            <p
              data-testid={ `${index}-horizontal-done-date` }
            >
              {receita.doneDate}
            </p>
            { receita.tags && rendery(receita.tags) }
          </div>
        )))}
      </div>
    </div>
  );
}

export default DoneRecipes;
