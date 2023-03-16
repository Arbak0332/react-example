import { createContext, useState } from "react";

const FilterContext = createContext()

export function FilterProvider  ({children}){

    const [query, setQuery] = useState(new Map())

    const addFilter = (filterName, value) =>{
        const updatedItems = new Map([...query])
        let arr = []
        let prev = updatedItems.get(filterName)
        if(prev === undefined)
            prev = []

        arr.push(...prev)
        arr.push(value)
        updatedItems.set(filterName, arr)
        console.log(updatedItems)
        setQuery(updatedItems)
    }
    // const deleteFilter = (filterName, value)=>{
    //     const updatedItems = new Map(query);
    //     updatedItems.delete(key);
    //     setItems(updatedItems);
    // }


    return (
        <FilterContext.Provider value={{query, addFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext