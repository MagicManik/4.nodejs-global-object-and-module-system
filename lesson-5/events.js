const Restaurant = require('./restaurant');

const restaurant = new Restaurant();

// resigter an event listener for orderPizza == event handler
restaurant.on('orderPizza', ({ task, name }) => {
    console.log(`Okay Boss. I'm ${task} a ${name}.`);
});

restaurant.pizza();
