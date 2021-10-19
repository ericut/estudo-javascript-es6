# Debugging

## Debugging

Debugando no JavaScript

```javascript
const useConsoleDoNavegador = 'kkkkkkkkkk';
console.log(useConsoleDoNavegador === 'kkkkkkkkkk'); // true
```

Outros comandos do **console.log()**

```javascript
console.log('Default');
console.warn('Texto amarelo de alerta');
console.error('Texto vermelho de erro');

// info de onde o código foi executado no escopo
console.trace();

// grupo de consoles
console.group('Iniciar Grupo');
console.log('Iniciar Grupo');
console.log('Iniciar Grupo');
console.groupEnd('Finalizar Grupo');

// analisa o tempo de execução de trechos do código
console.time('Tempo do Log');
setTimeout(() => {
  console.timeEnd('Tempo do Log');
}, 2000);

// formando tabelas com arrays e objetos
console.tabe(['Usuario', 'Nome']);

// retorna um valor se não passar na condição
console.assert(1 === 1, 'Erro no retorno'); // passou
console.assert(1 !== 1, 'Erro no retorno'); // não passou // retorna 'Erro no retorno'

// estilização do console
console.log('%c styled log', 'color: blue; font-size: 20px');
```
