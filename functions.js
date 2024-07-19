//parameterized cnstructor

function myfun(){
    console.log("hello function");
}
//function call;
myfun();

//non parameterized constructr
function myfun2(a,b){
    console.log(a+b);
}
myfun2("hello"," good morning");

//arrow function

function sum(a,b){
return a+b;
}
const arrsum=(a,b)=>{
    console.log(a+b);
}

function mul(a,b){
    return a*b;
}
const arrmul=(a,b)=>{
    console.log(a*b);
}