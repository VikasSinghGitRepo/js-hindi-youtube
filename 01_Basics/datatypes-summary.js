//primitive and non-primitive data types in javascript
//the data type is divided based on call by value and call by reference and how they are stored in memory and accessed from memory

//primitive or call by value // 7 types
//string Number Boolean Null Symbol BigInt Undefined


//non-primitive or Reference type or  call by reference
// Array Object Functions


//symbol is used for giving unique values to each element in below example even by passing same value we get different results
const id=symbol('123')
const anotherId=symbol('123')
console.log(id===anotherId) //false

const bignumber=1223443535343n;//eg for bigint
const someval=null;//when you see it's type its object

//aray objects and functions
const heros = ["radhe",'ram','shyam'];

let myobj={
name:'vikas',
designation:'software dev'    
}

const myfunc=function(){
    console.log('vikas sig')
} 

console.log(typeof bignumber);//bnigint
console.log(typeof someval) //object
console.log(myfunc)//function which is function object






