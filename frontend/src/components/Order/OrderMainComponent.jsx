import OrderProducts from "./OrderProducts"
import { Container } from "react-bootstrap"
const OrderMainComponent = () => {
    return (
        <div className="my-6 p-4 order-wrapper">
            <Container>
                <OrderProducts />
            </Container>
        </div >
    )
}

export default OrderMainComponent