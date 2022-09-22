import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pricing from "../pages/pricingpackages";
import Agreement from "../pages/agreement";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Strip } from "../components/Strip";

const Navigation = () => {

    return (
        <Router>
            <Strip />
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/agreement' element={<Agreement />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default Navigation;