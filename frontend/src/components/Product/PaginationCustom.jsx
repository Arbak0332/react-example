import { useState, useEffect, useContext, useRef } from 'react';
import FilterContext from '../../context/FilterContext';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';

const PaginationCustom = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const quantityOfProducts = useRef(0)
    const limit = useRef(12)

    const setLimit = (value) => {
        if (!isNaN(value))
            limit.current = value
    }

    const setQuantityOfProducts = (value) => {
        quantityOfProducts.current = value
    }


    const { products, getProducts, query, searchProducts, setFilter } = useContext(FilterContext)

    const [paginationItems, setPaginationItems] = useState([1])

    const handleNextPage = () => {
        if (quantityOfProducts.current - limit > 0)
            setCurrentPage((prevPage) => prevPage + 1)
    }

    const handlePrevPage = () => {
        if (currentPage > 1)
            setCurrentPage((prevPage) => prevPage - 1)
    }

    const handlePageChange = (number) => {
        setCurrentPage(number)
    }

    const renderPagination = async (query) => {
        setPaginationItems([1])
        const response = await getProducts(query)

        setQuantityOfProducts(response.length)



        for (let number = currentPage - 2; number <= currentPage; ++number) {
            if (number > 1)
                setPaginationItems(prevArray => [...prevArray, number])
        }

        if (quantityOfProducts.current - limit.current > 0)
            setPaginationItems(prevArray => [...prevArray, currentPage + 1])


        if (quantityOfProducts.current - limit.current > limit.current)
            setPaginationItems(prevArray => [...prevArray, currentPage + 2])

        console.log(`quantityOfProducts: ${quantityOfProducts.current}`);
        console.log(paginationItems);
    }

    const scrollWindowUp = () => {
        window.scrollTo({
            top: 150,
            behavior: "instant", // You can also use "auto" or "instant" for different scroll behaviors.
        });
    }

    useEffect(() => {

        const paginationQuery = new Map()

        setLimit(query.current.get('limit'))

        paginationQuery.set('fields', 'id')
        paginationQuery.set('page', currentPage+1)
        paginationQuery.set('limit', limit.current)
        console.log(paginationQuery);

        setFilter('page', currentPage)
        scrollWindowUp()
        searchProducts(query)
        renderPagination(paginationQuery)


    }, [currentPage])

    //     <Pagination.Item>{1}</Pagination.Item>
    //     <Pagination.Ellipsis />
    //     <Pagination.Item>{10}</Pagination.Item>
    //     <Pagination.Item>{11}</Pagination.Item>
    //     <Pagination.Item>{13}</Pagination.Item>
    //     <Pagination.Item disabled>{14}</Pagination.Item>
    //     <Pagination.Ellipsis />
    //     <Pagination.Item>{20}</Pagination.Item>  \



    return (
        <Pagination>

            <Button variant='outline-primary' onClick={() => handlePrevPage()}>
                Prev
            </Button>

            {
                paginationItems.map(number => (
                    < Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
                        {number}
                    </Pagination.Item >
                ))
            }

            <Button variant='outline-primary' onClick={() => handleNextPage()}>
                Next
            </Button>

        </Pagination>
    )
}

export default PaginationCustom
