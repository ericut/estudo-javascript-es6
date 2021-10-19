# Callbacks e Promises

## Promises

```javascript
const doSomePromise = new Promise((resolve, reject) => {
  // pode adicionar erros programativos para que uma promise seja rejeitada
  // throw new Error("Alguma coisa aconteceu de errado")
  setTimeout(function () {
    resolve('Promise');
  }, 1000);
});

const doAnotherPromise = new Promise((resolve, reject) => {
  resolve('Promise');
});
```

Status das Promises

```javascript
// Pending - Aguardando a promise
console.log(doSomePromise);
// Fulfilled - Quando a promise é finalizada
doSomePromise.then((data) => console.log(data)); // retorna "Promise" do resolve
// Rejected - Promises rejeitadas ou com erros
doSomePromise.then((data) => console.log(data)).catch((error) => console.log(error)); // retorna o erro de rejeição
```

Promises podem ser encadeadas utilizando vários **.then**

```javascript
doSomePromise()
  .then((data) => {
    console.log(data);
    return doAnotherPromise();
  })
  .then((data2) => console.log(data2))
  .catch((error) => console.log('Erro', error));
```

Executando Promises em paralelo

```javascript
Promise.all([doSomePromise(), doAnotherPromise()]).then((data) => {
  console.log(data);
});
```

Retorna a primeira Promise que se resolver primeiro

```javascript
Promise.race([doSomePromise(), doAnotherPromise()]).then((data) => {
  console.log(data);
});
```

## Callbacks

Uma função que é invocada após o processamento de outra função

```javascript
// exemplo de callback hell
function doSomething(callback) {
  setTimeout(function () {
    callback('Callback');
  }, 1000);
}

function anyFunc() {
  try {
    doSomething(function (data) {
      var processedData = data.split('');
      try {
        console.log('Outra função');
      } catch (err) {
        console.log('Erro', err);
      }
    });
  } catch (err) {
    console.log('Erro', err);
  }
}
```
