const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/salesMock');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service')

describe('Testes unitarios do endpoint "/sales" camada service', () => {

  it('Testando a função getDbSales', async () => {
    sinon.stub(salesModel, 'readDbSales').resolves(mock);
    const result = await salesService.getDbSales(mock);
    expect(result).to.deep.equal(mock);

    salesModel.readDbSales.restore();
  });

  it('Testando a função getDbSalesById', async () => {
    sinon.stub(salesModel, 'readDbSalesById').resolves(mock);
    const result = await salesService.getDbSalesById(mock);
    expect(result).to.deep.equal(mock);

    salesModel.readDbSalesById.restore();
  });

  // it('Testando a função postDbSales', async () => {
  //   sinon.stub(salesModel, 'createSales').resolves(mock);
  //   const result = await salesService.postDbSales();
  //   expect(result).to.deep.equal(7);

  //   salesModel.createSales.restore();
  // });
});