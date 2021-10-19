# EventEmitter

Propriedade exclusiva do NodeJS, utilizado para melhoar o código deixando-o mais estruturado

## EventEmitter

Estrutura de exemplo no NodeJS

```javascript
// importação do emitter
const EventEmitter = require('events');
// criando instância
const emitter = new EventEmitter();
// consumindo o emitter
emitter.on('User logged', (data) => {
  console.log(data);
});
// emitindo o evento
emitter.emit('User logged', { user: 'Username' });
```

Estruturando o EventEmitter extendendo em classes

```javascript
const EventEmitter = require('events');
class Users extends EventEmitter {
  userLogged(data) {
    this.emit('User logged', data);
  }
}
const users = new Users();
users.on('User logged', (data) => {
  console.log(data);
});
users.userLogged({ user: 'Username' });
```
