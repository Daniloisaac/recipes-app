import { useEffect, useState } from 'react';

export default function useFetchRecipes(url) {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, [url]);

  return recipes;
}
