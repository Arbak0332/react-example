import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import OauthButton from './OauthButton'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import file from '../../config.json'

const Register = () => {

    const navigate = useNavigate()

    const [validated, setValidated] = useState(false)

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        termsAndConditions: false
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {

            setValidated(true)
            return
        }

        try {

            const response = await fetch(`${file.API_URL}/users/auth/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData
                })
            })
            console.log(response);
        } catch (error) {
            console.log(error)
        }



    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex flex-column align-items-center my-5'>
            <h2>Register</h2>

            <Form.Group as={Col} md="5">

                <Form.Label className='mt-4 '>First name</Form.Label>
                <Form.Control
                    required
                    name='first_name'
                    type='text'
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First name"
                    className='custom-border' />
                <Form.Control.Feedback type="invalid">
                    Please provide first name.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="5">

                <Form.Label className='mt-4 '>Last name</Form.Label>
                <Form.Control
                    required
                    name='last_name'
                    type='text'
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last name"
                    className='custom-border' />
                <Form.Control.Feedback type="invalid">
                    Please provide last name.
                </Form.Control.Feedback>

            </Form.Group>

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
                <Form.Check
                    required
                    name="termsAndConditions"
                    label="Agree to terms and conditions"
                    value={formData.termsAndConditions}
                    onChange={handleChange}
                    feedbackType="invalid"
                />
                <button
                    className='mt-3 btn-custom btn-custom--green-form'
                    type='submit'
                    variant='primary'>
                    Register</button>

            </Form.Group>
        </Form>

    )

}
export default Register