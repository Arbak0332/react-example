import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import Form from 'react-bootstrap/Form'
const ManagePanel = ({product}) => {
    
    const { addProductAndShowMiniCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const handleClick = ()=>{

        const apiCall = async ()=>{
            await addProductAndShowMiniCart(product, quantity)
        }
        apiCall()
    }

    return (
        <div className="mb-5">
            <div className="form-group mt-5 mb-3 d-flex flex-column">
                <label>Quantity</label>
                <Form.Control 
                    type='number'
                    defaultValue={quantity}
                    onChange={setQuantity}
                    min={1}
                    className='custom-border me-2'
                    style={{ width: '6rem' }}
                />

            </div>
            <button className="btn-custom btn-custom--green w-100 mb-3"
                onClick={() => { handleClick() }}
                >Add to Cart
            </button>
        </div>
    )
}

export default ManagePanel