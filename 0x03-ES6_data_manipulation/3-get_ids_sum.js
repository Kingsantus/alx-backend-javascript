/**
 * Return the sum of the ids of all the specified students
 * @param {Object[]} students
 */
export default function getStudentIdsSum(students) {
    return students.reduce((acc, student) => acc + student.id, 0);
  }