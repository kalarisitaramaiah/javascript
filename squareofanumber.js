let arr=[1,4,9,6,12,15,20];
arr.forEach(function square(item){
    console.log("square of "+item  +"  "+item*item)
});
// we can also do by creating an function and passing it as directly as callback fnx

 let calsq=((item)=>{
console.log("square of "+item  +"  "+item*item);
});
arr.forEach(calsq);