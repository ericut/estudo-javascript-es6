# Enhanced Object Literals

Objetos literais aperfeiçoados

## Declarações

Métodos de declarar objetos literais

```javascript
var prop = "Enhanced";
var obj = {
  prop,
};
console.log(obj); // retorna { prop: "Enhanced" }

// declarando funções em objetos
function funcName() {
  console.log("Função");
}
var obj2 = {
  method,
};
obj2.method; // retorna "Função"
```

Declaração mais simplificada de métodos em objetos literais

```javascript
var obj = {
  funcName(a, b) {
    return a + b;
  },
};
console.log(obj.funcName(1, 5)); // retorna 6
```

Passando propriedade dinâmica para um objeto

```javascript
var propName = "nome_propriedade";
var obj = {
  [propName + "_concat"]: "Valor da propriedade",
};
console.log(obj); // retorna {nome_propriedade_concat: "Valor da propriedade"}
```
