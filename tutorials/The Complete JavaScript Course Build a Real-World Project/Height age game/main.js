// document.getElementById('player1').addEventListener('submit', function(e) {
//     var player1 = {
//         name: document.getElementById('1name').value,
//         height: document.getElementById('1height').value,
//         age: document.getElementById('1age').value,
//         calculateAge: function() {
//             this.result = parseInt(this.height) + parseInt(this.age * 5);
//         }
//     };
//     player1.calculateAge();
    
//     // const calculation = parseInt(player1.height) + parseInt(player1.age * 5);


//     e.preventDefault();
// })


// document.getElementById('player2').addEventListener('submit', function(e) {
//     var player2 = {
//         name: document.getElementById('2name').value,
//         height: document.getElementById('2height').value,
//         age: document.getElementById('2age').value,
//         calculateAge: function() {
//             this.result = this.height + this.age * 5;
//         }
//     };
        
//     e.preventDefault();
// })


// document.getElementById('player3').addEventListener('submit', function(e) {
//     var player3 = {
//         name: document.getElementById('3name').value,
//         height: document.getElementById('3height').value,
//         age: document.getElementById('3age').value,
//         calculateAge: function() {
//             this.result = this.height + this.age * 5;
//         }
//     };
    
//         e.preventDefault();
// })

// console.log(player1);




var player1 = {
    name: document.getElementById('1name').value,
    height: document.getElementById('1height').value,
    age: document.getElementById('1age').value,
    calculateAge: function() {
        this.result = parseInt(this.height) + parseInt(this.age * 5);
    }
};
player1.calculateAge();



var player2 = {
    name: document.getElementById('2name').value,
    height: document.getElementById('2height').value,
    age: document.getElementById('2age').value,
    calculateAge: function() {
        this.result = parseInt(this.height) + parseInt(this.age * 5);
    }
};
player2.calculateAge();

var player3 = {
    name: document.getElementById('3name').value,
    height: document.getElementById('3height').value,
    age: document.getElementById('3age').value,
    calculateAge: function() {
        this.result = parseInt(this.height) + parseInt(this.age * 5);
    }
};
player3.calculateAge();


document.getElementById('player1').addEventListener('submit', function(e) {
    
    
    e.preventDefault();
})


document.getElementById('player2').addEventListener('submit', function(e) {
    
        
    e.preventDefault();
})


document.getElementById('player3').addEventListener('submit', function(e) {
    
    
    e.preventDefault();
})




