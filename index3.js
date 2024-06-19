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

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.


const Students = studenti.filter(student => student.ime.length === 5);


Students.sort((a, b) => b.prosek - a.prosek);


const top3Students = Students.slice(0, 3);


console.log(top3Students);

// students gi sodrzi studentite so 5 karakteri
// sturents sort => gi podreduva spored prosekot
// students slice (0, 3) gi zema prvite 3 studenti od listata
// slice = seckanje na nizata vo JS