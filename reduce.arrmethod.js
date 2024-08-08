let num=[2,4,121,152,852,-258,3,-1];
const sum=num.reduce((res,curr)=>{
return res+curr;
});

const smallestelement=num.reduce((res,curr)=>{
    return res>curr?curr:res
});
const greatestelement=num.reduce((res,curr)=>{
    return res<curr?curr:res
});
console.log(sum);
console.log(smallestelement);
console.log(greatestelement);