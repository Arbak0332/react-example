import DropdownFilter from "./DropdownFilter";

const DropdonwFilterList = () => {

    return (
        <div className="d-flex flex-row justify-content-end">

            <DropdownFilter title={'Sort'} options={['lowest price', 'highest price']} filterName={'sort'} />
            <DropdownFilter title={'Show'} options={['3', '6', '9', '12', '15', '18', '21']} filterName={'limit'}/>
        </div>
    )

}

export default DropdonwFilterList