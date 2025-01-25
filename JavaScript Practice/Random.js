// var n = Math.random();
// // it generates random numnbers beteween 0 - 0.99999.... 
// // it will never reaches 1.
// n *=6;
// n = Math.floor(n) +1;
// console.log(n);
// // +1 does that it adds ones from both starting and ending values 
// //1 - 6..

// dice generator is done.

// Calulator using random generator
prompt("Enter your name ");
prompt("Enter your Partner name");

let Score = Math.random();
Score*=99;
Score= Math.floor(Score)+1;

if (Score === 100)
{
    alert("YOUR PERCENTAGE IS "+ Score +'%'+"OHH");

}else if(Score >=50){
    alert("YOUR PERCENTAGE IS "+ Score +'%'+"good");
}else if(Score >=80){
    alert("YOUR PERCENTAGE IS "+ Score +'%'+"Very good");
}
else{alert("YOUR PERCENTAGE IS "+ Score +'%'+"not enough");
}


 
