// zadanko1:

const tablicaLiczb = [1,2,3,4,5];

const podwojnaTablica = tablicaLiczb.map(liczba => liczba *2);

console.log(tablicaLiczb);
console.log(podwojnaTablica);


// zadanko2:

const studenci = [
    { imie: "Janek", wiek: 21 },
    { imie: "Franek", wiek: 22 },
    { imie: "Zdzisiek", wiek: 23 },
  ];
  
  const imiona = studenci.map(student => student.imie);
  console.log(studenci);
  console.log(imiona);
