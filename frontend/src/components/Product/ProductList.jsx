import { useEffect, useState, useContext, forwardRef, useImperativeHandle } from 'react'
import ProductCard from './ProductCard'
import FilterContext from '../../context/FIlterContext'
import file from '../../config.json';



const ProductList = forwardRef(({ query }, ref) => {

    // const {query} = useContext(FilterContext)

    const searchProducts = async (searchParams) => {
        const API_URL = file.API_URL
        if (searchParams === undefined)
            searchParams = ''
        const response = await fetch(`${API_URL}/api/v1/products${searchParams}`)
        const data = await response.json()
        setProducts(data)
    }

    useImperativeHandle(ref, () => ({
        filterProductsBy(searchParams) {
            console.log('it working')
            searchProducts('')
        }
    }));

    const [products, setProducts] = useState([])


    useEffect(() => {
        searchProducts(query)
    }, [])

    return (
        <div class="row mx-0">
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
})
export default ProductList