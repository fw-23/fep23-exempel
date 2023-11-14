
document.querySelector('#h').addEventListener('click', (evt) => {
    document.querySelector('#h').style.color = 'red';
});

document.querySelector('#btn-reset').addEventListener('click', (evt) => {
    console.log(`Du klickade på ${evt.target.id}`)
    document.querySelector('#h').style.color = 'black';
});

// querySelectorAll för att komma åt flera element
document.querySelectorAll('.clickable').forEach((elem) => {
    console.log(elem.innerHTML)
    elem.addEventListener('click', (evt) => {
        console.log(`Du klickade på ${evt.target.id}, 
        Lyssnaren finns på ${evt.currentTarget.id}`)
    });
});

// Metod två, lyssnare på container-element (ul i det här fallet)
document.querySelector('#lista').addEventListener('click', (evt) => {
    // vi måste kolla att klicket faktiskt var på rätt sorts element
    if (evt.target.localName != 'li') return;

    console.log(`du klickade på ${evt.target.innerHTML}
    Lyssnaren finns på ${evt.currentTarget.localName}`)
    
    evt.target.innerHTML += '!';
});

// change-event
document.querySelector('#datum').addEventListener('change', (evt) => {
    // Vi kan splitta ISO-date (yyyy-mm-dd) till en array!
    const datum = evt.target.value.split('-');
    console.log(`i Finland säger vi ${datum[2]}.${datum[1]}.${datum[0]}`)
});

document.querySelector('#dropdown').addEventListener('change', (evt) => {
    console.log(evt.target.value);
    document.querySelector('#dropdown-output').style.color = evt.target.value;
})

// input-event
document.querySelector('#slider').addEventListener('input', (evt) => {
    document.querySelector('#slider-out').innerHTML = evt.target.value;
});
document.querySelector('#long-text').addEventListener('input', (evt) => {
    document.querySelector('#text-out').innerHTML = evt.target.value.toUpperCase();
});

document.querySelector('#check').addEventListener('click', (evt) => {
    if (evt.target.checked) {
        document.querySelector('#check-output').innerHTML = `
            Tack, vi ska skicka mycket spam!
        `;
    } else {
        document.querySelector('#check-output').innerHTML = `
            Du måste godkänna för att komma vidare!
        `;
    }
});



