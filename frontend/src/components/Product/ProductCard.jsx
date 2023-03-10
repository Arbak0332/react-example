// const product = {
//     id: 2,
//     name: "test1",
//     price: 1,
//     image_name: "products/image1.jpeg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum porttitor purus, non maximus tortor. Donec gravida mi in est aliquet, eu tristique nulla ultrices. Quisque vulputate varius ullamcorper.",
//     brand_id: 1,
//     type_id: 2,
//     quantity: 1,
//     created_at: "2023-03-01T19:09:00.090Z",
//     updated_at: "2023-03-01T19:09:00.090Z"
// }


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