# Fetch e Async/Await

## API Fetch

API Fetch fornece uma interface JavaScript para acessar requisições HTTP e o seu retorno são Promises

```javascript
// data.json
{
  "data": [1, 2, 3, 4];
}

// chamada básica para uma chamada
fetch('/data.json').then((response) => {
 response.json().then(data => {
   console.log(data)
 })
});
```

Flatmap com mesmo comportamento só que com um código mais legível, com o **.catch** para pegar algum erro HTTP

```javascript
// primeiro parâmetro é a url de consulta
// segundo parâmetro é um objeto dados
fetch('baseurl/data.json', {
  method: 'post',
  body: object,
})
  .then((response) => {
    // tratativas de respostas HTTP
    if (response.status === 200) {
      response.json();
    } else {
      throw new Error('Erro de response');
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro', err);
  });
```

## Async / Await

Outra maneira de criação e gerenciamento de Promises

```javascript
// promise padrão para teste de await
const funcAsync = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data)
  }, 1000)
})

// async faz a notação que a função é assíncrona
// await aguarda que uma outra promise seja resolvida
const funcName = async () => {
  cosnt data = await funcAsync()
  return data;
};

// chamando a função assíncrona
simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Erro', err);
  });
```
