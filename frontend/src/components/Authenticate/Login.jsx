import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import { InputGroup, Alert } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import file from '../../config.json'
import Cookie from 'js-cookie';

const Login = () => {
    const [validated, setValidated] = useState(false)
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity() === false) {
            setValidated(true)
            return
        }
        try {
            const response = await fetch(`${file.API_URL}/users/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData
                })
            })
            if(response.status === 200)
                navigate('/')
            else
                setError('Invalid email or password.')

        } catch (error) {
            setError('Invalid email or password.')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column align-items-center my-5 w-100'>
            <h2>Login</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group as={Col} md="5">

                <Form.Label className='mt-4 '>Email address</Form.Label>
                <Form.Control
                    required
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className='custom-border' />

                <Form.Control.Feedback type="invalid">
                    Please provide email address.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="5">

                <Form.Label className='mt-4'>Password</Form.Label>
                <Form.Control
                    required
                    name='password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className='custom-border'
                />
                <Form.Control.Feedback type="invalid">
                    Please provide password.
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group as={Col} md="5" className='d-flex flex-column justify-content-between mt-3'>

                <button
                    className='mt-3 btn-custom btn-custom--green-form'
                    type='submit'
                    variant='primary'>
                    Login</button>

            </Form.Group>


        </Form>

    )

}

export default Login