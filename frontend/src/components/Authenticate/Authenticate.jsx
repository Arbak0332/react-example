import Login from "./Login"
import OauthButton from "./OauthButton"
import Register from "./Register"
import Separator from "./Separator"
const Authenticate = () => {

    return (
        <>
            <Login />
            <Separator />
            <Register />
            <Separator />
            <OauthButton />
        </>
    )
}
export default Authenticate