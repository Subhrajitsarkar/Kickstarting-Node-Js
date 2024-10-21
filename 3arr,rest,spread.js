// // let person = {
// //     name: 'sona',
// //     age: 7,
// //     greet() {
// //         console.log('hi  my name is' + person.name);
// //     }
// // }
// let copy={...person}
// console.log(copy);

// let hobbies = ['sports', 'singing']
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'hobby:' + hobby));
// console.log(hobbies);
// // let copy = hobbies.slice()
// // console.log(copy);
// let copy = [...hobbies]
// console.log(copy);

// let toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1, 2, 3, 4));


// assignment

let array = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']
let convert = array.map(item => item === ' ' ? 'empty string' : item)
console.log(convert);
