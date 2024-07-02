/**
 * Return an array of students residing in the given city
 * @param {Object[]} students - an array of studen objects
 * @param {string} city - name of city
 */
export default function getStudentsByLocation(students, city) {
    return students.filter(student => student.location === city);
  }