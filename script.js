// ajout et suppression de la classe active sur les onglets et leurs divs correspondantes

let nav = document.querySelectorAll('nav ul li');
let onglets = document.querySelectorAll('.onglets');

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
            for(i=0; i<nav.length; i++) {
                if(nav[i].classList.contains('active')) {
                    nav[i].classList.remove('active');
                }
            }

            // ajout de la classe active sur le li cliqué
            li.classList.add('active');

            // ajout de l'onglet correspondant au li actif
            for(j=0; j<onglets.length; j++) {
                if(li.getAttribute('data-onglet') === onglets[j].getAttribute('data-onglet')) {
                    onglets[j].classList.add('active');
                }
            }

        }

    })

})

function removeActiveOnglet() {
    for(i=0; i<onglets.length; i++) {
        if(onglets[i].classList.contains('active')) {
            onglets[i].classList.remove('active');
        }
    }
}