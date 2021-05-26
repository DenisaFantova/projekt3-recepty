/*
Co je za úkol v tomto projektu:

** 1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
** HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

** 2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

** 3) Doplň filtrovanání receptů podle kategorie.

** 4) Doplň řazení receptů podle hodnocení.

** 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s  ** ID recept-foto ** ,
** recept-kategorie,
** recept-hodnoceni,
** recept-nazev,
** recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

const recepty = document.querySelector('#recepty');
let hledat = document.querySelector('#hledat');
hledat.addEventListener('input', hledej);
hledat.addEventListener("onclick", hledej);

let vypsaneRecepty = [];

function vypisRecepty(poleRecepty) {
    for (i = 0; i < poleRecepty.length; i++) {
        let recept = document.createElement('div');
        recept.className = 'recept';
        recept.addEventListener('click', zobrazDetailReceptu);
        recept.setAttribute("data-src", poleRecepty[i].img);
        recept.setAttribute("data-alt", poleRecepty[i].nadpis);
        recept.setAttribute("data-kategorie", poleRecepty[i].kategorie);
        recept.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
        recept.setAttribute("data-popis", poleRecepty[i].popis);
        let receptObrazek = document.createElement('div');
        receptObrazek.className = 'recept-obrazek';
        let img = document.createElement('img');
        img.setAttribute("data-src", poleRecepty[i].img);
        img.setAttribute("data-alt", poleRecepty[i].nadpis);
        img.setAttribute("data-kategorie", poleRecepty[i].kategorie);
        img.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
        img.setAttribute("data-popis", poleRecepty[i].popis);
        img.src = poleRecepty[i].img;
        img.alt = poleRecepty[i].nadpis;
        receptObrazek.appendChild(img);
        let receptInfo = document.createElement('div');
        receptInfo.className = 'recept-info';

        let nadpisReceptu = document.createElement('h3');
        nadpisReceptu.setAttribute("data-src", poleRecepty[i].img);
        nadpisReceptu.setAttribute("data-alt", poleRecepty[i].nadpis);
        nadpisReceptu.setAttribute("data-kategorie", poleRecepty[i].kategorie);
        nadpisReceptu.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
        nadpisReceptu.setAttribute("data-popis", poleRecepty[i].popis);
        nadpisReceptu.innerHTML = poleRecepty[i].nadpis;

        recepty.appendChild(recept);
        recept.appendChild(receptObrazek);
        receptObrazek.insertAdjacentElement("afterend", receptInfo);
        receptInfo.appendChild(nadpisReceptu);
        
        vypsaneRecepty.push(poleRecepty[i]);
    }
        console.log(vypsaneRecepty);
}    

const vybranyReceptFoto = document.querySelector('#recept-foto');
const vybranyReceptKategorie = document.querySelector('#recept-kategorie');
const vybranyReceptHodnoceni = document.querySelector('#recept-hodnoceni');
const vybranyReceptNadpis = document.querySelector('#recept-nazev');
const vybranyReceptPopis = document.querySelector('#recept-popis');

let vybranyRecept = [];

function zobrazDetailReceptu(recept) {
    vybranyReceptFoto.src = recept.target.dataset.src;
    vybranyReceptFoto.alt = recept.target.dataset.alt;
    vybranyReceptKategorie.innerHTML = recept.target.dataset.kategorie;
    vybranyReceptHodnoceni.innerHTML = recept.target.dataset.hodnoceni;
    vybranyReceptNadpis.innerHTML = recept.target.dataset.alt;
    vybranyReceptPopis.innerHTML = recept.target.dataset.popis;
    let vybranyRecept = {
        src: recept.target.dataset.src,
        kategorie: recept.target.dataset.kategorie,
        hodnoceni: recept.target.dataset.hodnoceni,
        nadpis: recept.target.dataset.alt,
        popis: recept.target.dataset.popis        
    };
    ulozReceptDoLocalStorage(vybranyRecept);
}

function ulozReceptDoLocalStorage(vybranyRecept) {
    let hodnota = JSON.stringify(vybranyRecept);
    localStorage.setItem('vybranyRecept', hodnota);
}

function zobrazReceptZLocalStorage() {
    let hodnota = localStorage.getItem('vybranyRecept');
    //zobrazDetailReceptu(hodnota);
    if (hodnota === null || hodnota === undefined) {
        vypisRecepty(poleRecepty);
    } else {
        posledniRecept = JSON.parse(hodnota);
        vybranyReceptFoto.src = posledniRecept.src;
        vybranyReceptFoto.alt = posledniRecept.nadpis;
        vybranyReceptKategorie.innerHTML = posledniRecept.kategorie;
        vybranyReceptHodnoceni.innerHTML = posledniRecept.hodnoceni;
        vybranyReceptNadpis.innerHTML = posledniRecept.nadpis;
        vybranyReceptPopis.innerHTML = posledniRecept.popis;
    }
}

zobrazReceptZLocalStorage();

let receptySnidane = [];
let receptyHlavniJidlo = [];
let receptyDezert = [];

function receptyKategorie () {

  for (i = 0; i < poleRecepty.length; i++) {
    if (poleRecepty[i].kategorie === 'Snídaně') {
      receptySnidane.push(poleRecepty[i]);
    }

    if (poleRecepty[i].kategorie === 'Hlavní jídlo') {
      receptyHlavniJidlo.push(poleRecepty[i]);
    }

    if (poleRecepty[i].kategorie === 'Dezert') {
      receptyDezert.push(poleRecepty[i]);
    }
  }
}
   
receptyKategorie();

const trideniKategorie = document.querySelector('#kategorie');
const seradit = document.querySelector('#razeni');
const divRecepty = document.querySelector('#recepty');

function filtrRecepty () {
  if (trideniKategorie.value === '' && seradit.value === '') {
    hledat.value = "";
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradPodleAbecedy(poleRecepty);
    vypisRecepty(poleRecepty);
  }

  if (trideniKategorie.value === '' && seradit.value === 'nejlepsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradOdNejlepsiho(poleRecepty);
    vypisRecepty(poleRecepty);
  }

  if (trideniKategorie.value === '' && seradit.value === 'nejhorsi') {
    hledat.value = "";
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradOdNejhorsiho(poleRecepty);
    vypisRecepty(poleRecepty);
  }

  if (trideniKategorie.value === 'snidane' && seradit.value === '') {
    hledat.value = "";  
    vypsaneRecepty = [];
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradPodleAbecedy(receptySnidane);
    vypisRecepty(receptySnidane);
    }
  

  if (trideniKategorie.value === 'snidane' && seradit.value === 'nejlepsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptySnidane);
    vypisRecepty(receptySnidane);
  }

  if (trideniKategorie.value === 'snidane' && seradit.value === 'nejhorsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty(receptySnidane);
    seradOdNejhorsiho(receptySnidane);
    vypisRecepty(receptySnidane);
  }

  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === '') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradPodleAbecedy(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }

  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejlepsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }
  
  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejhorsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty(receptyHlavniJidlo);
    seradOdNejhorsiho(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === '') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradPodleAbecedy(receptyDezert);
    vypisRecepty(receptyDezert);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === 'nejlepsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptyDezert);
    vypisRecepty(receptyDezert);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === 'nejhorsi') {
    hledat.value = "";  
    vypsaneRecepty = [];
    smazVypsaneRecepty(receptyDezert);
    seradOdNejhorsiho(receptyDezert);
    vypisRecepty(receptyDezert);
  }
}

filtrRecepty();

function smazVypsaneRecepty() {
  divRecepty.querySelectorAll('*').forEach(n=>n.remove());
}

function seradOdNejlepsiho(pole) {
  pole.sort(function(a,b) {
    return b.hodnoceni - a.hodnoceni;
  });
}

function seradOdNejhorsiho(pole) {
  pole.sort(function(a,b) {
  return a.hodnoceni - b.hodnoceni;
  });
}

function seradPodleAbecedy(pole) {
  pole.sort((a,b) => (a.nadpis > b.nadpis) ? 1 : -1);
}


// let vyhledaneRecepty = [];

// function hledej() {

//     vyhledaneRecepty = [];

//   for (i = 0; i < poleRecepty.length; i++) {
//     let receptMalymiPismeny = poleRecepty[i].nadpis.toLowerCase();
//     let vyhledavanaPolozka = hledat.value.toLowerCase();

//     receptBezDiakritiky = receptMalymiPismeny.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  

//     if (hledat.value === '') {
//       location.reload();
//     }

//     //if (polozka.includes(hledat.value.toLowerCase())) {
//     if (receptBezDiakritiky.includes(hledat.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        
//       vyhledaneRecepty.push(poleRecepty[i]);  
//       smazVypsaneRecepty();
//     }
//   }
  
//   vypisRecepty(vyhledaneRecepty);
  
// }

let vyhledaneRecepty = [];

function hledej() {

    vyhledaneRecepty = [];
    

  for (i = 0; i < vypsaneRecepty.length; i++) {
    let receptMalymiPismeny = vypsaneRecepty[i].nadpis.toLowerCase();
    let vyhledavanaPolozka = hledat.value.toLowerCase();

    receptBezDiakritiky = receptMalymiPismeny.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  

   if (hledat.value === '') {
        location.reload(); 
     }

    if (receptBezDiakritiky.includes(hledat.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        
      vyhledaneRecepty.push(vypsaneRecepty[i]);  
      smazVypsaneRecepty();
      
    }
    
  }
  vypsaneRecepty = [];
  vypisRecepty(vyhledaneRecepty);
  
}