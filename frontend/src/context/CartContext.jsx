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

    const handleHover = ()=>{
        if(products.length !== 0){
            console.log('true');
            setVisibility(true)
        }
        else{
            console.log('false');
            setVisibility(false)
        }
    }

    const getProducts = ()=>{
        const tmp = localStorage.getItem('products')
        if(tmp)
            setProducts()
    }

    const addProduct = (product, quantity)=>{
        console.log(product);
        setProducts(prev=> [...prev, product])
        setVisibility(true)
    }

    const changeQuantity = (product, quantity)=>{

    }

    const deleteProduct = () => {

    }


    


    return (
        <CartContext.Provider value={{ products, addProduct, deleteProduct, visible, setVisibility, handleHover, showMiniCartTimeout }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext