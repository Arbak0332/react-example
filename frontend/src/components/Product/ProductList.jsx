import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const API_URL = 'http://localhost:5000/api/v1/products'

const ProductList = ({ ...filters }) => {
    const [products, setProducts] = useState([])

    const searchProducts = async (query) => {
        const response = await fetch(`${API_URL}?${query}`)
        const data = await response.json()

        setProducts(data)
    }
    useEffect(() => {
        searchProducts('limit=6')
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
}
export default ProductList