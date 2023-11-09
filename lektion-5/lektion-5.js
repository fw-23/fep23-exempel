console.log("hello")

// Traditionell funktion måste explicit returnera
function traditionell() {
    return "traditionell";
}
console.log(traditionell());

// Pilfunktion kan returnera automatiskt!
const pil = () => "pil";
console.log(pil());

// datum och klockslag
const d = new Date();
document.querySelector("#idag").innerHTML = `
    Sidan laddades ${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} 
    Kl: ${d.getHours()}.${d.getMinutes()}.${d.getSeconds()}
`;

/*
// Timer med namnlös callback-funktion
let sekunder = 0;
const myTimer = setInterval(() => {
    console.log("sekunder", sekunder % 60); // använd modulus för att börja om från 0
    if (sekunder > 130) {
        clearInterval(myTimer);
    }
    sekunder++;
}, 10);
*/

// Timer med namngiven callback-funktion

const myOtherTimer = setInterval(timerHandler, 200);

let timerCounter = 0;
function timerHandler() {
    console.log(timerCounter);
    timerCounter++;
    if (timerCounter > 2) {
        clearInterval(myOtherTimer);
    }
}




