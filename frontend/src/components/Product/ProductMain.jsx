import ProductList from "./ProductList"
import FilterList from "./CheckboxFilterList"
import Prompt from "../Common/Prompt"
import DropdonwFilterList from "./DropdownFilterList"
import PaginationCustom from "./PaginationCustom"

const ProductMain = () => {



    return (
        <>
            <Prompt text={'SHOP THE COLLECTION'} />
            <main className="row mx-0 mt-7">
                <div className="col-md-2">
                    <FilterList />
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