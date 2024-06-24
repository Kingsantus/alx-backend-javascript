export default function createEmployeesObject(departmentName, employees) {
	const value = {
		[departmentName]: [...employees]
	};
	return value;
}
