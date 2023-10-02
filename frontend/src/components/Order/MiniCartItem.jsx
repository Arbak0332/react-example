import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext"
import file from '../../config.json'
import PATH from "../../services/paths"
import Button from 'react-bootstrap/Button'
import getImageUrl from "../../services/getImageUrl"

const Item = ({ lastItem }) => {
    return (
        <div className="mini_cart_item_wrapper">
            <div className="d-flex mt-2" >
                <img src={`${getImageUrl(lastItem.product.image_name)}`}
                    alt="aws image"
                    className="mini_cart_img" />
                <div className="mini_cart_product_info_wrapper d-flex justify-content-center pt-2">
                    <div className="d-flex flex-column">
                        <div className="mini_cart_product_name">
                            {lastItem.product.name}
                        </div>
                        <div className="mini_cart_product_info my-2">
                            quantity: {lastItem.quantity}
                        </div>
                        <h6>{lastItem.product.price}$</h6>
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
            <Link to={`${PATH.CART}`} className="product-link">
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

const MiniCartItem = ({lastItem}) => {    
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