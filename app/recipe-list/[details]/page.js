import RecipeDetailsItem from "@/components/recipe-details";


async function fetchRecipeDetails(currentRecipeId) {
  // fetch recipe details
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`);
    const data = await response.json();
    console.log(data);
    return data;


  } catch (e) {
    throw new Error(e)
  }
}

export default async function RecipeDetails({ params }) {

  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
}

