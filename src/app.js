import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


function getRandomElementInArray(array) {
  let max=array.length;
  let position=Math.floor(Math.random() * max);
  return array[position];
}

window.onload = function() {
  //write your code here 
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let frase=getRandomElementInArray(who) + ' ' + getRandomElementInArray(action) + ' ' + getRandomElementInArray(what) + ' ' + getRandomElementInArray(when); 
  document.getElementById("excuse").innerHTML = frase;
};
