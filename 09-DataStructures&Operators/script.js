'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(playersFinal);

//5.
const { team1: team1, x: draw, team2: team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//6.
const printGoals = function (...players) {
  console.log(players);
};
printGoals(game.scored);

//7.
team1 > team2 && console.log('team1');
team1 < team2 && console.log('team2');

//Coding challenge #2

// #1
for (const [goal, player] of game.scored.entries()) {
  console.log(goal, player);
}

//# 2
let sum = 0;
for (const key of Object.keys(game.odds)) {
  sum += game.odds[key];
}
console.log(sum / Object.keys(game.odds).length);

//#3
for (const key of Object.keys(game.odds)) {
  const teamName = game[key] ?? 'Invalid Team';
  console.log(`Odd of victory ${teamName}: ${game.odds[key]}`);
}

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(`An event happened, on average, every 9 minutes`);

//4.
for (const [key, value] of gameEvents.entries()) {
  let half = '[FIRST HALF]';
  if (key > 45) {
    half = '[SECOND HALF]';
  }
  console.log(`${half}: ${value}`);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const convertToCamelCase = function (strArray) {
  let result = [];
  for (const str of strArray) {
    const trimmedStr = str.trim()
    const replaced = 
  }
  return result;
};
const testData = [
  '  underscore_case',
  ' first_name',
  'Some_Variable',
  '  calculate_AGE',
  'delayed_departure',
];
console.log(convertToCamelCase(testData));
