// Use events modules
var events = require('events');

console.log('-- Work flow --')
console.log('Event `connection`  emitted with Emitter ');
console.log(' -> Handler run `connected` function');
console.log(' -> Event `data_received` emitted');
console.log(' -> `.on()` run annonymous function');
console.log('---------------')

// Create EventEmitter instance
var eventEmitter = new events.EventEmitter();

// Create EventHandler instance
var connectHandler = function connected() {
  console.log('Connection Successful');

  // Emitting data_received event
  eventEmitter.emit('data_received');
}

// Link connection event and connectHandler EventHandler
eventEmitter.on('connection', connectHandler);

// Link data_received event and annonymous function
// Can send function with argument in .on() method directly
eventEmitter.on('data_received', function() {
  console.log('Data Received');
});

// Emit connection event
eventEmitter.emit('connection');

console.log('Program has ended');
