// Un alert espone 5 numeri casuali (univoci).
var arrayNum = [];
//non sappiamo quante volte possiamo girare quindi usiamo un ciclo while
//vado avanti a generare finchè l'array.lenght non è 5

while (arrayNum.length < 5) {
  //troviamo un modo per uscire dal ciclo aumentando la lunghezza in arrayNum
  var numRad = getRandomIntInclusive(1, 90)
  //se il numero non è presente allora pusho, uso includes
  if (arrayNum.includes(numRad) == false) {
    arrayNum.push(numRad);
  }
}

console.log("array di numeri random", arrayNum);
alert(arrayNum);

// Poi parte un timer di 30 secondi.
// setTimeout(askNumberUser, 30000);



// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


var time = 30;
var timer = setInterval(showTime, 1000);
//sono 30 secondi ma dobbiamo convertire

//comunichiamo all'utente quanti e quali numeri corrispondono

//FUNCTIONS

//GENERATORE RANDOMICO DI NUMERI
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}


//FUNZIONE PER SETTARE I 30 SECONDI DI ATTESA


// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
function askNumberUser() {
  //dobbiamo far uscire 5 prompt all'utente, ci serve un ciclo ma non sappiamo quante volte gireremo, uso un while
  var numberUser = [];
  //noi sappiamo che utente deve inserire tante volte quante è la lunghezza di arrayNum ovvero 5
  //dobbiamo controllare che NON deve inserire più volte lo stesso numero
  //dobbiamo controllare che è un numero
  //dobbiamo girare finché
  // var i = 0;
  while (numberUser.length < arrayNum.length) {

    var number = parseInt(prompt('Inserisci un numero'));
    //controllo che non abbia inserito lo stesso numero
    if(!numberUser.includes(number) && !isNaN(number)) {
      numberUser.push(number);
    }
    i++;
  }
  console.log(numberUser);
  var numsOk = [];
  for (var i = 0; i < numberUser.length; i++) {
    if (arrayNum.includes(numberUser[i])) {
      numsOk.push(numberUser[i]);
      //li pusho SOLO se ci sono
    }
  }
  console.log('numeri indovinati', numsOk);
  console.log('hai indovinato ' + numsOk.length + ' numeri');
}


//TIMER A VISTA SU HTML

function showTime() {
  // console.log(time);
document.getElementById('time').innerHTML = time;
  if(time == 0) {
    clearInterval(timer);
    askNumberUser();
  }
  time--;
}
