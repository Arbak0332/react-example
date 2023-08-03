import { createContext, useState } from "react";

const ProductCreatorContext = createContext()

export function ProductCreatorProvider({ children }) {

    const [categories, setCategories] = useState({colors:'', materials:'', brands:'', types:''})

    const checkCategories = () => {

        if (categories.colors.trim().length === 0)
            return false

        if (categories.brands.trim().length === 0)
            return false

        if (categories.materials.trim().length === 0)
            return false

        if (categories.types.trim().length === 0)
            return false



        return true
    }


    return (
        <ProductCreatorContext.Provider value={{ categories, setCategories, checkCategories }}>
            {children}
        </ProductCreatorContext.Provider>
    )
}

export default ProductCreatorContext