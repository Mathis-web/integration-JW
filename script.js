// ajout et suppression de la classe active sur les onglets et leurs divs correspondantes

let nav = document.querySelectorAll('#desktop-nav ul li');
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
            slider.style.transform ="translateX(-33.3%)";
            break;
        case 2:
            nextBtn.style.display = "none";
            slider.style.transform = "translateX(-66.6%)";
            break;

        default:
            break;
    }
}


// menu sur mobile

let menu = document.querySelector('#mobile-navbar-icon span:last-child');
let btnMenu = document.querySelectorAll('.btn-sous-menu img');
let listeMenu = document.querySelectorAll('.li-sous-menu');
let body = document.querySelector('body')
let menuOpen = false;

menu.addEventListener('click', () => {


    if (menuOpen == false) {
        document.querySelector('#menu-mobile').style.marginRight = "0";
        menuOpen = true;
        body.style.filter = "brightness(50%)";
        document.querySelector('#menu-mobile').style.filter = "brightness(100%)";

    } else {
        document.querySelector('#menu-mobile').style.marginRight = "-500px";
        menuOpen = false;
        body.style.filter = "brightness(100%)";
    }

    desactiveScroll();
})

btnMenu.forEach( btn => {
    btn.addEventListener('click', () => {

        let sousMenu = btn.parentNode.parentNode;

        if (btn.classList.contains('active')) {

            btn.classList.remove('active');
            removeActiveSousMenu();

        } else {

            removeActiveSousMenu();
            removeActiveBtn();

            btn.classList.add('active');

            for (let i = 0; i < listeMenu.length; i++) {
                if (sousMenu.getAttribute('data-sous-menu') === listeMenu[i].getAttribute('data-sous-menu')) {
                    listeMenu[i].classList.add('active')
                }   
            }
                   
        }

    })
});

function removeActiveSousMenu() {
    for (let i = 0; i < listeMenu.length; i++) {
        if (listeMenu[i].classList.contains('active')) {
            listeMenu[i].classList.remove('active')
        }
        
    }
}

function removeActiveBtn() {
    for (i=0; i<btnMenu.length; i++) {
        if(btnMenu[i].classList.contains('active')) {
            btnMenu[i].classList.remove('active');
        }
    }
}

// desactive le scroll de la page lorsque le menu pour mobile est ouvert

function desactiveScroll() {
    if (menuOpen == true) {
        body.style.overflowY = "hidden";
        console.log('ca larche ?')
    }
}