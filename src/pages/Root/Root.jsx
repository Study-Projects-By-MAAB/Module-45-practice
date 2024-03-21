import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const Root = () => {
    return (
        <div className="">
            <Header></Header>
            <div className="mt-24">
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Root
