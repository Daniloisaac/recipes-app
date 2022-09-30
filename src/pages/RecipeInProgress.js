import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchRecipes from '../services';
import shareIcon from '../images/shareIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';

function RecipeInProgress(idRecipes) {
	const [recipes, setRecipes] = useState([{}]);
	const history = useHistory();
	const path = history.location.pathname;
	const {
		match: {
			params: { id },
		},
	} = idRecipes;
  console.log(path.includes('drinks'));
	useEffect(() => {
		const getRecipes = async () => {
			if (path.includes('meals')) {
				const meals = await fetchRecipes(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
				);
				setRecipes(meals);
			} else if (path.includes('drinks')) {
        console.log('drinks')
				const drinks = await fetchRecipes(
					`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
				);
				setRecipes(drinks);
			}
		};
		getRecipes();
	}, []);
	return (
		<div>
			{recipes.map((recipe) => (
				<div key={recipe.id}>
					<h1>In progress</h1>
					<img
						data-testid="recipe-photo"
						src={
							path.includes('meals')
								? recipe.strMealThumb
								: recipe.strDrinkThumb
						}
						alt={path.includes('meals') ? recipe.strMeal : recipe.strDrink}
					/>
					<title data-testid="recipe-title">
						{path.includes('meals') ? recipe.strMeal : recipe.strDrink}
					</title>
					<button type="button" data-testid="share-btn">
						<img src={shareIcon} alt="share button" />
					</button>
					<button type="button" data-testid="favorite-btn">
						<img src={whiteHeart} alt="Favorite button" />
					</button>
					<p data-testid="recipe-category">
						{path.includes('meals') ? recipe.strCategory : recipe.strAlcoholic}
					</p>
					<p data-testid="instructions">{recipe.strInstructions}</p>
					<button type="button" data-testid="finish-recipe-btn">
						Finish
					</button>
				</div>
			))}
		</div>
	);
}

export default RecipeInProgress;
