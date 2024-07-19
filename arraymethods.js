let arr=[10,20,30,40,50,60];
// del first element
arr.splice(0,1);
console.log(arr);
//20,30,40,50,60
//add element 
arr.splice(2,1,100,200);
//20,30,100,200,50,60
console.log(arr);
arr.splice(2,1,1000);
console.log(arr);