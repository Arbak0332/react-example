
const Tabs = ()=>{
    return (
        <nav className="navbar navbar-expand-md bg-navbar navbar-light sticky-top second-nav">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Shop All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contact</a>
                        </li>
                    </ul>
                   
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control border-bottom border-1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn-search" type="submit"><i className="bi bi-search"></i></button>
                    </form>

                </div>
            </div>
        </nav>
    )
}


const Navbar = () => {
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
                                <a className="nav-link" href="/#">
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
