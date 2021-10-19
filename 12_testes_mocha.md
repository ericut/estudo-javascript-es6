# Mocha

## Como trabalhar com o Mocha

Mocha é uma ferramenta para executar testes **(Test Runner)**, retorna comportamento esperados no teste

### Instalação

- Inicialização do node
  `npm init`

- Instalação da dependência Mocha
  `yarn add mocha -D` ou `npm i mocha --save-dev`

- Criar um script no **package.json**

```javascript
"test": "mocha"
```

- Rodar o teste no terminal
  `yarn test` ou `npm run test`

### Desenvolvendo Testes com Mocha

Código simples para entender como funciona o teste

```javascript
// arquivo math.spec.js
const assert = require('assert');
const Math = require('./math.js');

describe('Classe Math', function () {
  it('Somar dois números', function () {
    const math = new Math();
    assert.equal(math.sum(5, 5), 10);
  });
});

// arqiovo math.js
class Math {
  sum(a, b) {
    return a + b;
  }
}
module.exports = Math;
```

Retorno esperado do teste

```javascript
$ mocha
  Classe Math
    ✔ Somar dois números
  1 passing (4ms)
Done in 0.60s.
```

Testes assíncronos

```javascript
describe('Classe Math', function () {
  // o it recebe um parâmetro "done"
  it('Somar dois números', function (done) {
    const math = new Math();
    // teste somando 5 + 5
    math.sum(5, 5, (value) => {
      // valor do teste, valor esperado
      // neste caso retorna um erro
      assert.equal(value, 15);
      // done invoca o final do teste, fazendo com que testes assíncronos sejam efetivados
      done();
    });
  });
});
```

Alertar para que algum teste precisa ser realizado

```javascript
describe('Classe Math', function () {
  // sem passar função, o Mocha interpreta que este teste precisa ser realizado, então ele é retornado no console
  it('Multiplicar dois números');
});
```

Utilize a método **it.only()** para identificar que somente aquele teste precisa ser realizado

```javascript
describe('Classe Math', function () {
  it.only('Somar dois números', function() => {});
  it('Multiplicar dois números', function() => {});
});
```

Utilize a método **it.skip()** para pular o teste selecionado

```javascript
describe('Classe Math', function () {
  it('Somar dois números', function() => {});
  it.skip('Multiplicar dois números', function() => {});
});
```

Hooks de testes são utilizados para criar algum padrão no comportamento de todo o teste

```javascript
describe('Classe Math', function () {
  // hook executa antes de cada teste
  beforeEach(function () {
    console.log('Teste');
  });
  // hook executa antes de todo o teste
  before(function () {
    console.log('Teste');
  });
  // hook executa depois do teste
  after(function () {
    console.log('Teste');
  });
  // ...
});
```
