enum Gender {
    male,
    female,
    other
}

class Employee {
    name: string = "";
    gender: Gender;
    birthDate?: Date;
    email: string = "";
    phoneNo: string = "";

    constructor(name: string, gender: Gender, birthDate: Date, email: string, phoneNo: string) {
        this.name = name;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNo = phoneNo;
    }
    getName() {
        return this.name;
    }
    getGender() {
        return this.gender;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getEmail() {
        return this.email;
    }
    getPhoneNo() {
        return this.phoneNo;
    }
}

let listEmployee: Employee[] = [];
function showEmployee(employee: Employee) {
    console.log(employee);
}
function add(employee: Employee) {
    listEmployee.push(employee);
}

function deleteEmployee(index) {
    listEmployee.splice(index,1);
}

let employeeOne = new Employee("Nguyen A", Gender.male, new Date("1991-01-01"), "anguyen0101@gmail.com", "0901010101");
let employeeTwo = new Employee("Dao Thi Mo", Gender.female, new Date("1992-02-02"), "modao0202@gmail.com", "0902020202");
let employeeThree = new Employee("Nguyen B", Gender.other, new Date("1993-03-03"), "bnguyen0303@gmail.com", "0903030303");

listEmployee.push(employeeOne);
listEmployee.push(employeeTwo);
listEmployee.push(employeeThree);
listEmployee.forEach(showEmployee);
console.log(listEmployee);
listEmployee.splice(3,1);
console.log(listEmployee);
listEmployee.forEach(showEmployee);


