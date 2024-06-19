
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
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
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" }
];

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

const Students = studenti.filter(student => student.prosek > 9 && student.grad !== "Skopje");

const sortedStudents = Students.sort((a, b) => b.prosek - a.prosek);

console.log(sortedStudents);

// student.prosek > 9 mi gi selektira studentite koi imaat prosek nad 9
// student.grad !== "Skopje" mi gi selektira studentite koi ne se od sk
//.sort((a,b)) => b.prosek - a.prosek) mi gi podreduva studentite po prosek opagacki