import { Link } from "react-router-dom"
import file from '../../services/paths'

const BasicButtons= ()=>{
    return (
        <>
        
            <Link to={`${file.ACCOUNT}`} className="link-height">
                <button className="btn-custom--user-option">
                    My account
                </button>
            </Link>
            <Link to={`${file.ORDER}`} className="link-height">
                <button className="btn-custom--user-option">
                    Orders
                </button>
            </Link>
            <Link to={`${file.HOME}`} className="link-height">
                <button className="btn-custom--user-option">
                    Help & Contact
                </button>
            </Link>
        
        </>
    )
}

export default BasicButtons