import { useContext, useEffect, useState } from 'react'
import file from '../../../config.json'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import ProductCreatorContext from '../../../context/ProductCreatorContext';

const Item = ({ name }) => {

    const [resource, setResource] = useState([])
    const [title, setTitle] = useState(name)
    // const {data } = useContext(ProductCreatorContext)


    const getResource = async () => {
        const API_URL = file.API_URL
        const response = await fetch(`${API_URL}/products/${name}`)
        const data = await response.json()
        console.log(data)
        setResource(data)
    }

    const clickHandler = (select)=>{
        setTitle(select)

    }

    useEffect(() => {
        getResource()
    }, [])

    return (
        <>
            {
                resource?.length > 0
                    ?
                    (
                        <DropdownButton
                            variant="primary"
                            title={title}
                            id="input-group-dropdown-3"
                        >
                            {
                                resource.map(item => (
                                    <Dropdown.Item key={item.name} onClick={ ()=> clickHandler(item.name)}>{item.name}</Dropdown.Item>
                                ))
                            }
                        </DropdownButton>
                    )
                    :
                    (
                        <>Cannot get filters</>
                    )
            }
        </>
    )
}

const DropdownList = () => {
    return (

        <InputGroup className='mb-5 mt-4 d-flex'>
            <div className='mx-2'>
                <Item name="brands" />
            </div>
            <div className='mx-2'>
                <Item name="types" />
            </div>
            <div className='mx-2'>
                <Item name="colors" />
            </div>
            <div className='mx-2'>
                <Item name="materials" />
            </div>

        </InputGroup>
    )
}

export default DropdownList