
const object = {
    message: 'Hello, World!',
    logMessage() {
    console.log(this.message); // What is logged?
    }
    };setTimeout(object.logMessage, 1000);

    // ans----> 
    //will be undefined because this can not work in setTimeout function so by default this== undefined will be passed