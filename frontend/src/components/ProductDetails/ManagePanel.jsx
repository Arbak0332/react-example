const ManagePanel = () => {
    return (
        <div className="mb-5">
            <div className="form-group mt-5 mb-3 d-flex flex-column">
                <label>Quantity</label>
                <input type="number" min="1" value="1" className="w-25 p-2 mt-1" />
            </div>
            <button className="btn-custom btn-custom--dark w-100 mb-3">Add to Cart</button>
            <button className="mb-4 btn-custom btn-custom--green w-100">Buy Now</button>

        </div>
    )
}

export default ManagePanel