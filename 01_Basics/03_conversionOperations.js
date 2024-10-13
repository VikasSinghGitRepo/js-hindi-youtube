let score = 33 // "33" // "33abc" 

let valueInNumber = Number(score);//if you want to do operation on number and you dont have guarantee that user will pass string or number

// const {score}=req.body
console.log(typeof score)
console.log(typeof(NaN))
console.log(typeof(score))
console.log(typeof valueInNumber) //number

// when you convert "33abc" to number it will not throw an error but ( NaN )

// when you convert  null to number it will get converted to 0 which is not right 0 degree and null temperature is not same

// when you convert bool value to number you get 0 as a output 

//when you convert undefined to number you get NaN as output


//typeof NaN is number
//type of undefined is undefined 
//type  of null is object 


//-----------Conversion to boolean ------------//

// 1 & more than 1--> true , 0 --> false , ""--> false ,"somestrval"-->true




