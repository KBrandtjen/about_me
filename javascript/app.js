"use strict";

var userName = prompt('Hello! What is your name?');
var total = 0;

alert('Hello, ' + userName + '! I dont know you, but you\'re about to learn about me!')

function partOne(){
var answer1 = prompt('Do I have an adorable pitbull?')
console.log(answer1);

if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y') {
  alert('Correct ' + userName + '! If you want proof, I\'d be happy to show you!');
  total++;
}  else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n') {
  alert('Sorry ' + userName + '! I do and I have 1000\'s of photos to prove it!');
}
  else { alert('Try typing yes or no ( y/n ).');
};
}

partOne();

function partTwo(){
var answer2 = prompt('Can I do a flawless Homer Simpson impersonation?');
console.log(answer2);

if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n') {
  alert('Correct ' + userName + '! But my Bart isn\'t too bad.');
  total++;
}
  else {
  alert('D\'OH!! Sorry ' + userName + '. I can\'t but I enjoy the occasional Duff.');
};
}

partTwo();

function partThree(){
var answer3 = prompt('Can I identify the species of every shrub and tree outside right now?');
console.log(answer3);

if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase() === 'y') {
  alert('Indeed! I love plants!');
  total++;
}
  else {
  alert('Incorrect, Acer saccharum, Fagus sylvatica, Quercus robur.......');
};
}

partThree();

function partFour(){
var answer4 = prompt('Is my favorite type of music Hip-Hop?');
console.log(answer4);

if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y') {
  alert('For shizzle, ' + userName + '!');
  total++;
}
  else {
  alert('Chickity check yourself ' + userName +'! You\'re about to wreck yourself!');
};
}
partFour();

function partFive(){
var answer5 = prompt('Have I have been coding for 3 years?');
console.log(answer5);

if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n') {
  alert('I have not, but you wouldn\'t know it from this website!');
  total++;
}
  else {
  alert('Sorry ' + userName + ', I have not but thanks for the vote of confidence!');
};
}

partFive();

function partSix(){
var magicNumber = 44;

var i = 0
while (i < 4) {
  var answer6 = prompt('Can you guess what number I\'m thinking of between 0 and 100');
  console.log(answer6);
  i++;
if (isNaN(answer6)) {
  alert ('Please enter a number!');
} else if (answer6 > magicNumber) {
  alert('Sorry, guess a lower number!');
} else if (answer6 < magicNumber) {
  alert('Try again, guess a larger number!');
} else {
  alert('Great guess! You got it!');
  i = 5;
  total++;
};
};
}

partSix();

function partSeven(){

var favoriteRap = ['kendrick lamar', 'schoolboy q', 'outkast', 'nas', 'kid cudi', 'chance the rapper', 'anderson paak'];

var guesses = 0;
while (guesses < 7) {
  var choice7 = prompt('Can you guess any of my favorite hip-hop artists?');
  var answer7 = choice7.toLowerCase();
  console.log(answer7);
  for(var j = 0; j < favoriteRap.length; j++) {
    var arrayElement = favoriteRap[j];
    if (arrayElement === answer7) {
      var comparison = true;
      guesses = 7;
      break;
    }  else {
      var comparison = false;
    };
  };
  if (comparison === true) {
    alert('Congrats!');
    total++;
} else { alert('Nope! Try Again.');
};
  guesses++;
};

alert('Want to know who else is in my top 7? Kendrick Lamar, Outkast, Schoolboy Q, Chance the Rapper, Nas, Kid Cudi, and Anderson .Paak. Give them a listen!');

}
partSeven();


if (total > 3) {
  alert('Great job ' + userName +'! You got ' + total +' out of 7! Now that you know me, wanna hang out?');
} else {
    alert('Sorry ' + userName +', You only got ' + total +' out of 7. Looks like we can\'t be friends.')
  };
