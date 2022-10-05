const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/productsMock');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

describe('Testes unitarios do endpoint "/products" camada  controller', () => {
  
  const res = {};
  const req = {
    params: { id: 1 },
    body: { name: 'Martelo de Thor' },
    query: { name: '' }
  };
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

  it('Testando a função addProducts', async () => {
    sinon.stub(productsService, 'postDbProducts').resolves(1);
    await productsController.addProducts(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith()).to.be.equal(true);

    productsService.postDbProducts.restore();
  });

  it('Testando a função modifyProducts', async () => {
    sinon.stub(productsService, 'putDbProductsById').resolves(1);
    await productsController.modifyProducts(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith()).to.be.equal(true);

    productsService.putDbProductsById.restore();
  });

  // it('Testando a função removeProducts', async () => {
  //   sinon.stub(productsService, 'deleteDbProductsById').resolves(1);
  //   await productsController.removeProducts(req, res);

  //   expect(res.status.calledWith(204)).to.be.equal(true);
  //   expect(res.end.calledWith()).to.be.equal(true);

  //   productsService.deleteDbProductsById.restore();
  // });

  it('Testando a função searchProducts', async () => {
    sinon.stub(productsService, 'getDbProductsByName').resolves(1);
    await productsController.searchProducts(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith()).to.be.equal(true);

    productsService.getDbProductsByName.restore();
  });
});
