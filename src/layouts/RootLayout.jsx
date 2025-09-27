import { Outlet } from "react-router";
import Navbar from "../pages/SharedComponents/Navbar";
import Footer from "../pages/SharedComponents/Footer";

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;