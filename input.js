

function secti() {
    let cislo1 = parseFloat(document.querySelector('input[name="cislo1"]').value);
    let cislo2 = parseFloat(document.querySelector('input[name="cislo2"]').value);
    let soucet = cislo1 + cislo2;
    vypisSoucet(soucet);


}

function vypisSoucet(soucet) {
    document.querySelector('#soucet h1').innerHTML = ('Součet zadaných čísel je: ' + soucet);

}




document.querySelectorAll('input').forEach((element) => {
    element.addEventListener('change', secti);
});

s




