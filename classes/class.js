
// -------------classes--------------------//

// the this of class always pointing to undefined, here alaways by default value of this is undefined

//------------------------ using bind function--------------//

// class abc{
//     constructor(name,age){
//        this.name = name;
//        this.age = age;
//        this.SayHi=this.SayHi.bind(this);// it will give the this of abc when sayhi() is called ,the this obj of say hi is assinged
//     }
//     SayHi(){
//         console.log('hello');
//         console.log(this);
//         //console.log(this.name);
//     }
// }

// let rt = obj.SayHi;// IT WILL GIVE ERROR because we did not call sayHi() function here we just assign sayhi ro rt not call it
// rt();

//------------------------------  Arrow function --------------------------//

class abc{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    SayHi=() =>{
        console.log('hello');
        console.log(`hi my name is ${this.name}`);
        //console.log(this.name);
    }
}

let obj = new abc('manoj',33);
console.log(obj);
let button = document.querySelector("button");
button.addEventListener("click",obj.SayHi);
// set time out function wont work here  
setTimeout(obj.SayHi,1000);
























