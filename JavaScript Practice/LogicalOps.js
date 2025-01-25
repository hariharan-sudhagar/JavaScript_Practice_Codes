// || , && , NOT ,NULL Coalescing

let age =18;
let gender ='f';
if(age >=21 || age >= 18 && gender=='f')

    console.log('eligible');

    else{
    console.log("not eligible");
}
//null coalescing

//??
let epoch =15;
let current_epoch = epoch ?? 13;
console.log(current_epoch)

console.log(null || 0 || undefined );
