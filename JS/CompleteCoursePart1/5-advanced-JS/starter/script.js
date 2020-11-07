// function constructor
class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.calculateAge = function () {
            console.log(2016 - this.yearOfBirth);
        };
    }
}

var john = new Person('John', 1990, 'teacher');

console.log(john);
john.calculateAge();
console.log(john.hasOwnProperty('job'));

// Object.create



