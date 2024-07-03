// initiateing the interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// creating the student
const student1: Student = {"firstName": "Victor", "lastName": "Okeke", "age": 19, "location": "Ikeja"};
const student2: Student = {"firstName": "John", "lastName": "Ayo", "age": 21, "location": "Lekki"};

// initializing it to Array
const studentsList: Student[] = [student1, student2];

// init table with js
let table = document.createElement('table');
let tbody = document.createElement('tbody');

// create the column and row apend firstname and location
studentsList.forEach((student) => {
    let row = document.createElement("tr");
    let firstNameCell = document.createElement("td");
    let locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
})

table.appendChild(tbody);
document.body.appendChild(table);
