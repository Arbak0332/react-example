const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../../../app')
const { StatusCodes } = require('http-status-codes');

chai.use(chaiHttp)

/***************************************************************************************/
/***************************************************************************************/
/********************************* GET PRODUCT *****************************************/
/***************************************************************************************/
/***************************************************************************************/
describe('Product endpoint', () => {



    describe('/api/v1/products/:id GET product ', () => {

        it('should respond with status OK', function (done) {


            chai.request(app)
                .get('/api/v1/products/1')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.equal(StatusCodes.OK)

                    done()
                })
        })

        it('should respond with status NOT_FOUND', function (done) {


            chai.request(app)
                .get('/api/v1/products/1000')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.equal(StatusCodes.NOT_FOUND)
                    done()
                })
        })

        it('should have product properties', function done() {


            chai.request(app)
                .get('/api/v1/products/1')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.property('id')
                    expect(res.body).to.have.property('name')
                    expect(res.body).to.have.property('image_name')
                    expect(res.body).to.have.property('description')
                    expect(res.body).to.have.property('quantity')
                    expect(res.body).to.have.property('brand')
                    expect(res.body).to.have.property('type')
                    expect(res.body).to.have.property('material')
                    expect(res.body).to.have.property('color')
                    expect(res.body).to.have.property('created_at')
                    expect(res.body).to.have.property('updated_at')

                    done()
                })
        })

    })

    /***************************************************************************************/
    /***************************************************************************************/
    /********************************* GET ALL PRODUCTS *****************************************/
    /***************************************************************************************/
    /***************************************************************************************/


    describe('/api/v1/products GET all products', () => {

        it('should respond with status OK', function (done) {

            chai.request(app)
                .get('/api/v1/products')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.equal(StatusCodes.OK)
                    done()
                })
        })

        it('should not find any product', function (done) {

            chai.request(app)
                .get('/api/v1/products?name=123')
                .end((err, res) => {

                    if (err) console.error(err);
                    expect(res.body).to.be.empty
                    expect(res.status).to.equal(StatusCodes.OK)
                    done()

                })
        })

        it('should have 12 products by default', function (done) {

            chai.request(app)
                .get('/api/v1/products')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(12)
                    done()
                })
        })

        it('should have 11 products', function (done) {

            chai.request(app)
                .get('/api/v1/products?limit=11')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(11)
                    done()
                })
        })

        it('should have find 6 product of type \'Desk\'', function (done) {

            chai.request(app)
                .get('/api/v1/products?type=Desk')
                .end((err, res) => {

                    if (err) console.error(err);
                    const products = res.body
                    products.map(item => {
                        expect(item.type).to.be.equal('Desk')
                    })
                    expect(products).to.have.lengthOf(6)
                    done()
                })

        })


        it('should have find 1 product of brand \'Haven Home\'', function (done) {

            chai.request(app)
                .get('/api/v1/products?brand=Haven Home')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(1)

                    const product = res.body[0]
                    expect(product.brand).to.be.equal('Haven Home')
                    done()
                })
        })

        it('should have find 3 product on page 3', function (done) {

            chai.request(app)
                .get('/api/v1/products?limit=5&page=3')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(3)
                    done()
                })
        })


        it('should have product named \'test0\'', function (done) {

            chai.request(app)
                .get('/api/v1/products?name=test0')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body[0].name).to.be.equal('test0')
                    done()
                })
        })


        it('should have product named \'test0\' with properties name, price id', function (done) {

            chai.request(app)
                .get('/api/v1/products?name=test0&fields=name,price,id')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body[0].name).to.be.equal('test0')
                    expect(res.body[0]).to.have.property('id')
                    expect(res.body[0]).to.have.property('name')

                    expect(res.body[0]).to.not.have.property('image_name')
                    expect(res.body[0]).to.not.have.property('description')
                    expect(res.body[0]).to.not.have.property('brand_id')
                    expect(res.body[0]).to.not.have.property('type_id')
                    expect(res.body[0]).to.not.have.property('created_at')
                    expect(res.body[0]).to.not.have.property('updated_at')
                    done()
                })
        })

        it('should have 6 product with price less than or equal 5', function (done) {

            chai.request(app)
                .get('/api/v1/products?price=5')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(6)

                    let start_price = 0

                    const products = res.body

                    products.map(item => {
                        expect(start_price).to.be.lessThanOrEqual(item.price)
                        start_price = item.price
                    })

                    done()
                })
        })

        it('should have 6 product with price less than or equal 5 and sorted by price descending', function (done) {

            chai.request(app)
                .get('/api/v1/products?price=5&sort=-price')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.body).to.have.lengthOf(6)

                    let start_price = 5
                    const products = res.body

                    products.map(item => {
                        expect(item.price).to.be.lessThanOrEqual(start_price)
                        start_price = item.price
                    })

                    done()
                })
        })
    })

    /***************************************************************************************/
    /***************************************************************************************/
    /******************************** POST  ***************************************************/
    /***************************************************************************************/
    /***************************************************************************************/


    describe('/api/v1/products POST', () => {

        it('should create product', function (done) {
            chai.request(app)
                .post('/api/v1/products')
                .send({
                    name: 'test13',
                    price: 130,
                    image_name: 'testimage',
                    description: 'lorem ipsum',
                    quantity: 10,
                    brand: 'Fyra Home',
                    type: 'Desk',
                    material:'Oak',
                    color:'Brown'
                })
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.CREATED)

                    done()
                })
        })
        it('should not create product with invalid type', function (done) {
            chai.request(app)
                .post('/api/v1/products')
                .send({
                    name: 'test',
                    price: 130,
                    image_name: 'testimage',
                    description: 'lorem ipsum',
                    quantity: 10,
                    brand: 'Fyra Home',
                    type: 'Desk123', // this type doesnt exist
                    material: 'Oak',
                    color: 'Brown'
                })
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.BAD_REQUEST)

                    done()
                })
        })

        it('should not create product with taken name', function (done) {
            chai.request(app)
                .post('/api/v1/products')
                .send({
                    name: 'test0',
                    price: 130,
                    image_name: 'testimage',
                    description: 'lorem ipsum',
                    quantity: 10,
                    brand: 'Fyra Home',
                    type: 'Desk'
                })
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.BAD_REQUEST)

                    done()
                })
        })


    })

    /***************************************************************************************/
    /***************************************************************************************/
    /******************************** PATCH  ***************************************************/
    /***************************************************************************************/
    /***************************************************************************************/
    describe('/api/v1/products PATCH', () => {
        it('should update product\' name', function (done) {
            chai.request(app)
                .patch('/api/v1/products/1')
                .send({
                    name: 'TEST123',
                    price: 130,
                    image_name: 'testimage',
                    description: 'lorem ipsum',
                    quantity: 10,
                    brand: 'Lumina Furnishings',
                    type: "Sofa",
                    material: "Oak",
                    color: "Black"
                })
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.OK)
                    expect(res.body.name).to.be.equal('TEST123')
                    done()
                })
        })
        it('should not update product\' name (is taken)', function (done) {
            chai.request(app)
                .patch('/api/v1/products/1')
                .send({
                    name: 'test1',
                    price: 130,
                    image_name: 'test_image',
                    description: 'lorem ipsum',
                    rating: 10,
                    brand: 'Lumina Furnishings',
                    type: "Sofa",
                })
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.BAD_REQUEST)

                    done()
                })
        })
    })

    /***************************************************************************************/
    /***************************************************************************************/
    /******************************** DELETE  ***************************************************/
    /***************************************************************************************/
    /***************************************************************************************/

    describe('/api/v1/products DELETE', () => {

        it('should delete product with id 12', function (done) {

            chai.request(app)
                .delete('/api/v1/products/12')
                .end((err, res) => {

                    if (err) done(err);

                    expect(res.status).to.be.equal(StatusCodes.NO_CONTENT)

                    done()
                })
        })

        it('should not delete product with id 1000 (NOT EXIST)', function (done) {

            chai.request(app)
                .delete('/api/v1/products/1000')
                .end((err, res) => {

                    if (err) console.error(err);

                    expect(res.status).to.be.equal(StatusCodes.NOT_FOUND)

                    done()
                })

        })
    })
})
