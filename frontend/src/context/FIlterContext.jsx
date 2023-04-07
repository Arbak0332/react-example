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
        setQuery(updatedItems)
    }
    
    const deleteFilter = (filterName, value)=>{
        const updatedItems = new Map([...query])

        let prev = updatedItems.get(filterName)
        if (prev === undefined)
            prev = []
        const index = prev.indexOf(value)
        prev.splice(index, 1)
        if(prev.length === 0)
            updatedItems.delete(filterName)
        else
            updatedItems.set(filterName, prev)
        setQuery(updatedItems)
    }

    return (
        <FilterContext.Provider value={{ query, addFilter, deleteFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext