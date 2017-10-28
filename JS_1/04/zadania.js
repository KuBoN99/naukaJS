// Zadanie 1
for (var i = 0; i < 5; i++){
  document.getElementById('ex1').innerText = i+1; //nie ruszaj tej linijki
}

// Zadanie 2
for (var i = 10; i >=0; i--){
  document.getElementById('ex2').innerHTML += i + "<br>"; //nie ruszaj tej linijki
}

// Zadanie 3
for (var i=0; i<=100; i=i+10) {
  document.getElementById('ex3').innerText += i + ", "; //nie ruszaj tej linijki
}
// Zadanie 4

// var example = [12, 5, 9];                      //example.length zwróci 3
// for (var i = 0; i < example.length; i++) {
//   example[i] = example[i] * 2
// }

var array = ["placki", "ananasa", "śledzie"];
for (var i=0; i<array.length; i++) {
  document.getElementById('ex4').innerHTML += "Lubię " + array[i] + "<br>" //nie ruszaj tej linijki
}

// Zadanie 5
var i = 2;
while(i <= 10){
  document.getElementById('ex5').innerText += i + ", "; //nie ruszaj tej linijki
  i = i + 2; //HINT: zmień tą linie tak aby odliczała co 2 a nie co 1
}
