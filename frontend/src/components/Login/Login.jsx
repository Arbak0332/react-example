
export default Login = () => {
    return (
        <>
            <div class="container">
                <div class="row mx-0 mb-7">
                    <div class="col-md-6 px-md-7 d-flex flex-column">
                        <h4 class="mb-5 font-weight-light">Sign In</h4>

                        <button class="btn-login-social mb-4 py-3 px-2 px-md-5 d-flex justify-content-start"><span class="mr-5"><i
                            class="bi text-white bi-google"></i></span>Sign in via Google</button>

                        <button class="btn-login-social mb-4 py-3 px-2 px-md-5 d-flex justify-content-start"><span class="mr-5"><i
                            class="bi text-white bi-facebook"></i></span>Sign in via Facebook</button>
                        <div class="separator">
                            <span class="separator-line"></span>
                            <span class="separator-text">OR</span>
                        </div>
                        <form class="my-5">
                            <div class="form-group mb-4">
                                <label for="emailInput">Email address</label>
                                <input type="email" class="form-control border-bottom" id="emailInput" aria-describedby="emailHelp"/>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group mb-4">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control border-bottom" id="passwordInput"/>
                            </div>
                            <a href="#" class="d-flex justify-content-end font-size-small mb-4" data-toggle="modal"
                                data-target="#forgottenPassword">Forgotten Password?</a>
      
                            <button type="submit" class="btn btn-secondary btn-signin">Sign In</button>
                        </form>
                    </div>
                    <div class="col-md-6 px-md-7 d-flex flex-column">
                        <h4 class="mb-5 font-weight-light">Join mebel.com</h4>
                        <a href="account.html" class="btn btn-secondary">Create An Account</a>
                    </div>

                    <div class="modal fade" id="forgottenPassword" tabindex="-1" aria-labelledby="resetPasswordModal"
                        aria-hidden="true">
                        <div class="modal-dialog  modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="resetPasswordModal">Forgotten Password</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body d-flex justify-content-center">
                                    <div class="form-group w-75">
                                        <label for="emailInputReset">Email address</label>
                                        <input type="email" class="form-control border-bottom" id="emailInputReset"
                                            aria-describedby="emailHelp" />
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Reset Password</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}