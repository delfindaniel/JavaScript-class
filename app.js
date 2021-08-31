console.log('hello world from app')

//primitive data types
//non primitive types

/* 
 string "" ''  ``
 number
 boolean
 undefined
 null

function
array
object
 
  


*/
 //variable declaration   var let const   you can declare a variable name with an underscore _ and dollar sign $

 var firstName = 'Daniel'
 console.log(firstName)
 var fullName = "obi johnson"
 console.log(fullName)
 var age = 45
 console.log(age)

 var add = 54 + 44
 console.log(add)

 console.log('i am ' + fullName + " am " + age + " years old ")
 console.log(`i am ${fullName} and am ${age} years old`)

var isMarried = false
console.log("is Daniel married? " + isMarried)
console.log(typeof isMarried)

var address 
console.log(address)

address = "gwarimpa"
console.log(address)

var person = null
console.log(person)

var Daniel = 54 + 90 + 80 + 100 + 10
var average = Daniel / 5
console.log(average)
var dob = 2021  - age
console.log(dob)

// operators
var result = 3 - (4 / 2) * 2;
console.log(result);

var std1, std2, std3;
std1 = std2 = std3 = "james";
console.log(std1, std2, std3);

// increament

age = age + 1;

age +=1;
age++;
console.log(age);
    
// decreament

age = age - 1;
age--;
console.log(age)

// calculating body mass index

var cynthiaMass = 70
var cynthiaHeight = 1.7

var emekaMass = 175
var emekaHeight = 1.6

var cynthiaBmi = cynthiaMass / (cynthiaHeight * cynthiaHeight)
var emekaBmi = emekaMass / (emekaHeight * emekaHeight)

var higherBmi = cynthiaBmi > emekaBmi
console.log(" is cynthia bmi higher than emeka's ? " + higherBmi)

// typeof helps us determine the type of a variable

console.log(typeof cynthiaBmi, typeof higherBmi)

// conditional statements

if (cynthiaBmi > emekaBmi) {
    console.log("cynthia wins")
} else {
    console.log("emeka wins")
}

var studentAge = 34
if (studentAge >= 20) {
    console.log("you are a legal adult now")
} else if (studentAge <= 18 && studentAge >= 13) {
    console.log("you are a teenager")
} else if (studentAge < 13 && studentAge >= 5) {
    console.log("hello young one")
} else {
    console.log("lovely baby")
}

//  switch case is used to test for equality

var gender = "male"
switch (gender) {
    case "male":
        console.log("hello ma")
        break;
        default:
            console.log("you are confuse")
            break;
}

// tenary operators

var isMarried = true
console.log("is james married" + (isMarried ? " yes " : "no"))

// class work

var johnScores = (89, 120, 103)
var johnAverageScores = (89 + 120 + 123) / 3
// console.log(johnAverageScores)

// var mikeScores = (116, 94, 103)
// var mikeAverageScores = (116 + 94 + 103) /3
// console.log(mikeAverageScores)

// var highestAverageScores = 110

// if (higestAverageScores >= 110) {
// console.log("johns team won")
// } else if (highestAverageScores <= 103) {
// console.log(" try harder next time")
// }

// correction

var johnAve = (89 + 120 + 103) / 3
var mikeAve = (116 + 94 + 123) / 3
var maryAve = (97 + 134 + 106) / 3

if (johnAve > mikeAve && johnAve > maryAve) {
    console.log("the winner is johns team an average score of " + johnAve)
} else if (mikeAve > johnAve && mikeAve > maryAve) {
    console.log("the winner is mike team with an average score of " + mikeAve)
} else if (maryAve > johnAve && maryAve > mikeAve) {
    console.log("the winner is marys team with an average score of " + maryAve)
} else {
    console.log("it is a draw")
}

// function

function calculateAge(yearOfBirth) {
    var currentYear = 2021
    var age = currentYear - yearOfBirth
    return age
}


console.log("hello am " + calculateAge(2021) + " years old")
console.log("i am " + calculateAge(2000) + "years old")

function yearsUntilRetirement(dob, jobYear, name) {
    var age = calculateAge(dob)
    var noOfYears = calculateAge(jobYear)
    var ageTillRetirement = 65 - age
    var workTillRetirement = 35 - noOfYears
    if (ageTillRetirement > workTillRetirement) {
        console.log(
            " hello ," +
            name +
            " you have " +
            workTillRetirement +
            " years before you retire "
        )
    } else if (workTillRetirement > ageTillRetirement) {
        console.log(
            "hello," +
            name +
            " you have " +
            workTillRetirement +
            " years before you retire"
        )
    } else {
        console.log(
            "hello," +
            name +
            " you have " +
            workTillRetirement +
            " years before you retire "
        )
    }
    //  console.log("james")
}
yearsUntilRetirement(1998, 2009, "james")
yearsUntilRetirement(1998, 2005, "joy")
yearsUntilRetirement(1998, 2015, "mary")
yearsUntilRetirement(1998, 2005, "rita")

var result = [90, 87, 66, 77, 88, 99, "john"]
console.log(result)
console.log(result.length)
console.log(result[5])
var student = ["hosea", "john", "favour", "emma"]
console.log(student)
console.log(student[3])

console.log(student.indexOf("hosea"))
student.pop()
console.log(student)
student.shift()
console.log(student)
student.push("linda")
console.log(student)
student.unshift("ali")
console.log(student)
