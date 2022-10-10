/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const products = require('./products.json')
const uuid = require('uuid')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    credentials: {
        accessKeyId: process.env.ACCES_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCES_KEY
    }
})

exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('product').del()


    products.map(async (item) => {
        const image_name = `${uuid.v1()}.jpeg`


        const buffer = Buffer.from(item.image, 'base64')

        const params = {
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Body: buffer,
            Key: image_name
        }
        s3.putObject(params, (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            else
                console.log(data);
        })


        const result = await knex('product').insert({
            name: item.product_name,
            price: item.retail_price,
            image_name: image_name,
            description: item.description,
            rating: item.product_rating,
            brand: item.brand,
            specification: JSON.parse(item.product_specifications),
            type: item.type
        })
        console.log(result)

    })
};
