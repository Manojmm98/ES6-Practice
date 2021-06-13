let information ={
    graduation: 'ctc',
    inter:{
        marks:20,
        book:2
    }
    ,matriculation: {
        marks:100,
        school:{
            location:'bls',
            state:'odisha'
        }
    }
}
// i want to change the location to bdk but without changing the main object

// let copy=information;
// copy.location='bdk';
// console.log(copy);
// console.log(information);

//let copy = {...information};
// the shallow copy object is the object which is created when a object is spread
// only the upper most level is pointing to new refference but the
// lower nested levels are pointing to the original object
//(if there is a object inside the object then refrence of these objects are different)
// copy.matriculation.school.location='bbs';
// console.log(copy);
// console.log(information);

//----------deep copy------------////


let copy = {...information,inter:{...information.inter,marks:{...information.matriculation.marks}}}
copy.matriculation.marks=1000;
console.log(copy);
console.log(information);