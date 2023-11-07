// += praktiskt för att lägga till innehåll i en tag:
document.querySelector('#list').innerHTML += '<li>tre</li>';

// for-loop
for (let i=0; i<10; i++) {
    console.log(i);
}
for (let i=9; i>=0; i--) {
    console.log(i);
}

// String-array
const colors = [ "red", "green", "blue"];
console.log(colors)
// Ändra ett värde
colors[2] = "yellow";
console.log(colors)
// Lägg till ett värde
colors.push("blue");
console.log(colors)

// Kommaseparerad teckensträng till array:
const myStr2 = "hej, på, dig";
const hejArr2 = myStr2.split(", ");
console.log(hejArr2)

// Array till space-separerad teckensträng
const myStr = hejArr2.join(" ");
console.log(myStr);

// Objekt
const person = {
    name: "Fredde"
}
console.log(person)

// Ändra ett värde i ett objekt
person.name = "Linus";
console.log(person)

// Lägg till nyckel/värde-par i objekt
person.age = 50;
console.log(person)
// Lägg till nyckel/värde-par (array i detta fall) i objekt
person.toDo = [ "eat", "sleep", "code" ];
console.log(person);
console.log(person.toDo[2]);
// Lägg till värde till array i objekt
person.toDo.push("repeat");
console.log(person);
// lägg till objekt i objektet:
person.vehicle = { type: "car", brand: "tesla" }
console.log(person);
console.log(person.vehicle.brand);

console.log("-----------------");

// Loopa array
for (let i=0; i < colors.length ;i++) {
    console.log(colors[i])
}

console.log("-----------------");
const rgb = [
    { name: "Red", code: "rgb(255, 0, 0)" },
    { name: "Green", code: "rgb(0, 255, 0)" },
    { name: "Blue", code: "rgb(0, 0, 255)" }
]
//
console.log(rgb[2].name);

for (let i=0; i < rgb.length ;i++) {
    console.log(`Color name: ${rgb[i].name}, Color code: ${rgb[i].code}`);
}

// for of-loop, loopa arrayn och namnge varje element (color i det här fallet)
console.log("for of -----------------");
for (const color of colors) {
    console.log(color)
}

// Typisk användning av array av objekt
console.log("for of (array av objekt) -----------------");
for (const color of rgb) {

    document.querySelector("#colors").innerHTML += `
        <li style="color: ${color.code}">${color.name}</li>
    `;
}

// for-in påminner om for of, men ger en iterator (index) i stället för hela elementet
console.log("for in (array av objekt) -----------------");
for (let i in rgb) {
    console.log(rgb[i])
}

// Ändra CSS-attribut med element.style
document.querySelector("#rubrik").style.color = 'blue';
document.querySelector("#rubrik").style.fontFamily = 'Arial';
document.querySelector("#rubrik").style.backgroundColor = 'rgb(200,200,255)';

const arcadaUrl = document.querySelector("#arcada-link").href;

// Egna påhittade attribut
// Praktiskt när man vill skicka data från HTML-koden till JS
const arcadaCity = document.querySelector("#arcada-link").getAttribute("data-city");
console.log(`Arcada finns i ${arcadaCity}`);

// loopa många element enligt selektor
document.querySelectorAll(".viktig").forEach(function (elem) {
    console.log(elem)
    
    document.querySelector("#viktiga-ord").innerHTML += `
        <li>${elem.innerHTML}</li>
    `;
});

