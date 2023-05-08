import { createContext, useState } from "react";

const ProductCreatorContext = createContext()

export function ProductCreatorProvider({ children }) {

    const [data, setData] = useState({})

    return (
        <ProductCreatorContext.Provider value={{ data, setData }}>
            {children}
        </ProductCreatorContext.Provider>
    )
}

export default ProductCreatorContext