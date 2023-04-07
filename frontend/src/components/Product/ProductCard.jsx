import {Link} from 'react-router-dom' 


const ProductCard = ({ product }) => {
    return (
        <div class="col-12 col-md-6 col-lg-4 col-xl-4 ">

            <div className="card">

                <Link to={`/products/${product.name}`} className="product-link">
                    <img src={require("../../assets/images/diningtables/diningtable2.jpg")} alt="" className="card-img-top" />
                    <div className="quick-view">Quick view</div>
                    <div className="card-body text-center">
                        <p className="card-text">{product.name}</p>
                        <p className="card-text">£{product.price}</p>
                    </div>
                </Link>
            </div>
        </div>
    )

}
export default ProductCard