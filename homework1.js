
const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [59, 63, 70] },
    { name: "Charlie", scores: [100, 95, 98] },
    { name: "David", scores: [45, 52, 60] },
    { name: "Eve", scores: [75, 80, 82] }
];

function calculateGrades(students) {
    let results = []; //empty bracket

    students.forEach(student => {
        let sum = 0;
        student.scores.forEach(gradeScore => {
            sum += gradeScore;
        });
        let averageSum = sum / student.scores.length;
        let grade;
        if (averageSum >= 90) {
            grade = "Grade A";
        } else if (averageSum >= 80) {
            grade = "Grade B";
        } else if (averageSum >= 70) {
            grade = "Grade C";
        } else if (averageSum >= 60) {
            grade = "Grade D";
        } else {
            grade = "Grade F";
        }
        results.push(`Name: ${student.name}, AverageSum: ${averageSum.toFixed(2)}, Grade: ${grade}`);
    });

    results.forEach(result => console.log(result));
}

calculateGrades(students);
