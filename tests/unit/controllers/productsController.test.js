const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/productsMock');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

describe('Testes unitarios do endpoint "/products" camada  controller', () => {
  
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  
  it("Testando a função listProducts", async () => {
    sinon.stub(productsService, 'getDbProducts').resolves(mock);
    await productsController.listProducts(req, res);
    
    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mock)).to.be.equal(true);

    productsService.getDbProducts.restore();
  });

  it('Testando a função listProductsById', async () => {
    sinon.stub(productsService, 'getDbProductsById').resolves(1);
    await productsController.listProductsById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith()).to.be.equal(true);

    productsService.getDbProductsById.restore();
  });

  // it('Testando id inválido na função listProductsById', async () => {
  //   sinon.stub(productsService, 'getDbProductsById').resolves(undefined);
  //   await productsController.listProductsById(req, res);

  //   expect(res.status.calledWith(404)).to.be.equal(true);
  //   expect(res.json.calledWith()).to.be.equal(true);

  //   productsService.getDbProductsById.restore();
  // });

});
