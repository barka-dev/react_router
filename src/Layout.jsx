import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserContextProvider from "./context/UserContextProvider";

function Layout() {
    return (
        <UserContextProvider>
            <Header/>
            <Outlet/>
            <Footer/>
        </UserContextProvider>  
    );
}

export default Layout;