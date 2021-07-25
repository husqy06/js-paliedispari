// chiedo all'utente la parola
var parola = prompt("Digitare una parola:");

//creo la funzione che verifica se e' palindroma
function palindroma (parola) {
    //creo una variabile carattere per dividere la parola
    var carattere;
    var parolaInversa = '';

    var i = parola.length - 1;
    //uso un ciclo per inseire i caratteri al contrario nella variabile parolainversa
    while (i >= 0) {
    carattere = parola[i];
    parolaInversa += carattere;
    i--;
    }

    if(parola == parolaInversa){
        return true;
    } else {
        return false;
    }
}

var risultato = palindroma(parola);

if(risultato == true) 
    console.log("La parola e' palindroma");
else 
    console.log("La parola non e' palindroma");
    

// gioco pari / dispari\

var scelta = prompt("Scrivere pari o dispari");
var numero = parseInt(prompt("Inserire un numero da 1 a 5"));

console.log(scelta);
console.log(numero);

function random() {
    var min = 1;
    var max = 5;

    var numerorandom = Math.floor(Math.random() * (max - min + 1) + min);

    return numerorandom;
}

var numeropc = random();

console.log(numeropc);

function somma(numero, numeropc) {
    var somma = numero + numeropc;

    if(somma % 2 == 0)
        return true;
    else
        return false;
}

var paridispari = somma(numero, numeropc);

if(paridispari == true && scelta == "pari")
    console.log("Hai vinto");
else if (paridispari == false && scelta == "dispari")
    console.log("Hai vinto");
else 
    console.log("Hai perso");
