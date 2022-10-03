const AWS = require('aws-sdk')
const uuid = require('uuid')
const { StatusCodes } = require('http-status-codes')
const s3 = new AWS.S3({
    credentials:{
        accessKeyId: process.env.ACCES_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCES_KEY
    }
})

const getURL = async (req, res)=>{

    const key = `${uuid.v1()}.jpeg`

    const url = await s3.getSignedUrl('putObject', {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        ContentType: 'image/jpeg',
        Key : key,
        Expires:60
    })
    console.log(url)
    res.status(StatusCodes.OK).json({ key: url, name:key })
        
}


module.exports = {
    getURL
}