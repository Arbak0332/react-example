import { useContext } from "react"
import CartContext from "../../context/CartContext"
import MiniCartItem from "./MiniCartItem"
const MiniCart = () => {

    const { visible, setVisibility} = useContext(CartContext)

    return (

        <div className={`dialog-wrapper-mini-cart ${visible ? 'show-dialog' : ''}`}>
            <MiniCartItem />
        </div >


    )

}

export default MiniCart