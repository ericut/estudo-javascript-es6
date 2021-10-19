# Generators

## Generators

São funções com pausa que retornam valores conforme são chamadas

```javascript
// para declarar uma função generator basta colocar o * após a palavra function
// e onde tenha os pauses adicione a palavra yield
function* hello() {
  console.log('Teste');
  yield;

  console.log('Teste Chamada 2');
  yield;

  console.log('Chamada 3');
}

const it = hello();

console.log(it.next()); // executa a primeira pausa
console.log(it.next()); // executa a terceira pausa
console.log(it.next()); // executa a o final da função
```

Passando valores para cada iteração do generator

```javascript
function* hello() {
  console.log('Teste');
  yield 1;

  console.log('Teste Chamada 2');
  const value = yield 2;

  console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Valor 4'));
```

Passando valores para cada iteração do generator

```javascript
function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const it = naturalNumbers();

console.log(it.next()); // ... imprime numeros infinitos em cada chamada
```

Construir uma interface de objetos com Generator

```javascript
// comportamento similar do iterator
const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};

for (let value of obj) {
  console.log(values); // retorna 1 2 3 4
}
```
