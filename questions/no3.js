//How can you call logMessage function so that it logs "Hello, World!"?

const object = {
message: 'Hello, World!'
};
function logMessage() {
console.log(this.message); // "Hello, World!"
}

//--------------answers------------------------//

let ans = logMessage.bind(object);
ans();

    
   