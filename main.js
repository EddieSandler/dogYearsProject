//declare variable and assign my age
let myAge = 54;

//declare vaiable and assign 2 . This represents the firszt 2 yrs of a dog's life expressed in human years
let earlyYears  = 2;


earlyYears = earlyYears * 10.5

//declare variable and assign it the value of myAge -2. this wil lbe used to calculate dog years beyond the first 2 yrss
let laterYears = myAge -2
//reassign value of later years to current value times 4
laterYears *= 4 ;

console.log(earlyYears,laterYears)

//declare  variable and assign the value of the sue of early years and later years. this represents the age of a dog in human years , given my age


let myAgeInDogYears =earlyYears + laterYears

//declare a variable to store my name in lower case
const myName = 'Eddie'.toLowerCase() ;

// display  my name, age, and age in dog years

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)



