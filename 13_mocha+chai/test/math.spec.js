const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Classe Math', function () {
  beforeEach(function () {
    value = 0;
  });
  it.skip('Somar dois números', function (done) {
    const math = new Math();
    this.timeout(5000);
    value = 5;
    math.sum(5, 5, (value) => {
      // é possível tornar o código do teste mais legível, utilizando o expect do chai
      expect(value).to.equal(10);
      done();
    });
  });
  it.skip('Multiplicar dois números', function () {
    const math = new Math();
    expect(math.multiply(value, 5)).to.equal(0);
  });
  //
  //
  // acertividade com objetos
  it('Reconhecer objeto', function () {
    const obj = {
      name: 'Usuario',
    };
    // notação mais expressiva
    expect(obj).to.have.property('name').equal('Usuario');
  });
  // comparando objetos
  it('Comparando objeto', function () {
    const obj = {
      name: 'Usuario',
    };
    const obj2 = {
      name: 'Usuario',
    };
    // notação mais expressiva
    expect(obj).to.deep.equal(obj2);
  });
});
