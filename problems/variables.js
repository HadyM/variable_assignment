// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.

    const birthYear = 1987
    let futureYear = 2063
    const ageMin = 75
    const ageMax = 76
    console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear)


// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".

    let myAge = 33
    const maxAge = 100
    let daysPerYear = 365
    let snacksPerDay = 3
    let snackNumber = (daysPerYear * (maxAge - myAge) * snacksPerDay)
    //Calculation: 365 days * 67 years * 3 snacks a day = 73,365 snacks
    console.log("You will need " + snackNumber + " snacks to last you until the age of " + maxAge)



// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

const circleRadius = 10
const circleDiameter = 20
// Diameter is 2 * circleRadius
const circumferenceResult = Math.PI * circleDiameter
console.log("The circumference is " + circumferenceResult)
const areaOfCircle = Math.PI * (Math.pow(circleRadius, 2))
// Area = Pi * radius squared
console.log("The area is " + areaOfCircle)


// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

let tempInCelsius = 50
let tempInFahrenheit = (tempInCelsius * 1.8) + 32
console.log(tempInFahrenheit)

let tempFahrenheit = 120
let tempCelsius = (tempFahrenheit - 32)/1.8
console.log(tempCelsius)

// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average

let alicesGrade = 97
let bobsGrade = 100
let camsGrade = 88
let averageStudentGrade = (alicesGrade + bobsGrade + camsGrade)/3
console.log("The average grade of all 3 students is " + averageStudentGrade)
let deesGrade = 100
let newStudentAverageGrade = (alicesGrade + bobsGrade + camsGrade + deesGrade)/4
console.log("The new average of all 4 students is " + newStudentAverageGrade)
if (newStudentAverageGrade > averageStudentGrade){ console.log("Dee's Score  96.25 ")}


// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.

console.log(123 % 3)

// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice

let x = 3
let y = 2
let bob = 12

let alice = y * (bob + x) - x

console.log(alice)

// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs

let numberOfCats = 20
let numberOfDogs = 60
let totalNumberOfAnimals = numberOfCats + numberOfDogs
let percentageOfCats = Math.round((numberOfCats/totalNumberOfAnimals)*100)

console.log(percentageOfCats + "% of the daycare animals are cats ")

// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.

let year = 2020

let isDivByFour = (year % 4) === 0
let isDivBy100 = (year % 100) === 0
let isDivBy400 = (year % 400) === 0

let isLeapYear = isDivByFour && (!isDivBy100 || isDivBy400)

console.log('Year ' + year +  'is a leap year: ' + isLeapYear)




// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)  
//     ```
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) //10

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) 
//     ```
    let str = 'jel'
    str += 'lo'
    console.log(str) //jello


// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))   
//     ```

let string = 'My favorite number is'
let number = 42
let sentence = string + number
console.log(typeof(sentence)) //String
