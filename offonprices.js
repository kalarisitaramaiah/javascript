//10%off on prices
discount=prompt("enter discount");
let arr=[250,920,783,202,912,678,100];
for(let key in arr){
    let amount=arr[key]/100;
    arr[key]=arr[key]-amount*discount;
    console.log(arr[key]);

}