/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "dog";
animal["name"] = "Luna";
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = "bark";
noises.push("growl");
noises.unshift("whimper");
noises[noises.length] = "howl";

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;

noises.push("pant");

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * Dot or Bracket Notation.
 * Dot Notation only works with literal key names.
 * objectName.key
 * objectName["key"]
 * 
 * var key = "key1";
 * objectName[key]
 *    
 * 2. What are the different ways of accessing elements on arrays?
 *
 * Bracket Notation.
 * arrayName[index #]
 * arrayName[arrayName.length-1]
 * 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
  species: 'duck',
  name: 'Jerome',
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

console.log(animals);

var cat = {
  species: 'cat',
  name: 'Puss in Boots',
  noises: ['meow', 'purr', "hiss"]
}

var donkey = {
  species: 'donkey',
  name: 'Jack',
  noises: ['hee-haw', 'snort']
}

animals.push(cat);
animals.push(donkey);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//choosing an array as the data structure to store friends because arrays hold a 0-indexed list of any number of any type of values.
var friends = [];


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */
function getRandom(array) {
  //Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
  //multiplying this number by the length of the array gives a floating-point number between 0 (inclusive) and the array length (exclusive)
  //Math.floor() then rounds this number down to the nearest whole number, ensuring you get a valid array index
  return Math.floor(Math.random() * array.length);
}

var randomAnimal = getRandom(animals);
var animalName = animals[randomAnimal];
friends.push(animalName.name);

console.log(friends);

animals[randomAnimal]["friends"] = friends;

console.log(animals);

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}