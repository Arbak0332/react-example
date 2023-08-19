const Tabs = () => {
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
                            <a className="nav-link" href="/aboutus">About Us</a>
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

export default Tabs