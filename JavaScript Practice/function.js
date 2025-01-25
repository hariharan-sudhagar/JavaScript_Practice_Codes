// let a =12;
// let b = 12;
// let c ;

// function hari(var1, var2){
//     c =(var1+var2*var2/var1)*var2;
     
// }
// // func(a,b);
// hari(a,b)
// console.log(c);


// //with using return ;
// let j;
// function operation(h,g){
//   j = h+g;
//   return j;
// }

// console.log(operation(7,7))

// task

// function checkOddOrEven(x){
//     if(x%2==0){
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }
// console.log(checkOddOrEven(5))

// assignment 
// we can store a whole function intoa variable and we can use variable as a function.

// let newfun = checkOddOrEven;
// // now we can use newfun varibale as a function
// let t= 10;

// let keyboard = function(d){
//     d=345;
//     return d;
// }
// console.log(keyboard());


// ARROW FUNCTION :

// let oddOrEven = (a) => {
//     if (a%2==0){
//         return 'Even';
//     }
//     else{
//         return 'Odd';
//     }
// }
// console.log(oddOrEven(7))

// let evenOrOdd = (b) => b%2==0 ? 'Even' : 'Odd';
// console.log(evenOrOdd(8))


// call back

// function operation (op , a, b)
// {
//    return op(a,b);
// }

// console.log(operation(add , 2,3));
// console.log(operation(sub, 2,3));

let add = (a,b) => a+b;
let sub = (a,b) => a-b;




// let num = (a) => a*5;

// console.log(num(4));

let obj ={
x : 4,
ops (){
    return this.x +2;
}
};
console.log(obj.ops())

