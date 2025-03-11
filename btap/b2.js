const checkEvent=(a,b)=>{
    if(Number.isInteger(a) && Number.isInteger(b)){
        return a+b;
    }
        return"Du lieu khong hop le";
}
console.log(checkEvent(2, 6));    
console.log(checkEvent(3, "text")); 
console.log(checkEvent(7, -7));    
console.log(checkEvent(4.5, 3));    