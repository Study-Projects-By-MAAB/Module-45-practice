import { useLoaderData } from "react-router-dom"
import Meal from "../Meal/Meal"

const Meals = () => {
    const { meals } = useLoaderData()
    console.log(meals)
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold underline">All meals: {meals.length}</h2>
            <div className="grid grid-cols-3 w-[1140px] mx-auto gap-6 my-8 items-center">
                {meals.map((meal) => (
                    <Meal key={meal.idMeal} meal={meal}></Meal>
                ))}
            </div>
        </div>
    )
}

export default Meals
