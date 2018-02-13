// MAPS = key value pairs - can use any type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
    key2 = {},
    key3 = function() {};

// Set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// // Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count values
// console.log(map1.size);

// Iterating maps

// // Loop using for...of to get keys and values
// for(let[key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }


// // Iterate keys only
// for(let key of map1.keys()) {
//     console.log(key);
// }

// // Iterate values only
// for(let value of map1.values()) {
//     console.log(value);
// }

// // loop with forEach
// map1.forEach(function(value, key) {
//     console.log(`${key} = ${value}`);
// });

//convert to arrays

// //create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// //create an array of the  values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// //create an array of the keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);




// Sets- Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);


// const set2 = new Set([1, true, 'string']);
// console.log(set2);

console.log(set1);

// Get count 
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({name: 'John'}));

// Delete from set
set1.delete(100);

console.log(set1);

//ITERATING THROUGH SETS

//For...of 
for(let item of set1) {
    console.log(item);
}

// Foreach loop
set1.forEach((value) => {
    console.log(value);
});


// Convert set to array
const setArr = Array.from(set1);
console.log(setArr); 