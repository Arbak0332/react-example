import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react'
import FilterContext from '../../context/FIlterContext';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownFilter = ({ title, options }) => {
    const { addFilter } = useContext(FilterContext)

    return (
        <Dropdown className="mx-2">
            <DropdownButton id="dropdown-basic-button" title={title}>
                {
                    options.map(item => (
                    (
                        <Dropdown.Item>{item}</Dropdown.Item>
                    )
                ))
                }
            </DropdownButton>
        </Dropdown>
    )
}

export default DropdownFilter