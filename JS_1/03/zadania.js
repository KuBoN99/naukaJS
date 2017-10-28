var ex1El = document.getElementById("ex1");
var ex2El = document.getElementById("ex2");
var ex3El = document.getElementById("ex3");
var ex3HungerlevelEl = document.getElementById("hungerLevel");
var ex4El = document.getElementById("ex4");
//nie zmieniaj kodu powyżej



// Zadanie 1
var ex1 = true;

if(ex1){
	ex1El.innerText += "Działam"
}


// Zadanie 2
var ex2 = false;

if(1 == 2) {
  ex2El.innerText += "Wykonuje kod znajdujący się w if.";
}
else {
	ex2El.innerText += "Wykonuje kod znajdujący się w else.";
}


// Zadanie 3
var hungerLevel = Math.floor((Math.random() * 10) + 1);
ex3HungerlevelEl.innerText += hungerLevel;

if(hungerLevel <= 5){  // W miejsce słowa placeholder wpisz odpowiedni warunek
	ex3El.innerText += "Zjem później"
}
else{
	ex3El.innerText += "Czas jeść"
}



//zadanie 4
var color = "yellow";

if(color == "red"){
	ex4El.innerText += "Stój!";
}
else if(color == "green"){
	ex4El.innerText += "Możesz jechać!";
}
else if(color == "yellow"){   //usuń flagę false, to tylko placeholder
	ex4El.innerText += "Uważaj";
}
else{
	ex4El.innerText += "Nie wiem";
}
