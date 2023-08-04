import { useState, useEffect, useContext } from 'react';

const items = 4


const Pagination = ({itemsPerPage, getProducts, query}) => {
    // const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = Math.ceil(items.length / itemsPerPage);

    // const handleNextPage = () => {
    //     setCurrentPage((prevPage) => prevPage + 1);
    // }

    // const handlePrevPage = () => {
    //     setCurrentPage((prevPage) => prevPage - 1);
    // }

    // const paginatedItems = items.slice(
    //     (currentPage - 1) * itemsPerPage,
    //     currentPage * itemsPerPage
    // )

    return (
        <div>
            {/* <ul>
                {paginatedItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default Pagination
