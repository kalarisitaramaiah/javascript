// find the  student marks array who scored above 90 or equal
let arr=[67,79,90,45,35,78,87,93,49,63,95,99,88,100];
const highest_marks=arr.filter((val)=>{
    return val>=90;
})
console.log(highest_marks);