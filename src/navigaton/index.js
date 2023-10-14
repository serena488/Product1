import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pricing from "../pages/pricingpackages";
import Agreement from "../pages/agreement";
import FAQS from "../pages/faqs";
import About from "../pages/about";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Strip } from "../components/Strip";
import Homes from "../pages/Home/index";
import Blog from "../pages/Blog/index";


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
                <Route path='/blogs' element={<Homes />} />
                <Route path='/blog/:id' element={<Blog />} />

            </Routes>

            <Footer />
        </Router>
    )
}

export default Navigation;