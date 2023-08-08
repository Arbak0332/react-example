import { useEffect, useContext} from 'react'
import ProductCard from './ProductCard'
import FilterContext from '../../context/FilterContext'

/*
    ProductList component is simply a collection of products. 
    and it filtrs them in 2 ways:
    -by calling 'searchProducts' function (for only side Filters like 'Categories', 'Brands', 'Materials', 'Colors')
    -by updating query parameter (for top and bottom Filters like 'Price', 'Pagination')
    It accept only map in parameters
*/

const ProductList = ({ query }) => {

    const { products} = useContext(FilterContext)


    return (
        <div className="row mx-0">
            {
                products?.length > 0
                    ?
                    (
                        products.map((product) =>
                        (
                            <ProductCard product={product} />
                        ))
                    )
                    :
                    (
                        <h1>
                            Products not found
                        </h1>
                    )

            }
        </div>



    )
}
export default ProductList