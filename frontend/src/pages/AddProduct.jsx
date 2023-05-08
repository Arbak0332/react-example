import ProductCreator from '../components/Admin/ProductCreator/ProductCreator'
import { ProductCreatorProvider } from '../context/ProductCreatorContext'

import { Container } from 'react-bootstrap'

const AddProduct = () => {
    return (

            <Container className='bg-light'>
                <ProductCreator />
            </Container>
        
    )
}

export default AddProduct