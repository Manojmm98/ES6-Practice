
//-------------------Destructuring----------------------------------//

let names = ['manoj','raja','pankaj','richa'];
// let firstname = names[0];
// let secondname = names[1];
// let thirdname = names[2];
// let fourthname = names[3];
// console.log(firstname, secondname, thirdname, fourthname);
// we can make it better by using destructuring in destructuring we just have to 
//give the name that we want to every index and then we will print it

//let [firstname, secondname,thirdname , fourthname] = names;
// console.log(firstname);
// console.log(secondname);
// console.log(thirdname);
// console.log(fourthname);


// ------we can write the above expression in a simple manner if we wanna skip pankaj ------

let [firstname, secondname, , fourthname] = names;
// for skipping pankaj from array names we have to give ,, double comma separated
console.log(firstname);
// console.log(secondname);
// console.log(thirdname);
// console.log(fourthname);
let a=3;
let b=6;
[a,b] = [b,a];
console.log(a);
console.log(b);
