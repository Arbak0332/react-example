import Filter from "./CheckboxFilter";

const FilterList = () => {

    return (
        <div className="my-3">
            <h4>Filter By</h4>
            <Filter filterName='types' displayName='Categories'/>
            <Filter filterName='brands' displayName='Brands'/>
            <Filter filterName='materials' displayName='Materials' />
            <Filter filterName='colors' displayName='Colors' />
        </div>
    )
}

export default FilterList