
const Description = () => {
    return (
        <div className="container px-0 mt-6">
            <div className="row mx-0 mb-6">
                <div className="col-lg-6 px-0">
                    <div className="img-about-wrapper">
                        <img src={require("../../assets/images/about/office.jpg")} alt="" className="img-about" />
                    </div>
                </div>
                <div className="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 className="l-spacing uppercase">The Brand</h4>
                    <div className="mx-auto rectangle my-4"></div>
                    <p className="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div className="row mx-0 mb-6">
                <div className="col-lg-6 px-0">
                    <div className="img-about-wrapper">
                        <img src={require("../../assets/images/about/designers.jpg")} alt="" className="img-about" />
                    </div>
                </div>
                <div className="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 className="l-spacing uppercase">The Designers</h4>
                    <div className="mx-auto rectangle my-4"></div>
                    <p className="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div className="row mx-0 mb-6">
                <div className="col-lg-6 px-0">
                    <div className="img-about-wrapper">
                        <img src={require("../../assets/images/about/woodcraft.jpg")} alt="" className="img-about" />
                    </div>
                </div>
                <div className="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 className="l-spacing uppercase">The Materials</h4>
                    <div className="mx-auto rectangle my-4"></div>
                    <p className="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Description