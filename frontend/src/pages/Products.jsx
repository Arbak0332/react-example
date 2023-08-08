import { FilterProvider } from "../context/FilterContext";

import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ProductMain from "../components/Product/ProductMain";

const Products = () => {


    return (
        <>
            <Navbar />
            <FilterProvider>
                <ProductMain />
            </FilterProvider >
            <Footer />

        </>
    )
}

export default Products