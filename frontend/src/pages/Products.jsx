import { FilterProvider } from "../context/FIlterContext";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ProductMain from "../components/Product/ProductMain";

const Products = ()=>{


    return (
        <FilterProvider>
            <Navbar/>
            <ProductMain/>
            <Footer/>

        </FilterProvider>
    )
}

export default Products