const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');
const app = require('../../../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Materials endpoint', () => {
    let materialId;

    describe('GET /api/v1/products/materials', () => {
        it('should get all materials', (done) => {
            chai
                .request(app)
                .get('/api/v1/products/materials')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /api/v1/products/materials', () => {
        it('should create a new material', (done) => {
            const newMaterial = { name: 'Test Material' };
            chai
                .request(app)
                .post('/api/v1/products/materials')
                .send(newMaterial)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.CREATED);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(newMaterial.name);
                    materialId = res.body._id;
                    done();
                });
        });
    });

    describe('GET /api/v1/products/materials/:materialId', () => {
        it('should get a material by id', (done) => {
            chai
                .request(app)
                .get(`/api/v1/products/materials/${materialId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal('Test Material');
                    done();
                });
        });
    });

    describe('PATCH /api/v1/products/materials/:materialId', () => {
        it('should update a material', (done) => {
            const newName = 'Updated Test Material'
            const updatedMaterial = { name: newName };
            chai
                .request(app)
                .patch(`/api/v1/products/materials/${materialId}`)
                .send(updatedMaterial)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(updatedMaterial.name);
                    materialId = res.body._id;
                    done();
                });
        });
    });

    describe('DELETE /api/v1/products/materials/:materialId', () => {
        it('should delete a material', (done) => {
            chai
                .request(app)
                .delete(`/api/v1/products/materials/${materialId}`)
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
