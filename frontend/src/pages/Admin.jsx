import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'


const Admin = () => {
    return (
        <>
            <Container>
                <Link to="/admin/add-product">
                    <Button>
                        Add Product
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default Admin