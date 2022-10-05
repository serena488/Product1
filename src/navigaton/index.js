import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pricing from "../pages/pricingpackages";
import Agreement from "../pages/agreement";
import FAQS from "../pages/faqs";
import About from "../pages/about";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Strip } from "../components/Strip";
import { Services } from "../components/Services";


const Navigation = () => {

    return (
        <Router>
            <Strip />
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/faqs' element={<FAQS />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/agreement' element={<Agreement />} />
            </Routes>

            <Footer />
        </Router>
    )
}

export default Navigation;