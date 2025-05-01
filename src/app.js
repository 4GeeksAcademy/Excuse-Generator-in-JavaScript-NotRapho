import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird' ];
let action = [' ate ', ' peed ', ' crushed ', ' broke '];
let what = [' my homework ', ' my phone ', ' the car '];
let when = [' before the class', ' when I was sleeping', ' while I was exercising', ' during my lunch', ' while I was praying'];

document.querySelector("#excuse").innerHTML = RandomNumber(who) + RandomNumber(action) + RandomNumber(what) + RandomNumber(when);

function RandomNumber(array) {
  return array[Math.floor(Math.random() * array.length)];
}