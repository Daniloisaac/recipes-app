import { useEffect, useState } from 'react';

export default function useFetchRecipes(url) {
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, [url]);

  return meals;
}
