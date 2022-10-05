const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/productsMock');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service')

describe('Testes unitarios do endpoint "/products" camada service', () => {
  
  it('Testando a função getDbProducts', async () => {
    sinon.stub(productsModel, 'readDbProducts').resolves(mock);
    const result = await productsService.getDbProducts(mock);
    expect(result).to.deep.equal(mock);
    
    productsModel.readDbProducts.restore();
  });

  it('Testando a função getDbProductsById', async () => {
    sinon.stub(productsModel, 'readDbProductsById').resolves(mock);
    const result = await productsService.getDbProductsById(1);
    expect(result[0]).to.deep.equal({ id: 1, name: 'Martelo de Thor' });

    productsModel.readDbProductsById.restore();
  });

  it('Testando a função postDbProducts', async () => {
    sinon.stub(productsModel, 'createDbProducts').resolves(mock);
    const result = await productsService.postDbProducts(1);
    expect(result[0]).to.deep.equal({ id: 1, name: 'Martelo de Thor' });

    productsModel.createDbProducts.restore();
  });

  it('Testando a função putDbProductsById', async () => {
    sinon.stub(productsModel, 'updateDbProducts').resolves(mock);
    const result = await productsService.putDbProductsById(1);
    expect(result[0]).to.deep.equal({ id: 1, name: 'Martelo de Thor' });

    productsModel.updateDbProducts.restore();
  });

  it('Testando a função deleteDbProductsById', async () => {
    sinon.stub(productsModel, 'readDbProductsById').resolves(1);
    sinon.stub(productsModel, 'deleteDbProducts').resolves(1);
    const result = await productsService.deleteDbProductsById(1);
    expect(result[0]).to.be.equal(undefined);

    productsModel.deleteDbProducts.restore();
  });

  it('Testando a função getDbProductsByName', async () => {
    sinon.stub(productsModel, 'readDbProductsByName').resolves(mock);
    const result = await productsService.getDbProductsByName('Martelo');
    expect(result[0]).to.deep.equal({ id: 1, name: 'Martelo de Thor' });

    productsModel.readDbProductsByName.restore();
  });

});