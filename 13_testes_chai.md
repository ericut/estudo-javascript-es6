# Mocha+Chai

## Como trabalhar com o Chai

É uma biblioteca que possui ferramentas de **asserts**, e são utilizados de maneira mais acertivos junto com o Mocha

### Instalação

- Instalação da dependência Chai
  `yarn add chai -D` ou `npm i chai --save-dev`

- Rodar o teste no terminal
  `yarn test` ou `npm run test`

### Desenvolvendo Testes com Mocha+Chai

```javascript
const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
describe('Classe Math', function () {
  it('Somar dois números', function (done) {
    const math = new Math();
    this.timeout(5000);
    math.sum(5, 5, (value) => {
      // é possível tornar o código do teste mais legível e expressivo, utilizando o expect do chai
      expect(value).to.equal(10);
      done();
    });
  });

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
```
