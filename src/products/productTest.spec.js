const knex = require('../utils/database')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = require('../../app')
const { StatusCodes } = require('http-status-codes');

chai.use(chaiHttp)


/********************************* GET PRODUCT *****************************************/


describe('/api/v1/products/:id GET product test', () => {
    
    it('should respond with status OK', function(done) {


        chai.request(app)
            .get('/api/v1/products/1')
            .end((err, res) => {

                if (err) console.error(err);

                expect(res.status).to.equal(StatusCodes.OK)

                done()
            })
    })

    it('should respond with status NOT_FOUND', function(done) {


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
                expect(res.body).to.have.property('rating')
                expect(res.body).to.have.property('brand')
                expect(res.body).to.have.property('type')
                expect(res.body).to.have.property('created_at')
                expect(res.body).to.have.property('updated_at')

                done()
            })
    })

})

/********************************* GET ALL PRODUCTS *****************************************/


describe('/api/v1/products GET all products test', ()=>{

    it('should respond with status OK', function(done){

        chai.request(app)
            .get('/api/v1/products')
            .end((err, res)=>{

                if(err) console.error(err);

                expect(res.status).to.equal(StatusCodes.OK)
                done()
            })
    })

    it('should not find any product', function(done) {

        chai.request(app)
            .get('/api/v1/products?name=123')
            .end((err, res) => {

                if (err) console.error(err);

                expect(res.status).to.equal(StatusCodes.OK)
                done()

            })
    })

    it('should have 12 products by default', function(done){

        chai.request(app)
            .get('/api/v1/products')
            .end((err, res)=>{

                if(err) console.error(err);

                expect(res.body).to.have.lengthOf(12)
                done()
            })
    })

    it('should have 11 products', function(done){

        chai.request(app)
            .get('/api/v1/products?limit=11')
            .end((err, res)=>{

                if(err) console.error(err);

                expect(res.body).to.have.lengthOf(11)
                done()
            })
    })

    it('should have find 6 product of type \'Coir\'', function(done){

        chai.request(app)
            .get('/api/v1/products?type=Coir')
            .end((err, res)=>{

                if(err) console.error(err);
                const products = res.body
                products.map(item=>{
                    expect(item.type).to.be.equal('Coir')
                })
                expect(products).to.have.lengthOf(6)
                done()
            })

    })


    it('should have find 1 product of brand \'Lovely\'', function(done) {

        chai.request(app)
            .get('/api/v1/products?brand=Lovely')
            .end((err, res) => {

                if (err) console.error(err);
                
                expect(res.body).to.have.lengthOf(1)
                
                const product = res.body[0]
                expect(product.brand).to.be.equal('Lovely')
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

                expect(res.body[0].name).to.have.be.equal('test0')
                done()
            })
    })


    it('should have product named \'test0\' with properties name, price rating, id', function (done) {

        chai.request(app)
            .get('/api/v1/products?name=test0&fields=name,price,rating,id')
            .end((err, res) => {

                if (err) console.error(err);

                expect(res.body[0].name).to.be.equal('test0')
                expect(res.body[0]).to.have.property('id')
                expect(res.body[0]).to.have.property('rating')
                expect(res.body[0]).to.have.property('name')

                expect(res.body[0]).to.not.have.property('image_name')
                expect(res.body[0]).to.not.have.property('description')
                expect(res.body[0]).to.not.have.property('brand')
                expect(res.body[0]).to.not.have.property('type')
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

                products.map(item=>{
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