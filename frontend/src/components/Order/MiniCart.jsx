import { useContext, useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import MiniCartItem from "./MiniCartItem"

/*
    This component is responsible for retriving the contents
    of the shopping cart from the server and displaying it.
*/
const MiniCart = () => {

    const { visible, products, getProducts } = useContext(CartContext)
    const [lastItem, setLastItem] = useState({product:{}})

    useEffect(() => {
        const apiCall = async () => {
            try {
                const tmp = await getProducts()
                setLastItem(tmp[tmp.length - 1])
            } catch (error) {
                console.error(error);
            }
        }
        apiCall()

    }, [products,])

    return (

        <div className={`dialog-wrapper-mini-cart ${visible ? 'show-dialog' : ''}`}>
            <MiniCartItem lastItem={lastItem} />
        </div >


    )

}

export default MiniCart