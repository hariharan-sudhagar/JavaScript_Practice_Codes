// the sortest JS program is nothing i mean a empty js file... that's cool right but why ?
// because every browser has it own JavaScript engine for example: chrome => V8 engine 
// these engine has the global space or object which are embeded in browser so if we run aempty file still it has global object so this is the SHORTES PROGRAM.

var x = 10;

console.log(x);
console.log(window.x);
console.log(this.x);

// in the above code we declared a var x and initialzed with 10 then we printed.
// we can print the x with window, this by this methods the value get attached to the gloabal space and get printed this is not mandatory though...
// bu tin local spaces it won't work why because it is inside the function.

function fun(){
    var a = 90;
    console.log(a);
}
console.log(a); // throws ReffrenceError
console.log(this.a); // undefined
console.log(window.a); // undefined
