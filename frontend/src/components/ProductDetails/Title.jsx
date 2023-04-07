const Title = ({title, isLiked})=>{
    return (
        <div className="mx-0 d-flex justify-content-between">

            <h4 className="l-spacing ">{title}</h4>
            <span className="mr-3 ">
                <a href="#" className="icon-background">
                    {
                        isLiked === false
                        ?
                        (
                            <i className="bi bi-heart"></i>
                        )
                        :
                        (
                            <i className="bi bi-heart-fill"></i>
                        )
                    }
                </a>
            </span>
        </div>
    )
}

export default Title