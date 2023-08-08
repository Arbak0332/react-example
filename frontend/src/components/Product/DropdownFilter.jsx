import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react'
import FilterContext from '../../context/FilterContext';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownFilter = ({ title, options, filterName }) => {
    const { setFilter, query, searchProducts } = useContext(FilterContext)

    const clickHandler = (item)=>{
        setFilter(filterName, item)
        searchProducts(query)
    }

    return (
        <Dropdown className="mx-2">
            <DropdownButton id="dropdown-basic-button" title={title}>
                {
                    options.map(item => (
                    (
                        <Dropdown.Item onClick={()=>clickHandler(item)}>{item}</Dropdown.Item>
                    )
                ))
                }
            </DropdownButton>
        </Dropdown>
    )
}

export default DropdownFilter