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

// function practise
let fuel = 99
function launch_rocket() {
function warning_msg() {
    console.error("not enough fuel")
}
if (fuel >= 100) {
    console.log("we are good to go")
} else {
    warning_msg()
}
}
launch_rocket()

// correction
function tipCalculator(bill) {
    var percentage;
    if (bill <5000) {
        percentage = 0.2
    } else if (bill >= 5000 && bill < 30000) {
        percentage = 0.15
    } else {
        percentage = 0.1
    }
    return percentage * bill
}
var bill = [12400, 4800, 26800]
var tips = [
    tipCalculator(bill[0]),
    tipCalculator(bill[1]),
    tipCalculator(bill[2])
];
var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
console.log(tips, finalValues);

// object are like property or entity, key value pair

var student = {
    firstName: "daniel",
    lastName: "delfin",
    age: 25,
    state: "taraba",
    lga: "karim",
    ca: 44,
    exam: 66,

    address: {
        city: "gwagwalada",
    },
    email: function () {
        return "hello@yahoo.com"
    },
    children: ["fummi", "joy", "charlse", "david"],
};

console.log(student)

console.log(student.state)
console.log(student["firstName"])

var key = "ca"
console.log(student["ca"])

var worker = Object.create(null)
worker.job = "doctor"
worker.salary = 30000
console.log(worker)

// var job = () => (

//     occupation = "web dev"

//   )

// object with function
var house = {
    address: "gwags",
    monthlyRent: 1000,
    annual: 0,
    calculateAnnualRent: function () {
        // var annual = this.monthlyRent * 12;
        // return annual;
        this.annual = this.monthlyRent * 12
        return this.annual
    },
};
console.log(house.calculateAnnualRent)
console.log(house.calculateAnnualRent())
console.log(house)
// exercise
// function Bmi   () {
    // (mark = {
        // fullName: "mark joel",
        // mass: 100,
        // height: 1.99
    // }),
    // (janne = {
        // fullName: "mark joel",
        // mass: 100,
        // height: 1.99
    // });
    // let bmi = mass / (height * height);

    // markBmi = mass / (height * height);
    // janeBmi = mass / (height * height);

    // if (markBmi > janeBmi) {
        // console.log("mark won");
    // } else if (janeBmi > markBmi) {
        // console.log("jane wwon");
    // } else {
        // console.log("its a draw");
    // }

// }
// Bmi();

var mark = {
    fullName: "mark emeka",
    mass: 56,
    height: 1.8,
    calculateBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

var daniel = {
    fullName: "daniel david",
    mass: 53,
    height: 1.7,
    calculateBmi: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};
// var markMass = prompt("what is mark mass kg ?");
// var markHeight = prompt("what is mark height in meter ?");

// var danielMass = prompt("what is daniel mass in kg ?");
// var danielHeight = prompt("what is daniel height in meter ?");

// mark.mass = parselFloat(markMass);
// mark.height = parselFloat(markHeight);

// daniel.mass = parselFloat(danielMass)
// daniel.height = parselFloat(danielHeight)

if (mark.calculateBmi() > daniel.calculateBmi()) {
    console.log("mark has the highest bmi ")
    console.log("full name ", mark.fullName)
    console.log("bmi ", mark.bmi)
} else if (daniel.calculateBmi() > mark.calculateBmi()) {
    console.log("daniel has the highest bmi ")
    console.log("full name ", daniel.fullName)
    console.log("bmi ", daniel.bmi)
} else {
    console.log("its a stalemate ")
}

// loops and iteration it is use to repeat a set of task forLoop
// this is a forloop
for (var index = 0; index <= 20; index++) {
    console.log("hello " + index)
}

var students = ["john", "james", "fred", "dan", "success"]

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
    if (students[i] === "james") {
        break;
    }
}

// whileloop

var counter = 0 
while (counter < students.lenght) {
    console.log("hello " + students[counter])
    counter++
}

// map
students.map(function (students) {
    console.log(students)
})
var developers = [
    {
        name: "victor",
        language: "javascript",
        address: "usa",
    },
    {
        name: "bidemi",
        language: "javascript",
        address: "gwagwalada",
    },
    {
        name: "lifted",
        language: "javascript",
        address: "kuje",
    },
];
developers.map(function (developer) {
    console.log(
        developer.name +
        "codes in " +
        developer.language +
        "and lives in " +
        developer.address
    );
});

// assignment

var john = {
    fullName: "john ali ",
    bills: [12400, 4800, 26800, 18000, 4200],
    calTips: function () {
        this.tips = []
        this.finalValues = []
        for (var i = 0; i < this.bills.lenght; i++) {
            var percentage;
            var bill = this.bill[i]
            if (bill < 5000) {
                percentage = 0.2;
            } else if (bill >= 5000 && bill <= 20000) {
                percentage = 0.15
            } else {
                percentage = 0.1
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill + percentage;
        }
    },
};
var obi = {
    fullName: "Obi Peter ",
    bills: [7700, 47500, 11000, 4000, 4500],
    calTips: function () {
        this.tips = []
        this.finalValues = []
        for (var i = 0; i < this.bills.length; i++) {
            var percentage
            var bill = this.bills[i]
            if (bill >= 10000 && bill < 47500) {
                percentage = 0.2
            } else if (bill >= 10000 && bill < 47500) {
                percentage = 0.1
            } else {
                percentage = 0.25
            }
            this.tips[i] = bill * percentage
            this.finalValues[i] = bill + bill + percentage
        }
    },
};
function calculateAverage(tips) {
    var sum = 0
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i]
    }
    return sum / tips.length
}
john.calTips();
obi.calTips();
john.average = calculateAverage(john.tips)
obi.average = calculateAverage(obi.tips)
console.log(john, obi)

if (john.average > obi.average) {
    console.log(
        john.fullName +
        " 's family pays higher tips, with an average of $" +
        john.average
    );
} else if (obi.average > john.average) {
    console.log(
        obi.fullName +
        " 's family pays higher tips, with an average of $" +
        obi.average
    );
}