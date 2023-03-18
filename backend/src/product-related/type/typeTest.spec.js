const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');
const app = require('../../../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Types endpoint', () => {
    let typeId;

    describe('GET /api/v1/products/types', () => {
        it('should get all products/types', (done) => {
            chai
                .request(app)
                .get('/api/v1/products/types')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /api/v1/products/types', () => {
        it('should create a new type', (done) => {
            const newType = { name: 'Test Type' };
            chai
                .request(app)
                .post('/api/v1/products/types')
                .send(newType)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.CREATED);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(newType.name);
                    typeId = res.body.name;
                    done();
                });
        });
    });

    describe('GET /api/v1/products/types/:typeId', () => {
        it('should get a type by id', (done) => {
            chai
                .request(app)
                .get(`/api/v1/products/types/${typeId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal('Test Type');
                    done();
                });
        });
    });

    describe('PATCH /api/v1/products/types/:typeId', () => {
        it('should update a type', (done) => {
            const updatedType = { name: 'Updated Test Type' };
            chai
                .request(app)
                .patch(`/api/v1/products/types/${typeId}`)
                .send(updatedType)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(updatedType.name);
                    done();
                });
        });
    });

    describe('DELETE /api/v1/products/types/:typeId', () => {
        it('should delete a type', (done) => {
            chai
                .request(app)
                .delete(`/api/v1/products/types/${typeId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NO_CONTENT);
                    done();
                });
        });
    });
});
