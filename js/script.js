
/**
 * 
 STEP:
 1) definire una funzione per verificare se una parola è palindorma
 2) chiedere all'utente di inserire una parola (tramite prompt o input)
 3(usare la funzione precedentemente definita per verificare se l'input dell'utente è una parola palindorma
    3.a) se la parola è palindorma, stampare in consoloe "la parola NON è palindroma"
    3.b) se la parola NON è palindroma, stampare in console "la parola NON è palindorma"
 */

function checkPalindorma() {
    // verificare se la parola è palindorma

    for (let i = parolaUtente.length = 1 ; i >= 0; i--) {
        console.log(parolaUtente[i])
        
    }
}

const parolaUtente = prompt ('Inserisci una parola');
console.log('parolaUtente', parolaUtente);

if (checkPalindorma()) {

    console.log('La parola è palindroma vai tra');

}

else{

    console.log('la parola aimè NON è palindorma');
    
}