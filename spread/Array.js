let arr = [1,2,3,4,5,6];
//let narr = [...arr];
let slicenarr= [arr.slice(0,3),10,arr.slice(4)]
// this will print bracket means slice gives a array and another slice will give another array [] 10 [] 10
// to overcome from this situation we will use spread operator
let narr= [...arr.slice(0,3),10,...arr.slice(4)]
console.log(narr);
console.log(arr);