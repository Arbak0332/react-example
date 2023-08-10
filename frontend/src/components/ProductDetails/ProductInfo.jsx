import Rating from './Rating'
import Title from './Title'
import Info from './Info'
import ManagePanel from './ManagePanel'

import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import file from '../../config.json';

const ProductInfo = () => {
    const [product, setProduct] = useState({})
    const {name} = useParams()

    const getProduct = async()=>{
        const API_URL = file.API_URL
        const response = await fetch(`${API_URL}/products/${name}`)
        const data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container my-7">
            <div className="row mx-xl-7 ">
                <div className="col-md-6 mb-3">
                    <img src={`${file.IMAGE_STORAGE_URL}${product.image_name}`} alt="" className="card-img-top" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-between">
                    <div>
                        <Title title={product.name} isLiked={true} />
                        <Rating />
                    </div>
                    <h5 className="mt-5 l-spacing">£{product.price}</h5>
                    <ManagePanel />

                </div>
            </div>
            <div className="row mx-xl-7">
                <Info description={product.description}/>
            </div>
        </div>
    )

}

export default ProductInfo