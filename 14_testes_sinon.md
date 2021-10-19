# Mocha+Chai+Sinon

## Como trabalhar com o Sinon

Sinon ajuda a monitorar as requisições de testes verificando se são chamados e/ou tratados de forma correta

### Instalação

- Instalação da dependência Sinon
  `yarn add sinon -D` ou `npm i sinon --save-dev`

- Rodar o teste no terminal
  `yarn test` ou `npm run test`

### Desenvolvendo Testes com Mocha+Chai+Sinon

```javascript
describe('Classe Math', function () {
  it.only('Chamar request com soma e valores impressos', function () {
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
});

// arquivo math.js
class Math {
  printSum(request, response, a, b) {
    response.load('index', a + b);
  }
}
module.exports = Math;
```

Customizando e retaurando valores de uma função já existente

```javascript
describe('Classe Math', function () {
  it.only('Monitorar função existente', function () {
    const req = {};
    const res = {
      load: function load() {
        console.log('Função chamada!');
      },
    };
    // monitorando algum método existente
    sinon.spy(res, 'load'); // espiona

    // ainda é possível customizar o retorno da função existente
    sinon.stub(res, 'load').returns('anyreturn'); // modifica

    const math = new Math();
    math.printSum(req, res, 5, 5);

    // a função inicial volta ao seu valor após receber o método .stub
    res.retore(); // restaura

    expect(res.load.args[0][1]).to.equal(10);
  });
});
```
