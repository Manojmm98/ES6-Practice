function fn(){
    console.log(`hii my name is ${this.person}`);
    console.log(this);
    function abc(){
        console.log(`hii my name is ${this.person}`);
    }
    abc();
}

let obj = {
    person: "manoj",
    fun : fn
}
obj.fun();

// here if we call abc() then we will get undefined value because object is not assign to abc
// to overcome from this problem we just have to use bind function

// bind function

function fn() {
    console.log("hi my name is"+this.person);
    console.log(this);
    function abc(){
        
    }
}