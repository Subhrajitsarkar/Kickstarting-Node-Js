// let name = "sona"
// let age = 7;
// const hobbies = true

// // function hello(username, userage, userhobbies) {
// //     return ('My name is ' + username + ',age is ' + userage + ',and i have hobbie ' + userhobbies)
// // }
// // console.log(hello(name, age, hobbies))

// let hello = (username, userage, userhobbies) => {
//     return ('My name is ' + username + ',age is ' + userage + ',and i have hobbie ' + userhobbies)
// }
// console.log(hello(name, age, hobbies))

// // let add = (a, b) => a + b
// let add = (a, b) => {
//     return a + b
// }
// console.log(add(2, 3))

// // let addOne = (a) => a + 1
// let addOne = (a) => {
//     return a + 1
// }
// console.log(addOne(2))



// let obj = {
//     name: 'sona',
//     age: 7,
//     // greet: () => {
//     //     console.log('hi i am ' + name)
//     // }
//     // greet() {
//     //     console.log('hi i am ' + this.name)
//     // }
//     greet: function () {
//         console.log('hi i am ' + this.name)
//     }
// }
// obj.greet()


//assignment

let product = (a, b) => a * b
console.log(product(2, 3))

let students = [
    {
        name: 'sona',
        id: 7,
        subjects: ['bengali', 'hindi', 'english']
    },
    {
        name: 'sonu',
        id: 1,
        subjects: ['chemistry', 'physics', 'math']
    },
]

console.log(students)
console.log(students[0].name);
console.log(students[1].subjects[2]);
