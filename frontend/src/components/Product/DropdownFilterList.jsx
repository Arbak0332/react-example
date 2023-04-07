import DropdownFilter from "./DropdownFilter";

const DropdonwFilterList = () => {

    return (
        <div className="d-flex flex-row justify-content-end">

            <DropdownFilter title={'Sort'} options={['lowest price', 'highest price']} />
            <DropdownFilter title={'Show'} options={['9', '12', '15', '18', '21']} />
        </div>
    )

}

export default DropdonwFilterList