//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('>>>> 1 <<<<')

function pirmas(a, b) {
    return a > b ? `${a} daugiau uz ${b}` : a === b ? `${a} lygu ${b}` : `${b} daugiau uz ${a}`;
}

console.log(pirmas(2, 3))



//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('>>>> 2 <<<<')


for (let i = 1; i < 11; i += 1) {
    console.log(i);
}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('>>>> 3 <<<<')


const numbers = [0, 2, 4, 6, 8, 10];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('>>>> 4 <<<<')

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
console.log('>>>> 5 <<<<')


let x = 1;
while (x <= 5) {
    console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    console.log(x);
    if (x === 5) {
        break;
    }
    x++;
}



//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('>>>> 6 <<<<')

let max = -Infinity;

const masive = [...Array(Math.floor(Math.random() * (30 - 20 + 1) + 20))]
    .map(a => Math.floor(Math.random() * (30 - 10 + 1) + 10));

const maxi = masive.forEach(a => a > max ? max = a : max = max);


console.log('array: ', masive);
console.log('max value: ', max);


//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('>>>> 7 <<<<')


let a = x;
let b = x;
let c = x;
let d = x;

const masyvas = [...Array(100)].map(a => Math.floor(Math.random() * (4 - 1 + 1) + 1))
    .map(a => a === 1 ? 'A' : a === 2 ? 'B' : a === 3 ? 'C' : 'D');

masyvas.forEach(m => m === 'A' ? a++ : m === 'B' ? b++ : m === 'C' ? c++ : d++)

console.log(masyvas);
console.log('A = ', a);
console.log('B = ', b);
console.log('C = ', c);
console.log('D = ', d);


//8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log('>>>> 8 <<<<')


//9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
console.log('>>>> 9 <<<<')



//10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
console.log('>>>> 10 <<<<')
