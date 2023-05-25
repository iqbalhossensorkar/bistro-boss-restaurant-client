import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const navbarFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {navbarFooter || <Navbar></Navbar>}
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            {navbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;