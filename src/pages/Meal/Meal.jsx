/* eslint-disable react/prop-types */
const Meal = ({ meal }) => {
    const { strMeal, strMealThumb } = meal
    return (
        <div className="flex flex-col h-full gap-6">
            <div className="">
                <img className="w-96 rounded-xl mx-auto" src={strMealThumb} alt="" />
            </div>
            <div className="h-full">
                <h2 className="text-2xl font-semibold">Title: {strMeal}</h2>
            </div>
            <button className="h-full">
                <a
                    href="#_"
                    className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">Show Details</span>
                </a>
            </button>
        </div>
    )
}

export default Meal
