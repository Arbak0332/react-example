import Tabs from "./Tabs"
import { decodeToken, isExpired } from "react-jwt";
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import Cookies from 'js-cookie';
import paths from '../../services/paths'
import MiniCart from "../Order/MiniCart";
import UserOptions from "../User/UserOptions"
import Logo from "./Logo";


const Navbar = () => {
    const { visible } = useContext(CartContext)

    const isLogged = () => {
        const token = Cookies.get('jwt')

        if (token === undefined)
            return false


        if (isExpired(token))
            return false
        return true
    }

    const userDestination = () => {
        if (isLogged())
            return `${paths.ACCOUNT}`
        else
            return `${paths.AUTHENTICATE}`
    }





    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md bg-navbar navbar-light fixed-top first-nav">
                    <div className="container-fluid">
                        <Logo/>
                        <ul className="navbar-nav flex-row ms-auto me-lg-0 nav-icons">
                            <li className="dialog-container">
                                <Link className="nav-link" to={userDestination()}>
                                    <i className="bi bi-person"></i>
                                </Link>
                                <UserOptions />
                            </li>
                            <li>
                                <a className="nav-link" href="/#">
                                    <i className="bi bi-heart"></i>
                                </a>
                            </li>
                            <li className={`dialog-container ${visible ? 'show-dialog':''}`} >
                                <Link className="nav-link"
                                    to={paths.CART}>
                                    <i className="bi bi-cart3"></i>
                                </Link>
                                <MiniCart />
                            </li>
                        </ul>
                        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="bi bi-list"></i>
                        </button>
                    </div>
                </nav>
            </header>
            <Tabs />
        </>
    )
}
export default Navbar
