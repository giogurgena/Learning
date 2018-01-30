// //person constructor
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// //greeting
// Person.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Giorgi', 'Gurgenashvili');

// console.log(person1.greeting());

// //customer constructor
// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
// }

// //inherit the person prototype method
// Customer.prototype = Object.create(Person.prototype);

// // make customer.prototype return customer()
// Customer.prototype.constructor = Customer;


// //create customer
// const customer1 = new Customer('tom', 'smith', '555-555-5555', 'standard');

// Customer.prototype.greeting = function() {
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

// console.log(customer1);
// console.log(customer1.greeting());






// const personPrototypes = {
//     greeting: function() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     },
//     getsMarried: function (newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'mary';
// mary.lastName = 'williams';
// mary.age = 30;

// mary.getsMarried('thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//     firstName:{value: 'brad'},
//     lastName: {value: 'traversy'},
//     age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());






// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const mary = new Person ('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('thompson');

// console.log(mary);






class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}


class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('John', 'Doe', '555555555', 'standard');

console.log(john.greeting());