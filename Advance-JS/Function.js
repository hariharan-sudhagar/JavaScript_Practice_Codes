// In this Session we going to discuss about the function, function invocation and variable environment 
var x =1;
A();
B();
console.log(x);

function A (){
    var x = 10;
    console.log(x);
}

function B (){
    var x = 100;
    console.log(x);
}

