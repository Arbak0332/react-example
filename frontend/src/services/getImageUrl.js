import config from '../config.json'
const getImageUrl = (image_name)=>{
    return `${config.IMAGE_STORAGE_URL}/products/${image_name}`
}

export default getImageUrl