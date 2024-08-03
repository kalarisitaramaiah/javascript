let arr=[1,81,30,560,34];
arr.forEach(function printval(value){
    //1 81 30 560 34
    console.log(value);
});

//see same func in arrowfunction
arr.forEach((value)=>{
    //1 81 30 560 34
console.log(value);
});

//in Callbackfunction we have 3 parameters we pass into a function
//its not possible for strings we can only use these parameters in arr
arr.forEach((value,idx,arr)=>{
console.log(value,idx,arr);
//output of function
//1 0 (5) [1, 81, 30, 560, 34]
//0: 1: 
//1:81
//2: 30    3: 560    4: 34    length: 5[[Prototype]]: Array(0)

});