const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const { StatusCodes } = require('http-status-codes');
const app = require('../../../app'); // assuming that the server is started using app.js or server.js

chai.use(chaiHttp);

describe('Brand endpoint', () => {
    let brandId;

    describe('GET /api/v1/products/brands', () => {
        it('should return all brands', (done) => {
            chai
                .request(app)
                .get('/api/v1/products/brands')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /api/v1/products/brands', () => {
        it('should create a new brand', (done) => {
            const brand = {
                name: 'Nike',
            };
            chai
                .request(app)
                .post('/api/v1/products/brands')
                .send(brand)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.CREATED);
                    expect(res.body).to.have.property('id');
                    expect(res.body.name).to.equal(brand.name);
                    brandId = res.body.id;
                    done();
                });
        });
    });

    describe('GET /api/v1/products/brands/:id', () => {
        it('should return a single brand by id', (done) => {
            chai
                .request(app)
                .get(`/api/v1/products/brands/${brandId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('id');
                    expect(res.body.name).to.equal('Nike');
                    done();
                });
        });

        it('should return a 404 status if brand id does not exist', (done) => {
            chai
                .request(app)
                .get('/api/v1/products/brands/9999')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NOT_FOUND);
                    done();
                });
        });
    });

    describe('PUT /api/v1/products/brands/:id', () => {
        it('should update a single brand by id', (done) => {
            const updatedBrand = {
                name: 'Adidas',
            };
            chai
                .request(app)
                .patch(`/api/v1/products/brands/${brandId}`)
                .send(updatedBrand)
                .end((err, res) => {
                    
                    expect(res.status).to.be.equal(StatusCodes.OK);
                    expect(res.body).to.have.property('id');
                    expect(res.body.name).to.equal(updatedBrand.name);
                    done();
                });
        });

        it('should return a 404 status if brand id does not exist', (done) => {
            const updatedBrand = {
                name: 'Adidas',
            };
            chai
                .request(app)
                .put('/api/v1/products/brands/9999')
                .send(updatedBrand)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NOT_FOUND);
                    done();
                });
        });
    });

    describe('DELETE /api/v1/products/brands/:id', () => {
        it('should delete a single brand by id', (done) => {
            chai
                .request(app)
                .delete(`/api/v1/products/brands/${brandId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NO_CONTENT);
                    done();
                });
        });

        it('should return a 404 status if brand id does not exist', (done) => {
            chai
                .request(app)
                .delete('/api/v1/products/brands/9999')
                .end((err, res) => {
                    expect(res).to.have.status(StatusCodes.NOT_FOUND);
                    done();
                });
        });
    });
});