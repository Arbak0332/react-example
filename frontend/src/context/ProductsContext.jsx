import { createContext, useState } from "react";

const ProductsContext = createContext()

export function ProductCreatorProvider({ children }) {

    const [products, setProducts] = useState({})

    const getProducts = async (searchParams) => {
        const API_URL = file.API_URL

        const params = convertToString(searchParams)

        const response = await fetch(`${API_URL}/products${params}`)
        const data = await response.json()
        return data
    }
    return (
        <ProductsContext.Provider value={{ products, getProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext