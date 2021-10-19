# Arrow Functions

Nova forma de declarar funções, simplificando o código.

## Declarações

Declaração com valor e retorna o valor declarado

```javascript
(var) => var
```

Declaração de função retornando qualquer coisa

```javascript
() => any;
```

Atribuir uma variável com uma função

```javascript
var funcName = () => any;
```

Declaração com mais valores parametrizados

```javascript
var funcName = (a, b, c) => a + b + c;
```

A arrow function tem o escopo de onde ela é declarada, então o construtor **this** é baseado no escopo dela.

```javascript
var objMethods = {
  methodA: function methodA() {
    () => this.methodB("any value");
  },
  methodB: function MethodB(value) {
    console.log(value);
  },
};
```

Arrow functions não são contextualizados em **Hoisting**, ou seja sua chamada é sempre após sua declaração,
uma função normal pode ser declara e chamada em qualquer ordem no javascript

```javascript
// chamando a função padrão do rodapé deste bloco
// isso é hoisting
funcDefault(5, 10);

// declaração arrow function
var funcName = (a, b) => a + b;
// chamando função após sua declaração
funcName(5, 5);

// função padrão
function funcDefault(a, b) {
  return a + b;
}
```
