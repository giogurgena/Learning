document.getElementById('player1').addEventListener('submit', function(e) {
    const player1 = {
        name: document.getElementById('1name').value,
        height: document.getElementById('1height').value,
        age: document.getElementById('1age').value
    }
        
    const calculation = parseInt(player1.height) + parseInt(player1.age * 5);


    e.preventDefault();
})


document.getElementById('player2').addEventListener('submit', function(e) {
    const player2 = {
        name: document.getElementById('2name').value,
        height: document.getElementById('2height').value,
        age: document.getElementById('2age').value
    }
        
    e.preventDefault();
})


document.getElementById('player3').addEventListener('submit', function(e) {
    const player3 = {
        name: document.getElementById('3name').value,
        height: document.getElementById('3height').value,
        age: document.getElementById('3age').value
    }
    
        e.preventDefault();
})


