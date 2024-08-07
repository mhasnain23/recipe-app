import Link from "next/link";


export default function RecipeDetailsItem({ getRecipeDetails }) {
    return (
        <div>
            <Link href={"/recipe-list"} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex mt-5">Go to Recipe List</Link>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img
                            src={getRecipeDetails?.image}
                            className="w-4/5 rounded-lg object-cover"
                            name={getRecipeDetails?.name}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails?.name}</h2>
                        {/* recipe details */}
                        <div className="gap-4 mt-5">
                            <p className="text-2xl text-gray-700">{getRecipeDetails?.mealType[0]}</p>
                        </div>
                        <div className="mt-5">
                            <p className="text-2xl text-gray-800">{getRecipeDetails?.cuisine}</p>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-lg font-bold text-gray-800">Ingredients</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                                {
                                    getRecipeDetails?.ingredients.map(item => <li>{item}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}