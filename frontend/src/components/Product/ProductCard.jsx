
const ProductCard = ({ product }) => {
    return (
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 ">

            <div className="card">

                    <a href="./product_details.html" className="product-link">
                        <img src={require("../../assets/images/diningtables/diningtable2.jpg")} alt="" className="card-img-top" />
                        <div className="quick-view">Quick view</div>
                        <div className="card-body text-center">
                            <p className="card-text">{product.name}</p>
                            <p className="card-text">£{product.price}</p>
                        </div>
                    </a>
                </div>

        </div>
    )

}
export default ProductCard