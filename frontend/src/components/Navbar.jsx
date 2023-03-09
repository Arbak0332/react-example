
export default Navbar = () => {
    return (
        <>
            <header>

                <nav class="navbar navbar-expand-md bg-navbar navbar-light fixed-top first-nav">
                    <div class="container-fluid">
                        <a class="navbar-brand me-3 me-md-0" href="#">MEBEL</a>
                        <ul class="navbar-nav flex-row ms-auto me-lg-0 nav-icons">
                            <li>
                                <a class="nav-link" href="./login.html">
                                    <i class="bi bi-person"></i>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="">
                                    <i class="bi bi-heart"></i>
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="">
                                    <i class="bi bi-cart3"></i>
                                </a>
                            </li>
                        </ul>
                        <button class="navbar-toggler ms-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i class="bi bi-list"></i>
                        </button>
                    </div>
                </nav>

                <nav class="navbar navbar-expand-md bg-navbar navbar-light sticky-top second-nav">
                    <div class="container">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="./index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./products.html">Shop All</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./about.html">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./contact.html">Contact</a>
                                </li>
                            </ul>
                            <ul class="small-social-list list-inline text-center mb-0">
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="bi bi-twitter"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="#">
                                        <i class="bi bi-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                            <form class="d-flex my-2 my-lg-0">
                                <input class="form-control border-bottom border-1" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn-search" type="submit"><i class="bi bi-search"></i></button>
                            </form>

                        </div>
                    </div>
                </nav>

                <div class="jumbotron jumbotron-fluid">
                    <div class="container jumbotron-container text-center">
                        <div class="jumbotron-bg-hero"></div>
                        <h1 class="display-4 my-5">Explore MEBEL</h1>
                        <button class="btn-custom">Shop the collection</button>
                    </div>
                </div>
            </header>
        </>
    )
}