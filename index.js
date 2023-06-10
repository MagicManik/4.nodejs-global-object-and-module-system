const _ = require('lodash');
const people = require('./people');

console.log(people.people);
console.log(people.a);
people.test();

console.log(_.last(people.people));
