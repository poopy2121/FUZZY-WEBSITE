const einpacken = document.getElementById("add-to-bag");
let itemsinbag = document.getElementById("was");
let counter = 0


einpacken.addEventListener('click', function() {


    counter++;

    itemsinbag.textContent = counter; 
    
})    