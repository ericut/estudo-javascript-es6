# Symbols e Iterators

## Introdução de Symbols

Forma de gerar um identificador único

```javascript
// o valor de Symbol é um identificar único e não pode ser descrito que pode ser adicionados propriedades metas
const uniqueId1 = Symbol('valor');
const uniqueId2 = Symbol('valor');
console.log(uniqueId1 === uniqueId2); // retorno falso
```

```javascript
// pode ser confundido com propriedade privada, no entando é possível ter acesso à ela durante o desenvolvimento
// e pode ser utilizada para identificar que esta propriedade não deve ser alterada
const uniqueId = Symbol('Hello');
const obj = {
  [uniqueId]: 'Hello',
};
console.log(obj); // retorna { Symbol('Hello'): 'Hello' }
```

## Iterators

Iteradores são interfaces para fazer interações das propriedades

```javascript
// Well known symbols
// pode ser utilizado para manipular propriedade de objetos
Symbol.iterator;
```

Funcionalidades de iterators

```javascript
const arr = [1, 2, 3, 4];

const it = arr[Symbol.itarator](); // quando invoca esta função retorna um objeto, e posso consumir cada item de uma estrutura de dados

// for utilizado para percorrer de cada item do array
for (let value of arr) {
  console.log(value);
}

// exemplo usando .next()
console.log(it.next()); // invoca o primeiro valor do array
console.log(it.next()); // invoca o segundo valor do arry... etc...
```

```javascript
// comportamento similar do iterator
const obj = {
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};
```
