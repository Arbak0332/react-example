import { createContext, useState, useRef } from "react";
import file from '../config.json';

const FilterContext = createContext()

export function FilterProvider  ({children}){

    const [products, setProducts] = useState({})
    const [currentPage, setCurrentPage] = useState(1)

    const query = useRef(new Map())

    const setQuery = (newMap) => {
        setCurrentPage(1)
        query.current = newMap
    }

    const convertToString = (searchParams) => {
        let result = '?'
        if (typeof searchParams === 'undefined')
            return ''

        searchParams.forEach((value, key) => {
            result = result.concat(`${key}=${value}&`)
        })
        return result
    }



    // it return products from query but does not show on screen
    const getProducts = async (searchParams) => {
        console.log(searchParams);
        let arg = searchParams
        if (typeof searchParams.current !== 'undefined')
            arg = searchParams.current


        const API_URL = file.API_URL
        const params = convertToString(arg)

        const response = await fetch(`${API_URL}/products${params}`)
        const data = await response.json()
        return data
    }
    
    // it shows products on screen
    const searchProducts = async (searchParams) => {
        const data = await getProducts(searchParams)
        setProducts(data)
    }

    const setFilter = (filterName, value) => {
        const updatedItems = new Map([...query.current])

        updatedItems.set(filterName, value)
        setQuery(updatedItems)

    }


    const addFilter = (filterName, value) =>{
        const updatedItems = new Map([...query.current])
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
        const updatedItems = new Map([...query.current])

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
        <FilterContext.Provider value={{ query,
            addFilter,
            deleteFilter,
            searchProducts, 
            products, 
            getProducts, 
            setFilter, 
            currentPage, 
            setCurrentPage }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext