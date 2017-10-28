// Zadanie 1
var array1= ["HIMYM","GOT","BrBa"] ;
for(var i=0; i<array1.length; i++){
  document.getElementById('ex1').innerHTML += "<br>"+ array1[i];
}

// Zadanie 2
var dates = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70];
var years1 = dates[3];
var years2 = dates[4];
document.getElementById('ex2').innerText += years1 + " a " + years2 + " lat";

// Zadanie 3
var array2 = ["red", "green", "blue", "black", "white"];
var arrayLength = array2.length ;
document.getElementById('ex3').innerText += arrayLength;

// Zadanie 4
var array3 = ["rzepa", "bakłażan", "kalarepa"];
 array3.push("pomidor");
 array3.unshift("sałata");                         //tu pisz kod
                          //tu pisz kod
for(var i = 0; i < array3.length; i++){
  document.getElementById('ex4').innerHTML += array3[i] + ",&nbsp;";
}

// Zadanie 5
var nestedArary = ["BMW", "Volvo", "Nissan",["Qashqai", "Juke",[1999,2000,2001], "Micra"], "Renault"];
var nestedIndex = nestedArary [3][2][1];
document.getElementById('ex5').innerText += nestedIndex;
