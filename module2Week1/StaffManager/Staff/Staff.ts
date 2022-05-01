enum Gender{
    Male,
    Female,
    Ohter
}
class Staff{
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

}

let staffList: Staff[] = [];
let staffOne = new Staff("Nguyen Van A", Gender.Male,new Date("1991-01-01"), "Anguyen0101@gmail.com", "0901010101");
let staffTwo = new Staff("Nguyen Thi B", Gender.Female,new Date("1992-02-02"), "bthi0202@gmail.com", "0902020202");
let staffThree = new Staff("Nguyen Van C", Gender.Male,new Date("1993-03-03"), "cguyen0303@gmail.com", "0903030303");
staffList.push(staffOne);
staffList.push(staffTwo);
staffList.push(staffThree);

function showStaff(staff: Staff) {
    console.log(staff)
}
staffList.forEach(showStaff);


