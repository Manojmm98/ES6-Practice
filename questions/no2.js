function Pet(name) {
    this.name = name;
    this.getName = () => this.name;
    }
    const cat = new Pet('Fluffy');
    console.log(cat.getName()); // What is logged?  ans- fluppy because we call getName and fluppy is assigned to getname fumnction
    const { getName } = cat;
    console.log(getName()); // What is logged? ans- fluppy