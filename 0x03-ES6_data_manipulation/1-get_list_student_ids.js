/**
 * @param {Object[]} students - An array of students
 * @returns {number[]} An array containing the ids of the students.
 */
export default function getListStudentIds(students) {
    if (!Array.isArray(students)) {
      return [];
    }
    return students.map((student) => student.id);
  }