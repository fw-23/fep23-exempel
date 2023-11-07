// Output i konsolen:
console.log("Hello console!");

function testaAlertOchPrompt() {
    // Ta emot input med en prompt:
    const namn = prompt("Skriv ditt namn");

    // Output som alert:
    alert(`Hello ${namn}!`);
}

function btnClick() {
    console.log("btnClick");
    const namn = document.querySelector("#namn").value;

    // Detta funkar lika bra, notera "namn" inte "#namn":
    //      document.getElementById("namn").value;

    document.querySelector("#hello-output").innerText = `Hello ${namn}!`;
    
}

// villkorssatser:
const a = 5;
if (a < 5) {
    console.log("a är liten");
} else if (a > 5) {
    console.log("a är stor");
} else {
    console.log("a är lagom")
}

// funktionsargument
function hello(fname, lname) {
    console.log(`Hello ${fname} ${lname}!`);
}
hello("Fredrik", "Welander");

// returvärden
function helloString(name) {
    return `Hello ${name}!`;
}
const greeting = helloString("Fredde");
console.log(greeting);