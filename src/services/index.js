async function fetchRecipes(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data[Object.keys(data)[0]];
}

export default fetchRecipes;
