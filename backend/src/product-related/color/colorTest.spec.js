const chai = require('chai');
const chaiHttp = require('chai-http');
const { StatusCodes } = require('http-status-codes');
const app = require('../../../app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Colors endpoint', () => {
    let colorId;

    describe('GET /api/v1/products/colors', () => {
        it('should get all products/colors', (done) => {
            chai
                .request(app)
                .get('/api/v1/products/colors')
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.be.an('array');
                    done();
                });
        });
    });

    describe('POST /api/v1/products/colors', () => {
        it('should create a new color', (done) => {
            const newColor = { name: 'Test Color' };
            chai
                .request(app)
                .post('/api/v1/products/colors')
                .send(newColor)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.CREATED);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(newColor.name);
                    colorId = res.body.id;
                    done();
                });
        });
    });

    describe('GET /api/v1/products/colors/:colorId', () => {
        it('should get a color by id', (done) => {
            chai
                .request(app)
                .get(`/api/v1/products/colors/${colorId}`)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal('Test Color');
                    done();
                });
        });
    });

    describe('PATCH /api/v1/products/colors/:colorId', () => {
        it('should update a color', (done) => {
            const newName = 'Updated Test Color';
            const updatedColor = { name: newName };
            chai
                .request(app)
                .patch(`/api/v1/products/colors/${colorId}`)
                .send(updatedColor)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.OK);
                    expect(res.body).to.have.property('name');
                    expect(res.body.name).to.equal(updatedColor.name);
                    colorId = res.body.id;
                    done();
                });
        });
    });

    describe('DELETE /api/v1/products/colors/:colorId', () => {
        it('should delete a color', (done) => {
            chai
                .request(app)
                .delete(`/api/v1/products/colors/${colorId}`)
                .end((err, res) => {
                    if (err) console.log(error);
                    expect(err).to.be.null;
                    expect(res).to.have.status(StatusCodes.NO_CONTENT);
                    done();
                });
        });
    });
});