import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from "./CartItem"
const MiniCart = () => {

    const { visible, setVisibility} = useContext(CartContext)

    return (

        <div className={`mini_cart_wrapper  d-flex justify-content-center ${visible ? '' : 'invisible'}`}
            onMouseEnter={() => setVisibility(true)}
            onMouseLeave={() => setVisibility(false)}
        >
            <CartItem />
        </div >


    )

}

export default MiniCart