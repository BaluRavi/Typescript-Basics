export {};
let myname: string = "Balu";
let age: number = 32;

let isMarried: boolean = false;

console.log(myname);

let gender;

gender = "Male";

let multiline: string = `My name is ${myname}
I am learning typescript
Upskill Yourselves`;

console.log(multiline);

let n: null = null;
let u: undefined = undefined;

isMarried = null;
myname = undefined;

let numArray: number[] = [100, 200, 300, 400];
console.log(numArray);

let numArray2: Array<number> = [1, 2, 3];

let tuple: [number, string] = [100, "Balu"];

enum Color {
  Red = 100,
  Blue,
  Green = 500,
}

let col: Color = Color.Green;
console.log(col);

let random: unknown = 20;

random = "Balu";

random = 10;

// console.log((random as string).toUpperCase());

let a = true;

let b;

b = a;

let multitype: boolean | number;
multitype = false;
multitype = 32;

let anytype: any;
multitype = false;
multitype = 32;

function addNumbers(a: number, b: number = 10): number {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

console.log(addNumbers(5));

interface Person {
  firstName: string;
  lastName: string;
}

// function fullName (person : {firstName:string,lastName:string})
// {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Balu",
  lastName: "Kumar",
};

fullName(p);

class Employee {
  public employeeName: string;
  public employeeID: number;

  constructor(empName: string, empID: number) {
    this.employeeName = empName;
    this.employeeID = empID;
  }

  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let employee = new Employee("Sangeetha", 1234124);
employee.employeeName = "Kumar";
console.log(employee.employeeID, employee.employeeName);
employee.greet();

class Manager extends Employee {
  constructor(managerName: string, managerID: number) {
    super(managerName, managerID);
  }

  delegateWork() {
    console.log("Manager delegating task");
    console.log(this.employeeID, this.employeeName);
  }
}

let manager = new Manager("Sastry", 12342134);
manager.delegateWork();
manager.greet();
