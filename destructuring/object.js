let result = {
    name: 'Manoj',
    age: 22,
    country: {
        name:'india',
        location:'east',
        language:{
            east:"odia",
            north:'hindi',
            south:'tamil'
        }
    }
}

// i have to find out language hindi and

// traditional way 

//let north =result.country.language.north;

//with use of destructuring

// let {country:{language:north}}=result;
// console.log(north);
let{country:{language:{north}}}=result;
console.log(north);