import ProductCreator from '../components/Admin/ProductCreator/ProductCreator'
import { ProductCreatorProvider } from '../context/ProductCreatorContext'

import { Container } from 'react-bootstrap'

const AddProduct = () => {
    return (
        <ProductCreatorProvider>
            <Container>
                <ProductCreator />
            </Container>
        </ProductCreatorProvider>
    )
}

export default AddProduct