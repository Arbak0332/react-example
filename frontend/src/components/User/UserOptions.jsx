import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import LoggedUserOptions from './LoggedUserOptions'
import UnLoggedUserOptions from './UnLoggedUserOptions'
import { isExpired } from 'react-jwt'

const UserOptions = () => {

    const [logged, setLogged] = useState(false)




    useEffect(() => {

        console.log(`${document.cookie}`)
        const token = Cookie.get('jwt')
        if (token === undefined)
            return

        if (isExpired(token))
            return

        setLogged(true)

    }, [])


    return (
        <div className="dialog-wrapper-user">
            <div className="d-flex flex-column h-100">

                {
                    logged ?
                        (
                            <LoggedUserOptions />
                        )
                        :
                        (
                            <UnLoggedUserOptions />
                        )
                }

            </div>
        </div>
    )
}

export default UserOptions