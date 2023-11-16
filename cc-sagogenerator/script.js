const varor = [
    { value: "mjölk", namn: "Mjölk", typ: "dryck" },
    { value: "öl", namn: "Öl", typ: "dryck" },
    { value: "läsk", namn: "Läsk", typ: "dryck" },
    { value: "chips", namn: "Chips", typ: "godis" },
]

for (vara of varor) {
    document.querySelector('#vara').innerHTML += `
        <option value="${vara.value}" data-varutyp="${vara.typ}">${vara.namn}</option>
    `;
}


function skrivSaga() {
    const person = document.querySelector('#person').value;
    const pro = document.querySelector('#pro').value;
    const butik = document.querySelector('input[name=butik]:checked').value;
    const vara = document.querySelector('#vara').value;
    const varutyp = document.querySelector('#vara option:checked').dataset.varutyp;
    const container = varutyp == "dryck" ? "kanna" : "påse"; // ternary operator: villkor ? valueIfTrue : valueIfFalse

    let saga = `
        Från ${butik} kl fem 
        ${person} gick hem
        En ${container} full av ${vara} ${pro} bar
        och vägen lång och krokig var.
    `;

    document.querySelector('#out').innerText = saga;
}

document.querySelector('#generate').addEventListener('click', skrivSaga);

