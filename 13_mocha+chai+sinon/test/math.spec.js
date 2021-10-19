const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Classe Math', function () {
  it('Chamar request com soma e valores impressos', function () {
    const req = {};
    const res = {
      load: sinon.spy(),
    };
    const math = new Math();
    math.printSum(req, res, 5, 5);
    // utilizando o .spy pode ser verificado se a requisição foi chamada de forma correta
    expect(res.load.calledOnce).to.be.true;
    // verificar primeiro argumento se é o 'index'
    expect(res.load.args[0][0]).to.equal('index');
    // verificar segundo argumento se é o resultado da soma
    expect(res.load.args[0][1]).to.equal(10);
  });

  it.only('Monitorar função existente', function () {
    const req = {};
    const res = {
      load: function load() {
        console.log('Função chamada!');
      },
    };
    // monitorando algum método existente
    sinon.spy(res, 'load');

    // ainda é possível customizar o retorno da função existente
    // sinon.stub(res, 'load').returns('anyreturn');

    const math = new Math();
    math.printSum(req, res, 5, 5);

    // a função inicial volta ao seu valor após receber o método .stub
    // res.retore()

    expect(res.load.args[0][1]).to.equal(10);
  });
});
