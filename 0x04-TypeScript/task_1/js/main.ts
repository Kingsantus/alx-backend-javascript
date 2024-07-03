// initializing teacher interface
export interface Teacher {
	readonly firstName: string; // modifiable when initialized 
	readonly lastName: string;  // modifiable when initialized
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;  // optional
	location: string;
	[key: string]: any;  // can accept any property name
}

// extend Teacher to Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

// accepting string params and printing first index and last name
export function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// creating class with inference
export default class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
  }
    workOnHomework() {
        return 'Currently Working';
    }
    displayName() {
        return this.firstName;
    }
}

