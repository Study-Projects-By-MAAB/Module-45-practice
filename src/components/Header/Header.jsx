import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const locThm = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", locThm)
    }, [theme])
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("synthwave")
        } else {
            setTheme("light")
        }
    }
    return (
        <div
            className={`${
                theme === "synthwave" ? "bg-[#1a103d] shadow-gray-600" : "bg-white"
            } flex fixed z-20 top-0  w-full justify-between items-center shadow-md p-4`}>
            <NavLink to="/" className="btn bg-transparent border-0 shadow-none font-bold">
                My Website
            </NavLink>
            <ul className="flex items-center gap-6">
                <nav className="flex gap-3 *:p-2 *:font-bold">
                    <NavLink to="/" className={({ isActive }) => isActive && "bg-error rounded-md "}>
                        Home
                    </NavLink>
                    <NavLink to="/meals" className={({ isActive }) => isActive && "bg-error rounded-md "}>
                        Meals
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive && "bg-error rounded-md "}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive && "bg-error rounded-md "}>
                        Contact
                    </NavLink>
                </nav>
                <div className="flex">
                    <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle  theme-controller" />
                </div>
            </ul>
        </div>
    )
}

export default Header
