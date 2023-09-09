import { decodeToken, isExpired } from "react-jwt";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import paths from '../../services/paths'

const UserHome = () => {

    const navigate = useNavigate()
    const [userData, setUserData] = useState({})

    useEffect(() => {

        const token = Cookies.get('jwt')
        

        if (token === undefined)
            navigate(paths.AUTHENTICATE)

        if (isExpired(token))
            navigate(paths.AUTHENTICATE)


        setUserData(decodeToken(token))

    }, [])


    return (

        <div className="m-7 ">
            <h1>

                Hello {userData.first_name}!
            </h1>
        </div>
    )
}


export default UserHome