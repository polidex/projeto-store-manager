const { expect } = require('chai');
const sinon = require('sinon');
const mock = require('../../mocks/salesMock');
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');

describe('Testes unitarios do endpoint "/sales" camada  controller', () => {

  const res = {};
  const req = {
    params: { id: 1 },
    // body: { name: "Martelo de Thor" },
    // query: { name: "" },
  };
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns();
  
  it("Testando a função listSales", async () => {
    sinon.stub(salesService, "getDbSales").resolves(mock);
    await salesController.listSales(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mock)).to.be.equal(true);

    salesService.getDbSales.restore();
  });

  it("Testando a função listSalesById", async () => {
    sinon.stub(salesService, "getDbSalesById").resolves(mock);
    await salesController.listSalesById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
    expect(res.json.calledWith(mock)).to.be.equal(true);

    salesService.getDbSalesById.restore();
  });
});
  