import Tabs from "./Tabs"
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Navbar = () => {
    
    const { setVisibility } = useContext(CartContext)

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md bg-navbar navbar-light fixed-top first-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand me-3 me-md-0" href="/#">MEBEL</a>
                        <ul className="navbar-nav flex-row ms-auto me-lg-0 nav-icons">
                            <li>
                                <a className="nav-link" href="/#">
                                    <i className="bi bi-person"></i>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="/#">
                                    <i className="bi bi-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" 
                                    href="/#"
                                    onMouseEnter={()=> setVisibility(true)}
                                    onMouseLeave={()=> setVisibility(false)}    
                                >
                                    <i className="bi bi-cart3"></i>
                                </a>
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
