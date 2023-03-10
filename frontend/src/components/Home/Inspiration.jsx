
const Inspiration = ()=>{
    return (
        <div className="row my-7 mx-0 order-1">
            <div className="col-lg-4 bg-custom px-0 d-flex align-items-center justify-content-center">
                <div className="container mx-3 mt-3 text-center d-flex flex-column align-items-center justify-content-center">
                    <div className="hr-line"></div>
                    <h3 className="font-weight-light mt-5 mb-4 l-spacing">Inspiration</h3>
                    <p className="line-height">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Ea minima consequuntur dicta quidem doloribus adipisci illum quasi rerum minus architecto.
                        Some text about the best inspiring things on the website.
                    </p>
                </div>
            </div>
            <div className="col-lg-8 px-0 order-0">
                <div className="img-wrapper">
                    <div className="overlay d-flex justify-content-center align-items-center">
                        <div className="container text-center">
                            <h2 className="display-4 mb-5 text-white">Selected For You</h2>
                            <button className="btn-custom">Get inspired</button>
                        </div>
                    </div>
                    <img src={require('../../assets/images/interior.jpg')} alt="" className="inspiration-img"/>
                </div>
            </div>
        </div>

    )
}
export default Inspiration