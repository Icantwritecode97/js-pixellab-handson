var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');
number = number.trim();

if (number === null || number.trim().length === 0) {
  console.warn('Nu ai introdus un numar. Folosesc 2');
  number = 2;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn('Nu ai un numar. Folosesc 2');
  numer = 2;
}

for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i % 7 === 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}
