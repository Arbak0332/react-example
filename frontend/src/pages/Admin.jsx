import { Link, useLocation } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { useEffect, useState } from 'react'

const Admin = () => {

    const [isVisible, setIsVisible] = useState(false);

    const location = useLocation();
    const [info, setInfo] = useState(location.state)  


    useEffect(() => {

        if(info !== null){
            setIsVisible(true)
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }

    }, []);

    return (
        <>
            <Container>
                <div className='d-flex flex-column justify-content-between' style={{height:'100vh'}}>

                    <Link to="/admin/add-product">
                        <Button className='mt-4'>
                            Add Product
                        </Button>
                    </Link>

                    <div>

                        {
                            isVisible
                                ?
                                (

                                    <Alert key="success" className='submit-height' variant="success">
                                        {info}
                                    </Alert>
                                )
                                :
                                (
                                    <>
                                    </>
                                )
                        }
                    </div>
                </div>
            </Container>


        </>
    )
}

export default Admin