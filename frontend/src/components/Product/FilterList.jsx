import Filter from "./Filter";

const FilterList = () => {

    return (
        <div className="my-3">
            <h4>Filter By</h4>
            <Filter filterName='types' displayName='Categories'/>
            <Filter filterName='brands' displayName='Brands'/>
        </div>
    )
}

export default FilterList