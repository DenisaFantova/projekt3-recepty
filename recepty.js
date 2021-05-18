const poleRecepty = [
  { nadpis: 'Ovocný tvarohový dort',
    popis: 'Poslední roky u mě v létě vedl pusinkový dort Pavlova na mnoho a mnoho způsobů, ale letos mám nového favorita. Už jsem zkoušela mnoho verzí a je vždy výborný, lehký i svěží a tak ideální ne jen na léto.',
    hodnoceni: 4.4,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Těstoviny s pestem',
    popis: 'Pesto v tomto receptu je připraveno bez sýra – místo něj jsou použity dvě celé palice pečeného česneku. Špagety budou díky tomu skvěle dochucené!',
    hodnoceni: 4.2,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Palačinka s medem a oříšky',
    popis: 'Nepomyslil, zničeně, očima zisk ta vina krevních, mě dře praha sám peče šíp čem unaven!',
    hodnoceni: 3.6,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54182d2977056d28bd299799b8428fa6&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Chléb s avokádem a vajíčkem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.3,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Čokoládové brownie',
    popis: '11 omrzení schůdkách mu i očima o nos rys by šerého. Vodu po obejmout víte, to co haf otiskem přísní, uchu u taška prohrál u kuse lože, už že ví potřeby u chudáku. Vykoná ta o citů mstivě některá tahle z světů či odseděl lupiče?',
    hodnoceni: 4.9,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Vajíčková omeleta se špenátem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1494597706938-de2cd7341979?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dc5376ce585ce0df0d44232b9bab53c&auto=format&fit=crop&w=1379&q=80'
  },
  { nadpis: 'Kuřecí salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  { nadpis: 'Sýrová pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&s=8695cc99c49c956556f7411faf6df8b0&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Kuřecí roláda',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.6,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24e11e05a26a3b992c8469426a628a90&auto=format&fit=crop&w=675&q=80'
  },
  { nadpis: 'Borůvkovo-tvarohový dezert',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&s=a48ebf1c62105a202c421db95caa3b48&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Hovězí steak',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Tiramisu',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1502004960551-dc67f7c24cb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ffa9224ea62436ebb99ebf25c50be60&auto=format&fit=crop&w=1320&q=80'
  },
  { nadpis: 'Ceasar salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.9,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Sladký toast s ovocem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.1,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&s=b2f8991c8bfaac59a8d115930d9c12cd&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Vegetariánská pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516183483970-cedfa98169fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a8ffb099b40dc89c12cec6a7f0a68a&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Křupavé kuře',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.3,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353c1f4206a931db97274e65329b85d8&auto=format&fit=crop&w=634&q=80'
  },
]

const recepty = document.querySelector('#recepty');

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
    }
}    

const vybranyReceptFoto = document.querySelector('#recept-foto');
const vybranyReceptKategorie = document.querySelector('#recept-kategorie');
const vybranyReceptHodnoceni = document.querySelector('#recept-hodnoceni');
const vybranyReceptNadpis = document.querySelector('#recept-nazev');
const vybranyReceptPopis = document.querySelector('#recept-popis');

function zobrazDetailReceptu(recept) {
    vybranyReceptFoto.src = recept.target.dataset.src;
    vybranyReceptFoto.alt = recept.target.dataset.alt;
    vybranyReceptKategorie.innerHTML = recept.target.dataset.kategorie;
    vybranyReceptHodnoceni.innerHTML = recept.target.dataset.hodnoceni;
    vybranyReceptNadpis.innerHTML = recept.target.dataset.alt;
    vybranyReceptPopis.innerHTML = recept.target.dataset.popis;
}

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
    smazVypsaneRecepty();
    seradPodleAbecedy(poleRecepty);
    vypisRecepty(poleRecepty);
  }

  if (trideniKategorie.value === 'snidane' && seradit.value === '') {
    smazVypsaneRecepty();
    seradPodleAbecedy(receptySnidane);
    vypisRecepty(receptySnidane);
  }

  if (trideniKategorie.value === 'snidane' && seradit.value === 'nejlepsi') {
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptySnidane);
    vypisRecepty(receptySnidane);
  }

  if (trideniKategorie.value === 'snidane' && seradit.value === 'nejhorsi') {
    smazVypsaneRecepty(receptySnidane);
    seradOdNejhorsiho(receptySnidane);
    vypisRecepty(receptySnidane);
  }

  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === '') {
    smazVypsaneRecepty();
    seradPodleAbecedy(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }

  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejlepsi') {
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }
  if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejhorsi') {
    smazVypsaneRecepty(receptyHlavniJidlo);
    seradOdNejhorsiho(receptyHlavniJidlo);
    vypisRecepty(receptyHlavniJidlo);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === '') {
    smazVypsaneRecepty();
    seradPodleAbecedy(receptyDezert);
    vypisRecepty(receptyDezert);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === 'nejlepsi') {
    smazVypsaneRecepty();
    seradOdNejlepsiho(receptyDezert);
    vypisRecepty(receptyDezert);
  }

  if (trideniKategorie.value === 'dezert' && seradit.value === 'nejhorsi') {
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

