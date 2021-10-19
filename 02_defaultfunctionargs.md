# Default Function Arguments

São parâmetros com valores iniciais passado diretamente em uma declaração de função.

## Declarações

Declaração com ES6

```javascript
function funcName(a, b = 5) {
  return a * b;
}
// chamar a função passando somente o valor de a
console.log(funcName(100)); // retorna 500
// chamar a função passando somente o valor de b
console.log(funcName(undefined, 100)); // retorna 100
// chamar a função passando somente o valor de a
console.log(funcName(100, 10)); // retorna 1000
```

Referenciando outros parâmetros

```javascript
function funcName(a, b = a) {
  return a * b;
}
// cuidado para não declarar valores que são referenciados
console.log(funcName(undefined, 100)); // retorna erro, pois o valor a é undefined
```

**Lazy evaluation** é quando uma função é invocada quando outra função é chamada passando ela como parâmetro

```javascript
// função padrão
function getRandom() {
  return Math.random() * 10;
}
// parametrizando a função acima
function funcName(a, b = getRandom()) {
  return a * b;
}
console.log(funcName(5)); // retorna um numero aleatório passando somente o parâmetro a
```
