const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/db/connection');
const mock = require('../../mocks/salesMock');
const salesModel = require('../../../src/models/sales.model');

describe('Testes unitarios do endpoint "/sales" camada model', () => {
    
  it('Testando a função readDbSales', async () => {
    sinon.stub(connection, "execute").resolves([mock]);
    
    const result = await salesModel.readDbSales(mock);
    expect(result).to.deep.equal(mock);
    
    connection.execute.restore();
  });

  it('Testando a função readDbProductsById', async () => {
    sinon.stub(connection, 'execute').resolves([mock[1]]);
    
    const result = await salesModel.readDbSalesById(1);
    expect(result).to.deep.equal(mock[1]);
    
    connection.execute.restore();
  });
  
  it('Testando a função createSales', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 7 }]);
    
    const result = await salesModel.createSales();
    expect(result).to.deep.equal(7);
    
    connection.execute.restore();
  });

  // it('Testando a função deleteDbsales', async () => {
  //   sinon.stub(connection, 'execute').resolves([mock]);

  //   const result = await salesModel.deleteDbsales(7);
  //   expect(result).to.deep.equal(7);

  //   connection.execute.restore();
  // });
  
  // it('Testando a função createSalesProducts', async () => {
  //   sinon.stub(connection, 'execute').resolves([mock]);

  //   const result = await salesModel.createSalesProducts('productId: 1, quantity: 1');
  //   expect(result).to.deep.equal(4);

  //   connection.execute.restore();
  // });
  
})