// person constructor

// function Person(name, date) {
//     this.name = name,
//     // this.age = age;
//     this.birthday = new Date(date);
//     this.calculateAge = function() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// // const brad = new Person('brad', 30);
// // const john = new Person('john', 35);

// const brad = new Person('brad', '09.10.1991');
// console.log(brad.name, "is at the age of", brad.calculateAge());

document.getElementById('output').style.display = 'none';


document.getElementById('age-calculator').addEventListener('submit', function(e) {
    document.getElementById('text-output').innerHTML = '';
    const name = document.getElementById('input-name').value;
        date = document.getElementById('input-date').value;
        output = document.getElementById('text-output');

        

            const brad = new Person(name, date);

            document.getElementById('output').style.display = 'block';

            output.appendChild(document.createTextNode(`${name} is ${brad.calculateAge()} age old`));
        
        e.preventDefault();
})

function Person(name, date) {
    this.name = name,
    // this.age = age;
    this.birthday = new Date(date);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}