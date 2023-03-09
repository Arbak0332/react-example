
export default Inspiration = ()=>{
    return (
        <div class="row my-7 mx-0 order-1">
            <div class="col-lg-4 bg-custom px-0 d-flex align-items-center justify-content-center">
                <div class="container mx-3 mt-3 text-center d-flex flex-column align-items-center justify-content-center">
                    <div class="hr-line"></div>
                    <h3 class="font-weight-light mt-5 mb-4 l-spacing">Inspiration</h3>
                    <p class="line-height">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
                        Ea minima consequuntur dicta quidem doloribus adipisci illum quasi rerum minus architecto.
                        Some text about the best inspiring things on the website.
                    </p>
                </div>
            </div>
            <div class="col-lg-8 px-0 order-0">
                <div class="img-wrapper">
                    <div class="overlay d-flex justify-content-center align-items-center">
                        <div class="container text-center">
                            <h2 class="display-4 mb-5 text-white">Selected For You</h2>
                            <button class="btn-custom">Get inspired</button>
                        </div>
                    </div>
                    <img src="./images/interior.jpg" alt="" class="inspiration-img"/>
                </div>
            </div>
        </div>

    )
}