
const Info = ({description}) => {
    return (
        <div className="mt-4">
            <div>
                <h4>
                    Description
                </h4>
                <p class="font-weight-light line-height font-size-small">
                    {description}
                </p>
            </div>

            <div className="mt-4">
                <h4>
                    Return & Refund Policy
                </h4>

                <p class="font-weight-light line-height font-size-small">
                    I'm a return and refund description. This is text
                    about product info. Add dimensions and specifications. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ratione, dolorem quod odit quam nemo vel sint sunt facere ex aut!
                </p>
            </div>

            <div className="mt-4">
                <h4>
                    Delivery
                </h4>
                <p class="font-weight-light line-height font-size-small">
                    I'm a Delivery. This is text about
                    product info. Add dimensions and specifications. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quas odit rem a ipsa voluptatem cum excepturi similique asperiores facere voluptates.
                </p>
            </div>

        </div>
    )
}

export default Info