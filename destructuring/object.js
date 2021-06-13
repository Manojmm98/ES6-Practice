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

let arr = [1,2,3,4,5,6];
let[f,s,t,...newarray]=arr;
console.log(newarray);
newarray[0]=11;
console.log(newarray);
console.log(arr);