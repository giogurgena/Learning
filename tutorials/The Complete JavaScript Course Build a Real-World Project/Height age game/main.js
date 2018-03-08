// var output = document.getElementById('output')

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
//     player1.name = '';
//     player1.height = '';
//     player1.age = '';
        
//     output.innerHTML += `${player1.name} score: ${player1.result} points;`;

//     e.preventDefault();
// })



// document.getElementById('player2').addEventListener('submit', function(e) {
//     var player2 = {
//         name: document.getElementById('2name').value,
//         height: document.getElementById('2height').value,
//         age: document.getElementById('2age').value,
//         calculateAge: function() {
//             this.result = parseInt(this.height) + parseInt(this.age * 5);
//         }
//     };

//     player2.calculateAge();

//     output.innerHTML += `${player2.name} score: ${player2.result} points;`;
        
//     e.preventDefault();
// })


// document.getElementById('player3').addEventListener('submit', function(e) {
//     var player3 = {
//         name: document.getElementById('3name').value,
//         height: document.getElementById('3height').value,
//         age: document.getElementById('3age').value,
//         calculateAge: function() {
//             this.result = parseInt(this.height) + parseInt(this.age * 5);
//         }
//     };
    
//     player3.calculateAge();

//     output.innerHTML += `${player3.name} score: ${player3.result} points;`;
    
//         e.preventDefault();
// })






var output = document.getElementById('output')

document.getElementById('player1').addEventListener('submit', player1);
    
document.getElementById('player2').addEventListener('submit', player2)    

document.getElementById('player3').addEventListener('submit', player3)
   






function player1(e) {
    var player1 = {
        name: document.getElementById('1name').value,
        height: document.getElementById('1height').value,
        age: document.getElementById('1age').value,
        calculateAge: function() {
            this.result = parseInt(this.height) + parseInt(this.age * 5);
        }
    };
    player1.calculateAge();

    output.innerHTML += `${player1.name} score: ${player1.result} points;`;

    player1.name = '';
    player1.height = '';
    player1.age = '';
    

    e.preventDefault();
}



function player2(e) {
    var player2 = {
        name: document.getElementById('2name').value,
        height: document.getElementById('2height').value,
        age: document.getElementById('2age').value,
        calculateAge: function() {
            this.result = parseInt(this.height) + parseInt(this.age * 5);
        }
    };

    player2.calculateAge();

    output.innerHTML += `${player2.name} score: ${player2.result} points;`;

    player2.name = '';
    player2.height = '';
    player2.age = '';
        
    e.preventDefault();
}


function player3(e) {
    var player3 = {
        name: document.getElementById('3name').value,
        height: document.getElementById('3height').value,
        age: document.getElementById('3age').value,
        calculateAge: function() {
            this.result = parseInt(this.height) + parseInt(this.age * 5);
        }
    };
    
    player3.calculateAge();

    output.innerHTML += `${player3.name} score: ${player3.result} points;`;
    
    player3.name = '';
    player3.height = '';
    player3.age = '';

    e.preventDefault();
}

document.getElementById('calculateButton').addEventListener('submit', calculate)

function calculate(e) {
    // if(player1.result > player2.result && player1.result > player3.result) {
        console.log(player1.name + 'Wins');
    // }
    e.preventDefault();
}