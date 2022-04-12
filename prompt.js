let vyska = prompt('Zadej výšku pračky v cm');
let sirka = prompt('Zadej šířku pračky v cm');
let hloubka = prompt('Zadej hloubku pračky v cm');
let vysledek = document.querySelector('#vysledek h1');

if ((vyska >= 70) || (sirka >= 62) || (hloubka >= 80)) {
    vysledek.innerHTML = 'Tvoje pračka se na místo nevleze :-(';
}

else {
    vysledek.innerHTML = 'Tvoje pračka se na místo vleze :-)';
}