// Zadanie 1
function writeHappyText(name) {
   return "Umiem wywoływać funkcję! (☞ ͡° ͜ʖ ͡°)☞ " + name;
}
var num1 = writeHappyText("edwin");
document.getElementById('ex1').innerText = num1;

// Zadanie 2
function multiply(num1, num2) {
  return num1 * num2;
}
var result = multiply(5,12);
document.getElementById('ex2').innerText += result;


// Zadanie 3
function tellHello(name){
  document.getElementById('ex3').innerText = "Witaj, " + name;
}
 tellHello("kuba"); // tu wywołaj funkcję

//Zadanie 4
function convertToCelsius(temperature) {
    return Math.round((5/9) * (temperature-32));
}
// przykład przypisania wyniku funkcji do zmiennej
// var a = abc(x);
var fahrenheit = 100;
var result2 = convertToCelsius(fahrenheit);
document.getElementById('ex4').innerHTML = fahrenheit + "&deg; Fahrenheita to " + result2 + "&deg; Celcjusza";

// Zadanie 5
// Napisz swoją funkcję poniżej.
function myBirthDay(year)
{
	return 2017-year;
}


var birthYear= myBirthDay(18);
document.getElementById('ex5').innerHTML = "Data mojego urodzenia to:&nbsp;" + birthYear;