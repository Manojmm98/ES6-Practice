
//  ------------Map function-----------
// Map function is a higher order function 
// it either recive a function as argument or return a function ---
// higher order function --> a function which takes argument of anther function eg- Function Sum(function(mul))


let arr = [1,2,3,4,5,6];
// let darr = [];
// for (let i = 0; i < arr.length; i++){
//     darr[i]=arr[i]*2;
// }
// console.log(darr);
// we will make it through map
let result =arr.map(function(num){
     return num *2;
})
console.log(result);

// we can write it as follow

let res = function(num){
    return num*2;
}
let finalres = arr.map(res);
console.log(finalres);
console.log(arr);

//--------------------------------------//