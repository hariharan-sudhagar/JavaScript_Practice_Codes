// very important topic in javascript
// most asked interview question
function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z()

// this is tha example of closure ... now we just debug the code using debugger
// closure is a fucntion that is bundles wioth its lexical scope environmet
// fucntiopn alng with its lexical scope is called closures

