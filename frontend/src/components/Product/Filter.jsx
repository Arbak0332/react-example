const Item = ({name}) =>{
    return (
        <li><a href="#">{name}</a></li>
    )
}

const Filter = ()=>{
    return (
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
            <div className="card-body p-0 pt-3">
                <ul className="font-weight-light line-height font-size-small">
                    /* <li><a href="#">All Collection</a></li>
                    <li><a href="#">Armchairs</a></li>
                    <li><a href="#">Coffee tables</a></li>
                    <li><a href="#">Dining Chairs</a></li>
                    <li><a href="#">Dining Tables</a></li>
                    <li><a href="#">Sofas</a></li> 
                </ul>
            </div>
        </div>
    )
}
export default Filter