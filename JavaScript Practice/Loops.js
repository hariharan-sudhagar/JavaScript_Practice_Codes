// // while , do while , for

// //while

// let n = 1;
// // while(n <=10){
// //     console.log("hello")
// //     n++;
// // }


// // do while [exit control loop]

// do{
//     console.log(n)
//     n++;
// }while(n<=10)

// // for loop

// for (let num =1; num<=10; num++) {
//     console.log("javascript is so good");
// }

//task 1
// let number =2;
// let answer = 1;

// for (let i =1; i<=number; i++){
//     answer = answer*i;
// }
// console.log(answer)

// let i =1;
// while(i<=number){
//     answer =answer*i;
//     i++
// }
// console.log(answer)

// do{
//     answer*=i
//     console.log("the answer is "+answer);
//     i++;
// }while(i<=number)


    //sum of n numbers

// let sum = 0;
// for(i=1; i<=number; i++){
//     sum = sum +i;

// }
// console.log(sum)



// jump satements 
// continue , break
// switch

// switch(number){
//   case 1: 
//   console.log('one')
//   break
//   case 2: 
//   console.log('Two')
//   break
//   case 3: 
//   console.log('Three')
//   break
//   case 4: 
//   console.log('Four')
//   break
//   default:
//   console.log("perusu")
// }  


//task2 calculator

let a = 67; 
let b = 90;

let op ='%';

switch(op){
  case '+' : 
   console.log(a+b);
  break;
  case '-':
    console.log(a-b);
    break;
  case '/':
    console.log(a/b);
    break;
  case '%':
    console.log(a%b);
    break;
  default:
    console.log("wrong operation")
}


