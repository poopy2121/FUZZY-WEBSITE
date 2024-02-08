const anmeldenbtn = document.getElementById("anmeldenbtn");
let angemeldet = document.getElementById("newsletter-angemeldet");
let email = document.getElementById("mailfield").value



anmeldenbtn.addEventListener('click', function() {



    angemeldet.innerText = "Vielen Dank, bist angemeldet!";

    let email = document.getElementById("mailfield").value


    if (email == "") {

        angemeldet.innerText = "Bitte gib deine Email an"
        
    }


});


const addtobag = document.getElementById("add-to-bag");
let amountitems = document.getElementById("amountitem");
let counter = 0;

addtobag.addEventListener('click', function() {


    counter++

    amountitems.innerText = counter;

}


);