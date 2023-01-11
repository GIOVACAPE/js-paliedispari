/*

L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


*/

const sceltaUtente = prompt('Inserisci P per pari, o D per dispari');

if(sceltaUtente != 'P' && sceltaUtente != 'D'){
    alert('Valore non valido');
}
else{
        const numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
        if(isNaN(numeroUtente) == true || numeroUtente < 1 || numeroUtente > 5){
            alert('Numero non valido');
        }
    
    
    else{

        const numeroComputer = generaNumeroCasuale();
        console.log('numeroComputer', numeroComputer);

        const somma = numeroUtnete + numeroComputer;

        const risultato = verificaSomma(somma);

        if(sceltaUtente == risultato){
            alert('hai VINTO!...');
        }
        else{
            alert('hai perso...');
        }
    }
}