import {Link} from 'react-router-dom' 
import file from '../../config.json'

const ProductCard = ({ product }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 col-xl-4 ">

            <div className="card">

                <Link to={`/products/${product.name}`} className="product-link">
                    <img src={`${file.IMAGE_STORAGE_URL}/products/${product.image_name}`} alt="aws image" className="card-img-top" />
                    <div className="quick-view">Quick view</div>
                    <div className="card-body text-center">
                        <p className="card-text">{product.name}</p>
                        <p className="card-text">{product.price}$</p>
                    </div>
                </Link>
            </div>
        </div>
    )

}
export default ProductCard