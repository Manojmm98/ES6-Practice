//---------------Filter-----------------//

// filter is also  a higher order function 
// it either recive a function as argument or return a function
let names = ["manoj","Raja","Richa","Amit"]
// if i have to find out the wordwhich have  length greater than 4 then 
let newnames = [];
for (let i = 0; i < names.length;i++) {
    let name = names[i];
    if(name.length >4){
        newnames.push(name);
    }
}
console.log(newnames);

// we can do it through filer function and

let result = names.filter(function(name){
    return name.length >4;
})
console.log(result);