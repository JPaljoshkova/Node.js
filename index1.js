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

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име(растечки).

const filteredAndSortedStudents = studenti
    .filter(student => student.grad === "Skopje" && student.ime.endsWith('a') && student.prosek > 7)
    .sort((a, b) => {
        if (a.ime < b.ime) return -1;
        if (a.ime > b.ime) return 1;
        return 0;
    });
    
    // student.grad === ni garantira deka selektirame studenti od sk
    // student.ime.endsWith('a') ni garantira deka selektirame studenti cie ime zavrsuva so 'a'
    // student.prosek > 7 ni garantira deka selektirame studenti so prosek nad 7 
    // ako a.ime e pomalo od b.ime se vraka -1 za da se postavi a pred b,ako a.imee pogolemo od b.ime se vraka 1 da se postavi a po b
    // ako iminjata se ednakvi ke se vrati 0

console.log(filteredAndSortedStudents);