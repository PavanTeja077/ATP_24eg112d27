/*
ASSIGNMENT 2:
Student Performance Dashboard

Tasks:
1. filter() students who passed (marks ≥ 40)
2. map() to add grade field
3. reduce() to calculate average marks
4. find() the student who scored 92
5. findIndex() of student "Kiran"
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

const passedStudents = students.filter(student => student.marks >= 40);

const gradedStudents = students.map(student => ({
  ...student,
  grade:
    student.marks >= 90 ? "A" :
    student.marks >= 75 ? "B" :
    student.marks >= 60 ? "C" : "D"
}));

const avgMarks = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
const topStudent = students.find(student => student.marks === 92);
const kiranIndex = students.findIndex(student => student.name === "Kiran");

console.log(passedStudents, gradedStudents, avgMarks, topStudent, kiranIndex);