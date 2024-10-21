//object de-structring
let person = {
    name: 'sona',
    age: 7,
    greet() {
        console.log('hi  my name is' + person.name);
    }
}
let print = ({ name }) => {
    console.log(name);
}
print(person)

let { name, age } = person
console.log(name, age);

//array de-structring
let students = ['sona', 'sonu']
let [stu1, stu2] = students
console.log(stu1, stu2);
