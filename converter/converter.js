const data = require('./data.json')
const fetch = require('node-fetch')
const fs = require('fs')
const products = require('./products.json')
const { response } = require('express')
// const fetch = require('fetch')

// console.log(products[0])
let result = []

const getBase64 = async (link) => {
    try {
        let response = await fetch(link)
        let buffer = await response.buffer()
        let base64 = await buffer.toString('base64')
        return base64
    } catch (error) {
        console.error(error)
    }


}

data.map(async (item) => {

    if (item.product_category_tree) {

        item.product_category_tree = JSON.parse(item.product_category_tree)

        // if product isnt in Furniture category
        if (!item.product_category_tree[0].includes('Furniture'))
            return
    }
    else // if property  product_category_tree doesnt exist
        return


    if (item.image)
        item.image = JSON.parse(item.image)
    else
        return


    let candidate = false

    if (item.product_specifications) {
        let len = item.product_specifications.length
        item.product_specifications = item.product_specifications.slice(26, len - 1)

        item.product_specifications = item.product_specifications.replace(/[=>]+/g, ':')
        try {

            item.product_specifications = JSON.parse(item.product_specifications)

            // delete object that doesnt have key-value property

            let tmp = item.product_specifications
            for (let i = 0; i < tmp.length - 1; ++i) {


                if (tmp[i].hasOwnProperty('key') && tmp[i].key === 'Type') {
                    candidate = true
                }

                if (!tmp[i].hasOwnProperty('key') || !tmp[i].hasOwnProperty('value')) {
                    item.product_specifications.splice(i, 1)

                    i--
                }
            }

            if (item.product_specifications.length == 0) // is empty
                return

            item.product_specifications = JSON.stringify(item.product_specifications)
        }
        catch (error) {
            return
        }
    }
    else
        return



    if (candidate) {
        // delete redundant properties
        delete item[""]
        delete item["uniq_id"]
        delete item["crawl_timestamp"]
        delete item["pid"]
        delete item["is_FK_Advantage_product"]
        delete item["overall_rating"]
        delete item["product_category_tree"]
        delete item["product_url"]
        delete item["discounted_price"]

        item.product_rating = Math.floor(Math.random() * 10)
        // console.log(item.image[0])

        result.push(item)

    }
})

const wrapper = async()=>{

    try {
        let allPromises = await Promise.all(result.map(async (item)=>{
            return await getBase64(item.image[0])
        }))
        
        for(let i=0; i<result.length; ++i){
            result[i].image = allPromises[i]
        }

        fs.writeFile('products.json', JSON.stringify(result), (err) => {
            if (err)
                console.error(err)

            console.log(result.length)
        })

    } 
    catch (error) {
        console.error(error)
    }

}
wrapper()








