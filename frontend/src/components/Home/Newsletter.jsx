
const Newsletter = ()=>{
    return (
        <div className="row bg-custom mx-0 py-4 mb-7 d-flex align-items-center">
            <div className="col-lg-7 mb-4 mb-md-0 ">
                <div className="container px-2 px-md-5">
                    <h5 className="pb-3">Join our newsletter for £50 off</h5>
                    <p className="line-height">We'll email you a voucher worth £50 off your first order over £200. By subscribing you
                        agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="input-group">
                    <input type="text" className="form-control text-center" placeholder="Enter Email" aria-label="Recipient's username"
                        aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Newsletter