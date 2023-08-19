import { createContext, useState } from "react";

const CartContext = createContext()

export function CartContextProvider({ children }) {

    const [visible, setVisibility] = useState(false)
    const [products, setProducts] = useState([])

    const showMiniCartTimeout = ()=>{
        setVisibility(true)
        setTimeout(() => {
            setVisibility(false)
        }, 3000);
    }

    const getProducts = ()=>{
        const tmp = localStorage.getItem('products')
        if(tmp)
            setProducts()
    }

    const addProduct = (product, quantity)=>{
        console.log(product);
        setProducts(prev=> [...prev, product])
    }

    const changeQuantity = (product, quantity)=>{

    }

    const deleteProduct = () => {

    }


    


    return (
        <CartContext.Provider value={{ products, addProduct, deleteProduct, visible, setVisibility, showMiniCartTimeout }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext