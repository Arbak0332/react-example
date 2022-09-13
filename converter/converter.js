const data = require('./data.json')
const fs = require('file-system')
const products = require('./products.json')

// console.log(products[0])
let result = []


data.map((item)=>{

    if (item.product_category_tree){

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



    if (item.product_specifications) {
        let len = item.product_specifications.length
        item.product_specifications = item.product_specifications.slice(26, len - 1)

        item.product_specifications = item.product_specifications.replace(/[=>]+/g, ':')
        try {
            
            item.product_specifications = JSON.parse(item.product_specifications)
            
            // delete object that doesnt have key-value property
            let tmp = item.product_specifications
            for (let i = 0; i < tmp.length-1; ++i){
                if (!tmp[i].hasOwnProperty('key') || !tmp[i].hasOwnProperty('value')){
                    item.product_specifications.splice(i,1)
                }

            }
            
            if (item.product_specifications.length == 0) // is empty
                return
            
        } 
        catch (error) {
            return
        }
    }
    else
        return
        
        delete item[""]
        

    result.push(item)
})



fs.writeFileSync('converter/products.json', JSON.stringify(result), (err) => {
    console.error(err)
})



