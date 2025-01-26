var age =18; //initialization 

user(); // function call

console.log(age); 

function user(){
    console.log("Hariharan");
}

// this is the normal way 
//---------------------------------

// hoisting


user(); // function call
console.log(age); 
 var age =18; //initialization 


function user(){
    console.log("Hariharan");
}

//if you run this code it will retun age is "undefined" because of the hoisting in hoisting the memory has been created and marked as undefined becouse of the "EXECUTION CONTEXT",
// or CALL STACK 
// generally in many languages if we do this (hoisting) it throws an error means it is not possible for other languages but JAVA SCRIPT is different we can acces teh variable without decalring and initialized.
// if you see any interesting thing on function ? yes right here the function gives the exact output right! becoz of the same CALL STACK it just copies entire funtion code to the CODE EXECUTION part of the EXECUTION CONTEXT.

// if we create a arrow function it treats as variable and marked as "UNDEFINED".

