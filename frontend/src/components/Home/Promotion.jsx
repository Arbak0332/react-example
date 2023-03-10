
const Promotion = ()=>{
    return (
        <div className="row my-7 mx-0 d-flex">
            <div className="col-lg-8 px-0 order-1 order-md-0">
                <div className="img-wrapper--sale">
                    <img src={require("../../assets/images/coffeetables/coffeetablediscount1.jpg")} alt="" className="inspiration-img--sale"/>
                </div>
            </div>
            <div className="col-lg-4 px-0 bg-custom--dark order-2 order-md-1 d-flex align-items-center">
                <div className="container mx-auto mt-3 text-center">
                    <h3 className="font-weight-light mb-4 l-spacin">End of Season Sale</h3>
                    <div className="mx-auto rectangle mb-4"></div>
                    <p className="line-height">All coffee tables <span className="line-height mt-4 ml-2 font-size-1 font-weight-bolder">20%
                        OFF</span></p>
                    <button className="btn-custom btn-custom--dark my-4 ">Shop now</button>
                </div>
            </div>
        </div>
    )
}
export default Promotion