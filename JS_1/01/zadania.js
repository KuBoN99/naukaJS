//Zadanie 1
var javaScript = "Brawo, teraz wszystko działa!";
document.getElementById('ex1').innerText += javaScript; 

//Zadanie 2 / zmienna typu string
var favouriteLanguage = "javaScrip";

// Zadanie 3 / zmienna typu number
var number1=  5;
var number2= 12;
var result = number1 + number2;

// Zadanie 4 
var isItRaining = true;
var isItSunny=false;
var isItHot= false;
var isItWindy=true;

// Zadanie 5 / zmienna typu array
var array=[7,"kuba",true,"ananas",4];
















// Nie ruszaj linii pod spodem są one potrzebne do poprawnego działania zadań
var java = "Czekam na rozwiązanie";

if(typeof(favouriteLanguage)=="undefined"){
  document.getElementById('ex2').innerHTML += "";
}
else if(typeof(favouriteLanguage)=="string"){
  document.getElementById('ex2').innerHTML += favouriteLanguage;
}
else{
  document.getElementById('ex2').innerHTML += "Niepoprawny typ zmiennej :(";
}

document.getElementById('ex3').innerText = "5 + 12 = " + result; 

var p4 = document.getElementById("ex4");

if(typeof(isItRaining) === "boolean" &&
   typeof(isItSunny) === "boolean" &&
   typeof(isItHot) === "boolean" &&
   typeof(isItWindy) === "boolean"){
  
  if(isItRaining == true){
    p4.innerHTML += "Pada deszcz, weź parasol. <br>";
  }
  else{
    p4.innerHTML += "Mamy szczęście, dziś nie pada. <br>";
  }
  
  if(isItSunny == true){
    p4.innerHTML += "Jest słonecznie, załóż okulary przeciwsłoneczne. <br>";
  }
  else{
    p4.innerHTML += "Niestety dziś jest pochmurno. <br>";
  }
  
  if(isItHot == true){
    p4.innerHTML += "Jest ciepło, ubierz się lekko. <br>";
  }
  else{
    p4.innerHTML += "Jest zimno, ubierz się ciepło. <br>";
  }
  
  if(isItWindy == true){
    p4.innerHTML += "Wieje wiatr, załóż kurtkę. <br>";
  }
}
else{
  p4.innerText = "Któraś z podanych zmiennych nie ma w sobie wartości logicznej.";  
}

var p5 = document.getElementById("ex5");
var testArr = ["number", "string", "boolean", "string", "number"]
if(array.length === 5){
  p5.innerHTML = "Liczba elementów w tablicy jest prawidłowa, teraz sprawdzimy, czy typy danych w indeksach są zgodne z poleceniem. <br>";
  for(var i = 0; i<aray.length; i++) {
    if(typeof(array[i]) == testArr[i]) {
      p5.innerHTML += "Na pozycji " + i + " znajduje się odpowiedni typ danych.";
    }
    else{
      p5.innerHTML += "Coś poszło nie tak. Na pozycji " + i + " znajduje się " + typeof(array[i]) + " a powinien znajdować się " + testArr[i] + ". <br>";
    }
  }
}
else{
  p5.innerHTML = "Liczba elementów w tablicy nie jest prawidłowa, powinno być ich pięć, a jest " + array.length + ". <br>";
}