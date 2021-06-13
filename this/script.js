//--------------important------------------//

//    HOW A FUNCTION IS CALLED DETERMINE THE VALUE OF THIS     //(At the time when a function is called that will determine the value of this)

//console.log(this);
// here this will indicate the window object always whwn this is not invoked explicitly
let a=9;
console.log(a);
"use strict"  // if we don't use it then the default this will be window object but if we pass it then the default will be undefined

 function fn(){
     console.log(`My name is ${this.person}`);
     console.log(this);

}

let obj={
    person: 'manoj',
    fon : fn
}
// if we just print fn() by just calling fn then only "my name is undefined will be printed"
//fn();
// if we assign the obj into fn and the we call it then " my name will assign this.person(manoj)"
//obj.fon();
let rf = obj.fon();