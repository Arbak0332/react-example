import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from "./CartItem"
const MiniCart = () => {

    const { visible, setVisibility} = useContext(CartContext)

    return (

        <div className={`dialog-wrapper-mini-cart ${visible ? 'show-dialog' : ''}`}>
            <CartItem />
        </div >


    )

}

export default MiniCart