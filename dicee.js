var imag = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

  var a = Math.random();
  a = (a * 6);
  a = Math.floor(a);

  var b = Math.random();
  b = (b * 6);
  b = Math.floor(b);

function myFunction(){
document.querySelector(".img1").setAttribute("src", imag[a]);
document.querySelector(".img2").setAttribute("src", imag[b]);

if(a>b){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if(a<b){
  document.querySelector("h1").innerHTML="Player 2 won";
}
else if(a=b){
  document.querySelector("h1").innerHTML="Draw!"
}
}
