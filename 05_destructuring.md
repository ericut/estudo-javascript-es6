# Destructuring em ReactJS

## Declarações de Destructuring

Declaração de array

```javascript
// todas as iterações devem existir dentro do array e da declaração
// se não existir nos valores, a variável vem indefinida
var [des1, des2, des3, [des4]] = ['Destructuring1', 'Destructuring2', 'Destructuring3', ['Destructuring4']];
```

Declaração de objetos, caso alterar os valores do objeto, o objeto inicial não é alterado

```javascript
var obj = {
  field: 'Teste',
};
var { field } = obj;
console.log(field); // retorna "Teste"

// possível atribuir com nome customizado
var { field: newField } = obj;
```

Destruturando sub objetos, e também arrays dentro dos objetos

```javascript
var obj = {
  field: 'Teste',
  props: {
    newField: 50,
    colors: ['Blue', 'White'],
  },
};

var {
  props: {
    age,
    colors: [color1, color2],
  },
} = obj;

console.log(age); // retorna 50
console.log(color1); // retorna "Blue"
```

Destruturando objetos dentro de array

```javascript
var arr = [{ field: 'Nome', type: 'Pessoa' }];
var [{ field, type }] = arr;

console.log(field); // retorna "Nome"

// nome customizado
var [{ field: campo1, type: campo2 }] = arr;
console.log(campo2); // retorna "Pessoa"
```
