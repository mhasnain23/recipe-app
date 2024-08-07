import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  return (
    <div className="p-4 mx-auto max-w-6xl md:max-w-4xl sm:max-w-full">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
      <Link href={"/"} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go Home</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          recipeList && recipeList.length > 0
            ? recipeList.map(recipe => <Link href={`/recipe-list/${recipe.id}`} key={recipe.id}>
              <Card className="mt-10">
                <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                  <div className="w-full aspect-w-16 aspect-h-8 lg:h-60">

                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="h-full w-full object-top"
                    />

                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900">{recipe.name}</h2>
                  </div>

                  <div className="mt-4 flex items-center flex-wrap gap-2">
                    <p className="text-lg text-gray-600">{recipe.rating}</p>
                    <div className="ml-auto">
                      <p className="text-lg text-gray-600 font-bold">{recipe.cuisine}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>)
            : null
        }
      </div>
    </div>
  )
}

export default RecipeList
