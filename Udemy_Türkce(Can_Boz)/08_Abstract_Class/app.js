//! abstractlar ile new adinda classlar olusturamiyoruz!!!
//! ama abstract classlari extends yapabiliyoruz!!!!
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
var Departmen = /** @class */ (function () {
    function Departmen(name) {
        this.name = name;
    }
    Departmen.prototype.printName = function () {
        console.log("Department name:" + this.name);
    };
    return Departmen;
}());
var accountingDepartment = /** @class */ (function (_super) {
    __extends(accountingDepartment, _super);
    function accountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    accountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10 am.");
    };
    accountingDepartment.prototype.generateReport = function () {
        console.log("Generating accounting reports...");
    };
    return accountingDepartment;
}(Departmen));
var department = new accountingDepartment();
department.printName(); //! Burada ilk olarak printName console.log kismi calisiyor var Department name geliyo. Sonrasinda this.name. Burda ki name bize class Department ve onun constructor dan geliyor. constructor ise bunu superden aliyor.
//? let department2 = new Departmen() abstractlarin new Class'i alinamiyor.
