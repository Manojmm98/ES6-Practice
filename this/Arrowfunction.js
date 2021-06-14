
//-------------- Arrow function --------------------------//

// arrow function can be wrriten in case when we dont wanna write function keyword
// function fn()-----> simplified ---> let fn=()=>
// when an arrow function is called it always invokes its superior class(parent class) this method

function fn(){
    console.log("hii my name is " +this.person);
    console.log(this);
    let abc = () => {
        console.log(this.person);
    }
    abc();
}
    let obj = {
        person: 'ram',
        func:fn

}
obj.func();