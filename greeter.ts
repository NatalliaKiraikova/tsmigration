class Student {
    fullName:string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
var person = {firstName: "Jane", lastName: "User"};
var student = new Student("Jane", "M.", "User");

function greeterForPerson(person:Person) {
    return "Hello, " + person.firstName + person.lastName;
}

function greeterForStudent(student:Student) {
    return "Hello, " + student.fullName;
}

function greeter(person:Person) {
    return greeterForStudent(student) + ".\n\n" + greeterForPerson(person);
}

document.body.innerHTML = greeter(student);
