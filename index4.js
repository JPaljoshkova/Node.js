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

//4. Градови подредени по групна висина на просек.


const studentsByCity = studenti.reduce((acc, student) => {
  if (!acc[student.grad]) {
      acc[student.grad] = [];
  }
  acc[student.grad].push(student);
  return acc;
}, {});

const cityAverages = Object.keys(studentsByCity).map(city => {
  const totalProsek = studentsByCity[city].reduce((acc, student) => acc + student.prosek, 0);
  const averageProsek = totalProsek / studentsByCity[city].length;
  return { grad: city, prosek: averageProsek.toFixed(2) };
});

const sortedCityAverages = cityAverages.sort((a, b) => b.prosek - a.prosek);

console.log(sortedCityAverages);