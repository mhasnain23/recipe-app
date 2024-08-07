import RecipeList from "@/components/recipe-list"

async function fetchListOfRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const result = await response.json();

    return result?.recipes;

  } catch (e) {
    throw new Error(e)
  }
}

const Recipes = async () => {

  const recipeList = await fetchListOfRecipes();
  return <RecipeList recipeList={recipeList} />
}

export default Recipes