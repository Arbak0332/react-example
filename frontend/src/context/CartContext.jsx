import { createContext, useState } from "react";
import config from '../config.json'
const CartContext = createContext()

export function CartContextProvider({ children }) {
    /*
        'products' state is reponsible for triggering useEffect hook
        when contents of shopping cart are updated.  
    */
    const [products, setProducts] = useState([])

    /*
        'visible' state is used in 'MiniCart'. 
        If it is set to true, it shows 'MiniCartItem' component 
    */
    const [visible, setVisibility] = useState(false)

    /*
        Show 'MiniCartItem' component for 5 seconds
    */
    const showMiniCartTemporarily = () => {
        setVisibility(true)
        setTimeout(() => {
            setVisibility(false)
        }, 5000);
    }

    const getProducts = async () => {
        try {
            const response = await fetch(`${config.API_URL}/orders/items`, {
                method: 'GET',
                credentials: 'include',
            })
            const data = await response.json()
            return data
        } catch (error) {
            console.error(error);
            return []
        }
    }

    const setProductsToCart = async ()=>{
        const data = await getProducts()
        setProducts(data)
    }

    /*
     * Sends a POST request to add product to the user's shopping cart.
    */
    const addProduct = async (product, quantity) => {

        try {

            await fetch(`${config.API_URL}/orders/items`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    product_id: product.id,
                    quantity: quantity
                })
            })
        } catch (error) {
            console.log(error);
        }


    }

    const addProductAndShowMiniCart = async (product, quantity) => {
        await addProduct(product, quantity)
        await setProductsToCart()
        showMiniCartTemporarily()
    }

    const changeQuantity = (product, quantity) => {

    }

    const deleteProduct = () => {

    }





    return (
        <CartContext.Provider value={{ setProductsToCart, products, getProducts, addProductAndShowMiniCart, deleteProduct, visible, setVisibility, showMiniCartTemporarily }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext