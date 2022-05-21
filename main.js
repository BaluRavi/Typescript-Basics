"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var myname = "Balu";
var age = 32;
var isMarried = false;
console.log(myname);
var gender;
gender = "Male";
var multiline = "My name is ".concat(myname, "\nI am learning typescript\nUpskill Yourselves");
console.log(multiline);
var n = null;
var u = undefined;
isMarried = null;
myname = undefined;
var numArray = [100, 200, 300, 400];
console.log(numArray);
var numArray2 = [1, 2, 3];
var tuple = [100, "Balu"];
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Green"] = 500] = "Green";
})(Color || (Color = {}));
var col = Color.Green;
console.log(col);
var random = 20;
random = "Balu";
random = 10;
// console.log((random as string).toUpperCase());
var a = true;
var b;
b = a;
var multitype;
multitype = false;
multitype = 32;
var anytype;
multitype = false;
multitype = 32;
function addNumbers(a, b) {
    if (b === void 0) { b = 10; }
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
console.log(addNumbers(5));
// function fullName (person : {firstName:string,lastName:string})
// {
//     console.log(`${person.firstName} ${person.lastName}`);
// }
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Balu",
    lastName: "Kumar"
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(empName, empID) {
        this.employeeName = empName;
        this.employeeID = empID;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var employee = new Employee("Sangeetha", 1234124);
employee.employeeName = "Kumar";
console.log(employee.employeeID, employee.employeeName);
employee.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, managerID) {
        return _super.call(this, managerName, managerID) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
        console.log(this.employeeID, this.employeeName);
    };
    return Manager;
}(Employee));
var manager = new Manager("Sastry", 12342134);
manager.delegateWork();
manager.greet();
