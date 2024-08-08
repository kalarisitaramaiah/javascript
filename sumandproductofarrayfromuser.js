
//n indicates 1 to n numbers to store 
let n=prompt("enter size of array");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);


let sum=arr.reduce((result,val)=>{
return result+=val;
});
console.log(sum);

let mul=arr.reduce((result,val)=>{
    return result*val;
});
console.log(mul);