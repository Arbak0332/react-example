import { useEffect, useState, useRef } from 'react'
import file from '../../config.json'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';

const Item = ({ obj }) => {
    return (
        <Form.Group className="d-flex justify-content-between" controlId="formBasicCheckbox">
            <label> {obj.name}</label>
            <Form.Check type="checkbox" />
        </Form.Group>
    )
}

const Filter = ({ filterName, displayName }) => {
    const [resources, setResources] = useState([])
    const [expand, setExpand] = useState(false)
    const [icon, setIcon] = useState('bi-plus')
    const getResource = async () => {
        const API_URL = file.API_URL
        const response = await fetch(`${API_URL}/api/v1/products/${filterName}`)
        const data = await response.json()
        console.log(data)
        setResources(data)
    }

    const handleClick = () => {
        setExpand(!expand)
        if (expand)
            setIcon('bi-plus')
        else
            setIcon('bi-dash')
    }

    useEffect(() => {
        getResource()
    }, [])

    return (
        <>
            {
                resources?.length > 0
                    ?
                    (
                        <div className="card my-4">
                            <div className="card-header p-0" id={`heading${filterName}`}>
                                <h2 className="mb-0">
                                    <Button className="btn btn-link btn-block text-left p-0 d-flex justify-content-between filter-size"
                                        aria-expanded={expand}
                                        onClick={() => handleClick()}
                                        style={{ backgroundColor: 'transparent' }}
                                        aria-controls={`collapse${filterName}`}>
                                        {displayName}
                                        <span>
                                            <i className={`bi  ${icon}`}></i>
                                        </span>
                                    </Button>
                                </h2>
                            </div>
                            <Collapse in={expand}>
                                <div id={`collapse${filterName}`} >
                                    <div className="card-body p-0 pt-3">
                                        <ul className="font-weight-light line-height font-size-small">
                                            {
                                                resources.map(resource => (
                                                    <Item obj={resource} />
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    )
                    :
                    (
                        <>
                        </>
                    )
            }
        </>
    )
}
export default Filter