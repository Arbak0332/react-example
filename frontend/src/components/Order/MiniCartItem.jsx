import { useContext } from "react"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"
import file from '../../config.json'
import PATH from "../../services/paths"
import Button from 'react-bootstrap/Button'

const Item = ({ lastItem }) => {

    return (
        <div className="mini_cart_item_wrapper">
            <div className="d-flex mt-2" >
                <img src={`${file.IMAGE_STORAGE_URL}/products/${lastItem.image_name}`}
                    alt="aws image"
                    className="mini_cart_img" />
                <div className="mini_cart_product_info_wrapper d-flex justify-content-center pt-2">
                    <div className="d-flex flex-column">
                        <div className="mini_cart_product_name">
                            {lastItem.name}
                        </div>
                        <div className="mini_cart_product_info my-2">
                            quantity: 1
                        </div>
                        <h6>{lastItem.price}$</h6>
                    </div>
                </div>
            </div >
            <div className="d-flex flex-row  justify-content-between">
                <a className="ms-3 mini_cart_product_info" href="/#">
                    delete product
                </a>
                <a className="mini_cart_product_info" href="/#">
                    move to wish list
                </a>
            </div>
            <Link to={`${PATH.ORDER}`} className="product-link">
                <Button className="w-100 btn-custom--green mt-2">Go to checkout!</Button>
            </Link>

        </div>
    )
}

const EmptyItem = () => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3>Your cart is empty</h3>
            <h6>If you don't know what to buy check out the latest offer</h6>
            <Link to={`${PATH.PRODUCTS}`} >
                <button className="w-100 btn-custom btn-custom--green">Check latest</button>
            </Link>
        </div>
    )
}

const MiniCartItem = () => {

    const { products } = useContext(CartContext)

    const lastItem = products[products.length - 1]

    return (
        <>
            {
                typeof lastItem !== 'undefined' ?
                    (

                        <Item lastItem={lastItem} />
                    )
                    :
                    (
                        <EmptyItem />
                    )
            }
        </>
    )

}

export default MiniCartItem