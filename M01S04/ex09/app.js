// 1
// console.warn(`1.Modifica exemplul astfel incat bucla sa
// numere de la 1 la 100
// `);
//var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// 2
// console.warn(`
// 2.Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
// `);
// var i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 100);

// 3
// console.warn(`3.folosind keywordul break opreste bucla atunci cand
// numarul este egal cu 50(dar afiseaza-l)`);
// var i = 1;
// do {
//   console.log(i);
//   if (i === 50) {
//     break;
//   }

//   i++
// } while (i < 100);

// 4
// console.warn(`4.Modifica exemplul astfel incat bucla sa
// numere de la 1 la 52 `);
// var i = 1;
// do {
//   console.log(i);
//   if (i ==52) {
//     break;
//   }
//   i++;
// } while (i < 100);

// 5
// console.warn(`5.Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
// `);
// var i = 1;
// do {
//   console.log(i);
//   if (i == 51) {
//     break;
//   }
//   i++;
// } while (i < 100);

// 6
// console.warn(`6.Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
// `);
// var i = 1;
// do {
//   console.log(i);
//   if (i == 12) {
//     break;
//   }
//   i++;
// } while (i < 100);

// 7
// console.warn(`7.Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
// `);
// var i = 1;
// do {
//   if (i >= 8 && i <= 32) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }

//   i++;
// } while (i < 100);

// 8 Acum l-am facut dupa modelul de la curs.
console.warn(`8.Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
`);

var defaultNumber = 1;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;
var number = prompt('Introdu un numar:');

var lowerLimit = prompt('Introdu limita inferioara:');
var i = lowerLimit;

var upperLimit = prompt('Introdu limita superioara:');

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}
if (isNaN(number) === true) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
}

do {
  if (i % number !== 0) {
    i++;
    continue;
  }
  console.log(`${i} este multiplu de ${number}`);
  i++;
} while (i <= upperLimit);
