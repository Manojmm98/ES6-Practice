
//--------------------Spread Opreator--------------------//
// it jus spread a new array with spaces

let arr = [1,2,3,4,5,6];
//console.log(...arr);
//now i have to insert an element at index 3 

let index = 3;
let narr=[];
for (let i = 0; i < arr.length; i++){
    narr[i] = arr[i];
}
arr.push(10);
for(let i = index; i < arr.length; i++){
    narr.push(arr[i]);
}
console.log(narr);