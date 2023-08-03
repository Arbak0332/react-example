import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useContext } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Link, useNavigate } from 'react-router-dom'
import DropdownList from './DropdownList'
import config_file from '../../../config.json';
import FormGroup from 'react-bootstrap/esm/FormGroup'
import ProductCreatorContext from '../../../context/ProductCreatorContext'


const ProductCreator = () => {

    const BLANK_FORM_ERROR = 'Form is not complete!'
    const PUT_IMAGE_ERROR = 'Unable to send image to amazon server!'
    const DATABASE_ERROR = 'Unable to save product into database!'

    const [errorInfo, setErrorInfo] = useState(BLANK_FORM_ERROR)
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const onProductNameChange = ({ target: { value } }) => setProductName(value)
    const onDescriptionChange = ({ target: { value } }) => setDescription(value)
    const onQuantityChange = ({ target: { value } }) => setQuantity(value)
    const onPriceChange = ({ target: { value } }) => setPrice(value)

    const { categories, checkCategories } = useContext(ProductCreatorContext)

    const navigate = useNavigate()

    const { API_URL } = config_file

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const putImage = async (key) => {
        const response_s3 = await fetch(key, {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: selectedFile
        })
        console.log(response_s3)
        return response_s3.status === 200
    }


    const isFormBlank = () => {
        if (productName.trim().length === 0)
            return false

        if (description.trim().length === 0)
            return false

        if (price === 0)
            return false

        if (quantity === 0)
            return false

        if (!checkCategories())
            return false

        return true
    }




    const addToDatabase = async (image_name) => {
        try {
            const response = await fetch(`${API_URL}/products`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: productName,
                    description: description,
                    image_name: image_name,
                    quantity: quantity,
                    price: price,
                    brand: categories.brands,
                    color: categories.colors,
                    type: categories.types,
                    material: categories.materials

                })
            })
            console.log(response)
            return response.status === 201

        } catch (error) {
            console.error(error);
        }

        return false
    
    }



    const handleSubmit = async (event) => {
        event.preventDefault()

        // check if form is filled with data

        if (!isFormBlank()) {
            setErrorInfo(BLANK_FORM_ERROR)
            setShowAlert(true)
            return
        }

        // get safe url from server to put image directly to s3 bucket
        const response_url = await fetch(`${API_URL}/products/upload`)
        const { key, name } = await response_url.json()

        const isSaved = await putImage(key)
        if (!isSaved) {
            setErrorInfo(PUT_IMAGE_ERROR)
            setShowAlert(true)
            return
        }


        const isAdded = await addToDatabase(name)
        if (!isAdded) {
            setErrorInfo(DATABASE_ERROR)
            setShowAlert(true)
            return
        }

        navigate('/admin', { state: 'The product has been successfully added to the database!' })
    }

    return (
        <>
            <div className='my-3 d-flex justify-content-between'>
                <Link to="/admin">
                    <Button className='me-2' variant='secondary'>
                        Back
                    </Button>
                </Link>
                <h3>Product Creator</h3>
                <div>
                    <Button style={{ visibility: 'hidden' }}>
                        Back
                    </Button>
                </div>
            </div>

            <Form className='p-3 bg-light' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Name</Form.Label>
                    <Form.Control className='custom-border' type="text" value={productName} onChange={onProductNameChange} placeholder="Name" />
                </Form.Group>

                <Form.Group>
                    <Form.Label >Description</Form.Label>
                    <Form.Control as="textarea" className='custom-border' value={description} onChange={onDescriptionChange} aria-label="With textarea" />
                </Form.Group>

                <DropdownList />

                <Form.Control variant="primary" type="file" accept="image/*" className='mb-3' onChange={handleFileChange} />

                <FormGroup className='mb-3 d-flex align-items-center'>
                    <Form.Control type='number'
                        defaultValue={quantity}
                        onChange={onQuantityChange}
                        min={0}
                        className='custom-border me-2'
                        style={{ width: '6rem' }}
                    />
                    <h6>quantity</h6>
                </FormGroup>

                <FormGroup className='mb-3 d-flex align-items-center'>
                    <Form.Control type='number'
                        defaultValue={price}
                        onChange={onPriceChange}
                        step={0.01}
                        min={0}
                        className='custom-border me-2'
                        style={{ width: '6rem' }}
                    />
                    <h6>price $</h6>
                </FormGroup>

                <div className='d-flex'>

                    <Button variant="primary" className='me-2 submit-height' type="submit">
                        Publish
                    </Button>
                    <div>

                        {showAlert ?
                            (
                                <Alert key="danger" className='submit-height' variant="danger">
                                    Form is not complete
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
            </Form>
        </>
    )
}

export default ProductCreator