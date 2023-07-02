const EventEmitter = require('events');

class Restaurant extends EventEmitter {
    pizza() {
        setTimeout(() => {
            console.log('order processing');
            // raise an event == click event
            this.emit('orderPizza', {
                name: 'pizza',
                task: 'cooking',
            });
        }, 2000);
    }
}

module.exports = Restaurant;
