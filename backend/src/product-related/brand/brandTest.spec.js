const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');
const app = require('../../../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Brands endpoint', () => {
    let brandId;

    describe('GET /api/v1/products/brands', () => {
        it('should get all brands', (done) => {
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
            const newBrand = { name: 'Test Brand' };
            chai
                .request(app)
                .post('/api/v1/products/brands')
                .send(newBrand)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.CREATED);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(newBrand.name);
                    brandId = res.body.id;
                    done();
                });
        });
    });

    describe('GET /api/v1/products/brands/:brandId', () => {
        it('should get a brand by id', (done) => {
            chai
                .request(app)
                .get(`/api/v1/products/brands/${brandId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal('Test Brand');
                    done();
                });
        });
    });

    describe('PATCH /api/v1/products/brands/:brandId', () => {
        it('should update a brand', (done) => {
            const newName = 'Updated Test Brand'
            const updatedBrand = { name: newName };
            chai
                .request(app)
                .patch(`/api/v1/products/brands/${brandId}`)
                .send(updatedBrand)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(updatedBrand.name);
                    brandId = res.body.id;
                    done();
                });
        });
    });

    describe('DELETE /api/v1/products/brands/:brandId', () => {
        it('should delete a brand', (done) => {
            chai
                .request(app)
                .delete(`/api/v1/products/brands/${brandId}`)
                .end((err, res) => {
                    if (err)
                        console.log(error)
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NO_CONTENT);
                    done();
                });
        });
    });
});
