function vowelsCount(str){
    str.toLowerCase();
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
            count++;
        }
    }
    return count;
}
vowelsCount("sita ramaiah");

//lly arrow function
 
const vowels=(str)=>{
    str.toLowerCase();
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
            count++;
        }
    }
    return count;
}