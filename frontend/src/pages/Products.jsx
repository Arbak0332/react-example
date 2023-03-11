import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import ProductList from "../components/Product/ProductList"
import FilterList from "../components/Product/FilterList"

const Products = () => {

    return (
        <>
            <Navbar />
            <main className="row mx-0 mt-7">
                <div className="col-md-2">
                    <FilterList />
                </div>
                <div className="col-md-10">
                    <ProductList />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Products