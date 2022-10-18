/**Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba*/





const numbers = 100;
const generatedNumbers = generateProgressiveNumber(numbers);
const difficultLevel = document.getElementById("livelli")
const myBtn = document.getElementById("mybtn");

myBtn.addEventListener("click", function() {

    let grid = document.querySelector(".grid").innerHTML ="";
    grid = document.querySelector(".grid");

    for (let i = 0; i < generatedNumbers.length; i++) {

     const Number = generatedNumbers[i];

    const Square = newSquare(Number);
    Square.addEventListener("click", numbeColorChange);

    grid.append(Square);
}})


/**
 * Description: La funzione che genera numeri progressivi da 1 a 100
 * @param {number} arrayLength
 * @returns {Array} Array di numeri in ordine progressivo da 1 a 100
 */
 function generateProgressiveNumber(arrayLength) {

    const arrayDaRiempire  = []
  
    for (i = 1; i <= arrayLength; i++) {
        arrayDaRiempire[i - 1] = i ;
    } 
    return arrayDaRiempire
  }


 /**
 * Description: La funzione crea i singoli square
 * @param {number} insideNumber -> numero da inserire all'interno di square
 * @returns {object} elemento DOM che rappresenta lo square
 */
function newSquare(insideNumber) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.innerHTML = insideNumber;
    return newSquare;
  }


  /**
 * Description: La funzione che aggiunge il colore verde al click sullo square
 */
function numbeColorChange() {
    const clickedNumber = (this.textContent);
        this.classList.add("green");
        console.log(this.textContent);
    }