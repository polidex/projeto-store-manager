const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/productsMock');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service')

describe('Testes unitarios do endpoint "/products" camada service', () => {
  
  it('Testando a função getProducts', async () => {
    sinon.stub(productsModel, 'readDbProducts').resolves(mock);
    const result = await productsService.getDbProducts(mock);
    expect(result).to.deep.equal(mock);
    
    productsModel.readDbProducts.restore();
  });

  it('Testando a função getProductsByid', async () => {
    const result = await productsService.getDbProductsById(1);
    expect(result[0]).to.deep.equal({ id: 1, name: "Martelo de Thor" });
  });
});