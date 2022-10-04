const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const mock = require('../../mocks/productsMock');
const productsModel = require('../../../src/models/products.model');

describe('Testes unitarios do endpoint "/products" camada model', () => {
  
  before(async () => {
    sinon.stub(connection, 'execute').resolves([mock]);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Testando a função readDbProducts', async () => {
    const result = await productsModel.readDbProducts(mock);
    expect(result).to.deep.equal(mock);
  });

  it('Testando a função readDbProductsById', async () => {
    const result = await productsModel.readDbProductsById(1);
    expect(result[0]).to.deep.equal({ id: 1, name: 'Martelo de Thor' });
  });
})