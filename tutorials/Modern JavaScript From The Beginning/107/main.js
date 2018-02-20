// Basic structure

// (function() {
//     // Declare private vars and functions

//     return {
//         // Declare public var and functions
//     }
// })();

// // Standard module pattern
// const UICtrl = (function() {
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function () {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();



// // Revealing module pattern
// const ItemCtrl = (function() {
//     let data = [];

//     function add(item) {
//         data.push(item);
//         console.log('Item Added...');
//     }

//     function get(id) {
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add: add,
//         get: get
//     }
// })();

// ItemCtrl.add({ id: 1, name: 'john' });
// ItemCtrl.add({ id: 2, name: 'mark' });
// console.log(ItemCtrl.get(2));



// // Singleton Pattern
// const Singleton = (function() {
//     let instance;

//     function createInstance() {
//         const object = new Object({name: 'brad'});
//         return object;
//     }

//     return {
//         getInstance: function() {
//             if(!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// console.log(instanceA === instanceB);



// // Factory patterns
// function MemberFactory() {
//     this.createMember = function(name, type) {
//         let member;

//         if(type === 'simple') {
//             member = new SimpleMembership(name);
//         } else if(type === 'standard') {
//             member = new StandardMembership(name);
//         } else if(type === 'super') {
//             member = new SuperMembership(name);
//         } 

//         member.type = type;

//         member.define = function() {
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }

//         return member;
//     }
// }

// const SimpleMembership = function(name) {
//     this.name = name;
//     this.cost = '$5';
// }

// const StandardMembership = function(name) {
//     this.name = name;
//     this.cost = '$15';
// }

// const SuperMembership = function(name) {
//     this.name = name;
//     this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));
// members.push(factory.createMember('Chris Jackson', 'super'));
// members.push(factory.createMember('Janice Williams', 'simple'));
// members.push(factory.createMember('Tom Smith', 'standard'));

// // console.log(members);

// members.forEach(function(member) {
//     member.define();
// })




// // Observer Pattern
// function EventObserver() {
//     this.observers = [];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn) {
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribed from ${fn.name}`);
//     },
//     fire: function() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
// }


// const click = new EventObserver();

// // event listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliseconds);
// });
// document.querySelector('.sub-s').addEventListener('click', function() {
//     click.subscribe(getCurSeconds);
// });
// document.querySelector('.unsub-s').addEventListener('click', function() {
//     click.unsubscribe(getCurSeconds);
// });
// document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
// });

// //click handler
// const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = function() {
//     console.log(`Current Seconds: ${new Date().getSeconds()}`);
// }





// // Observer Patterns ES6

// // Observer Pattern
// class EventObserver {
//     constructor() {
//         this.observers = [];
//     }


//     subscribe(fn) {
//         this.observers.push(fn);
//         console.log(`You are now subscribed to ${fn.name}`);
//     }

//     unsubscribe(fn) {
//         this.observers = this.observers.filter(function(item) {
//             if(item !== fn) {
//                 return item;
//             }
//         });
//         console.log(`You are now unsubscribed from ${fn.name}`);
//     }

//     fire() {
//         this.observers.forEach(function(item) {
//             item.call();
//         });
//     }
// }


// const click = new EventObserver();

// // event listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliseconds);
// });
// document.querySelector('.sub-s').addEventListener('click', function() {
//     click.subscribe(getCurSeconds);
// });
// document.querySelector('.unsub-s').addEventListener('click', function() {
//     click.unsubscribe(getCurSeconds);
// });
// document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
// });

// //click handler
// const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
// }

// const getCurSeconds = function() {
//     console.log(`Current Seconds: ${new Date().getSeconds()}`);
// }



// // Mediator Pattern
// const User = function(name) {
//     this.name = name;
//     this.chatroom = null;
// }

// User.prototype = {
//     send: function(message, to) {
//         this.chatroom.send(message, this, to);
//     },
//     receive: function(message, from) {
//         console.log(`${from.name} to ${this.name}: ${message}`);
//     }
// }

// const Chatroom = function() {
//     let users = {}; // list of users

//     return {
//         register: function(user) {
//             users[user.name] = user;
//             user.chatroom = this;
//         },
//         send: function(message, from, to) {
//             if(to) {
//                 // Single user message
//                 to.receive(message, from);
//             } else {
//                 // Mass message
//                 for(key in users) {
//                     if(users[key] !== from) {
//                         users[key].receive(message, from);
//                     }
//                 }
//             }
//         }
//     }
// }

// const brad = new User('Brad');
// const jeff = new User('Jeff');
// const sara = new User('Sara');

// const chatroom = new Chatroom();

// chatroom.register(brad);
// chatroom.register(jeff);
// chatroom.register(sara);

// brad.send('Hello Jeff', jeff);
// sara.send('Hello Brad, You are best dev ever', brad);
// jeff.send('Hello Everyone');



// State Pattern
const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

//Homestate
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `;
};

//AboutState
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
};

//ContactState
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
};

// Instntiate pagestate

const page = new PageState();

// Init the first state
page.init();

// UI vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// home
home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
});

// about
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});

// contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});