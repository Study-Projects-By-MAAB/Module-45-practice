import { useLoaderData } from "react-router-dom"

const ShowMealDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    const { meals } = details
    console.log(meals)
    const { idMeal, strMeal } = meals[0]
    return (
        <div className="text-center">
            <p>ID: {idMeal}</p>
            <h2 className="text-xl font-semibold">Meal Name: {strMeal}</h2>
        </div>
    )
}

export default ShowMealDetails
