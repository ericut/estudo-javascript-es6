# Rest e Spread Operator

## Declarações Rest Operator

Declaração utilizando reduce para fazer uma soma de todos os argumentos

```javascript
function funcName(...args) {
  // função reduce cria a soma de todos os valores no array
  // primeiro valor é o valor acumulado e o segundo é o valor do index
  // reduce((acc, val) => função, segundo parâmetro: valor inicial)
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(funcName(5, 5, 5, 2, 3)); // retorna 20
```

Declaração com arrow function e passando parâmetros existentes na função

```javascript
const funcName = (a, b ...rest) => {
  console.log(a, b, rest)
}
console.log(funcName(5, 5, 5, 2, 3)); // retorna 5, 5, 5, 2, 3
```

Declarações invocando outras funções

```javascript
const funcMult = (...args) => args.reduce((acc, value) => acc * value, 1);
const funcSum = (...rest) => {
  return funcMult(...rest);
};

console.log(funcSum(5, 5, 5, 2, 3));
```

### Declarações Spread Operator

Exemplo de como consumir um array literal

```javascript
const arr = [1, 2, 3, 4];
// maneira convencional
// const arr2 = arr.concat([5,6,7])
const arr2 = [...arr, 5, 6, 7];

// clonando um array
const arrClone = [...arr];

// somando vários arrays
const arr3 = [...arr, arr2];
```

Criando objetos e iterando eles

```javascript
const obj = {
  test: 123,
};
const obj2 = {
  ...obj,
  test2: 'Campo 2',
};
// retorna {test: 123, test2: "Campo 2"}
```

As ordens dos campos/chaves são importantes para gerar objetos pois as propriedades podem prevalecer ou substituir

```javascript
const obj = {
  test: 123,
};
const obj2 = {
  ...obj,
  test: 'Campo 2',
};
// substituindo o valor anterior do objeto // vice versa
// retorna {test: "Campo 2"}

const obj3 = {
  test2: 456,
};
// merge em objetos criando um novo
const objMerged = {
  ...obj,
  ...obj3,
};
```

Um objetivo do Spread Operator é clonar objetos para que o objeto inicial não seja modificado

```javascript
const obj = {
  test: 123,
};
// deste jeito atribuindo o obj2 com o obj, qualquer modificação no obj2 será refletido no obj
const obj2 = obj;
obj2.test = 456;
console.log(obj); // retorna {test: 456}

// aqui temos um clone do obj, e qualquer modificação é atribuida ao obj3, e não à sua origem
const obj3 = { ...obj };
obj3.test = 789;
console.log(obj); // retorna {test: 123}
console.log(obj3); // retorna {test: 789}

// objeto com subobjetos
const obj4 = {
  test: 123,
  subObj: {
    test: 123,
  },
};
const obj5 = { ...obj, subObj: { ...obj.subObj } };
// cuidado para modificar os objetos com spread
```

## Arguments

Uma característica de uma função que se refere a todos argumentos passado na chamada da função

```javascript
function funcName() {
  console.log(arguments); // retorna um objeto com os valores chamados {0:1,1:2,2:3,3:4,4:5,5:6}
}
funcName(1, 2, 3, 4, 5, 6);
```
