// const sayHellow = function() {
//   console.log('Hello');
// }

// const sayHellow = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHellow = () => console.log('Hello');

//One line returns
// const sayHellow = () => 'Hello';

//same as above
// const sayHellow = function() {
//   return 'Hello'
// }

//return objects
// const sayHellow = () => ({ msg: 'Hello' });

//single parameter does not need parenthesis
// const sayHellow = name => console.log(`Hello ${name}`);

//multiple parameters need parenthesis
// const sayHellow = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHellow('Brad', 'Traversy');

const users = ['Nathan', 'John', 'william'];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });


//shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);