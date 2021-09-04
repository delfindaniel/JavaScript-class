var emmanuel = {
    firstName: "Emmanuel",
    lastName: "Efegoma",
    course: "Architecture"
};
console.log(emmanuel);

var Student = function(firstName, lastName, course, yearOfEntry) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.course = course;
    this.yearOfEntry = yearOfEntry;
};

Student.prototype.active = true;
Student.prototype.calcYears = function() {
    console.log(2021 - this.yearOfEntry);
};

var lifted = new Student("Lifted", "Ugheoke", "ICT", 2021);
var frank = new Student("Frank", "Ikpe", "Computer Science", 2015);

console.log(lifted);
console.log(frank);
console.log(lifted.active);
console.log(frank.calcYears());

const names = "John Ogie";
console.log(names);

String.prototype.replaceAll = function(search, replace) {
    var scope = this;
    return scope.split(search).join(replace);
};

console.log(names.replaceAll("o", "a"));

console.log("Joe is a boy in class 2".replaceAll("i", "o"))
console.log("5,000,000".replaceAll(",", ""));

var Developer = {
    language: "Javascript",
    experience: 5
};

var victor = Object.create(Developer);
victor.level = "Intermediate";
victor.location = "Abuja";

var bidemi = Object.create(Developer, {
    level: { value: "Intermediate" },
    location: { value: "Abuja" }
});

console.log(victor);
console.log(bidemi);

// Primitives and Objects

var student1 = "Ife";
var student2 = student1;

student1 = "Tade";

console.log(student1);
console.log(student2)

var person1 = {
    age: 12
};
var person2 = person1;

person1.age = 15;
person2.age = 40;

console.log(person1);
console.log(person2);

function updateValue(first, second) {
    first = "Justus"
    second.age = 35;
}

updateValue(student1, person1);
console.log(person1.age);

