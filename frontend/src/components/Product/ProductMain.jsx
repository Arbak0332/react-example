import ProductList from "./ProductList"
import FilterList from "./CheckboxFilterList"
import Prompt from "../Common/Prompt"
import DropdonwFilterList from "./DropdownFilterList"

import FilterContext from "../../context/FilterContext"

import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import PaginationCustom from "./PaginationCustom"

const ProductMain = () => {

    const { query, searchProducts } = useContext(FilterContext)

    const handleFilter = () => {
        searchProducts(query)
    }

    return (
        <>
            <Prompt text={'SHOP THE COLLECTION'} />
            <main className="row mx-0 mt-7">
                <div className="col-md-2">
                    <FilterList />
                    <Button variant="primary" size="lg" onClick={handleFilter} >Filtr</Button>
                </div>
                <div className="col-md-10">
                    <div className="mt-3 mb-5">
                        <DropdonwFilterList />
                    </div>
                    <ProductList />
                </div>
                <div className="d-flex justify-content-center mb-5">
                    <PaginationCustom />
                </div>
            </main>
        </>
    )
}

export default ProductMain