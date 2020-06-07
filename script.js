// ajout et suppression de la classe active sur les onglets et leurs divs correspondantes

let nav = document.querySelectorAll('nav ul li');
let onglets = document.querySelectorAll('.onglets');
let fermer = document.querySelectorAll('.bouton-fermer')

nav.forEach( li => {

    li.addEventListener('click', () => {

        if(li.classList.contains('active')) { // si on clique plusieurs fois sur le même onglet
            
            for(i=0; i<onglets.length; i++) {
                if(onglets[i].classList.contains('active')) {
                    removeActiveOnglet();
                    li.classList.remove('active');
                }
            }
        
        }
        else {

            // suppression de l'onglet actif
            removeActiveOnglet();

            // suppression de classe active du li actif
            removeActiveLi();

            // ajout de la classe active sur le li cliqué
            li.classList.add('active');

            // ajout de l'onglet correspondant au li actif
            for(j=0; j<onglets.length; j++) {
                if (li.getAttribute('data-onglet') === onglets[j].getAttribute('data-onglet')) {
                    onglets[j].classList.add('active');
                }
            }

        }

    })

})

fermer.forEach( croix => {  // si on clique sur la croix

    croix.addEventListener('click', () => {
        removeActiveOnglet();
        removeActiveLi();
    })

})


function removeActiveOnglet() {
    for(i=0; i<onglets.length; i++) {
        if(onglets[i].classList.contains('active')) {
            onglets[i].classList.remove('active');
        }
    }
}

function removeActiveLi() {
    for(i=0; i<nav.length; i++) {
        if(nav[i].classList.contains('active')) {
            nav[i].classList.remove('active');
        }
    }
}

// slider videos

let nextBtn = document.querySelector('#next-btn');
let precedentBtn = document.querySelector('#precedent-btn');
let slider = document.querySelector('#slider-videos');
let slideNumber = 0;


nextBtn.addEventListener('click', nextSlide);
precedentBtn.addEventListener('click', precedentSlide);

function nextSlide() {
    slideNumber++;
    slide();
}

function precedentSlide() {
    slideNumber--;
    slide();
}

function slide() {
    switch (slideNumber) {
        case 0:
            precedentBtn.style.display = "none";
            slider.style.transform ="translateX(0px)";
            break;
        case 1:
            precedentBtn.style.display = "flex";
            nextBtn.style.display = "flex";
            slider.style.transform ="translateX(-1000px)";
            break;
        case 2:
            nextBtn.style.display = "none";
            slider.style.transform = "translateX(-2000px)";
            break;

        default:
            break;
    }
}
