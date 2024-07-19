let arr=["bloomberg","IBM","Microsoft","Uber","google","netflix"];
///remove the first name from the company
console.log(arr);
arr.splice(0,1);
console.log(arr);
//change uber replaced by ola;
arr.splice(2,1,"ola");
arr.push("amazon");
console.log(arr);