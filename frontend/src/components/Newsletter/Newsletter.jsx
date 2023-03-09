
export default Newsletter = ()=>{
    return (
        <div class="row bg-custom mx-0 py-4 mb-7 d-flex align-items-center">
            <div class="col-lg-7 mb-4 mb-md-0 ">
                <div class="container px-2 px-md-5">
                    <h5 class="pb-3">Join our newsletter for £50 off</h5>
                    <p class="line-height">We'll email you a voucher worth £50 off your first order over £200. By subscribing you
                        agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="input-group">
                    <input type="text" class="form-control text-center" placeholder="Enter Email" aria-label="Recipient's username"
                        aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                </div>
            </div>
        </div>
    )
}