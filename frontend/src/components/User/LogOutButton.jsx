import Cookie from "js-cookie"
import { Link } from "react-router-dom"
import file from '../../services/paths'

const LogOutButton = ()=>{

    const logOut = () => {
        /// TODO: create logout endpoint 
        Cookie.remove('jwt')
        window.location.reload()
    }

    return (
        <Link to={`${file.HOME}`} className="link-height">
            <button className="btn-custom--user-option" onClick={() => logOut()}>
                Log out
            </button>
        </Link>
    )
}
export default LogOutButton