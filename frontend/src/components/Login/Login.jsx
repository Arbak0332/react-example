
const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row mx-0 mb-7">
                    <div className="col-md-6 px-md-7 d-flex flex-column">
                        <h4 className="mb-5 font-weight-light">Sign In</h4>

                        <button className="btn-login-social mb-4 py-3 px-2 px-md-5 d-flex justify-content-start"><span className="mr-5"><i
                            className="bi text-white bi-google"></i></span>Sign in via Google</button>

                        <button className="btn-login-social mb-4 py-3 px-2 px-md-5 d-flex justify-content-start"><span className="mr-5"><i
                            className="bi text-white bi-facebook"></i></span>Sign in via Facebook</button>
                        <div className="separator">
                            <span className="separator-line"></span>
                            <span className="separator-text">OR</span>
                        </div>
                        <form className="my-5">
                            <div className="form-group mb-4">
                                <label for="emailInput">Email address</label>
                                <input type="email" className="form-control border-bottom" id="emailInput" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-4">
                                <label for="passwordInput">Password</label>
                                <input type="password" className="form-control border-bottom" id="passwordInput"/>
                            </div>
                            <a href="#" className="d-flex justify-content-end font-size-small mb-4" data-toggle="modal"
                                data-target="#forgottenPassword">Forgotten Password?</a>
      
                            <button type="submit" className="btn btn-secondary btn-signin">Sign In</button>
                        </form>
                    </div>
                    <div className="col-md-6 px-md-7 d-flex flex-column">
                        <h4 className="mb-5 font-weight-light">Join mebel.com</h4>
                        <a href="account.html" className="btn btn-secondary">Create An Account</a>
                    </div>

                    <div className="modal fade" id="forgottenPassword" tabindex="-1" aria-labelledby="resetPasswordModal"
                        aria-hidden="true">
                        <div className="modal-dialog  modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="resetPasswordModal">Forgotten Password</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body d-flex justify-content-center">
                                    <div className="form-group w-75">
                                        <label for="emailInputReset">Email address</label>
                                        <input type="email" className="form-control border-bottom" id="emailInputReset"
                                            aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Reset Password</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Login