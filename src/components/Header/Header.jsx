import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme)
    }, [theme])
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("synthwave")
        } else {
            setTheme("light")
        }
    }
    return (
        <div className="flex justify-between items-center my-9 mx-8">
            <div className="flex-1 ">My Website</div>
            <nav className="flex gap-3 *:p-2 *:font-bold">
                <NavLink to="/" className={({ isActive }) => (isActive ? "bg-error rounded-md " : " ")}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "bg-error rounded-md " : " ")}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "bg-error rounded-md " : " ")}>
                    Contact
                </NavLink>
            </nav>
            <div className=" flex-1 flex justify-end">
                <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle  theme-controller" />
            </div>
        </div>
    )
}

export default Header
