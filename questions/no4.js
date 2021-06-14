const object = {
    who: 'World',
    greet() {
    return `Hello, ${this.who}!`;
    },
    farewell: () => {
    return `Goodbye, ${this.who}!`;
    }
   };
   console.log(object.greet()); // What is logged?
   //ans---> 
            // hello World 
            //because this is pointing to object here

   console.log(object.farewell()); // What is logged? 
   //ans---> 
            //goobye undefined

   // here undefined will come because the this of arrow function here pointing to its parent's this(lexcial superior)
   // here parent of farewell arrow function is object and the this of object is pointing to window or global so it will give undefined