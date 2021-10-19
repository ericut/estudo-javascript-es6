const assert = require('assert');
const Math = require('../src/math.js');

let value = 0;

// descrevendo o teste
// nome do teste, função esperada
describe('Classe Math', function () {
  // exemplos de hooks
  // redefinir valor da variável antes de executar cada teste
  beforeEach(function () {
    value = 0;
  });

  // criação de teste
  // evitar arrow functions para ter controle de escopo
  it('Somar dois números', function (done) {
    // instanciar a classe
    const math = new Math();
    // alterar o valor do timeout
    this.timeout(5000);
    // alterando o valor do hook
    value = 5;
    // utilizando o método assert.equal para verificar se os dois valores serão iguais
    // neste caso passando valores na função sum, e o segundo parâmetro é o valor esperado
    math.sum(value, 5, (value) => {
      assert.equal(value, 10);
      done();
    });
  });
  // invocando o teste sem passar parâmetros de como ele será
  // o mocha avisará no console que este teste precisa ser realizado
  // neste caso é bom para alertar que este tipo de teste precisa ser realizado
  it('Multiplicar dois números', function () {
    const math = new Math();
    assert.equal(math.multiply(value, 5), 0);
  });
});
