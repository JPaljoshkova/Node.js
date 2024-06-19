const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const studentsWithA = studenti.filter(student => student.ime.endsWith('a'));
const otherStudents = studenti.filter(student => !student.ime.endsWith('a'));

const totalProsekWithA = studentsWithA.reduce((acc, student) => acc + student.prosek, 0);
const totalProsekOthers = otherStudents.reduce((acc, student) => acc + student.prosek, 0);

const averageProsekWithA = totalProsekWithA / studentsWithA.length;
const averageProsekOthers = totalProsekOthers / otherStudents.length;

console.log('Вкупен просек на студенти чие име завршува на а:', averageProsekWithA);
console.log('Вкупен просек на сите останати студенти:', averageProsekOthers);

// filter metod za da gi dobieme site studenti cie ime zavrsuva na a 
// reduce za da go dobieme vkupniot prosek za dvete grupi na studenti
//