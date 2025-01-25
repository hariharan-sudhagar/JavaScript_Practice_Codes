// JSON 


let user ={
    name:'hari',
    age:23,
    salary: 20000,
}

//object to json

console.log(JSON.stringify(user))
//{"name":"hari","age":23,"salary":20000}

//string to object

let user1 ='{"name":"hari", "age":23}'; // the input must be "json formated String" then only js can convert in to obkect

console.log(JSON.parse(user1))
//{ name: 'hari', age: 23 }
console.log(typeof(JSON.parse(user1)))
//object
