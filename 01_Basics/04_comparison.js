console.log(2>1)
console.log(2<1)
console.log(2==1)
console.log(2===1) //strict check
console.log(2!=1)


//Comparison between two different data types
console.log("2">1)//true
console.log("02">1)//true

//comparison of null value
//comparison operators works differently in case of comparison and equality operators
//comparison converts null to a number 0 while equality doesn't do the same.
console.log(null>0) //false  null that is 0 is not greater that 0
console.log(null==0) //false
console.log(null>=0) //true  null that is 0 is greater than or = to 0


//comparison of undefined values
console.log(undefined>0) //false  
console.log(undefined==0) //false
console.log(undefined>=0) //false  


//strict check ( it does not convert and compare if different data types then gives an error)

