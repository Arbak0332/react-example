import { Card, Form } from 'react-bootstrap'
import getImageUrl from '../../services/getImageUrl'
import { useState } from 'react'

const OrderProductCard = ({ orderItem }) => {
    const [quantity, setQuantity] = useState(1)


    return (
        <Card className='md d-flex flex-row p-4 order-card'>
            <Card.Img className='order-img' src={getImageUrl(orderItem.product.image_name)} />
            <Card.Body className='d-flex flex-column' >
                <Card.Title>{orderItem.product.name}</Card.Title>
                <Form.Control
                    type='number'
                    defaultValue={quantity}
                    onChange={setQuantity}
                    min={1}
                    className='custom-border'
                    style={{ width: '6rem' }}
                />

            </Card.Body>
        </Card>
    )

}

export default OrderProductCard