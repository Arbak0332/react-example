import { Link } from "react-router-dom"
import file from '../../config.json'

const OauthButton = () => {
    return (
        <div className="d-flex flex-column align-items-center my-5">
            <Link to={`${file.API_URL}/users/auth/google_link`}>
                <button className="btn-login-social mb-4 py-3 px-2 px-md-5 d-flex justify-content-start"><span className="mr-5"><i
                    className="bi text-white bi-google"></i></span>Sign in via Google</button>
            </Link>
        </div>
    )
}

export default OauthButton