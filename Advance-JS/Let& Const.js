console.log(b); // hoisted so give output ass undefined
console.log(a); //throws an error 
let a =10;
var b = 100;

//temporal dead zone is a time of a variable wherer it was hoisted and marked as UNDEFINED and waiting for its value...
// this mean time was a temporal dead zone and this leads to give error .. 
// if a variable that are created by let and const that shoud be accessed by values if the values are not initialized then it be in tdz zone then wil give output as "error: not found"

//KEY RULES:

// Access before causes : TDZ error (Reffernce Error : notfound)
//Access after but no value is intialized then result would be : Undefined

/*

 var - less restrictions
 let - mid-level restrictions
 const - high-restrictions

 in const we can't able to change the value once it initalized.

 we can't create duplicte variable in let but in var it is possible because of teh global space but in let in can't.

 let using DER memory space which means Declaration Enviroinment Record.

 */

 let h = 0;
 var i = 9;
 const r =1;
 console.log(window.h);// syntax error
 console.log(window.i);
 console.log(window.r); // syntax error


 let a // it throws syntax error because we cant create same variable duplicate.


 // const

 const tamil = 'language';
 b = 'English'; // Type Error
 

 const tamil ; //syntax Error missing intializer in const decalration
 b = 'sapnish';

 // which means const should not be leave as empty user should initialize the value on the same declaration statement itself.


