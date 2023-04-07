const Rating = ({ }) => {
    return (
        <div className="mx-0 mt-3 d-flex ">

            <ul className="list-group list-group-horizontal font-size-small">
                <li className="list-group-item p-0 mr-1"><i className="bi bi-star-fill"></i></li>
                <li className="list-group-item p-0 mr-1"><i className="bi bi-star-fill"></i></li>
                <li className="list-group-item p-0 mr-1"><i className="bi bi-star-fill"></i></li>
                <li className="list-group-item p-0 mr-1"><i className="bi bi-star-fill"></i></li>
                <li className="list-group-item p-0 mr-1"><i className="bi bi-star-half"></i></li>
            </ul>

            <span>
                <a className="mx-4 font-size-small border-bottom">
                    <span className="mb-2">10 reviews</span>
                </a>
            </span>

        </div>
    )
}

export default Rating