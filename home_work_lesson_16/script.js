
function Student(firstName, lastName, year, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.grades = grades;
    this.attendance = new Array(25);

    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    };

    this.getAverageGrade = function() {
        const sum = this.grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / this.grades.length;
    };

    this.present = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = true;
                break;
            }
        };
    };

    this.absent = function() {
        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = false;
                break;
            }
        };
    };

    this.summary = function() {
        const averageGrade = this.getAverageGrade();
        const presentDays = this.attendance.filter(item=> item === true).length;
        const totalDays = this.attendance.filter(item=> item !== undefined).length;
        const averageAttendance = presentDays / totalDays;

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return 'Молодець!';
        } else if (averageGrade <= 90 && averageAttendance <= 0.9) {
            return 'Редиска!';
        } else {
            return 'Добре, але можна краще!';
        }
    };
};

const student1 = new Student('Alex', 'Alexov', 1995, [85, 100, 50]);
const student2 = new Student('John', 'Dou', 1975, [95, 100, 90]);
const student3 = new Student('Ann', 'Tusasad', 2000, [30, 20, 89]);
student1.present();
student1.present();
student1.present();
student2.present();
student2.present();
student2.present();
student3.absent();
student3.absent();
student3.present();

console.log('Вік:', student3.getAge());
console.log('Середня оцінка:', student3.getAverageGrade());
console.log('Загальна оцінка:', student3.summary());