var placeholder;
//Nie zmieniaj kodu powyżej

//Zadanie 1
var intervalTick = 0;
setInterval(function(){
  document.getElementById('ex1').innerHTML = "Odliczam:&nbsp;" + intervalTick;
  intervalTick++;
}, 1000);

//Zadanie 2
var intervalTick2 = 0;
var interval1= setInterval(function(){            //tu przed użyciem metody zapisz ją do zmiennej o dowolnej nazwie
  document.getElementById('ex2').innerHTML = "Odliczam:&nbsp;" + intervalTick2;
  intervalTick2++;
  if(intervalTick2 == 10){
        clearInterval(interval1) ;                          //tu wyczyść interval
  }
}, 1000);

// Zadanie 3
var array = ["( ͡͡ ° ͜ ʖ ͡ °)","( ͡͡ ° ͜ ʖ ͡ °)>⌐■-■","( ͡⌐■ ͜ʖ ͡-■)"];
var x = 0;
setInterval(function(){
  document.getElementById('demo').innerHTML = array[x]
  if(x>=2){
    x = 0;
  }
  else {
    x++;
  }
},1000);

//Własna animacja

var array2 = [
    "( ͡͡ ° ͜ ʖ ͡ °)&nbsp;&nbsp;&nbsp;&nbsp;┳━┳",
    "&nbsp;&nbsp;&nbsp;&nbsp;( ͡͡ ° ͜ ʖ ͡ °)┳━┳",
    "ヘ ͡͡ ° ͜ ʖ ͡ °)ヘ┳━┳",
    "╯ ͡° ل͜ ͡°）╯︵ ┻━┻"];
    
  //Tu zadeklaruj licznik slajdów
 var y=0;
setInterval(function(){ 

  document.getElementById('ex3').innerHTML = array2[y]; //Tu podmień placeholder

  if(y>=3){          //Tu zmień warunek
  y=0;
                            //Tu nadaj swojej zmiennej wartość 0
  }
  else{ 
    y++;
                            //Tu zwiększ wartość swojej zmiennej o 1

  }
  
},1000) ;                        //Tu podaj odstęp czasowy
