import OrderProductCard from "./OrderProductCard"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import CartContext from "../../context/CartContext"

const OrderProducts = () => {
    const { getProducts } = useContext(CartContext)
    const [orderItems, setOrderItems] = useState({})



    useEffect(() => {
        const apiCall = async () => {
            try {
                const products = await getProducts()
                console.log(products);
                setOrderItems(products)
            } catch (error) {
                console.error(error);

            }
        }
        apiCall()

    }, [])


    return (
        <div>
            {
                orderItems.length > 0 ?
                    (


                        orderItems.map(item => (
                            <Row >
                                <OrderProductCard orderItem={item} />
                            </Row>
                        ))

                    )
                    :
                    (
                        <>
                            <h1>
                                Order cart is empty!
                            </h1>
                        </>
                    )
            }
        </div>
    )


}

export default OrderProducts