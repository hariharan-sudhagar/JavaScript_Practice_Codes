let EngineOptions = 'Petrol';

let x ={
    name : 'himalyan 450',
    brand : 'RoyalEnfield',
    'drive Train' : EngineOptions + ', deisel',
      price : 15,
     onRoadPrice(){
       return this.price+2;
    }
} ;
console.log("=============")
console.log(x)

//deleting property
delete x.name;
console.log("=============")

console.log(x)
console.log("=============")
// if we want add space in key then give it as strig.

//"drive Train" : 
//console.log(x["drive Train"])

// adding property in the object

x['modelyear'] = 2024;
// x.price = 200000;  // another way of adding property into the object.
console.log(x)

// adding functions to the object 


console.log(x.onRoadPrice())


// object la function ah vaikka mudiyum
// without class we can define object and it is similar to dictionaries and hashmap in other languages.

let user ={
    name : 'Hariharan ',
    age : 12,
   };
   console.log(user);
   
   user.name = 'Hariharan S'
   console.log(user);
   
//    delete user.name;
   console.log(user);



// in operator

// console.log('age' in user)
// console.log('name' in user)

// this operator checks age is present in the user or not. (checking operator)

// for in loop

for(key in user){
    console.log(user[key]);
}
// to retrive all properties in the objects

// syntax  for ( key in 'object name'){
//       console.log(objectname[key]);
//}
   

let a = {
    name : 'hari',
    age : 12,
};
b = a;
console.log(a);
a={};
 console.log(b);
