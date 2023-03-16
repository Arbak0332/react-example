import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import ProductList from "../components/Product/ProductList"
import FilterList from "../components/Product/FilterList"

import FilterContext from "../context/FIlterContext"
import { useRef, useContext } from 'react'
import Button from 'react-bootstrap/Button';

const Products = () => {

    const { query } = useContext(FilterContext)
    const productsRef = useRef(null)

    const handleFilter = () => {
        productsRef.current.filterProductsBy(query)
    }

    return (
        <>
            <Navbar />

            <main className="row mx-0 mt-7">
                <div className="col-md-2">
                    <FilterList />
                    <Button variant="primary" size="lg" onClick={handleFilter} >Filtr</Button>
                </div>
                <div className="col-md-10">
                    <ProductList ref={productsRef} />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Products