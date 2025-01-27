// Scope is involved in lexical enviroinment.

function a(){
    var b = 10;
    c();
    function c(){
        var h =18;
        d();
        console.log(b);
        function d(){
            console.log(h)
        }
        d();
   }
}

a();



// here this code works and prints 10 coz in js the a function finds their local memory and finds if there is b ?
// but actually there no b 

// scope means where u can access specific var and function in our code.
