
const AboutUs = () => {
    return (
        <div class="container px-0 mt-6">
            <div class="row mx-0 mb-6">
                <div class="col-lg-6 px-0">
                    <div class="img-about-wrapper">
                        <img src={require("./images/about/office.jpg")} alt="" class="img-about" />
                    </div>
                </div>
                <div class="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 class="l-spacing uppercase">The Brand</h4>
                    <div class="mx-auto rectangle my-4"></div>
                    <p class="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="row mx-0 mb-6">
                <div class="col-lg-6 px-0">
                    <div class="img-about-wrapper">
                        <img src="./images/about/designers.jpg" alt="" class="img-about" />
                    </div>
                </div>
                <div class="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 class="l-spacing uppercase">The Designers</h4>
                    <div class="mx-auto rectangle my-4"></div>
                    <p class="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
            <div class="row mx-0 mb-6">
                <div class="col-lg-6 px-0">
                    <div class="img-about-wrapper">
                        <img src="./images/about/woodcraft.jpg" alt="" class="img-about" />
                    </div>
                </div>
                <div class="col-lg-6 px-0 d-flex text-center flex-column py-4">
                    <h4 class="l-spacing uppercase">The Materials</h4>
                    <div class="mx-auto rectangle my-4"></div>
                    <p class="line-height mx-6">
                        Some text about the best inspiring things on the website. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default AboutUs