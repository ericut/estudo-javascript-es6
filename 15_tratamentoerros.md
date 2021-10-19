# Identificando de Erros

Erros no JavaScript são imediatamente reportados no console e o restante do código não é executado

## Tratamento de Erros com Try Catch

Tratamente básico com Try / Catch

```javascript
try {
  // erro de hoisting de variável
  console.log(name);
  const name = 'Usuario';

  // ou até mesmo um erro forçado
  const myError = new Error('Erro forçado');
  throw myError;
} catch (err) {
  console.log('Erro', err);
} finally {
  // após identificar o erro e imprimi-lo
  // continua a execução com o 'finally'
  console.log('Continuar execução...');
}
```

Construindo classe dinâmica de erro

```javascript
class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  const myError = new CustomError({
    message: 'Erro forçado customizado',
    data: {
      type: 'Server error',
    },
  });
  throw myError;
} catch (err) {
  if (err.data.type === 'Server error') {
    console.log('Controlando erro');
  } else {
    console.log('Tratamento de erro');
  }
} finally {
  console.log('Continuar execução...');
}
```
